import React from 'react';
import { Github, Linkedin, Mail, Shield, Eye } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Shield className="h-8 w-8 text-orange-500" />
                <Eye className="h-4 w-4 text-blue-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold text-white">VisionTrack</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI-powered traffic enforcement system making highways safer through real-time violation detection and automated enforcement.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@visiontrack.ai"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/dashboard" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/live" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Live Detection
                </a>
              </li>
              <li>
                <a href="/admin" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Admin Panel
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@visiontrack.ai</li>
              <li>+91 98765 43210</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 VisionTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;