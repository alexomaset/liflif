import { Order, OrderStatus, OrderPriority, PaymentStatus, OrderItem } from '../types';

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

// List of common product items for Nairobi deliveries
const productItems: {name: string, avgWeight: number, fragile: boolean}[] = [
  { name: 'Laptop', avgWeight: 2.5, fragile: true },
  { name: 'Smartphone', avgWeight: 0.3, fragile: true },
  { name: 'Groceries (Mixed)', avgWeight: 5, fragile: false },
  { name: 'Clothing Package', avgWeight: 1.5, fragile: false },
  { name: 'Books', avgWeight: 3, fragile: false },
  { name: 'Furniture (Small)', avgWeight: 15, fragile: true },
  { name: 'Electronics', avgWeight: 4, fragile: true },
  { name: 'Medicine Package', avgWeight: 0.5, fragile: false },
  { name: 'Food Delivery', avgWeight: 2, fragile: false },
  { name: 'Office Supplies', avgWeight: 3, fragile: false },
  { name: 'Beauty Products', avgWeight: 1, fragile: true },
  { name: 'Home Appliance', avgWeight: 10, fragile: true },
  { name: 'Fresh Produce', avgWeight: 4, fragile: true },
  { name: 'Documents', avgWeight: 0.2, fragile: false },
  { name: 'Gift Package', avgWeight: 2, fragile: true }
];

// Generate random order items
const generateRandomOrderItems = (count: number): OrderItem[] => {
  return Array.from({ length: count }, () => {
    const product = productItems[Math.floor(Math.random() * productItems.length)];
    const quantity = Math.floor(Math.random() * 3) + 1;
    
    return {
      id: `item-${Math.floor(Math.random() * 10000)}`,
      name: product.name,
      quantity: quantity,
      weight: +(product.avgWeight * quantity).toFixed(1),
      fragile: product.fragile
    };
  });
};

// Generate mock orders
const generateMockOrders = (): Order[] => {
  const statuses: OrderStatus[] = ['pending', 'confirmed', 'preparing', 'ready_for_pickup', 'out_for_delivery', 'delivered', 'cancelled', 'returned'];
  const priorities: OrderPriority[] = ['express', 'standard', 'scheduled'];
  const paymentStatuses: PaymentStatus[] = ['paid', 'pending', 'failed'];
  
  return Array.from({ length: 40 }, (_, i) => {
    // Create a unique ID with format ORD-XXXXX
    const id = `ORD-${(10000 + i).toString()}`;
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const priority = priorities[Math.floor(Math.random() * priorities.length)];
    const paymentStatus = paymentStatuses[Math.floor(Math.random() * paymentStatuses.length)];
    
    // Create a random time in the past (0-72 hours ago)
    const createdAt = new Date(Date.now() - Math.floor(Math.random() * 72 * 60 * 60 * 1000)).toISOString();
    
    // For priority of 'scheduled', add scheduled delivery time
    const scheduledDelivery = priority === 'scheduled' ? {
      start: new Date(new Date(createdAt).getTime() + Math.floor(Math.random() * 48 * 60 * 60 * 1000)).toISOString(),
      end: new Date(new Date(createdAt).getTime() + Math.floor(Math.random() * 52 * 60 * 60 * 1000)).toISOString()
    } : undefined;
    
    // Generate between 1 and 5 random items
    const items = generateRandomOrderItems(Math.floor(Math.random() * 5) + 1);
    
    // Calculate total weight of all items
    const totalWeight = items.reduce((sum, item) => sum + item.weight * item.quantity, 0);
    
    // Random special instructions (30% chance)
    const specialInstructions = Math.random() < 0.3 ? 
      ['Please handle with care', 'Call before delivery', 'Leave at the gate if no one is available', 
      'Signature required', 'Do not leave with neighbors', 'Deliver during business hours only',
      'Contact recipient 10 minutes before arrival', 'Notify if delayed', 'Fragile items inside',
      'Deliver to back entrance'][Math.floor(Math.random() * 10)] : 
      undefined;
    
    return {
      id,
      customerId: `CUST-${Math.floor(Math.random() * 1000) + 1}`,
      status,
      priority,
      createdAt,
      items,
      deliveryLocation: generateRandomNairobiLocation(),
      deliveryFee: Math.floor(Math.random() * 800) + 200,
      totalWeight,
      paymentStatus,
      scheduledDelivery,
      specialInstructions
    };
  });
};

// In a real app, this would fetch from an API
export const fetchOrders = async (): Promise<Order[]> => {
  // Simulating API latency
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateMockOrders());
    }, 800);
  });
};

// Function to get order by ID
export const getOrderById = async (id: string): Promise<Order | null> => {
  const orders = await fetchOrders();
  return orders.find(order => order.id === id) || null;
};

// Function to update order status
export const updateOrderStatus = async (orderId: string, status: OrderStatus): Promise<boolean> => {
  // In a real app, this would make an API call
  console.log(`Updated order ${orderId} status to ${status}`);
  return true;
};

// Function to create new order
export const createOrder = async (order: Omit<Order, 'id' | 'createdAt'>): Promise<Order> => {
  // In a real app, this would make an API call
  const newOrder: Order = {
    ...order,
    id: `ORD-${Math.floor(Math.random() * 100000)}`,
    createdAt: new Date().toISOString()
  };
  
  console.log('Created new order:', newOrder);
  return newOrder;
};
