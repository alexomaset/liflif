import { AnalyticsData, PerformanceByDriver, AreaDensity, RevenueTrend } from '../types';

// Generate mock analytics data for demonstration
const generateMockAnalytics = (): AnalyticsData => {
  // Nairobi areas for busy area analysis
  const nairobiAreas = [
    'Westlands', 'Kilimani', 'Karen', 'Lavington', 'Gigiri', 
    'Parklands', 'Kileleshwa', 'Hurlingham', 'Upper Hill', 'CBD',
    'Eastleigh', 'Kahawa', 'Kasarani', 'Roysambu', 'Ongata Rongai'
  ];
  
  // Generate random busy areas
  const busyAreas: AreaDensity[] = nairobiAreas.map(area => ({
    areaName: area,
    currentOrders: Math.floor(Math.random() * 50),
    historicalDensity: Math.floor(Math.random() * 100) + 50,
    peakHours: Array.from(
      { length: Math.floor(Math.random() * 3) + 1 },
      () => Math.floor(Math.random() * 24)
    ).sort((a, b) => a - b),
    congestionLevel: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)] as 'low' | 'medium' | 'high',
    avgDeliveryTime: Math.floor(Math.random() * 30) + 15,
    completionRate: Math.floor(Math.random() * 20) + 80
  })).sort((a, b) => b.historicalDensity - a.historicalDensity).slice(0, 10);
  
  // Generate driver performance data
  const performanceByDriver: PerformanceByDriver[] = Array.from(
    { length: 10 },
    (_, i) => ({
      driverId: `driver-${(i + 1).toString().padStart(3, '0')}`,
      driverName: ['John Kamau', 'David Ochieng', 'Sarah Wanjiku', 'James Mwangi', 'Grace Njeri', 
                  'Peter Kariuki', 'Mary Akinyi', 'Joseph Ndung\'u', 'Elizabeth Adhiambo', 'Michael Omondi'][i],
      deliveryCount: Math.floor(Math.random() * 100) + 50,
      deliveriesCompleted: Math.floor(Math.random() * 100) + 50,
      onTimeRate: Math.floor(Math.random() * 30) + 70,
      averageRating: parseFloat(((Math.random() * 1.5) + 3.5).toFixed(1)),
      totalDistance: Math.floor(Math.random() * 500) + 100,
      fuelEfficiency: Math.floor(Math.random() * 10) + 15,
      earnings: Math.floor(Math.random() * 5000) + 1000,
      areasServiced: [
        nairobiAreas[Math.floor(Math.random() * nairobiAreas.length)],
        nairobiAreas[Math.floor(Math.random() * nairobiAreas.length)]
      ].filter((v, i, a) => a.indexOf(v) === i)
    })
  ).sort((a, b) => b.deliveriesCompleted - a.deliveriesCompleted);
  
  // Generate revenue trend data for the past 7 days
  const today = new Date();
  const revenueTrend: RevenueTrend[] = Array.from(
    { length: 7 },
    (_, i) => {
      const date = new Date(today);
      date.setDate(date.getDate() - (6 - i));
      const formattedDate = date.toISOString().substring(0, 10);
      const revenue = Math.floor(Math.random() * 50000) + 10000;
      const orderCount = Math.floor(Math.random() * 100) + 20;
      
      return {
        period: formattedDate,
        amount: revenue,
        orderCount: orderCount,
        avgOrderValue: Math.floor(revenue / orderCount),
        growth: parseFloat((Math.random() * 0.2 - 0.05).toFixed(2))
      };
    }
  );
  
  return {
    deliveriesCompleted: Math.floor(Math.random() * 500) + 1000,
    deliveriesInProgress: Math.floor(Math.random() * 100) + 50,
    deliveriesFailed: Math.floor(Math.random() * 50) + 10,
    averageDeliveryTime: Math.floor(Math.random() * 20) + 40,
    onTimeDeliveryRate: Math.floor(Math.random() * 15) + 85,
    activeDrivers: Math.floor(Math.random() * 10) + 15,
    scheduledDeliveries: Math.floor(Math.random() * 50) + 20,
    revenueTrend,
    busyAreas: busyAreas.map(area => ({
      areaName: area.areaName,
      deliveryCount: area.currentOrders
    })),
    performanceByDriver
  };
};

// In a real app, this would fetch from an API
export const fetchAnalytics = async (): Promise<AnalyticsData> => {
  // Simulating API latency
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateMockAnalytics());
    }, 800);
  });
};

// Function to get custom date range analytics
export const fetchAnalyticsForDateRange = async (startDate: string, endDate: string): Promise<AnalyticsData> => {
  // In a real app, this would fetch analytics for the specific date range
  console.log(`Fetching analytics from ${startDate} to ${endDate}`);
  return fetchAnalytics();
};

// Function to get area-specific analytics
export const fetchAreaAnalytics = async (areaName: string): Promise<AreaDensity | null> => {
  // In a real app, this would fetch detailed analytics for a specific area
  const analytics = await fetchAnalytics();
  const area = analytics.busyAreas.find(area => area.areaName === areaName);
  
  if (!area) return null;
  
  // Create a full AreaDensity object
  return {
    areaName: area.areaName,
    currentOrders: area.deliveryCount,
    historicalDensity: Math.floor(Math.random() * 100) + 50,
    peakHours: [8, 12, 17], // Sample peak hours
    congestionLevel: 'medium',
    avgDeliveryTime: Math.floor(Math.random() * 30) + 15,
    completionRate: Math.floor(Math.random() * 20) + 80
  };
};

// Function to get driver-specific analytics
export const fetchDriverAnalytics = async (driverId: string): Promise<PerformanceByDriver | null> => {
  // In a real app, this would fetch detailed analytics for a specific driver
  const analytics = await fetchAnalytics();
  return analytics.performanceByDriver.find(driver => driver.driverId === driverId) || null;
};
