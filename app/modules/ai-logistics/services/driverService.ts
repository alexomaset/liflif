import { Driver, DriverStatus, VehicleType } from '../types';

// Mock data for demonstration purposes
const mockVehicleTypes: VehicleType[] = [
  {
    id: 'vt-1',
    name: 'Motorcycle',
    capacity: 20,
    maxItems: 5,
    fuelEfficiency: 35,
    dimensions: {
      length: 1.5,
      width: 0.5,
      height: 0.5
    }
  },
  {
    id: 'vt-2',
    name: 'Small Van',
    capacity: 200,
    maxItems: 20,
    fuelEfficiency: 15,
    dimensions: {
      length: 3,
      width: 1.5,
      height: 1.8
    }
  },
  {
    id: 'vt-3',
    name: 'Truck',
    capacity: 1000,
    maxItems: 50,
    fuelEfficiency: 8,
    dimensions: {
      length: 5,
      width: 2.2,
      height: 2.5
    }
  }
];

// Nairobi neighborhoods for demonstration
const nairobiAreas = [
  'Westlands', 'Kilimani', 'Karen', 'Lavington', 'Gigiri', 
  'Parklands', 'Kileleshwa', 'Hurlingham', 'Upper Hill', 'CBD',
  'Eastleigh', 'Kahawa', 'Kasarani', 'Roysambu', 'Ongata Rongai',
  'Kitengela', 'Kangemi', 'Dagoretti', 'South B', 'South C',
  'Embakasi', 'Donholm', 'Buruburu', 'Umoja', 'Kayole'
];

// Generate a list of random driver data for demonstration
const generateMockDrivers = (): Driver[] => {
  return Array.from({ length: 25 }, (_, i) => {
    const id = `driver-${(i + 1).toString().padStart(3, '0')}`;
    const vehicleType = mockVehicleTypes[Math.floor(Math.random() * mockVehicleTypes.length)];
    const status: DriverStatus = ['available', 'busy', 'offline', 'on_break', 'en_route_to_pickup', 'en_route_to_delivery'][Math.floor(Math.random() * 6)] as DriverStatus;
    
    // Generate random expertise in 1-3 areas
    const numAreas = Math.floor(Math.random() * 3) + 1;
    const areaExpertise = Array.from(
      { length: numAreas }, 
      () => nairobiAreas[Math.floor(Math.random() * nairobiAreas.length)]
    ).filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates
    
    return {
      id,
      name: ['John Kamau', 'David Ochieng', 'Sarah Wanjiku', 'James Mwangi', 'Grace Njeri', 'Peter Kariuki', 
             'Mary Akinyi', 'Joseph Ndung\'u', 'Elizabeth Adhiambo', 'Michael Omondi', 'Nancy Waithera', 
             'Daniel Kimani', 'Alice Muthoni', 'Robert Wafula', 'Margaret Auma'][Math.floor(Math.random() * 15)],
      phone: `+254${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
      vehicleType,
      vehicleId: `${vehicleType.name.charAt(0)}${Math.floor(Math.random() * 10000)}`,
      status,
      currentLocation: status !== 'offline' ? {
        latitude: -1.2921 + (Math.random() - 0.5) * 0.1, // Random location around Nairobi
        longitude: 36.8219 + (Math.random() - 0.5) * 0.1, // Random location around Nairobi
        accuracy: Math.random() * 10 + 5,
        timestamp: Date.now(),
        areaName: nairobiAreas[Math.floor(Math.random() * nairobiAreas.length)]
      } : undefined,
      rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3.0 and 5.0
      completedDeliveries: Math.floor(Math.random() * 500), // Random number of completed deliveries
      areaExpertise,
      availableHours: [
        {
          start: new Date(new Date().setHours(8, 0, 0, 0)).toISOString(),
          end: new Date(new Date().setHours(17, 0, 0, 0)).toISOString(),
          flexible: Math.random() > 0.7 // 30% chance of flexible hours
        }
      ],
      imageUrl: i < 5 ? `/images/drivers/driver-${i+1}.jpg` : undefined // Sample image URLs for first 5 drivers
    };
  });
};

// In a real app, this would fetch from an API
export const fetchDrivers = async (): Promise<Driver[]> => {
  // Simulating API latency
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateMockDrivers());
    }, 800);
  });
};

// Function to get driver by ID
export const getDriverById = async (id: string): Promise<Driver | null> => {
  const drivers = await fetchDrivers();
  return drivers.find(driver => driver.id === id) || null;
};

// Function to update driver status
export const updateDriverStatus = async (driverId: string, status: DriverStatus): Promise<boolean> => {
  // In a real app, this would make an API call
  console.log(`Updated driver ${driverId} status to ${status}`);
  return true;
};

// Function to assign driver to delivery
export const assignDriverToDelivery = async (driverId: string, deliveryId: string): Promise<boolean> => {
  // In a real app, this would make an API call
  console.log(`Assigned driver ${driverId} to delivery ${deliveryId}`);
  return true;
};
