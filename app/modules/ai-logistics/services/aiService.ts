import { AIRecommendation, RecommendationType } from '../types';

// Generate mock AI recommendations for demonstration
const generateMockAIRecommendations = (): AIRecommendation[] => {
  const recommendationTypes: RecommendationType[] = [
    'route_optimization', 
    'driver_assignment', 
    'delivery_schedule', 
    'capacity_planning',
    'maintenance_alert',
    'congestion_avoidance',
    'weather_alert'
  ];
  
  // Nairobi areas for location-based recommendations
  const nairobiAreas = [
    'Westlands', 'Kilimani', 'Karen', 'Lavington', 'Gigiri', 
    'Parklands', 'Kileleshwa', 'Hurlingham', 'Upper Hill', 'CBD',
    'Eastleigh', 'Kahawa', 'Kasarani', 'Roysambu', 'Ongata Rongai'
  ];
  
  // Generate a list of mock AI recommendations
  return Array.from({ length: 15 }, (_, i) => {
    const type = recommendationTypes[Math.floor(Math.random() * recommendationTypes.length)];
    const createdAt = new Date(Date.now() - Math.floor(Math.random() * 24 * 60 * 60 * 1000)).toISOString();
    const confidenceScore = parseFloat((Math.random() * 0.4 + 0.6).toFixed(2)); // 60-100% confidence
    
    // Generate recommendation content based on type
    let title = '';
    let description = '';
    let actionableInsight = '';
    const impactedItems: string[] = [];
    let estimatedImpact = {};
    let relatedArea: string | undefined;
    let recommendation = '';
    let reasoning: string[] = [];
    
    switch (type) {
      case 'route_optimization':
        relatedArea = nairobiAreas[Math.floor(Math.random() * nairobiAreas.length)];
        title = `Optimize delivery routes in ${relatedArea}`;
        description = `Based on traffic patterns and historical data, we've identified a more efficient route for deliveries in ${relatedArea}.`;
        actionableInsight = `Redirect drivers to use Ngong Road instead of Waiyaki Way between 4PM-6PM to avoid congestion.`;
        
        // Add a few random delivery IDs as impacted items
        for (let j = 0; j < Math.floor(Math.random() * 5) + 3; j++) {
          impactedItems.push(`DEL-${Math.floor(Math.random() * 1000)}`);
        }
        
        estimatedImpact = {
          timeReduction: Math.floor(Math.random() * 15) + 5,
          fuelSaving: Math.floor(Math.random() * 10) + 5,
          co2Reduction: Math.floor(Math.random() * 15) + 5
        };
        recommendation = 'Optimize delivery routes';
        reasoning = ['Traffic patterns', 'Historical data'];
        break;
        
      case 'driver_assignment':
        title = `Optimal driver assignments for express deliveries`;
        description = `Based on driver expertise, current location and delivery priorities, we recommend reassigning the following deliveries.`;
        actionableInsight = `Reassign drivers to prioritize express deliveries and drivers with area expertise.`;
        
        // Add a few random driver IDs as impacted items
        for (let j = 0; j < Math.floor(Math.random() * 3) + 2; j++) {
          impactedItems.push(`driver-${Math.floor(Math.random() * 100)}`);
        }
        
        estimatedImpact = {
          timeReduction: Math.floor(Math.random() * 10) + 10,
          customerSatisfaction: Math.floor(Math.random() * 15) + 5
        };
        recommendation = 'Reassign drivers';
        reasoning = ['Driver expertise', 'Current location', 'Delivery priorities'];
        break;
        
      case 'delivery_schedule':
        title = 'Delivery schedule optimization';
        description = 'Based on patterns of customer availability and traffic conditions, we recommend adjusting delivery times.';
        actionableInsight = 'Schedule residential deliveries between 5PM-8PM and business deliveries between 10AM-2PM.';
        
        // Add a few random delivery IDs as impacted items
        for (let j = 0; j < Math.floor(Math.random() * 8) + 5; j++) {
          impactedItems.push(`DEL-${Math.floor(Math.random() * 1000)}`);
        }
        
        estimatedImpact = {
          failedDeliveryReduction: Math.floor(Math.random() * 20) + 10,
          timeReduction: Math.floor(Math.random() * 10) + 5
        };
        recommendation = 'Adjust delivery times';
        reasoning = ['Customer availability', 'Traffic conditions'];
        break;
        
      case 'capacity_planning':
        relatedArea = nairobiAreas[Math.floor(Math.random() * nairobiAreas.length)];
        title = `Additional capacity needed in ${relatedArea}`;
        description = `Order volume in ${relatedArea} is projected to increase by 30% in the next 7 days based on historical patterns and upcoming events.`;
        actionableInsight = `Schedule 3 additional drivers for ${relatedArea} starting tomorrow.`;
        
        estimatedImpact = {
          demandIncrease: Math.floor(Math.random() * 20) + 20,
          capacityNeeded: Math.floor(Math.random() * 4) + 2
        };
        recommendation = 'Add capacity';
        reasoning = ['Historical patterns', 'Upcoming events'];
        break;
        
      case 'maintenance_alert':
        title = 'Preventive vehicle maintenance recommended';
        description = 'Based on vehicle telemetry data, we predict maintenance issues for the following vehicles within 7 days.';
        actionableInsight = 'Schedule maintenance for these vehicles to prevent breakdowns during delivery.';
        
        // Add a few random vehicle IDs as impacted items
        for (let j = 0; j < Math.floor(Math.random() * 3) + 1; j++) {
          impactedItems.push(`vehicle-${Math.floor(Math.random() * 100)}`);
        }
        
        estimatedImpact = {
          breakdownPrevention: Math.floor(Math.random() * 3) + 1,
          costSaving: Math.floor(Math.random() * 1000) + 500
        };
        recommendation = 'Schedule maintenance';
        reasoning = ['Vehicle telemetry data'];
        break;
        
      case 'congestion_avoidance':
        relatedArea = nairobiAreas[Math.floor(Math.random() * nairobiAreas.length)];
        title = `Traffic congestion alert for ${relatedArea}`;
        description = `Unusual traffic congestion detected in ${relatedArea} due to ongoing construction work.`;
        actionableInsight = `Reroute deliveries from ${relatedArea} via alternative routes for the next 48 hours.`;
        
        // Add a few random delivery IDs as impacted items
        for (let j = 0; j < Math.floor(Math.random() * 5) + 2; j++) {
          impactedItems.push(`DEL-${Math.floor(Math.random() * 1000)}`);
        }
        
        estimatedImpact = {
          delayPrevention: Math.floor(Math.random() * 20) + 15,
          fuelSaving: Math.floor(Math.random() * 10) + 5
        };
        recommendation = 'Reroute deliveries';
        reasoning = ['Traffic congestion', 'Construction work'];
        break;
        
      case 'weather_alert':
        relatedArea = nairobiAreas[Math.floor(Math.random() * nairobiAreas.length)];
        title = `Heavy rainfall expected in ${relatedArea}`;
        description = `Weather forecast indicates heavy rainfall in ${relatedArea} between 2PM-5PM today which may affect delivery times.`;
        actionableInsight = `Prioritize deliveries in ${relatedArea} to be completed before 2PM or rescheduled for tomorrow.`;
        
        // Add a few random delivery IDs as impacted items
        for (let j = 0; j < Math.floor(Math.random() * 4) + 2; j++) {
          impactedItems.push(`DEL-${Math.floor(Math.random() * 1000)}`);
        }
        
        estimatedImpact = {
          riskReduction: Math.floor(Math.random() * 15) + 10,
          customerSatisfaction: Math.floor(Math.random() * 10) + 5
        };
        recommendation = 'Prioritize deliveries';
        reasoning = ['Weather forecast'];
        break;
    }
    
    return {
      id: `rec-${i}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      title,
      description,
      actionableInsight,
      createdAt,
      impactedItems,
      estimatedImpact,
      confidenceScore,
      relatedArea,
      recommendation,
      reasoning,
      appliedFactors: [
        { name: 'Data accuracy', impact: Math.random() * 0.3 + 0.7 },
        { name: 'Historical patterns', impact: Math.random() * 0.5 + 0.5 }
      ],
      alternatives: [],
      applied: Math.random() > 0.7 // 30% chance of being already applied
    };
  });
};

// In a real app, this would fetch from an AI service
export const fetchAIRecommendations = async (): Promise<AIRecommendation[]> => {
  // Simulating API latency
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateMockAIRecommendations());
    }, 800);
  });
};

// Function to get recommendation by ID
export const getRecommendationById = async (id: string): Promise<AIRecommendation | null> => {
  const recommendations = await fetchAIRecommendations();
  return recommendations.find(rec => rec.id === id) || null;
};

// Function to apply a recommendation
export const applyRecommendation = async (id: string): Promise<boolean> => {
  // In a real app, this would make an API call to apply the recommendation
  console.log(`Applied recommendation ${id}`);
  return true;
};

// Function to dismiss a recommendation
export const dismissRecommendation = async (id: string): Promise<boolean> => {
  // In a real app, this would make an API call to dismiss the recommendation
  console.log(`Dismissed recommendation ${id}`);
  return true;
};

// Function to get recommendations by type
export const getRecommendationsByType = async (type: RecommendationType): Promise<AIRecommendation[]> => {
  const recommendations = await fetchAIRecommendations();
  return recommendations.filter(rec => rec.type === type);
};
