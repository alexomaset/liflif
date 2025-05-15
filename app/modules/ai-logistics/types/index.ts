// Core type definitions for AI-powered logistics solution

export interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
  addressText?: string;
  landmarkReferences?: string[];
  areaName?: string;
  zone?: string;
  securityRating?: number; // 1-10 scale for security considerations
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  vehicleType: VehicleType;
  vehicleId: string;
  status: DriverStatus;
  currentLocation?: LocationData;
  rating: number;
  completedDeliveries: number;
  areaExpertise: string[]; // Areas the driver has experience with
  availableHours: TimeWindow[];
  imageUrl?: string;
}

export interface VehicleType {
  id: string;
  name: string;
  capacity: number; // in kg
  maxItems: number;
  fuelEfficiency: number; // km per liter
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  restrictions?: {
    roads?: string[];
    zones?: string[];
    timeWindows?: TimeWindow[];
  };
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  defaultAddress?: LocationData;
  addresses: LocationData[];
  deliveryPreferences?: {
    timeWindows: TimeWindow[];
    instructions?: string;
    contactPreference: 'call' | 'sms' | 'app';
  };
  orderHistory?: Order[];
}

export interface Order {
  id: string;
  customerId: string;
  items: OrderItem[];
  status: OrderStatus;
  createdAt: string;
  scheduledDelivery?: TimeWindow;
  deliveryLocation: LocationData;
  specialInstructions?: string;
  priority: OrderPriority;
  totalWeight: number;
  totalVolume: number;
  paymentStatus: PaymentStatus;
  deliveryFee: number;
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  weight: number; // in kg
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  fragile: boolean;
  perishable: boolean;
  temperature?: {
    min: number;
    max: number;
  };
}

export interface Delivery {
  id: string;
  orderId: string;
  driverId?: string;
  status: DeliveryStatus;
  assignedAt?: string;
  pickedUpAt?: string;
  deliveredAt?: string;
  estimatedPickupTime?: string;
  estimatedDeliveryTime?: string;
  actualRoute?: RoutePoint[];
  plannedRoute?: RoutePoint[];
  proofOfDelivery?: {
    signature?: string;
    photo?: string;
    notes?: string;
    timestamp: string;
  };
  issues?: DeliveryIssue[];
}

export interface DeliveryIssue {
  id: string;
  type: 'delay' | 'damage' | 'address_not_found' | 'customer_unavailable' | 'vehicle_breakdown' | 'security' | 'other';
  description: string;
  reportedAt: string;
  status: 'reported' | 'investigating' | 'resolved';
  resolution?: string;
  affectedDeliveries: string[]; // delivery IDs
}

export interface Route {
  id: string;
  driverId: string;
  deliveries: string[]; // delivery IDs
  status: 'planned' | 'in_progress' | 'completed' | 'cancelled';
  startTime?: string;
  endTime?: string;
  estimatedDistance: number; // in km
  estimatedDuration: number; // in minutes
  actualDistance?: number;
  actualDuration?: number;
  waypoints: RoutePoint[];
  optimizationScore: number; // 0-100, how optimal is this route
  trafficConsideration: boolean;
  weatherAdjusted: boolean;
}

export interface RoutePoint {
  location: LocationData;
  arrivalTime: string;
  departureTime?: string;
  stopDuration?: number; // in minutes
  type: 'pickup' | 'delivery' | 'break' | 'refuel';
  deliveryId?: string;
  orderId?: string;
  completed: boolean;
}

export interface TimeWindow {
  start: string; // ISO string
  end: string; // ISO string
  flexible: boolean;
}

export interface TrafficData {
  segmentId: string;
  congestionLevel: number; // 0-1 scale
  averageSpeed: number;
  timestamp: number;
}

export interface WeatherData {
  condition: string; // clear, rainy, etc.
  intensity: number; // 0-1 scale
  affectedAreas: string[];
  timestamp: number;
  forecastHours: {
    hour: number;
    condition: string;
    intensity: number;
  }[];
}

export interface DeliveryTimeEstimation {
  deliveryId: string;
  estimatedArrival: string;
  confidenceLevel: number; // 0-1 scale
  potentialDelayFactors?: string[];
}

export interface DemandForecast {
  date: string;
  timeWindow: TimeWindow;
  area: string;
  predictedOrderCount: number;
  confidenceInterval: {
    min: number;
    max: number;
  };
  factors: {
    name: string;
    impact: number; // -1 to 1 scale
  }[];
}

export interface PerformanceByDriver {
  driverId: string;
  driverName: string;
  deliveryCount: number;
  onTimeRate: number;
  averageRating: number;
  deliveriesCompleted: number;
  totalDistance: number;
  fuelEfficiency: number;
  earnings: number;
  areasServiced: string[];
}

export interface AreaDensity {
  areaName: string;
  currentOrders: number;
  historicalDensity: number;
  peakHours: number[];
  congestionLevel: 'low' | 'medium' | 'high';
  avgDeliveryTime: number;
  completionRate: number;
}

export interface RevenueTrend {
  period: string;
  amount: number;
  orderCount: number;
  avgOrderValue: number;
  growth: number;
}

export interface AIRecommendation {
  id: string;
  type: RecommendationType;
  title: string;
  description: string;
  actionableInsight: string;
  createdAt: string;
  impactedItems: string[];
  estimatedImpact: any;
  confidenceScore: number;
  relatedArea?: string;
  applied: boolean;
  recommendation: string;
  reasoning: string[];
  alternatives?: any[];
  appliedFactors: {
    name: string;
    impact: number; // 0-1 scale
  }[];
}

export interface MapViewState {
  latitude: number;
  longitude: number;
  zoom: number;
  bearing?: number;
  pitch?: number;
}

export interface AnalyticsData {
  deliveriesCompleted: number;
  deliveriesInProgress: number;
  deliveriesFailed: number;
  averageDeliveryTime: number;
  onTimeDeliveryRate: number;
  activeDrivers: number;
  scheduledDeliveries: number;
  revenueTrend: RevenueTrend[];
  busyAreas: {
    areaName: string;
    deliveryCount: number;
  }[];
  performanceByDriver: PerformanceByDriver[];
}

// Enum types
export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
export type DeliveryStatus = 'pending' | 'assigned' | 'picked_up' | 'in_transit' | 'delivered' | 'failed';
export type DriverStatus = 'available' | 'on_delivery' | 'break' | 'offline' | 'maintenance';
export type RecommendationType = 
  'route_optimization' | 
  'driver_assignment' | 
  'delivery_schedule' | 
  'capacity_planning' |
  'maintenance_alert' |
  'congestion_avoidance' |
  'weather_alert';
export type OrderPriority = 'standard' | 'express' | 'scheduled';
export type PaymentStatus = 'pending' | 'paid' | 'failed';
