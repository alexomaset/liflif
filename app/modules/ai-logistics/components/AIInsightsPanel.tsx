"use client";

import React, { useState } from 'react';
import { AIRecommendation, RecommendationType } from '../types';
import { Brain, AlertCircle, TrendingUp, ArrowRight, Zap, Map, Clock, CalendarClock, Eye, Wrench, Truck } from 'lucide-react';

interface AIInsightsPanelProps {
  recommendations: AIRecommendation[];
  loading: boolean;
}

const AIInsightsPanel: React.FC<AIInsightsPanelProps> = ({
  recommendations,
  loading
}) => {
  const [activeInsight, setActiveInsight] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<RecommendationType | 'all'>('all');

  // Filter recommendations by type
  const filteredRecommendations = recommendations.filter(rec => 
    filterType === 'all' || rec.type === filterType
  );

  // Get icon based on recommendation type
  const getRecommendationIcon = (type: RecommendationType) => {
    switch (type) {
      case 'route_optimization':
        return <Map size={20} className="text-purple-500" />;
      case 'driver_assignment':
        return <Truck size={20} className="text-blue-500" />;
      case 'delivery_schedule':
        return <Clock size={20} className="text-orange-500" />;
      case 'capacity_planning':
        return <TrendingUp size={20} className="text-green-500" />;
      case 'maintenance_alert':
        return <Wrench size={20} className="text-red-500" />;
      case 'congestion_avoidance':
        return <AlertCircle size={20} className="text-yellow-500" />;
      case 'weather_alert':
        return <AlertCircle size={20} className="text-blue-500" />;
      default:
        return <Brain size={20} className="text-gray-500" />;
    }
  };

  // Get header color based on confidence
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'bg-green-100 border-green-200';
    if (confidence >= 0.6) return 'bg-blue-100 border-blue-200';
    if (confidence >= 0.4) return 'bg-yellow-100 border-yellow-200';
    return 'bg-red-100 border-red-200';
  };

  // Format impact score display
  const formatImpact = (impact: number) => {
    const percentage = Math.round(impact * 100);
    return `${percentage > 0 ? '+' : ''}${percentage}%`;
  };

  if (loading) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-blue-800">Loading AI insights...</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Brain size={24} className="text-blue-600 mr-2" />
          <h2 className="text-xl font-bold text-blue-900">AI Insights</h2>
        </div>
        
        <div className="flex">
          <select
            className="appearance-none pl-3 pr-8 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as RecommendationType | 'all')}
          >
            <option value="all">All Insights</option>
            <option value="route_optimization">Route Optimization</option>
            <option value="driver_assignment">Driver Assignment</option>
            <option value="delivery_schedule">Delivery Schedule</option>
            <option value="capacity_planning">Capacity Planning</option>
            <option value="maintenance_alert">Maintenance Alert</option>
            <option value="congestion_avoidance">Congestion Avoidance</option>
            <option value="weather_alert">Weather Alert</option>
          </select>
        </div>
      </div>

      {filteredRecommendations.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
          <Brain size={48} className="mb-4 text-blue-300" />
          <p className="text-lg">No AI insights available</p>
          <p className="text-sm">The AI is currently learning from your operations</p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto pr-2">
          {/* List of AI recommendations */}
          <div className="space-y-4">
            {filteredRecommendations.map((recommendation, index) => {
              const isActive = activeInsight === `${recommendation.type}-${index}`;
              
              return (
                <div
                  key={`${recommendation.type}-${index}`}
                  className={`bg-white rounded-lg shadow-sm border transition-all overflow-hidden ${
                    isActive ? 'ring-2 ring-blue-500 border-transparent' : 'border-gray-100 hover:shadow-md'
                  }`}
                >
                  {/* Recommendation header */}
                  <div 
                    className={`px-4 py-3 cursor-pointer flex items-center justify-between ${
                      getConfidenceColor(recommendation.confidenceScore)
                    }`}
                    onClick={() => setActiveInsight(
                      isActive ? null : `${recommendation.type}-${index}`
                    )}
                  >
                    <div className="flex items-center">
                      {getRecommendationIcon(recommendation.type)}
                      <div className="ml-3">
                        <span className="font-medium">
                          {recommendation.type === 'route_optimization' && 'Route Optimization'}
                          {recommendation.type === 'driver_assignment' && 'Driver Assignment'}
                          {recommendation.type === 'delivery_schedule' && 'Delivery Schedule'}
                          {recommendation.type === 'capacity_planning' && 'Capacity Planning'}
                          {recommendation.type === 'maintenance_alert' && 'Maintenance Alert'}
                          {recommendation.type === 'congestion_avoidance' && 'Congestion Avoidance'}
                          {recommendation.type === 'weather_alert' && 'Weather Alert'}
                        </span>
                        <div className="text-xs text-gray-600 mt-0.5 flex items-center">
                          <span className="flex items-center">
                            <Zap size={12} className="mr-1" />
                            Confidence: {Math.round((recommendation.confidenceScore || 0) * 100)}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight 
                      size={18}
                      className={`text-blue-500 transition-transform ${isActive ? 'rotate-90' : ''}`}
                    />
                  </div>
                  
                  {/* Expanded details */}
                  {isActive && (
                    <div className="p-4 border-t border-gray-100">
                      <h4 className="font-medium text-gray-900 mb-2">AI Recommendation:</h4>
                      <p className="text-gray-700 mb-4 bg-blue-50 p-3 rounded-lg">
                        {recommendation.recommendation}
                      </p>
                      
                      <h4 className="font-medium text-gray-900 mb-2">Reasoning:</h4>
                      <ul className="text-gray-700 mb-4 space-y-2">
                        {recommendation.reasoning.map((reason, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="font-medium text-gray-900 mb-2">Factors Considered:</h4>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {recommendation.appliedFactors.map((factor, i) => (
                          <div key={i} className="bg-gray-50 p-2 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">{factor.name}</span>
                              <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                                factor.impact > 0 ? 'bg-green-100 text-green-700' : 
                                factor.impact < 0 ? 'bg-red-100 text-red-700' : 
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {formatImpact(factor.impact)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex space-x-2 mt-4">
                        <button className="flex-1 flex items-center justify-center text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded">
                          <Zap size={16} className="mr-1" />
                          Apply Recommendation
                        </button>
                        <button className="flex items-center justify-center text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-3 rounded">
                          <Eye size={16} className="mr-1" />
                          View Details
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* AI Analytics Summary */}
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-bold text-blue-800 mb-2">AI Performance Metrics</h3>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div className="bg-white p-3 rounded-lg border border-blue-100">
                <div className="text-xs text-gray-500 mb-1">Recommendation Accuracy</div>
                <div className="text-lg font-bold text-blue-800">
                  {Math.round(Math.random() * 20 + 80)}%
                </div>
                <div className="mt-1 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full" style={{width: `${Math.round(Math.random() * 20 + 80)}%`}}></div>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded-lg border border-blue-100">
                <div className="text-xs text-gray-500 mb-1">Time Prediction Accuracy</div>
                <div className="text-lg font-bold text-blue-800">
                  {Math.round(Math.random() * 15 + 75)}%
                </div>
                <div className="mt-1 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full" style={{width: `${Math.round(Math.random() * 15 + 75)}%`}}></div>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded-lg border border-blue-100">
                <div className="text-xs text-gray-500 mb-1">Route Efficiency Gain</div>
                <div className="text-lg font-bold text-green-600">
                  +{Math.round(Math.random() * 10 + 15)}%
                </div>
                <div className="mt-1 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full" style={{width: `${Math.round(Math.random() * 10 + 15) + 50}%`}}></div>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded-lg border border-blue-100">
                <div className="text-xs text-gray-500 mb-1">AI Learning Progress</div>
                <div className="text-lg font-bold text-orange-600">
                  {Math.round(Math.random() * 30 + 60)}%
                </div>
                <div className="mt-1 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full" style={{width: `${Math.round(Math.random() * 30 + 60)}%`}}></div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-4">
              <button className="flex items-center justify-center text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                <Brain size={16} className="mr-2" />
                View Full AI Analytics Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIInsightsPanel;
