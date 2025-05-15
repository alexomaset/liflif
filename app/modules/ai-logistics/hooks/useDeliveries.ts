import { useState, useEffect } from 'react';
import { Delivery } from '../types';
import { fetchDeliveries } from '../services/deliveryService';

export const useDeliveries = () => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDeliveries = async () => {
      try {
        setLoading(true);
        const data = await fetchDeliveries();
        setDeliveries(data);
        setError(null);
      } catch (err) {
        setError('Failed to load deliveries data');
        console.error('Error loading deliveries:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDeliveries();
    
    // In a real app, this would use WebSockets or polling for real-time updates
    const interval = setInterval(() => {
      // Update delivery statuses randomly for demonstration
      setDeliveries(current => current.map(delivery => {
        // Randomly update some deliveries (10% chance)
        if (Math.random() > 0.9) {
          const statusMap: Record<string, string[]> = {
            'unassigned': ['assigned'],
            'assigned': ['picked_up'],
            'picked_up': ['in_transit'],
            'in_transit': ['arrived', 'in_transit'],
            'arrived': ['delivered'],
            'delivered': ['delivered'],
            'failed': ['failed'],
            'cancelled': ['cancelled']
          };
          
          const currentStatus = delivery.status as string;
          const possibleNewStatuses = statusMap[currentStatus] || [currentStatus];
          const newStatus = possibleNewStatuses[Math.floor(Math.random() * possibleNewStatuses.length)];
          
          return {
            ...delivery,
            status: newStatus as any,
            // If moving to delivered, add timestamp
            ...(newStatus === 'delivered' && !delivery.deliveredAt ? { deliveredAt: new Date().toISOString() } : {})
          };
        }
        return delivery;
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return { deliveries, loading, error, setDeliveries };
};

export default useDeliveries;
