"use client";

import React, { useState } from 'react';
import { Delivery, Order, DeliveryStatus } from '../types';
import { ChevronRight, Search, Filter, MapPin, Clock, AlertTriangle, Check, Truck, Package } from 'lucide-react';

interface DeliveryListProps {
  deliveries: Delivery[];
  orders: Order[];
  loading: boolean;
  onFocusDelivery: (deliveryId: string) => void;
}

const DeliveryList: React.FC<DeliveryListProps> = ({
  deliveries,
  orders,
  loading,
  onFocusDelivery
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<DeliveryStatus | 'all'>('all');
  const [selectedDelivery, setSelectedDelivery] = useState<string | null>(null);

  // Get the order details for a delivery
  const getOrderForDelivery = (deliveryId: string) => {
    const delivery = deliveries.find(d => d.id === deliveryId);
    if (!delivery) return null;
    return orders.find(order => order.id === delivery.orderId);
  };

  // Filter deliveries based on search term and status filter
  const filteredDeliveries = deliveries.filter(delivery => {
    const order = getOrderForDelivery(delivery.id);
    const matchesSearch = 
      delivery.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (order?.customerId.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (order?.id.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === 'all' || delivery.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Sort deliveries by priority and status
  const sortedDeliveries = [...filteredDeliveries].sort((a, b) => {
    const orderA = getOrderForDelivery(a.id);
    const orderB = getOrderForDelivery(b.id);
    
    // First sort by delivery status priority
    const statusPriority = {
      'pending': 1,
      'assigned': 2,
      'picked_up': 3,
      'in_transit': 4,
      'delivered': 5,
      'failed': 6
    };
    
    if (statusPriority[a.status] !== statusPriority[b.status]) {
      return statusPriority[a.status] - statusPriority[b.status];
    }
    
    // Then sort by order priority
    if (orderA && orderB) {
      const priorityRank = {
        'express': 1,
        'standard': 2,
        'scheduled': 3
      };
      
      return priorityRank[orderA.priority] - priorityRank[orderB.priority];
    }
    
    return 0;
  });

  // Get status color based on delivery status
  const getStatusColor = (status: DeliveryStatus) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-100';
      case 'in_transit':
      case 'picked_up':
        return 'text-blue-600 bg-blue-100';
      case 'assigned':
        return 'text-purple-600 bg-purple-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'failed':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (loading) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-blue-800">Loading deliveries...</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-900">Deliveries</h2>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search deliveries..."
              className="pl-9 pr-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-blue-400" size={16} />
          </div>
          <div className="relative">
            <select
              className="appearance-none pl-9 pr-8 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as DeliveryStatus | 'all')}
            >
              <option value="all">All Statuses</option>
              <option value="unassigned">Unassigned</option>
              <option value="assigned">Assigned</option>
              <option value="picked_up">Picked Up</option>
              <option value="in_transit">In Transit</option>
              <option value="arrived">Arrived</option>
              <option value="delivered">Delivered</option>
              <option value="failed">Failed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <Filter className="absolute left-3 top-2.5 text-blue-400" size={16} />
            <ChevronRight className="absolute right-3 top-2.5 text-blue-400 rotate-90" size={16} />
          </div>
        </div>
      </div>

      {filteredDeliveries.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
          <Package size={48} className="mb-4 text-blue-300" />
          <p className="text-lg">No deliveries found</p>
          <p className="text-sm">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto pr-2">
          {/* List of deliveries */}
          <div className="space-y-3">
            {sortedDeliveries.map(delivery => {
              const order = getOrderForDelivery(delivery.id);
              const isSelected = selectedDelivery === delivery.id;
              
              return (
                <div
                  key={delivery.id}
                  className={`bg-white rounded-lg shadow-sm transition-all overflow-hidden ${
                    isSelected ? 'ring-2 ring-blue-500' : 'hover:shadow-md'
                  }`}
                >
                  {/* Delivery card header */}
                  <div 
                    className="p-3 cursor-pointer"
                    onClick={() => {
                      setSelectedDelivery(isSelected ? null : delivery.id);
                      onFocusDelivery(delivery.id);
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold text-blue-900">
                            #{delivery.id.slice(-6)}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(delivery.status)}`}>
                            {delivery.status.replace('_', ' ')}
                          </span>
                        </div>
                        
                        <div className="mt-1 text-sm text-gray-700">
                          {order ? (
                            <>
                              <div className="flex items-center mt-1">
                                <MapPin size={14} className="mr-1 text-gray-500" />
                                <span className="truncate max-w-[200px]">
                                  {order.deliveryLocation.addressText || 'Address not available'}
                                </span>
                              </div>
                              <div className="flex items-center mt-1">
                                <Clock size={14} className="mr-1 text-gray-500" />
                                <span>
                                  {delivery.estimatedDeliveryTime 
                                    ? formatDate(delivery.estimatedDeliveryTime)
                                    : 'Time not set'}
                                </span>
                              </div>
                            </>
                          ) : (
                            <span className="text-gray-500 italic">Order details not available</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end">
                        {delivery.issues && delivery.issues.length > 0 && (
                          <div className="mb-1">
                            <span className="flex items-center text-red-500 text-xs">
                              <AlertTriangle size={14} className="mr-1" />
                              {delivery.issues.length} issue{delivery.issues.length > 1 ? 's' : ''}
                            </span>
                          </div>
                        )}
                        <ChevronRight 
                          size={18}
                          className={`text-blue-500 transition-transform ${isSelected ? 'rotate-90' : ''}`}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Expanded details */}
                  {isSelected && (
                    <div className="px-3 pb-3 border-t border-blue-100">
                      {order && (
                        <>
                          <div className="mt-2 space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Customer:</span>
                              <span className="font-medium">{order.customerId}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Items:</span>
                              <span className="font-medium">{order.items.length} items ({order.totalWeight} kg)</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Priority:</span>
                              <span className={`font-medium ${
                                order.priority === 'express' ? 'text-orange-600' :
                                order.priority === 'standard' ? 'text-blue-600' : 'text-green-600'
                              }`}>{order.priority}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Payment:</span>
                              <span className={`font-medium ${
                                order.paymentStatus === 'paid' ? 'text-green-600' :
                                order.paymentStatus === 'pending' ? 'text-yellow-600' : 'text-red-600'
                              }`}>{order.paymentStatus}</span>
                            </div>
                            {delivery.driverId && (
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Driver:</span>
                                <span className="font-medium flex items-center">
                                  <Truck size={14} className="mr-1" /> 
                                  {delivery.driverId.slice(-6)}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          {/* Delivery actions */}
                          <div className="mt-4 flex space-x-2">
                            <button className="flex-1 flex items-center justify-center text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded">
                              <MapPin size={16} className="mr-1" />
                              Track
                            </button>
                            <button className="flex-1 flex items-center justify-center text-sm border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-3 rounded">
                              <Check size={16} className="mr-1" />
                              Update Status
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryList;
