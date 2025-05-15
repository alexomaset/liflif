"use client";

import React, { useState } from 'react';
import { Driver, DriverStatus } from '../types';
import { ChevronRight, Search, Filter, Star, MapPin, Clock, Battery, PhoneCall, MoreVertical } from 'lucide-react';

interface DriverListProps {
  drivers: Driver[];
  loading: boolean;
  onFocusDriver: (driverId: string) => void;
}

const DriverList: React.FC<DriverListProps> = ({
  drivers,
  loading,
  onFocusDriver
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<DriverStatus | 'all'>('all');
  const [selectedDriver, setSelectedDriver] = useState<string | null>(null);

  // Filter drivers based on search term and status
  const filteredDrivers = drivers.filter(driver => {
    const matchesSearch = 
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.phone.includes(searchTerm);
    
    const matchesStatus = statusFilter === 'all' || driver.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Sort drivers by status and availability
  const sortedDrivers = [...filteredDrivers].sort((a, b) => {
    // First sort by status priority
    const statusPriority = {
      'available': 1,
      'en_route_to_pickup': 2,
      'en_route_to_delivery': 3,
      'busy': 4,
      'on_break': 5,
      'offline': 6
    };
    
    return statusPriority[a.status] - statusPriority[b.status];
  });

  // Get status color based on driver status
  const getStatusColor = (status: DriverStatus) => {
    switch (status) {
      case 'available':
        return 'text-green-600 bg-green-100';
      case 'busy':
      case 'en_route_to_pickup':
      case 'en_route_to_delivery':
        return 'text-blue-600 bg-blue-100';
      case 'on_break':
        return 'text-orange-600 bg-orange-100';
      case 'offline':
        return 'text-gray-600 bg-gray-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  // Get battery level icon
  const getBatteryIcon = (level: number) => {
    if (level >= 75) {
      return <Battery size={16} className="text-green-500" />;
    } else if (level >= 50) {
      return <Battery size={16} className="text-yellow-500" />;
    } else if (level >= 25) {
      return <Battery size={16} className="text-orange-500" />;
    } else {
      return <Battery size={16} className="text-red-500" />;
    }
  };

  if (loading) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-blue-800">Loading drivers...</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-900">Drivers</h2>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search drivers..."
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
              onChange={(e) => setStatusFilter(e.target.value as DriverStatus | 'all')}
            >
              <option value="all">All Statuses</option>
              <option value="available">Available</option>
              <option value="busy">Busy</option>
              <option value="en_route_to_pickup">En Route to Pickup</option>
              <option value="en_route_to_delivery">En Route to Delivery</option>
              <option value="on_break">On Break</option>
              <option value="offline">Offline</option>
            </select>
            <Filter className="absolute left-3 top-2.5 text-blue-400" size={16} />
            <ChevronRight className="absolute right-3 top-2.5 text-blue-400 rotate-90" size={16} />
          </div>
        </div>
      </div>

      {filteredDrivers.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
          <MapPin size={48} className="mb-4 text-blue-300" />
          <p className="text-lg">No drivers found</p>
          <p className="text-sm">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto pr-2">
          {/* List of drivers */}
          <div className="space-y-3">
            {sortedDrivers.map(driver => {
              const isSelected = selectedDriver === driver.id;
              
              return (
                <div
                  key={driver.id}
                  className={`bg-white rounded-lg shadow-sm transition-all overflow-hidden ${
                    isSelected ? 'ring-2 ring-blue-500' : 'hover:shadow-md'
                  }`}
                >
                  {/* Driver card header */}
                  <div 
                    className="p-3 cursor-pointer"
                    onClick={() => {
                      setSelectedDriver(isSelected ? null : driver.id);
                      onFocusDriver(driver.id);
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        {/* Driver image */}
                        <div className="mr-3">
                          {driver.imageUrl ? (
                            <img 
                              src={driver.imageUrl} 
                              alt={driver.name} 
                              className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold text-lg">
                              {driver.name.charAt(0)}
                            </div>
                          )}
                          <div className={`w-3 h-3 rounded-full border-2 border-white absolute -mt-2 ml-9 ${
                            driver.status === 'available' ? 'bg-green-500' :
                            driver.status === 'offline' ? 'bg-gray-500' : 'bg-blue-500'
                          }`}></div>
                        </div>
                        
                        {/* Driver info */}
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-blue-900">{driver.name}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(driver.status)}`}>
                              {driver.status.replace('_', ' ')}
                            </span>
                          </div>
                          
                          <div className="mt-1 text-sm text-gray-700">
                            <div className="flex items-center mt-1">
                              <Star size={14} className="mr-1 text-yellow-500" />
                              <span>{driver.rating} ({driver.completedDeliveries} deliveries)</span>
                            </div>
                            
                            {driver.currentLocation && (
                              <div className="flex items-center mt-1">
                                <MapPin size={14} className="mr-1 text-gray-500" />
                                <span className="truncate max-w-[200px]">
                                  {driver.currentLocation.areaName || 'Current location'}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
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
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Vehicle:</span>
                          <span className="font-medium">{driver.vehicleType.name} ({driver.vehicleId})</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Capacity:</span>
                          <span className="font-medium">{driver.vehicleType.capacity} kg / {driver.vehicleType.maxItems} items</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Area Expertise:</span>
                          <span className="font-medium">{driver.areaExpertise.join(', ') || 'All areas'}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Phone:</span>
                          <span className="font-medium text-blue-600">{driver.phone}</span>
                        </div>
                        {/* Random battery level for demonstration */}
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Battery:</span>
                          <span className="font-medium flex items-center">
                            {getBatteryIcon(Math.floor(Math.random() * 100))}
                            <span className="ml-1">{Math.floor(Math.random() * 100)}%</span>
                          </span>
                        </div>
                      </div>
                      
                      {/* Driver actions */}
                      <div className="mt-4 flex space-x-2">
                        <button className="flex-1 flex items-center justify-center text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded">
                          <MapPin size={16} className="mr-1" />
                          Track
                        </button>
                        <button className="flex-1 flex items-center justify-center text-sm border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-3 rounded">
                          <PhoneCall size={16} className="mr-1" />
                          Call
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
    </div>
  );
};

export default DriverList;
