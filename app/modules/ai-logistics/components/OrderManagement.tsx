import React, { useState } from 'react';
import { Order, OrderStatus } from '../types';
import { Package, Search, Filter, Clock, MapPin, ShoppingBag, Plus, MoreVertical, ChevronRight, AlertTriangle } from 'lucide-react';

interface OrderManagementProps {
  orders: Order[];
  loading: boolean;
  onFocusOrder: (orderId: string) => void;
}

const OrderManagement: React.FC<OrderManagementProps> = ({
  orders,
  loading,
  onFocusOrder
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<OrderStatus | 'all'>('all');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [showCreateOrder, setShowCreateOrder] = useState(false);

  // Filter orders based on search term and status
  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (order.deliveryLocation.addressText && 
        order.deliveryLocation.addressText.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Get status color based on order status
  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-100';
      case 'out_for_delivery':
        return 'text-blue-600 bg-blue-100';
      case 'confirmed':
      case 'ready_for_pickup':
        return 'text-purple-600 bg-purple-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'cancelled':
      case 'returned':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  // Sort orders by priority and recency
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    // First sort by priority
    const priorityRank = {
      'express': 1,
      'standard': 2,
      'scheduled': 3
    };
    
    if (priorityRank[a.priority] !== priorityRank[b.priority]) {
      return priorityRank[a.priority] - priorityRank[b.priority];
    }
    
    // Then sort by creation date (newest first)
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  if (loading) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-blue-800">Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-900">Orders</h2>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search orders..."
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
              onChange={(e) => setStatusFilter(e.target.value as OrderStatus | 'all')}
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="preparing">Preparing</option>
              <option value="ready_for_pickup">Ready for Pickup</option>
              <option value="out_for_delivery">Out for Delivery</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
              <option value="returned">Returned</option>
            </select>
            <Filter className="absolute left-3 top-2.5 text-blue-400" size={16} />
            <ChevronRight className="absolute right-3 top-2.5 text-blue-400 rotate-90" size={16} />
          </div>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
            onClick={() => setShowCreateOrder(true)}
          >
            <Plus size={20} />
          </button>
        </div>
      </div>

      {filteredOrders.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
          <Package size={48} className="mb-4 text-blue-300" />
          <p className="text-lg">No orders found</p>
          <p className="text-sm">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto pr-2">
          {/* List of orders */}
          <div className="space-y-3">
            {sortedOrders.map(order => {
              const isSelected = selectedOrder === order.id;
              
              return (
                <div
                  key={order.id}
                  className={`bg-white rounded-lg shadow-sm border transition-all overflow-hidden ${
                    isSelected ? 'ring-2 ring-blue-500 border-transparent' : 'border-gray-100 hover:shadow-md'
                  }`}
                >
                  {/* Order card header */}
                  <div 
                    className="p-3 cursor-pointer"
                    onClick={() => {
                      setSelectedOrder(isSelected ? null : order.id);
                      onFocusOrder(order.id);
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold text-blue-900">
                            #{order.id.slice(-6)}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(order.status)}`}>
                            {order.status.replace('_', ' ')}
                          </span>
                          {order.priority === 'express' && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600">
                              Express
                            </span>
                          )}
                        </div>
                        
                        <div className="mt-1 text-sm text-gray-700">
                          <div className="flex items-center mt-1">
                            <Clock size={14} className="mr-1 text-gray-500" />
                            <span>{formatDate(order.createdAt)}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <MapPin size={14} className="mr-1 text-gray-500" />
                            <span className="truncate max-w-[200px]">
                              {order.deliveryLocation.addressText || 'Address not available'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end">
                        <span className="text-sm font-bold text-blue-900">
                          Ksh {order.deliveryFee.toFixed(2)}
                        </span>
                        <span className={`text-xs mt-1 ${
                          order.paymentStatus === 'paid' ? 'text-green-600' : 
                          order.paymentStatus === 'pending' ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {order.paymentStatus}
                        </span>
                        <ChevronRight 
                          size={18}
                          className={`text-blue-500 transition-transform mt-2 ${isSelected ? 'rotate-90' : ''}`}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Expanded details */}
                  {isSelected && (
                    <div className="px-3 pb-3 pt-1 border-t border-blue-100">
                      <div className="mt-1">
                        <div className="text-sm font-bold text-gray-700 mb-2">Order Items</div>
                        <div className="bg-gray-50 rounded-lg p-2 max-h-40 overflow-y-auto">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between items-center mb-2 text-sm">
                              <div className="flex items-center">
                                <ShoppingBag size={14} className="mr-2 text-blue-500" />
                                <span>{item.name}</span>
                                {item.fragile && (
                                  <span className="ml-2 text-red-500 text-xs">Fragile</span>
                                )}
                              </div>
                              <div className="flex items-center">
                                <span className="text-gray-600 mr-3">x{item.quantity}</span>
                                <span className="font-medium">{item.weight} kg</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-3">
                        <div className="text-sm">
                          <div className="text-gray-500">Customer ID</div>
                          <div className="font-medium">{order.customerId}</div>
                        </div>
                        <div className="text-sm">
                          <div className="text-gray-500">Total Weight</div>
                          <div className="font-medium">{order.totalWeight} kg</div>
                        </div>
                        <div className="text-sm">
                          <div className="text-gray-500">Priority</div>
                          <div className="font-medium capitalize">{order.priority}</div>
                        </div>
                        <div className="text-sm">
                          <div className="text-gray-500">Scheduled</div>
                          <div className="font-medium">
                            {order.scheduledDelivery ? 
                              `${new Date(order.scheduledDelivery.start).toLocaleTimeString()} - ${new Date(order.scheduledDelivery.end).toLocaleTimeString()}` : 
                              'Not scheduled'}
                          </div>
                        </div>
                      </div>
                      
                      {order.specialInstructions && (
                        <div className="mt-3 text-sm">
                          <div className="text-gray-500">Special Instructions</div>
                          <div className="p-2 bg-yellow-50 border border-yellow-100 rounded mt-1 text-gray-700">
                            {order.specialInstructions}
                          </div>
                        </div>
                      )}
                      
                      {/* Order actions */}
                      <div className="mt-4 flex space-x-2">
                        <button className="flex-1 flex items-center justify-center text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded">
                          <Package size={16} className="mr-1" />
                          Update Status
                        </button>
                        <button className="flex-1 flex items-center justify-center text-sm border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-3 rounded">
                          <MapPin size={16} className="mr-1" />
                          Track
                        </button>
                        <button className="p-2 border border-gray-200 rounded text-gray-500 hover:bg-gray-50">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Create New Order Modal (simplified) */}
      {showCreateOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-blue-900">Create New Order</h3>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowCreateOrder(false)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-4">
                {/* Customer Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Customer</label>
                  <div className="relative">
                    <select className="appearance-none pl-3 pr-10 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                      <option value="" disabled selected>Select a customer</option>
                      <option value="cust1">John Doe (ID: 10023)</option>
                      <option value="cust2">Jane Smith (ID: 10045)</option>
                      <option value="cust3">Wanjiku Kamau (ID: 10067)</option>
                    </select>
                    <ChevronRight className="absolute right-3 top-2.5 text-gray-400 rotate-90" size={16} />
                  </div>
                </div>
                
                {/* Delivery Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Location</label>
                  <div className="flex space-x-2">
                    <input 
                      type="text" 
                      placeholder="Search for location..."
                      className="flex-1 pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-100 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-200">
                      <MapPin size={18} />
                    </button>
                  </div>
                  <div className="mt-2 text-xs text-gray-500 flex items-center">
                    <AlertTriangle size={12} className="text-yellow-500 mr-1" />
                    Using AI-powered address resolution for informal areas
                  </div>
                </div>
                
                {/* Order Items */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Items</label>
                  <div className="border border-gray-300 rounded-lg p-3 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                      <div className="text-sm">Package 1</div>
                      <div className="flex items-center space-x-2">
                        <input 
                          type="number" 
                          placeholder="Weight (kg)"
                          className="w-24 px-2 py-1 border border-gray-300 rounded-lg text-sm"
                        />
                        <button className="text-red-500 hover:text-red-700">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-600 flex items-center justify-center">
                      <Plus size={16} className="mr-1" />
                      Add Item
                    </button>
                  </div>
                </div>
                
                {/* Delivery Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Options</label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-gray-300 rounded-lg p-3 cursor-pointer hover:bg-blue-50 hover:border-blue-200">
                      <div className="text-sm font-medium">Standard</div>
                      <div className="text-xs text-gray-500 mt-1">1-2 days delivery</div>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-3 cursor-pointer hover:bg-blue-50 hover:border-blue-200">
                      <div className="text-sm font-medium">Express</div>
                      <div className="text-xs text-gray-500 mt-1">Same day delivery</div>
                    </div>
                  </div>
                </div>
                
                {/* Special Instructions */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Special Instructions</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Add any special delivery instructions..."
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  onClick={() => setShowCreateOrder(false)}
                >
                  Cancel
                </button>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={() => setShowCreateOrder(false)}
                >
                  Create Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
