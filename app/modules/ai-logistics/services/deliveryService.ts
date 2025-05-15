import { Delivery, DeliveryStatus } from '../types';

// Helper function to generate random Nairobi locations
const generateRandomNairobiLocation = () => {
  // Nairobi is roughly at -1.2921, 36.8219
  return {
    latitude: -1.2921 + (Math.random() - 0.5) * 0.1, 
    longitude: 36.8219 + (Math.random() - 0.5) * 0.1,
    accuracy: Math.random() * 10 + 5,
    timestamp: Date.now(),
    addressText: generateRandomAddress()
  };
};

// Generate random Nairobi addresses
const generateRandomAddress = () => {
  const areas = [
    'Westlands', 'Kilimani', 'Karen', 'Lavington', 'Gigiri', 
    'Parklands', 'Kileleshwa', 'Hurlingham', 'Upper Hill', 'CBD',
    'Eastleigh', 'Kahawa', 'Kasarani', 'Roysambu', 'Ongata Rongai'
  ];
  
  const buildingTypes = [
    'Apartment', 'Office Block', 'Mall', 'Business Center', 'Complex',
    'Residences', 'Heights', 'Towers', 'Gardens', 'Plaza', 'House'
  ];
  
  const streetTypes = [
    'Road', 'Street', 'Avenue', 'Lane', 'Drive', 'Close', 'Way'
  ];
  
  const buildingNames = [
    'Sunshine', 'Mountain View', 'Riverside', 'Green', 'Blue Sky',
    'Jambo', 'Safari', 'Simba', 'Acacia', 'Kenyatta', 'Moi', 'Uhuru',
    'Mara', 'Tsavo', 'Nairobi', 'Heritage', 'Gateway', 'Diamond'
  ];
  
  const streetNames = [
    'Maasai', 'Serengeti', 'Lion', 'Elephant', 'Giraffe', 'Baobab',
    'Acacia', 'Nairobi', 'Kenya', 'Mombasa', 'Kisumu', 'Victoria',
    'Nyeri', 'Nakuru', 'Samburu', 'Turkana', 'Rift Valley'
  ];
  
  const area = areas[Math.floor(Math.random() * areas.length)];
  const buildingType = buildingTypes[Math.floor(Math.random() * buildingTypes.length)];
  const buildingName = buildingNames[Math.floor(Math.random() * buildingNames.length)];
  const streetType = streetTypes[Math.floor(Math.random() * streetTypes.length)];
  const streetName = streetNames[Math.floor(Math.random() * streetNames.length)];
  
  return `${buildingName} ${buildingType}, ${Math.floor(Math.random() * 100) + 1} ${streetName} ${streetType}, ${area}`;
};

