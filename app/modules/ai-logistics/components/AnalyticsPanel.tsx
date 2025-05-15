"use client";

import React, { useState } from 'react';
import { AnalyticsData } from '../types';
import { BarChart3, TrendingUp, Map, Users, Calendar, ChevronDown, Package, Truck, Clock, DollarSign } from 'lucide-react';

interface AnalyticsPanelProps {
  analytics: AnalyticsData;
  loading: boolean;
}

const AnalyticsPanel: React.FC<AnalyticsPanelProps> = ({
  analytics,
  loading
}) => {
  const [timeRange, setTimeRange] = useState<'today' | 'week' | 'month'>('today');
  
  if (loading) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-blue-800">Loading analytics...</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <BarChart3 size={24} className="text-blue-600 mr-2" />
          <h2 className="text-xl font-bold text-blue-900">Analytics Dashboard</h2>
        </div>
        
        <div className="flex">
          <div className="relative">
            <select
              className="appearance-none pl-3 pr-10 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as 'today' | 'week' | 'month')}
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 text-blue-400" size={16} />
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-50">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-1">Deliveries</div>
              <div className="text-2xl font-bold text-blue-900">{analytics.deliveriesCompleted}</div>
            </div>
            <div className="p-2 bg-blue-100 rounded-lg">
              <Package size={20} className="text-blue-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 flex items-center">
              <TrendingUp size={12} className="mr-1" />
              +{Math.floor(Math.random() * 10 + 5)}%
            </span>
            <span className="text-gray-500 ml-2">vs. previous {timeRange}</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-50">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-1">On-Time Rate</div>
              <div className="text-2xl font-bold text-blue-900">{analytics.onTimeDeliveryRate}%</div>
            </div>
            <div className="p-2 bg-green-100 rounded-lg">
              <Clock size={20} className="text-green-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 flex items-center">
              <TrendingUp size={12} className="mr-1" />
              +{Math.floor(Math.random() * 3 + 1)}%
            </span>
            <span className="text-gray-500 ml-2">vs. previous {timeRange}</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-50">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-1">Active Drivers</div>
              <div className="text-2xl font-bold text-blue-900">{analytics.activeDrivers}</div>
            </div>
            <div className="p-2 bg-orange-100 rounded-lg">
              <Truck size={20} className="text-orange-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-red-600 flex items-center">
              <TrendingUp size={12} className="mr-1 rotate-180" />
              -{Math.floor(Math.random() * 5 + 1)}%
            </span>
            <span className="text-gray-500 ml-2">vs. previous {timeRange}</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-50">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-1">Revenue</div>
              <div className="text-2xl font-bold text-blue-900">
                Ksh {(Math.random() * 100000 + 50000).toFixed(0)}
              </div>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg">
              <DollarSign size={20} className="text-purple-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-600 flex items-center">
              <TrendingUp size={12} className="mr-1" />
              +{Math.floor(Math.random() * 15 + 5)}%
            </span>
            <span className="text-gray-500 ml-2">vs. previous {timeRange}</span>
          </div>
        </div>
      </div>

      {/* Charts and detailed analytics */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Delivery metrics chart */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-50">
          <h3 className="font-bold text-gray-700 mb-3">Delivery Performance</h3>
          
          {/* Simple bar chart visualization */}
          <div className="h-48 flex items-end justify-between px-2">
            {[...Array(12)].map((_, i) => {
              const height = Math.random() * 80 + 20;
              return (
                <div key={i} className="flex flex-col items-center">
                  <div 
                    className={`w-8 rounded-t-md ${i % 3 === 0 ? 'bg-blue-500' : 'bg-blue-300'}`} 
                    style={{height: `${height}%`}}
                  ></div>
                  <div className="text-xs mt-1 text-gray-500">{i+1}h</div>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-between mt-4">
            <div className="text-sm text-gray-700">
              <div className="font-medium">Average Delivery Time</div>
              <div className="text-lg font-bold text-blue-900">{analytics.averageDeliveryTime} min</div>
            </div>
            <div className="text-sm text-gray-700">
              <div className="font-medium">Failed Deliveries</div>
              <div className="text-lg font-bold text-red-500">{analytics.deliveriesFailed}</div>
            </div>
            <div className="text-sm text-gray-700">
              <div className="font-medium">In Progress</div>
              <div className="text-lg font-bold text-orange-500">{analytics.deliveriesInProgress}</div>
            </div>
          </div>
        </div>
        
        {/* Busiest areas map/chart */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-50">
          <h3 className="font-bold text-gray-700 mb-3">Busiest Areas in Nairobi</h3>
          
          <div className="space-y-3 mt-4">
            {analytics.busyAreas.slice(0, 5).map((area, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 text-center font-bold text-blue-600">{index + 1}</div>
                <div className="flex-grow">
                  <div className="text-sm font-medium text-gray-700">{area.areaName}</div>
                  <div className="w-full h-2 bg-blue-100 rounded-full mt-1">
                    <div 
                      className="h-full bg-blue-600 rounded-full" 
                      style={{width: `${(area.deliveryCount / analytics.busyAreas[0].deliveryCount) * 100}%`}}
                    ></div>
                  </div>
                </div>
                <div className="w-12 text-right text-sm font-bold text-blue-900">
                  {area.deliveryCount}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-center">
            <button className="flex items-center text-blue-600 text-sm font-medium">
              <Map size={16} className="mr-1" />
              View Heat Map
            </button>
          </div>
        </div>
      </div>
      
      {/* Driver performance table */}
      <div className="bg-white rounded-lg shadow-sm border border-blue-50 mb-6">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-bold text-gray-700">Top Performing Drivers</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-50">
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deliveries</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On-Time Rate</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Rating</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {analytics.performanceByDriver.slice(0, 5).map((driver, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50 bg-opacity-30'}>
                  <td className="py-3 px-4 text-sm">
                    <div className="font-medium text-gray-900">{driver.driverName}</div>
                    <div className="text-gray-500 text-xs">ID: {driver.driverId.slice(-6)}</div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">{driver.deliveryCount}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                        <div 
                          className={`h-full rounded-full ${
                            driver.onTimeRate > 90 ? 'bg-green-500' : 
                            driver.onTimeRate > 80 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{width: `${driver.onTimeRate}%`}}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-900">{driver.onTimeRate}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="text-yellow-500 flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.floor(driver.averageRating) ? 'fill-current' : 'fill-gray-200'}`} viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-1 text-sm text-gray-900">{driver.averageRating.toFixed(1)}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      index === 0 ? 'bg-green-100 text-green-800' : 
                      index === 1 ? 'bg-blue-100 text-blue-800' : 
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {index === 0 ? 'Top Performer' : index === 1 ? 'Rising Star' : 'Active'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-100 flex justify-center">
          <button className="flex items-center text-blue-600 text-sm font-medium">
            <Users size={16} className="mr-1" />
            View All Drivers
          </button>
        </div>
      </div>
      
      {/* Future scheduling insights */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-50">
        <h3 className="font-bold text-gray-700 mb-3 flex items-center">
          <Calendar size={18} className="mr-2 text-blue-600" />
          Delivery Forecast (Next 7 Days)
        </h3>
        
        <div className="flex mt-4 space-x-4 overflow-x-auto pb-2">
          {[...Array(7)].map((_, index) => {
            const date = new Date();
            date.setDate(date.getDate() + index);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            const dayNum = date.getDate();
            
            // Generate random forecast data
            const forecastValue = Math.floor(Math.random() * 50 + 30);
            const isPeak = forecastValue > 65;
            const isLow = forecastValue < 40;
            
            return (
              <div key={index} className="min-w-[100px] flex-1">
                <div className={`p-3 rounded-lg border ${
                  isPeak ? 'border-orange-200 bg-orange-50' : 
                  isLow ? 'border-green-200 bg-green-50' : 
                  'border-blue-200 bg-blue-50'
                }`}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium">{dayName}</div>
                    <div className="text-xs bg-white rounded-full w-6 h-6 flex items-center justify-center">
                      {dayNum}
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold">
                    {forecastValue}
                  </div>
                  
                  <div className="text-xs mt-1">
                    <span className={`font-medium ${
                      isPeak ? 'text-orange-700' : 
                      isLow ? 'text-green-700' : 
                      'text-blue-700'
                    }`}>
                      {isPeak ? 'Peak' : isLow ? 'Low' : 'Average'}
                    </span> volume
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-700">
            <span className="font-medium">Upcoming scheduled deliveries:</span> {analytics.scheduledDeliveries}
          </div>
          <div className="mt-2 flex justify-between">
            <button className="flex items-center bg-blue-600 text-white px-3 py-2 rounded text-sm">
              <Calendar size={16} className="mr-1" />
              Schedule Optimization
            </button>
            <button className="flex items-center border border-gray-300 px-3 py-2 rounded text-sm text-gray-700">
              <Calendar size={16} className="mr-1" />
              View Detailed Forecast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPanel;
