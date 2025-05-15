import { useState, useEffect } from 'react';
import { AnalyticsData } from '../types';
import { fetchAnalytics } from '../services/analyticsService';

export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    deliveriesCompleted: 0,
    deliveriesInProgress: 0,
    deliveriesFailed: 0,
    averageDeliveryTime: 0,
    onTimeDeliveryRate: 0,
    activeDrivers: 0,
    scheduledDeliveries: 0,
    revenueTrend: [],
    busyAreas: [],
    performanceByDriver: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAnalytics = async () => {
      try {
        setLoading(true);
        const data = await fetchAnalytics();
        setAnalytics(data);
        setError(null);
      } catch (err) {
        setError('Failed to load analytics data');
        console.error('Error loading analytics:', err);
      } finally {
        setLoading(false);
      }
    };

    loadAnalytics();
    
    // Auto-refresh analytics every 30 seconds
    const interval = setInterval(() => {
      loadAnalytics();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return { analytics, loading, error };
};

export default useAnalytics;