// Generate mock deliveries
const generateMockDeliveries = (): Delivery[] => {
  const deliveryTypes = ['standard', 'express', 'fragile', 'large', 'temperature_controlled'];
  const statuses: DeliveryStatus[] = ['unassigned', 'assigned', 'picked_up', 'in_transit', 'arrived', 'delivered', 'failed', 'cancelled'];
  
  return Array.from({ length: 30 }, (_, i) => {
    const id = `DEL-${(i + 1).toString().padStart(3, '0')}`;
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const isAssigned = status !== 'unassigned' && status !== 'cancelled';
    const isDelivered = status === 'delivered';
    const isFailed = status === 'failed';
    
    // Create a random time in the past (0-48 hours ago)
    const createdAt = new Date(Date.now() - Math.floor(Math.random() * 48 * 60 * 60 * 1000)).toISOString();
    
    // Determine if time-sensitive (30% chance)
    const isTimeSensitive = Math.random() < 0.3;
    
    // For delivered items, create a delivered timestamp after createdAt
    const deliveredAt = isDelivered ? 
      new Date(new Date(createdAt).getTime() + Math.floor(Math.random() * 6 * 60 * 60 * 1000)).toISOString() : 
      undefined;
    
    // For failed deliveries, create a failure reason
    const failureReason = isFailed ? 
      ['Customer not available', 'Wrong address', 'Damaged during transit', 'Weather conditions', 'Vehicle breakdown'][Math.floor(Math.random() * 5)] : 
      undefined;
    
    // Random rating for delivered items (50% chance of rating)
    const customerRating = isDelivered && Math.random() < 0.5 ? 
      Math.floor(Math.random() * 5) + 1 : 
      undefined;
    
    // Random special instructions (30% chance)
    const specialInstructions = Math.random() < 0.3 ? 
      ['Please handle with care', 'Call before delivery', 'Leave at the gate if no one is available', 'Signature required', 'Do not leave with neighbors'][Math.floor(Math.random() * 5)] : 
      undefined;
    
    return {
      id,
      orderId: `ORD-${(Math.floor(Math.random() * 1000)).toString().padStart(3, '0')}`,
      type: deliveryTypes[Math.floor(Math.random() * deliveryTypes.length)],
      status,
      pickupLocation: generateRandomNairobiLocation(),
      deliveryLocation: generateRandomNairobiLocation(),
      driverId: isAssigned ? `driver-${(Math.floor(Math.random() * 25) + 1).toString().padStart(3, '0')}` : undefined,
      createdAt,
      scheduledPickup: isTimeSensitive ? {
        start: new Date(new Date(createdAt).getTime() + Math.floor(Math.random() * 2 * 60 * 60 * 1000)).toISOString(),
        end: new Date(new Date(createdAt).getTime() + Math.floor(Math.random() * 4 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000)).toISOString()
      } : undefined,
      scheduledDelivery: isTimeSensitive ? {
        start: new Date(new Date(createdAt).getTime() + Math.floor(Math.random() * 6 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000)).toISOString(),
        end: new Date(new Date(createdAt).getTime() + Math.floor(Math.random() * 8 * 60 * 60 * 1000 + 10 * 60 * 60 * 1000)).toISOString()
      } : undefined,
      customerId: `CUST-${(Math.floor(Math.random() * 100) + 1).toString().padStart(3, '0')}`,
      items: Array.from(
        { length: Math.floor(Math.random() * 5) + 1 }, 
        (_, j) => ({
          id: `ITEM-${i}-${j}`,
          name: ['Laptop', 'Phone', 'Tablet', 'Book', 'Clothing', 'Furniture', 'Food', 'Electronics', 'Cosmetics', 'Medicine'][Math.floor(Math.random() * 10)],
          quantity: Math.floor(Math.random() * 5) + 1,
          weight: Math.floor(Math.random() * 10) + 0.5,
          dimensions: {
            length: Math.floor(Math.random() * 50) + 5,
            width: Math.floor(Math.random() * 30) + 5,
            height: Math.floor(Math.random() * 20) + 5
          },
          fragile: Math.random() < 0.2,
          temperature: Math.random() < 0.1 ? {
            min: 2,
            max: 8
          } : undefined
        })
      ),
      deliveryFee: Math.floor(Math.random() * 1000) + 200,
      deliveredAt,
      customerRating,
      specialInstructions,
      failureReason,
      estimatedArrival: status === 'in_transit' ? 
        new Date(Date.now() + Math.floor(Math.random() * 2 * 60 * 60 * 1000)).toISOString() : 
        undefined,
      currentLocation: (status === 'in_transit' || status === 'assigned' || status === 'picked_up') ? 
        {
          latitude: -1.2921 + (Math.random() - 0.5) * 0.1,
          longitude: 36.8219 + (Math.random() - 0.5) * 0.1,
          accuracy: Math.random() * 10 + 5,
          timestamp: Date.now(),
          addressText: undefined
        } : 
        undefined
    };
  });
};

// In a real app, this would fetch from an API
export const fetchDeliveries = async (): Promise<Delivery[]> => {
  // Simulating API latency
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateMockDeliveries());
    }, 800);
  });
};

// Function to get delivery by ID
export const getDeliveryById = async (id: string): Promise<Delivery | null> => {
  const deliveries = await fetchDeliveries();
  return deliveries.find(delivery => delivery.id === id) || null;
};

// Function to update delivery status
export const updateDeliveryStatus = async (deliveryId: string, status: DeliveryStatus): Promise<boolean> => {
  // In a real app, this would make an API call
  console.log(`Updated delivery ${deliveryId} status to ${status}`);
  return true;
};

// Function to assign driver to delivery
export const assignDriver = async (deliveryId: string, driverId: string): Promise<boolean> => {
  // In a real app, this would make an API call
  console.log(`Assigned driver ${driverId} to delivery ${deliveryId}`);
  return true;
};
