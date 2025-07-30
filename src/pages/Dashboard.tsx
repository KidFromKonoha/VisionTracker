import React, { useState } from 'react';
import { Search, Filter, Calendar, MapPin, Clock, AlertTriangle, CheckCircle, XCircle, Eye, TrendingUp, Users, Camera } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('today');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for violations
  const violations = [
    {
      id: 'VT001',
      vehicleId: 'MH12AB3456',
      type: 'Over Speeding',
      time: '2025-01-14 14:30:25',
      location: 'Mumbai-Pune Highway, KM 45',
      status: 'pending',
      thumbnail: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop',
      severity: 'high'
    },
    {
      id: 'VT002',
      vehicleId: 'DL07CD8901',
      type: 'Wrong Lane',
      time: '2025-01-14 13:45:12',
      location: 'Delhi-Gurgaon Expressway, KM 12',
      status: 'resolved',
      thumbnail: 'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop',
      severity: 'medium'
    },
    {
      id: 'VT003',
      vehicleId: 'KA05EF2345',
      type: 'Signal Violation',
      time: '2025-01-14 12:15:45',
      location: 'Bangalore ORR, Electronic City',
      status: 'flagged',
      thumbnail: 'https://images.pexels.com/photos/163016/car-vehicle-drive-travel-163016.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop',
      severity: 'high'
    },
    {
      id: 'VT004',
      vehicleId: 'GJ01GH6789',
      type: 'Rash Driving',
      time: '2025-01-14 11:30:18',
      location: 'Ahmedabad-Vadodara Highway, KM 28',
      status: 'pending',
      thumbnail: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop',
      severity: 'high'
    },
    {
      id: 'VT005',
      vehicleId: 'TN09IJ1234',
      type: 'No Helmet',
      time: '2025-01-14 10:45:33',
      location: 'Chennai OMR, Sholinganallur',
      status: 'resolved',
      thumbnail: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop',
      severity: 'low'
    }
  ];

  const stats = [
    { title: 'Total Violations', value: '1,247', change: '+12%', icon: AlertTriangle, color: 'red' },
    { title: 'Resolved Today', value: '89', change: '+8%', icon: CheckCircle, color: 'green' },
    { title: 'Active Cameras', value: '156', change: '+3', icon: Camera, color: 'blue' },
    { title: 'Response Time', value: '2.3m', change: '-15%', icon: Clock, color: 'orange' }
  ];

  const violationTypes = [
    { type: 'Over Speeding', count: 45, percentage: 36 },
    { type: 'Wrong Lane', count: 28, percentage: 22 },
    { type: 'Signal Violation', count: 22, percentage: 18 },
    { type: 'Rash Driving', count: 18, percentage: 14 },
    { type: 'No Helmet', count: 12, percentage: 10 }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      case 'flagged':
        return <AlertTriangle className="h-5 w-5 text-red-400" />;
      default:
        return <Clock className="h-5 w-5 text-yellow-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'flagged':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      default:
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      default:
        return 'bg-green-500';
    }
  };

  const filteredViolations = violations.filter(violation => {
    const matchesFilter = selectedFilter === 'all' || violation.status === selectedFilter;
    const matchesSearch = violation.vehicleId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         violation.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-20 pb-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Violations Dashboard</h1>
          <p className="text-gray-400">Monitor and manage traffic violations in real-time</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-${stat.color}-500/10`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-400`} />
                </div>
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-400' : 
                  stat.change.startsWith('-') ? 'text-red-400' : 'text-gray-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filters */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by vehicle ID or violation type..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-orange-500/50 focus:outline-none transition-colors duration-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Status Filter */}
                <select
                  className="px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-orange-500/50 focus:outline-none transition-colors duration-300"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="flagged">Flagged</option>
                  <option value="resolved">Resolved</option>
                </select>

                {/* Date Filter */}
                <select
                  className="px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-orange-500/50 focus:outline-none transition-colors duration-300"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                >
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
              </div>
            </div>

            {/* Violations Table */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
              <div className="p-6 border-b border-gray-700/50">
                <h2 className="text-xl font-semibold text-white">Recent Violations</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700/30">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Violation</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Vehicle</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    {filteredViolations.map((violation) => (
                      <tr key={violation.id} className="hover:bg-gray-700/30 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img
                              src={violation.thumbnail}
                              alt="Violation"
                              className="h-12 w-16 object-cover rounded-lg mr-3"
                            />
                            <div>
                              <div className="text-sm font-medium text-white">{violation.type}</div>
                              <div className="text-sm text-gray-400">{violation.id}</div>
                              <div className={`w-2 h-2 rounded-full ${getSeverityColor(violation.severity)} mt-1`}></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-white">{violation.vehicleId}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">{violation.time}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-300 flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                            {violation.location}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(violation.status)}`}>
                            {getStatusIcon(violation.status)}
                            <span className="ml-1 capitalize">{violation.status}</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-orange-400 hover:text-orange-300 transition-colors duration-200">
                            <Eye className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Live Map View</h3>
              <div className="aspect-square bg-gray-700/50 rounded-lg flex items-center justify-center border border-gray-600/50">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Interactive map view</p>
                  <p className="text-gray-500 text-xs">Coming soon</p>
                </div>
              </div>
            </div>

            {/* Violation Types Chart */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Violation Categories</h3>
              <div className="space-y-3">
                {violationTypes.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{item.type}</span>
                        <span className="text-gray-400">{item.count}</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Trends */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Daily Trends</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-300">Peak Hours</div>
                    <div className="text-lg font-semibold text-white">2:00 PM - 4:00 PM</div>
                  </div>
                  <TrendingUp className="h-6 w-6 text-orange-400" />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-300">Most Active Route</div>
                    <div className="text-lg font-semibold text-white">Mumbai-Pune Highway</div>
                  </div>
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;