"use client";

import React, { useState } from 'react';
import MapView from './MapView';
import DeliveryList from './DeliveryList';
import DriverList from './DriverList';
import AIInsightsPanel from './AIInsightsPanel';
import AnalyticsPanel from './AnalyticsPanel';
import OrderManagement from './OrderManagement';
import { Tab } from '@headlessui/react';
import { 
  Truck, 
  Package, 
  BarChart3, 
  Users, 
  Brain, 
  Settings 
} from 'lucide-react';
import { MapViewState, Driver, Delivery, Order, AnalyticsData, AIRecommendation } from '../types';

// Initial map state centered on Nairobi
const initialMapState: MapViewState = {
  latitude: -1.2921,
  longitude: 36.8219,
  zoom: 12,
  bearing: 0,
  pitch: 0
};

interface LogisticsDashboardProps {
  drivers: Driver[];
  deliveries: Delivery[];
  orders: Order[];
  analytics: AnalyticsData;
  recommendations: AIRecommendation[];
  driversLoading: boolean;
  deliveriesLoading: boolean;
  ordersLoading: boolean;
  analyticsLoading: boolean;
  recommendationsLoading: boolean;
}

export const LogisticsDashboard: React.FC<LogisticsDashboardProps> = ({
  drivers,
  deliveries,
  orders,
  analytics,
  recommendations,
  driversLoading,
  deliveriesLoading,
  ordersLoading,
  analyticsLoading,
  recommendationsLoading
}) => {
  const [mapViewState, setMapViewState] = useState<MapViewState>(initialMapState);
  const [selectedTab, setSelectedTab] = useState(0);

  // Function to handle focusing the map on a specific location
  const focusMapOnLocation = (latitude: number, longitude: number, zoom: number = 14) => {
    setMapViewState(prev => ({
      ...prev,
      latitude,
      longitude,
      zoom
    }));
  };

  // Function to handle focusing on a driver's location
  const focusOnDriver = (driverId: string) => {
    const driver = drivers.find(d => d.id === driverId);
    if (driver?.currentLocation) {
      focusMapOnLocation(
        driver.currentLocation.latitude,
        driver.currentLocation.longitude
      );
    }
  };

  // Function to handle focusing on a delivery location
  const focusOnDelivery = (deliveryId: string) => {
    const delivery = deliveries.find(d => d.id === deliveryId);
    const order = delivery ? orders.find(o => o.id === delivery.orderId) : null;
    
    if (order?.deliveryLocation) {
      focusMapOnLocation(
        order.deliveryLocation.latitude,
        order.deliveryLocation.longitude
      );
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Truck size={24} />
            <h1 className="text-xl font-bold">AI Logistics Solution - Nairobi</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
              <span className="mr-2">Real-time updates</span>
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded text-sm flex items-center">
              <Settings size={16} className="mr-1" />
              Settings
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Navigation */}
        <div className="w-16 bg-blue-800 text-white flex flex-col items-center py-4">
          <Tab.Group vertical selectedIndex={selectedTab} onChange={setSelectedTab}>
            <Tab.List className="flex flex-col space-y-6">
              <Tab className={({ selected }) => `
                w-12 h-12 rounded-lg flex items-center justify-center transition-all
                ${selected ? 'bg-blue-600 text-white' : 'text-blue-300 hover:bg-blue-700'}
              `}>
                <Package size={24} />
              </Tab>
              <Tab className={({ selected }) => `
                w-12 h-12 rounded-lg flex items-center justify-center transition-all
                ${selected ? 'bg-blue-600 text-white' : 'text-blue-300 hover:bg-blue-700'}
              `}>
                <Truck size={24} />
              </Tab>
              <Tab className={({ selected }) => `
                w-12 h-12 rounded-lg flex items-center justify-center transition-all
                ${selected ? 'bg-blue-600 text-white' : 'text-blue-300 hover:bg-blue-700'}
              `}>
                <Users size={24} />
              </Tab>
              <Tab className={({ selected }) => `
                w-12 h-12 rounded-lg flex items-center justify-center transition-all
                ${selected ? 'bg-blue-600 text-white' : 'text-blue-300 hover:bg-blue-700'}
              `}>
                <BarChart3 size={24} />
              </Tab>
              <Tab className={({ selected }) => `
                w-12 h-12 rounded-lg flex items-center justify-center transition-all
                ${selected ? 'bg-blue-600 text-white' : 'text-blue-300 hover:bg-blue-700'}
              `}>
                <Brain size={24} />
              </Tab>
            </Tab.List>
          </Tab.Group>
        </div>

        {/* Main Panel */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Map View - Always visible */}
          <div className="h-1/2 relative border-b border-blue-200">
            <MapView 
              viewState={mapViewState} 
              onViewStateChange={setMapViewState}
              drivers={drivers}
              deliveries={deliveries}
              orders={orders}
            />
            
            {/* Map Controls Overlay */}
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-2 flex flex-col space-y-2">
              <button 
                onClick={() => setMapViewState(initialMapState)}
                className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                title="Reset Map View"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </button>
              <button 
                className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                title="Toggle Traffic Layer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* Tab Content Panel */}
          <div className="h-1/2 overflow-hidden">
            <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
              <Tab.Panels className="h-full">
                {/* Deliveries Panel */}
                <Tab.Panel className="h-full overflow-auto p-4">
                  <DeliveryList 
                    deliveries={deliveries} 
                    orders={orders}
                    loading={deliveriesLoading || ordersLoading} 
                    onFocusDelivery={focusOnDelivery}
                  />
                </Tab.Panel>

                {/* Drivers Panel */}
                <Tab.Panel className="h-full overflow-auto p-4">
                  <DriverList 
                    drivers={drivers} 
                    loading={driversLoading} 
                    onFocusDriver={focusOnDriver}
                  />
                </Tab.Panel>

                {/* Orders Panel */}
                <Tab.Panel className="h-full overflow-auto p-4">
                  <OrderManagement 
                    orders={orders}
                    loading={ordersLoading}
                    onFocusOrder={(orderId: string) => {
                      const order = orders.find(o => o.id === orderId);
                      if (order?.deliveryLocation) {
                        focusMapOnLocation(
                          order.deliveryLocation.latitude,
                          order.deliveryLocation.longitude
                        );
                      }
                    }}
                  />
                </Tab.Panel>

                {/* Analytics Panel */}
                <Tab.Panel className="h-full overflow-auto p-4">
                  <AnalyticsPanel 
                    analytics={analytics}
                    loading={analyticsLoading}
                  />
                </Tab.Panel>

                {/* AI Insights Panel */}
                <Tab.Panel className="h-full overflow-auto p-4">
                  <AIInsightsPanel 
                    recommendations={recommendations}
                    loading={recommendationsLoading}
                  />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsDashboard;
