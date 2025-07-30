import React, { useState, useEffect } from 'react';
import { Play, Pause, Upload, Camera, AlertTriangle, MapPin, Clock, Activity } from 'lucide-react';

const LiveDetection: React.FC = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [detections, setDetections] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalDetections: 0,
    violationsToday: 0,
    accuracy: 95.2
  });

  // Mock detection data
  const mockDetections = [
    {
      id: 1,
      timestamp: new Date().toLocaleTimeString(),
      violation: 'Over Speeding',
      coordinates: 'X: 450, Y: 320',
      confidence: '94.5%',
      vehicleId: 'MH12AB3456',
      location: 'Camera 01 - Highway Entry'
    },
    {
      id: 2,
      timestamp: new Date(Date.now() - 30000).toLocaleTimeString(),
      violation: 'Wrong Lane',
      coordinates: 'X: 680, Y: 240',
      confidence: '87.3%',
      vehicleId: 'DL07CD8901',
      location: 'Camera 02 - Main Junction'
    },
    {
      id: 3,
      timestamp: new Date(Date.now() - 60000).toLocaleTimeString(),
      violation: 'Signal Violation',
      coordinates: 'X: 320, Y: 180',
      confidence: '91.8%',
      vehicleId: 'KA05EF2345',
      location: 'Camera 03 - Traffic Signal'
    }
  ];

  useEffect(() => {
    if (isStreaming) {
      const interval = setInterval(() => {
        const newDetection = {
          id: Date.now(),
          timestamp: new Date().toLocaleTimeString(),
          violation: ['Over Speeding', 'Wrong Lane', 'Signal Violation', 'Rash Driving'][Math.floor(Math.random() * 4)],
          coordinates: `X: ${Math.floor(Math.random() * 800)}, Y: ${Math.floor(Math.random() * 600)}`,
          confidence: `${(85 + Math.random() * 10).toFixed(1)}%`,
          vehicleId: `MH${Math.floor(Math.random() * 99)}AB${Math.floor(Math.random() * 9999)}`,
          location: `Camera ${Math.floor(Math.random() * 5) + 1}`
        };
        
        setDetections(prev => [newDetection, ...prev.slice(0, 9)]);
        setStats(prev => ({
          ...prev,
          totalDetections: prev.totalDetections + 1,
          violationsToday: prev.violationsToday + 1
        }));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isStreaming]);

  useEffect(() => {
    setDetections(mockDetections);
  }, []);

  const handleStreamToggle = () => {
    setIsStreaming(!isStreaming);
  };

  const boundingBoxes = [
    { id: 1, x: 25, y: 30, width: 15, height: 20, label: 'Vehicle - Speeding', confidence: '94.5%' },
    { id: 2, x: 60, y: 45, width: 12, height: 18, label: 'Vehicle - Normal', confidence: '89.2%' },
    { id: 3, x: 40, y: 65, width: 14, height: 22, label: 'Vehicle - Wrong Lane', confidence: '87.3%' }
  ];

  return (
    <div className="pt-20 pb-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Live Detection Viewer</h1>
          <p className="text-gray-400">Real-time AI-powered traffic violation detection</p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
            <div className="flex items-center">
              <div className="bg-blue-500/10 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-white">{stats.totalDetections}</div>
                <div className="text-sm text-gray-400">Total Detections</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
            <div className="flex items-center">
              <div className="bg-red-500/10 p-2 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-400" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-white">{stats.violationsToday}</div>
                <div className="text-sm text-gray-400">Violations Today</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
            <div className="flex items-center">
              <div className="bg-green-500/10 p-2 rounded-lg">
                <Camera className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-white">{stats.accuracy}%</div>
                <div className="text-sm text-gray-400">Detection Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Stream */}
          <div className="lg:col-span-2 space-y-6">
            {/* Controls */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button
                  onClick={handleStreamToggle}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isStreaming
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                >
                  {isStreaming ? (
                    <>
                      <Pause className="h-5 w-5 mr-2" />
                      Stop Stream
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5 mr-2" />
                      Start Stream
                    </>
                  )}
                </button>
                
                <button className="flex items-center px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg font-medium transition-all duration-300 border border-gray-600/50">
                  <Upload className="h-5 w-5 mr-2" />
                  Upload Video
                </button>

                <select className="px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:border-orange-500/50 focus:outline-none transition-colors duration-300">
                  <option>Camera 01 - Highway Entry</option>
                  <option>Camera 02 - Main Junction</option>
                  <option>Camera 03 - Traffic Signal</option>
                  <option>Camera 04 - Exit Ramp</option>
                </select>
              </div>
            </div>

            {/* Video Stream Area */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
              <div className="p-4 border-b border-gray-700/50 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Live Feed</h2>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${isStreaming ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></div>
                  <span className="text-sm text-gray-400">{isStreaming ? 'LIVE' : 'OFFLINE'}</span>
                </div>
              </div>
              
              <div className="relative bg-gray-900 aspect-video">
                {/* Video Background */}
                <img
                  src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop"
                  alt="Traffic Stream"
                  className="w-full h-full object-cover"
                />
                
                {/* Bounding Boxes Overlay */}
                {isStreaming && boundingBoxes.map((box) => (
                  <div
                    key={box.id}
                    className="absolute border-2 border-red-500 bg-red-500/10"
                    style={{
                      left: `${box.x}%`,
                      top: `${box.y}%`,
                      width: `${box.width}%`,
                      height: `${box.height}%`
                    }}
                  >
                    <div className="absolute -top-6 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {box.label} ({box.confidence})
                    </div>
                  </div>
                ))}

                {/* Crosshair Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-green-500/30"></div>
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-green-500/30"></div>
                </div>

                {/* Status Overlay */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="text-green-400 text-sm font-mono">
                    Resolution: 1920x1080 | FPS: 30 | Codec: H.264
                  </div>
                </div>
              </div>
            </div>

            {/* Detection Statistics */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Detection Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">24</div>
                  <div className="text-sm text-gray-400">Over Speeding</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">18</div>
                  <div className="text-sm text-gray-400">Wrong Lane</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">12</div>
                  <div className="text-sm text-gray-400">Signal Jump</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">8</div>
                  <div className="text-sm text-gray-400">Rash Driving</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detection Log Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Detection Log</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Live</span>
                </div>
              </div>
              
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {detections.map((detection, index) => (
                  <div
                    key={detection.id}
                    className={`p-3 rounded-lg border transition-all duration-500 ${
                      index === 0 && isStreaming
                        ? 'bg-red-500/20 border-red-500/50 animate-pulse'
                        : 'bg-gray-700/30 border-gray-600/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="h-4 w-4 text-red-400 flex-shrink-0" />
                        <span className="text-sm font-medium text-white">{detection.violation}</span>
                      </div>
                      <span className="text-xs text-gray-400">{detection.timestamp}</span>
                    </div>
                    
                    <div className="space-y-1 text-xs text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{detection.location}</span>
                      </div>
                      <div>Vehicle: <span className="text-white">{detection.vehicleId}</span></div>
                      <div>Coords: <span className="text-orange-400">{detection.coordinates}</span></div>
                      <div>Confidence: <span className="text-green-400">{detection.confidence}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Camera Status */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Camera Status</h3>
              <div className="space-y-3">
                {['Highway Entry', 'Main Junction', 'Traffic Signal', 'Exit Ramp'].map((camera, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${index < 3 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span className="text-sm text-white">Camera {index + 1}</span>
                    </div>
                    <div className="text-xs text-gray-400">{camera}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Health */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">System Health</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">CPU Usage</span>
                  <span className="text-sm text-white">45%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Memory</span>
                  <span className="text-sm text-white">67%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">GPU Load</span>
                  <span className="text-sm text-white">78%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDetection;