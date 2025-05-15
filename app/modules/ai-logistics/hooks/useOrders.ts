import { useState, useEffect } from 'react';
import { Order } from '../types';
import { fetchOrders } from '../services/orderService';

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        setLoading(true);
        const data = await fetchOrders();
        setOrders(data);
        setError(null);
      } catch (err) {
        setError('Failed to load orders data');
        console.error('Error loading orders:', err);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
    
    // In a real app, this would use WebSockets or polling for real-time updates
    const interval = setInterval(() => {
      // Update order statuses occasionally for demonstration
      setOrders(current => current.map(order => {
        // Randomly update some orders (5% chance)
        if (Math.random() > 0.95) {
          const statusMap: Record<string, string[]> = {
            'pending': ['confirmed'],
            'confirmed': ['preparing'],
            'preparing': ['ready_for_pickup'],
            'ready_for_pickup': ['out_for_delivery'],
            'out_for_delivery': ['delivered'],
            'delivered': ['delivered'],
            'cancelled': ['cancelled'],
            'returned': ['returned']
          };
          
          const currentStatus = order.status as string;
          const possibleNewStatuses = statusMap[currentStatus] || [currentStatus];
          const newStatus = possibleNewStatuses[Math.floor(Math.random() * possibleNewStatuses.length)];
          
          return {
            ...order,
            status: newStatus as any
          };
        }
        return order;
      }));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return { orders, loading, error, setOrders };
};

export default useOrders;
