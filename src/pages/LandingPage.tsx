import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Shield, Zap, AlertTriangle, BarChart3, Users, CheckCircle } from 'lucide-react';

const LandingPage: React.FC = () => {
  const stats = [
    { number: '1.5L+', label: 'Annual Road Deaths in India' },
    { number: '85%', label: 'Enforcement Gap' },
    { number: '24/7', label: 'Continuous Monitoring' },
    { number: '95%', label: 'Detection Accuracy' },
  ];

  const features = [
    {
      icon: Eye,
      title: 'AI-Powered Detection',
      description: 'Advanced computer vision algorithms detect violations in real-time with 95% accuracy.',
    },
    {
      icon: Zap,
      title: 'Instant Alerts',
      description: 'Immediate notifications to enforcement agencies for rapid response and action.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights and trends to optimize traffic enforcement strategies.',
    },
    {
      icon: Shield,
      title: 'Automated Enforcement',
      description: 'Streamlined violation processing and evidence management system.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Detect',
      description: 'AI cameras continuously monitor traffic and identify violations in real-time',
      icon: Eye,
    },
    {
      number: '02',
      title: 'Log',
      description: 'Violations are automatically logged with timestamp, location, and evidence',
      icon: AlertTriangle,
    },
    {
      number: '03',
      title: 'Enforce',
      description: 'Enforcement agencies receive instant alerts for immediate action',
      icon: Shield,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-orange-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium backdrop-blur-sm">
            <Zap className="h-4 w-4 mr-2" />
            AI-Powered Traffic Enforcement
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              VisionTrack
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-gray-300">
              Smart Highway Safety
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Real-time AI enforcement for safer highways
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/dashboard"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-orange-500/25 flex items-center"
            >
              View Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/about"
              className="group px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-lg font-semibold text-lg hover:border-orange-400 hover:text-orange-400 transition-all duration-300 flex items-center"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Overview */}
      <section className="py-20 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Challenge</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              India faces critical road safety challenges with inadequate enforcement infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 p-3 rounded-lg mb-4 w-fit">
                  <feature.icon className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Simplified 3-step process for automated traffic enforcement
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center group">
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 group-hover:shadow-2xl group-hover:shadow-orange-500/10">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 p-4 rounded-lg mb-6 w-fit mx-auto">
                      <step.icon className="h-8 w-8 text-orange-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Traffic Enforcement?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the pilot program and experience the future of highway safety
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-orange-500/25 flex items-center justify-center"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Dashboard
            </Link>
            <Link
              to="/live"
              className="group px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-lg font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Pilot Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;