"use client";

import React from 'react';
import { LogisticsDashboard } from './components';
import { useDrivers, useDeliveries, useOrders, useAnalytics, useAIRecommendations } from './hooks';

const AILogisticsPage: React.FC = () => {
  // Get all data using our custom hooks
  const { drivers, loading: driversLoading } = useDrivers();
  const { deliveries, loading: deliveriesLoading } = useDeliveries();
  const { orders, loading: ordersLoading } = useOrders();
  const { analytics, loading: analyticsLoading } = useAnalytics();
  const { recommendations, loading: recommendationsLoading } = useAIRecommendations();
  
  // Calculate overall loading state
  const isLoading = driversLoading || deliveriesLoading || ordersLoading || analyticsLoading || recommendationsLoading;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">LIF AI Logistics Solution</h1>
          <p className="text-blue-100">Streamlining logistics operations in Nairobi</p>
        </div>
      </header>
      
      <main className="container mx-auto py-6 px-4">
        {isLoading ? (
          <div className="flex items-center justify-center h-96">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="ml-4 text-lg text-blue-800">Loading logistics data...</p>
          </div>
        ) : (
          <LogisticsDashboard 
            drivers={drivers}
            deliveries={deliveries}
            orders={orders}
            analytics={analytics}
            recommendations={recommendations}
            driversLoading={driversLoading}
            deliveriesLoading={deliveriesLoading}
            ordersLoading={ordersLoading}
            analyticsLoading={analyticsLoading}
            recommendationsLoading={recommendationsLoading}
          />
        )}
      </main>
      
      <footer className="bg-blue-800 text-white p-4 mt-10">
        <div className="container mx-auto text-center text-sm">
          <p> 2025 LIF AI-Powered Logistics Solution. All rights reserved.</p>
          <p className="mt-1 text-blue-200">Built for Nairobi's unique logistics challenges</p>
        </div>
      </footer>
    </div>
  );
};

export default AILogisticsPage;
