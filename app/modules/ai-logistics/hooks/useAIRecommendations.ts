import { useState, useEffect } from 'react';
import { AIRecommendation } from '../types';
import { fetchAIRecommendations } from '../services/aiService';

export const useAIRecommendations = () => {
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRecommendations = async () => {
      try {
        setLoading(true);
        const data = await fetchAIRecommendations();
        setRecommendations(data);
        setError(null);
      } catch (err) {
        setError('Failed to load AI recommendations');
        console.error('Error loading AI recommendations:', err);
      } finally {
        setLoading(false);
      }
    };

    loadRecommendations();
    
    // New AI recommendations might come in periodically
    const interval = setInterval(() => {
      loadRecommendations();
    }, 60000); // Check for new AI insights every minute

    return () => clearInterval(interval);
  }, []);

  return { recommendations, loading, error };
};

export default useAIRecommendations;
