import { useState, useEffect } from 'react';
import { Driver } from '../types';
import { fetchDrivers } from '../services/driverService';

export const useDrivers = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDrivers = async () => {
      try {
        setLoading(true);
        const data = await fetchDrivers();
        setDrivers(data);
        setError(null);
      } catch (err) {
        setError('Failed to load drivers data');
        console.error('Error loading drivers:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDrivers();
    
    // Set up a mock interval for real-time updates
    // In a real implementation, this would use WebSockets or polling
    const interval = setInterval(() => {
      // Update driver locations randomly for demonstration purposes
      setDrivers(current => current.map(driver => {
        if (driver.currentLocation) {
          return {
            ...driver,
            currentLocation: {
              ...driver.currentLocation,
              latitude: driver.currentLocation.latitude + (Math.random() - 0.5) * 0.001,
              longitude: driver.currentLocation.longitude + (Math.random() - 0.5) * 0.001,
            }
          };
        }
        return driver;
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { drivers, loading, error, setDrivers };
};

export default useDrivers;
