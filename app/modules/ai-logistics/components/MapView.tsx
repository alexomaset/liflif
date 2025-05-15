"use client";

import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import Map, { Marker, Popup, Source, Layer, NavigationControl, MapRef, ViewStateChangeEvent } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapViewState, Driver, Delivery, Order, Route, DriverStatus, OrderStatus } from '../types';
import { Truck, Package, AlertTriangle } from 'lucide-react';

// Note: You'll need to add your Mapbox access token in your .env file
// NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_token

interface MapViewProps {
  viewState: MapViewState;
  onViewStateChange: (viewState: MapViewState) => void;
  drivers: Driver[];
  deliveries: Delivery[];
  orders: Order[];
  routes?: Route[];
  showTraffic?: boolean;
}

const MapView: React.FC<MapViewProps> = ({
  viewState,
  onViewStateChange,
  drivers,
  deliveries,
  orders,
  routes,
  showTraffic = false
}) => {
  const [popupInfo, setPopupInfo] = React.useState<{
    longitude: number;
    latitude: number;
    content: React.ReactNode;
  } | null>(null);

  // Use React.RefObject instead for better compatibility with React 19
  const mapRef = React.useRef<MapRef>(null);

  // Get the delivery info based on order ID
  const getDeliveryForOrder = (orderId: string) => {
    return deliveries.find(delivery => delivery.orderId === orderId);
  };

  // Get the order info based on delivery
  const getOrderForDelivery = (deliveryId: string) => {
    const delivery = deliveries.find(d => d.id === deliveryId);
    if (!delivery) return null;
    return orders.find(order => order.id === delivery.orderId);
  };

  // Helper to render traffic layers if showTraffic is true
  // In a real app, this would fetch real-time traffic data for Nairobi
  const renderTrafficLayers = () => {
    if (!showTraffic) return null;

    // In a real implementation, these would be fetched from a traffic API
    return (
      <Source id="traffic" type="geojson" data={{
        type: 'FeatureCollection',
        features: []
      }}>
        <Layer
          id="traffic-layer"
          type="line"
          paint={{
            'line-width': 3,
            'line-color': [
              'match',
              ['get', 'congestion'],
              'low', '#4CAF50',
              'medium', '#FFC107',
              'high', '#F44336',
              '#BBBBBB'
            ]
          }}
        />
      </Source>
    );
  };

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      {...viewState}
      onMove={(evt: ViewStateChangeEvent) => onViewStateChange(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Navigation controls */}
      <NavigationControl position="top-left" />

      {/* Traffic layers */}
      {renderTrafficLayers()}

      {/* Driver Markers */}
      {drivers.map(driver => (
        driver.currentLocation && (
          <Marker
            key={`driver-${driver.id}`}
            longitude={driver.currentLocation.longitude}
            latitude={driver.currentLocation.latitude}
            anchor="bottom"
            onClick={(e: { originalEvent: MouseEvent; target: any; }) => {
              e.originalEvent.stopPropagation();
              setPopupInfo({
                longitude: driver.currentLocation!.longitude,
                latitude: driver.currentLocation!.latitude,
                content: (
                  <div className="p-2">
                    <h3 className="font-bold text-blue-800">{driver.name}</h3>
                    <div className="text-sm mt-1">
                      <p>Status: <span className="font-medium">{driver.status}</span></p>
                      <p>Vehicle: <span className="font-medium">{driver.vehicleType.name}</span></p>
                      <p>Rating: <span className="font-medium">{driver.rating}/5</span></p>
                      <p>Completed Deliveries: <span className="font-medium">{driver.completedDeliveries}</span></p>
                    </div>
                  </div>
                )
              });
            }}
          >
            <div className={`
              p-1 rounded-full 
              ${driver.status === 'available' ? 'bg-green-500' : 
                driver.status === 'on_delivery' ? 'bg-yellow-500' : 
                driver.status === 'offline' ? 'bg-gray-500' : 'bg-blue-500'}
            `}>
              <Truck size={20} color="white" />
            </div>
          </Marker>
        )
      ))}

      {/* Delivery Markers */}
      {orders.map(order => (
        <Marker
          key={`delivery-${order.id}`}
          longitude={order.deliveryLocation.longitude}
          latitude={order.deliveryLocation.latitude}
          anchor="bottom"
          onClick={(e: { originalEvent: MouseEvent; target: any; }) => {
            e.originalEvent.stopPropagation();
            const delivery = getDeliveryForOrder(order.id);
            setPopupInfo({
              longitude: order.deliveryLocation.longitude,
              latitude: order.deliveryLocation.latitude,
              content: (
                <div className="p-2">
                  <h3 className="font-bold text-blue-800">Order #{order.id.slice(-6)}</h3>
                  <div className="text-sm mt-1">
                    <p>Status: <span className={`font-medium ${
                      order.status === 'delivered' ? 'text-green-600' :
                      order.status === 'shipped' ? 'text-blue-600' :
                      order.status === 'cancelled' ? 'text-red-600' : 'text-gray-600'
                    }`}>{order.status}</span></p>
                    <p>Items: <span className="font-medium">{order.items.length}</span></p>
                    <p>Priority: <span className="font-medium">{order.priority}</span></p>
                    {delivery && (
                      <p>Delivery ETA: <span className="font-medium">
                        {delivery.estimatedDeliveryTime ? new Date(delivery.estimatedDeliveryTime).toLocaleTimeString() : 'Not assigned'}
                      </span></p>
                    )}
                  </div>
                </div>
              )
            });
          }}
        >
          <div className={`
            p-1 rounded-full 
            ${order.status === 'delivered' ? 'bg-green-500' : 
              order.status === 'shipped' ? 'bg-blue-500' : 
              order.status === 'cancelled' ? 'bg-red-500' : 'bg-purple-500'}
          `}>
            <Package size={20} color="white" />
          </div>
        </Marker>
      ))}

      {/* Delivery Issue Markers */}
      {deliveries.filter(d => d.issues && d.issues.length > 0).map(delivery => {
        const order = getOrderForDelivery(delivery.id);
        if (!order) return null;
        
        return (
          <Marker
            key={`issue-${delivery.id}`}
            longitude={order.deliveryLocation.longitude}
            latitude={order.deliveryLocation.latitude}
            anchor="bottom"
            offsetTop={-20}
          >
            <div className="p-1 rounded-full bg-red-500 animate-pulse">
              <AlertTriangle size={20} color="white" />
            </div>
          </Marker>
        );
      })}

      {/* Information Popup */}
      {popupInfo && (
        <Popup
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          onClose={() => setPopupInfo(null)}
          className="z-10"
        >
          {popupInfo.content}
        </Popup>
      )}
    </Map>
  );
};

export default MapView;
