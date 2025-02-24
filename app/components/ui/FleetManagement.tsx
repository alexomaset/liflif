import React, { useState } from 'react';
import { Truck, BarChart3, Calendar, Fuel, Map, Users, AlertCircle, Settings, Search, Bell, ChevronDown, MessageSquare, Eye, Filter, Download, RefreshCw } from 'lucide-react';

const FleetManagementDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample fleet data
  const fleetData = [
    { id: 'TRK-001', driver: 'Mike Johnson', status: 'On Route', location: 'Downtown District', fuelLevel: 68, lastMaintenance: '2025-01-15', healthScore: 92, alerts: 0 },
    { id: 'TRK-002', driver: 'Sarah Miller', status: 'Delivering', location: 'Northern Suburbs', fuelLevel: 45, lastMaintenance: '2025-02-01', healthScore: 87, alerts: 1 },
    { id: 'TRK-003', driver: 'Robert Chen', status: 'Returning', location: 'Western Highway', fuelLevel: 23, lastMaintenance: '2025-01-10', healthScore: 79, alerts: 2 },
    { id: 'TRK-004', driver: 'Jessica Park', status: 'Idle', location: 'Warehouse A', fuelLevel: 98, lastMaintenance: '2025-02-10', healthScore: 95, alerts: 0 },
    { id: 'TRK-005', driver: 'David Wilson', status: 'Maintenance', location: 'Service Center', fuelLevel: 54, lastMaintenance: '2025-01-05', healthScore: 65, alerts: 3 },
  ];

  // Helper function for status colors
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'On Route': return 'bg-blue-500';
      case 'Delivering': return 'bg-green-500';
      case 'Returning': return 'bg-purple-500';
      case 'Idle': return 'bg-gray-500';
      case 'Maintenance': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };
  
  // Helper for fuel level color
  const getFuelColor = (level: number) => {
    if (level > 60) return 'text-green-500';
    if (level > 30) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  // Helper for health score color
  const getHealthColor = (score: number) => {
    if (score > 85) return 'text-green-500';
    if (score > 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Top Navigation */}
      <div className="bg-white border-b">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded">
              <Truck size={24} />
            </div>
            <h1 className="text-xl font-bold text-gray-800">FleetMaster Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search vehicles, drivers..." 
                className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            
            <div className="relative">
              <Bell className="text-gray-600 cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>
            
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-medium">
                AO
              </div>
              <span className="text-sm font-medium">Admin Operator</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r h-screen sticky top-0 pt-6">
          <ul className="space-y-1 px-3">
            <li>
              <button 
                onClick={() => setActiveTab('overview')}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left ${activeTab === 'overview' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <BarChart3 size={20} />
                <span className="font-medium">Overview</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('vehicles')}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left ${activeTab === 'vehicles' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <Truck size={20} />
                <span className="font-medium">Vehicles</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('drivers')}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left ${activeTab === 'drivers' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <Users size={20} />
                <span className="font-medium">Drivers</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('maintenance')}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left ${activeTab === 'maintenance' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <Calendar size={20} />
                <span className="font-medium">Maintenance</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('fuel')}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left ${activeTab === 'fuel' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <Fuel size={20} />
                <span className="font-medium">Fuel Tracking</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('routes')}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left ${activeTab === 'routes' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <Map size={20} />
                <span className="font-medium">Route History</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('alerts')}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left ${activeTab === 'alerts' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <AlertCircle size={20} />
                <span className="font-medium">Alerts</span>
              </button>
            </li>
            <li className="pt-4 mt-4 border-t">
              <button 
                onClick={() => setActiveTab('settings')}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-100`}
              >
                <Settings size={20} />
                <span className="font-medium">Settings</span>
              </button>
            </li>
          </ul>
        </div>
        
        {/* Main Dashboard Area */}
        <div className="flex-1 px-8 py-6">
          {activeTab === 'overview' && (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Fleet Overview</h2>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-gray-600 hover:bg-gray-50">
                    <RefreshCw size={16} />
                    <span>Refresh</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-gray-600 hover:bg-gray-50">
                    <Filter size={16} />
                    <span>Filter</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-gray-600 hover:bg-gray-50">
                    <Download size={16} />
                    <span>Export</span>
                  </button>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Truck className="text-blue-600" size={24} />
                    </div>
                    <span className="text-green-500 text-sm font-medium">+2.5%</span>
                  </div>
                  <h3 className="text-gray-500 text-sm mb-1">Active Vehicles</h3>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold">18</span>
                    <span className="text-sm text-gray-500">/ 20 total</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Users className="text-green-600" size={24} />
                    </div>
                    <span className="text-red-500 text-sm font-medium">-1.2%</span>
                  </div>
                  <h3 className="text-gray-500 text-sm mb-1">Drivers On Duty</h3>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold">15</span>
                    <span className="text-sm text-gray-500">/ 22 total</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Calendar className="text-purple-600" size={24} />
                    </div>
                    <span className="text-yellow-500 text-sm font-medium">0%</span>
                  </div>
                  <h3 className="text-gray-500 text-sm mb-1">Scheduled Maintenance</h3>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold">3</span>
                    <span className="text-sm text-gray-500">next 7 days</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <AlertCircle className="text-red-600" size={24} />
                    </div>
                    <span className="text-red-500 text-sm font-medium">+3</span>
                  </div>
                  <h3 className="text-gray-500 text-sm mb-1">Active Alerts</h3>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold">6</span>
                    <span className="text-sm text-gray-500">critical: 2</span>
                  </div>
                </div>
              </div>

              {/* Live Map Section */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Live Fleet Tracking</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm text-gray-600">On Route (8)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-gray-600">Delivering (5)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-sm text-gray-600">Returning (3)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                      <span className="text-sm text-gray-600">Idle (2)</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-64 bg-blue-50 rounded-lg overflow-hidden">
                  {/* Map Visualization Placeholder */}
                  <div className="absolute inset-0 bg-[url('/api/placeholder/800/500')] bg-cover opacity-50"></div>
                  
                  {/* Sample Map Elements */}
                  <div className="absolute left-1/4 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-3 h-3 bg-blue-500 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
                    </div>
                  </div>
                  
                  <div className="absolute left-2/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="w-8 h-8 bg-green-500 rounded-full opacity-20 animate-ping"></div>
                    </div>
                  </div>
                  
                  <div className="absolute right-1/4 bottom-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-3 h-3 bg-purple-500 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full opacity-20 animate-ping"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vehicle List Table */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Fleet Status</h3>
                  <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
                    <Eye size={16} />
                    <span>View All Vehicles</span>
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle ID</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fuel Level</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Health Score</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alerts</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {fleetData.map((vehicle) => (
                        <tr key={vehicle.id} className="hover:bg-gray-50">
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vehicle.id}</td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{vehicle.driver}</td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(vehicle.status)} text-white`}>
                              {vehicle.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{vehicle.location}</td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full ${vehicle.fuelLevel > 60 ? 'bg-green-500' : vehicle.fuelLevel > 30 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                  style={{ width: `${vehicle.fuelLevel}%` }}
                                ></div>
                              </div>
                              <span className={`text-xs font-medium ${getFuelColor(vehicle.fuelLevel)}`}>{vehicle.fuelLevel}%</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className={`font-medium ${getHealthColor(vehicle.healthScore)}`}>{vehicle.healthScore}%</span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            {vehicle.alerts > 0 ? (
                              <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 text-red-800 text-xs font-medium rounded-full">{vehicle.alerts}</span>
                            ) : (
                              <span className="text-green-500 text-sm">None</span>
                            )}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                            <div className="flex items-center gap-2">
                              <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                                <Eye size={18} />
                              </button>
                              <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                                <MessageSquare size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Analytics Highlights */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-bold text-lg mb-4">Fuel Consumption Trends</h3>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm text-gray-500">Avg. Daily Consumption</span>
                      <div className="text-lg font-bold">52.3 Gallons</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Monthly Comparison</span>
                      <div className="text-lg font-bold text-green-600">-8.2%</div>
                    </div>
                  </div>
                  
                  {/* Simple Fuel Graph */}
                  <div className="h-40 mt-4 flex items-end space-x-2">
                    {[35, 42, 38, 50, 38, 42, 45, 50, 46, 38, 42, 48, 50, 44].map((value, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div 
                          className={`w-full ${i % 2 === 0 ? 'bg-blue-500' : 'bg-blue-400'} rounded-t`}
                          style={{ height: `${value * 1.6}px` }}
                        ></div>
                        {i % 2 === 0 && <span className="text-xs text-gray-500 mt-1">{i+1}</span>}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-bold text-lg mb-4">Maintenance Calendar</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center border-l-4 border-orange-500 pl-3 py-2">
                      <div className="flex-1">
                        <h4 className="font-semibold">TRK-005: Full Service</h4>
                        <p className="text-sm text-gray-600">Oil change, brake check, filter replacement</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-orange-600">Tomorrow</span>
                        <p className="text-xs text-gray-500">8:00 AM - Service Center A</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-l-4 border-yellow-500 pl-3 py-2">
                      <div className="flex-1">
                        <h4 className="font-semibold">TRK-002: Tire Rotation</h4>
                        <p className="text-sm text-gray-600">Rotation and pressure check</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-yellow-600">Feb 21, 2025</span>
                        <p className="text-xs text-gray-500">10:30 AM - Mobile Service</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-l-4 border-green-500 pl-3 py-2">
                      <div className="flex-1">
                        <h4 className="font-semibold">TRK-001: Routine Inspection</h4>
                        <p className="text-sm text-gray-600">Safety and compliance check</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-green-600">Feb 25, 2025</span>
                        <p className="text-xs text-gray-500">2:15 PM - Warehouse A</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 py-2 text-blue-600 text-sm font-medium border border-blue-100 rounded-lg hover:bg-blue-50">
                    View Full Calendar
                  </button>
                </div>
              </div>
            </>
          )}
          
          {activeTab !== 'overview' && (
            <div className="flex flex-col items-center justify-center h-96">
              <div className="bg-blue-100 text-blue-800 p-4 rounded-full mb-4">
                <Settings size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Dashboard</h3>
              <p className="text-gray-600 max-w-md text-center">This section would contain detailed information about {activeTab}, including relevant analytics, management tools, and historical data.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FleetManagementDashboard;