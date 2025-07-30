import React from 'react';
import { Github, Linkedin, Mail, Award, Target, Users, Zap, Eye, Shield, BarChart3, Code, Database, Cpu, Cloud } from 'lucide-react';

const About: React.FC = () => {
  const team = [
  {
    name: 'P. Mohan Reddy',
    role: 'System Architect & API Alchemist',
    expertise: 'Django, REST APIs, Database Sorcery',
    image: 'https://i.postimg.cc/KYT6MwvF/IMG-20250703-175755.jpg',
    linkedin: '#',
    github: 'https://github.com/KidFromKonoha'
  },
  {
    name: 'Soumya Safallya Sahoo',
    role: 'Vision Model Wrangler',
    expertise: 'AI/ML, Deep Learning, Object Detection',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHDIQszDvGgqA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707414238068?e=1756944000&v=beta&t=UYsrdt_cpOB5sOJnMpRjxXxHLt09fM9xyUlQgZzpQzs',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Samikhya Panigrahi',
    role: 'Inference Pipeline Strategist',
    expertise: 'YOLOv7, Semantic Segmentation, MLOps',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEV1ssIES9HFQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711384366109?e=1756944000&v=beta&t=nHU0XdbXZ3nAuyKRuBEIlXmLOPxlNCjMYdTlJVcUZOE',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Mansi Maharana',
    role: 'Frontend Virtuoso',
    expertise: 'HTML, CSS, JS, UI/UX Design (Figma)',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEobBRT4u6D_A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711265574537?e=1756944000&v=beta&t=GUZzJoJowI57Hro0l4KYu1Ib0RH0ZD6xou0C2AuGAWE',
    linkedin: '#',
    github: '#'
  }
];


  const techStack = [
    { name: 'Python', icon: Code, category: 'AI/ML' },
    { name: 'TensorFlow', icon: Cpu, category: 'AI/ML' },
    { name: 'OpenCV', icon: Eye, category: 'Computer Vision' },
    { name: 'React', icon: Code, category: 'Frontend' },
    { name: 'Node.js', icon: Code, category: 'Backend' },
    { name: 'PostgreSQL', icon: Database, category: 'Database' },
    { name: 'AWS', icon: Cloud, category: 'Cloud' },
    { name: 'Docker', icon: Cloud, category: 'DevOps' }
  ];

  const achievements = [
    { icon: Award, title: '95% Detection Accuracy', description: 'Industry-leading AI model performance' },
    { icon: Users, title: '50+ Pilot Deployments', description: 'Successful implementations across India' },
    { icon: Target, title: '40% Reduction in Violations', description: 'Proven impact on road safety' },
    { icon: Zap, title: '2.3s Response Time', description: 'Lightning-fast violation processing' }
  ];

  return (
    <div className="pt-20 pb-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-transparent to-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">VisionTrack</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're pioneering the future of traffic enforcement with AI-powered solutions that make highways safer for everyone
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge We're Solving</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  India witnesses over <span className="text-orange-400 font-semibold">1.5 lakh road accident deaths</span> annually, 
                  with a significant portion occurring on highways due to traffic violations.
                </p>
                <p className="text-lg leading-relaxed">
                  Traditional enforcement methods are limited by human resources, coverage gaps, and response times. 
                  We recognized the need for an intelligent, automated solution that could provide 
                  <span className="text-orange-400 font-semibold"> 24/7 monitoring and instant response</span>.
                </p>
                <p className="text-lg leading-relaxed">
                  Our AI-powered system bridges this gap by delivering real-time detection, automated logging, 
                  and immediate alerts to enforcement agencies, creating a comprehensive safety net for highway traffic.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center">
                  <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 p-3 rounded-lg mb-4 w-fit mx-auto">
                    <achievement.icon className="h-8 w-8 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A diverse group of experts passionate about using technology to save lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 text-center hover:transform hover:scale-105">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-orange-500/20 group-hover:border-orange-500/50 transition-colors duration-300"
                  />
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-orange-400 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.expertise}</p>
                </div>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.github}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with cutting-edge technologies for optimal performance and scalability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 text-center hover:transform hover:scale-105">
                <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 p-3 rounded-lg mb-3 w-fit mx-auto">
                  <tech.icon className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent p-8 rounded-2xl border border-orange-500/20">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-orange-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To revolutionize traffic enforcement through intelligent AI systems that enable proactive safety measures, 
                reduce human error in monitoring, and create safer highways for all travelers across India and beyond.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-8 rounded-2xl border border-blue-500/20">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                A future where every highway is monitored by intelligent systems that prevent accidents before they happen, 
                where traffic violations are detected instantly, and where technology serves as the guardian of road safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make Highways Safer?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join us in our mission to revolutionize traffic safety through AI technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@visiontrack.ai"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-orange-500/25 flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </a>
            <a
              href="https://github.com/visiontrack"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-lg font-semibold text-lg hover:border-orange-400 hover:text-orange-400 transition-all duration-300 flex items-center justify-center"
            >
              <Github className="mr-2 h-5 w-5" />
              View Source
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;