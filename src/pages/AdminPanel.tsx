import React, { useState } from 'react';
import { Plus, Edit, Trash2, Camera, Car, Users, Settings, Save, AlertTriangle, CheckCircle } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cameras');
  const [showAddForm, setShowAddForm] = useState(false);

  const cameras = [
    { id: 1, name: 'Highway Entry Cam', location: 'Mumbai-Pune Highway KM 45', status: 'active', ip: '192.168.1.101' },
    { id: 2, name: 'Main Junction Cam', location: 'Delhi-Gurgaon Expressway KM 12', status: 'active', ip: '192.168.1.102' },
    { id: 3, name: 'Traffic Signal Cam', location: 'Bangalore ORR Electronic City', status: 'inactive', ip: '192.168.1.103' },
    { id: 4, name: 'Exit Ramp Cam', location: 'Chennai OMR Sholinganallur', status: 'maintenance', ip: '192.168.1.104' }
  ];

  const vehicles = [
    { id: 1, plateNumber: 'MH12AB3456', type: 'Car', owner: 'Rahul Sharma', violations: 3, lastSeen: '2025-01-14 14:30:25' },
    { id: 2, plateNumber: 'DL07CD8901', type: 'Truck', owner: 'Logistics Corp', violations: 1, lastSeen: '2025-01-14 13:45:12' },
    { id: 3, plateNumber: 'KA05EF2345', type: 'Bike', owner: 'Priya Patel', violations: 2, lastSeen: '2025-01-14 12:15:45' },
    { id: 4, plateNumber: 'GJ01GH6789', type: 'Car', owner: 'Tech Solutions', violations: 0, lastSeen: '2025-01-14 11:30:18' }
  ];

  const users = [
    { id: 1, name: 'Admin User', email: 'admin@visiontrack.ai', role: 'Super Admin', status: 'active', lastLogin: '2025-01-14 15:30:00' },
    { id: 2, name: 'John Doe', email: 'john@visiontrack.ai', role: 'Operator', status: 'active', lastLogin: '2025-01-14 14:20:00' },
    { id: 3, name: 'Jane Smith', email: 'jane@visiontrack.ai', role: 'Viewer', status: 'inactive', lastLogin: '2025-01-13 18:45:00' },
    { id: 4, name: 'Mike Johnson', email: 'mike@visiontrack.ai', role: 'Operator', status: 'active', lastLogin: '2025-01-14 13:15:00' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'inactive':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'maintenance':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4" />;
      case 'inactive':
        return <AlertTriangle className="h-4 w-4" />;
      case 'maintenance':
        return <Settings className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const tabs = [
    { id: 'cameras', label: 'Cameras', icon: Camera },
    { id: 'vehicles', label: 'Vehicles', icon: Car },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const CameraForm = () => (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
      <h3 className="text-xl font-semibold text-white mb-4">Add New Camera</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Camera Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-orange-500/50 focus:outline-none transition-colors duration-300"
            placeholder="Enter camera name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">IP Address</label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-orange-500/50 focus:outline-none transition-colors duration-300"
            placeholder="192.168.1.xxx"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-orange-500/50 focus:outline-none transition-colors duration-300"
            placeholder="Enter camera location"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Resolution</label>
          <select className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-orange-500/50 focus:outline-none transition-colors duration-300">
            <option>1920x1080 (HD)</option>
            <option>1280x720 (HD)</option>
            <option>3840x2160 (4K)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Frame Rate</label>
          <select className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-orange-500/50 focus:outline-none transition-colors duration-300">
            <option>30 FPS</option>
            <option>60 FPS</option>
            <option>120 FPS</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center">
          <Save className="h-4 w-4 mr-2" />
          Save Camera
        </button>
        <button
          onClick={() => setShowAddForm(false)}
          className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg font-medium hover:border-gray-500 hover:text-white transition-all duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'cameras':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Camera Management</h2>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Camera
              </button>
            </div>

            {showAddForm && <CameraForm />}

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700/30">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Camera</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">IP Address</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    {cameras.map((camera) => (
                      <tr key={camera.id} className="hover:bg-gray-700/30 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Camera className="h-8 w-8 text-orange-400 mr-3" />
                            <div className="text-sm font-medium text-white">{camera.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{camera.location}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 font-mono">{camera.ip}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(camera.status)}`}>
                            {getStatusIcon(camera.status)}
                            <span className="ml-1 capitalize">{camera.status}</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-400 hover:text-red-300 transition-colors duration-200">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'vehicles':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Vehicle Registry</h2>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                Register Vehicle
              </button>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700/30">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Vehicle</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Owner</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Violations</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Seen</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    {vehicles.map((vehicle) => (
                      <tr key={vehicle.id} className="hover:bg-gray-700/30 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Car className="h-8 w-8 text-blue-400 mr-3" />
                            <div>
                              <div className="text-sm font-medium text-white">{vehicle.plateNumber}</div>
                              <div className="text-sm text-gray-400">{vehicle.type}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{vehicle.owner}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            vehicle.violations > 0 ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'
                          }`}>
                            {vehicle.violations}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{vehicle.lastSeen}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-400 hover:text-red-300 transition-colors duration-200">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">User Management</h2>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                Add User
              </button>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700/30">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Login</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-700/30 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-medium text-sm mr-3">
                              {user.name.charAt(0)}
                            </div>
                            <div className="text-sm font-medium text-white">{user.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(user.status)}`}>
                            {getStatusIcon(user.status)}
                            <span className="ml-1 capitalize">{user.status}</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.lastLogin}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-400 hover:text-red-300 transition-colors duration-200">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">System Settings</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* AI Model Configuration */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">AI Model Configuration</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Detection Confidence Threshold</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="85"
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>0%</span>
                      <span>85%</span>
                      <span>100%</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Frame Processing Rate</label>
                    <select className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-orange-500/50 focus:outline-none transition-colors duration-300">
                      <option>Every Frame (30 FPS)</option>
                      <option>Every 2nd Frame (15 FPS)</option>
                      <option>Every 3rd Frame (10 FPS)</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input type="checkbox" id="nightMode" className="rounded border-gray-600 text-orange-500 focus:ring-orange-500" defaultChecked />
                    <label htmlFor="nightMode" className="text-sm text-gray-300">Enable Night Vision Mode</label>
                  </div>
                </div>
              </div>

              {/* Alert Configuration */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Alert Configuration</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Over Speeding Alerts</span>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Wrong Lane Alerts</span>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Signal Violation Alerts</span>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Alert Recipients</label>
                    <input
                      type="email"
                      placeholder="admin@visiontrack.ai"
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-orange-500/50 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* System Performance */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">System Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">CPU Usage</span>
                      <span className="text-white">45%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full transition-all duration-500" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Memory Usage</span>
                      <span className="text-white">67%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full transition-all duration-500" style={{ width: '67%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">GPU Load</span>
                      <span className="text-white">78%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full transition-all duration-500" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Database Settings */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Database Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Data Retention Period</label>
                    <select className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-orange-500/50 focus:outline-none transition-colors duration-300">
                      <option>30 Days</option>
                      <option>90 Days</option>
                      <option>1 Year</option>
                      <option>Indefinite</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Backup Frequency</label>
                    <select className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-orange-500/50 focus:outline-none transition-colors duration-300">
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>

                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                    Backup Now
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center">
                <Save className="h-5 w-5 mr-2" />
                Save All Settings
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-20 pb-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Panel</h1>
          <p className="text-gray-400">Manage cameras, users, and system configuration</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-700/50">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-orange-400 text-orange-400'
                      : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AdminPanel;