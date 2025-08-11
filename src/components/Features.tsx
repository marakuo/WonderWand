import React from 'react';
import { 
  Eye, 
  Shield, 
  Navigation, 
  Zap, 
  Battery, 
  Volume2,
  Droplets,
  Settings,
  MapPin
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Eye size={32} />,
      title: "Multi-Directional Detection",
      description: "Advanced sensors and cameras detect obstacles from all angles, providing real-time alerts for safe movement in any environment.",
      color: "bg-blue-500"
    },
    {
      icon: <Droplets size={32} />,
      title: "Water Hazard Detection",
      description: "Specialized sensors identify water hazards and wet surfaces to prevent slips and accidents during navigation.",
      color: "bg-cyan-500"
    },
    {
      icon: <Navigation size={32} />,
      title: "GPS Navigation",
      description: "Integrated GPS system provides accurate route guidance and location tracking for confident outdoor navigation.",
      color: "bg-green-500"
    },
    {
      icon: <Zap size={32} />,
      title: "SOS Emergency Alert",
      description: "One-touch emergency signal sends pre-defined alerts to caregivers and emergency contacts when help is needed.",
      color: "bg-red-500"
    },
    {
      icon: <Settings size={32} />,
      title: "Flexible Mode Switching",
      description: "Seamlessly switch between indoor and outdoor modes for optimized obstacle detection and GPS performance.",
      color: "bg-purple-500"
    },
    {
      icon: <Battery size={32} />,
      title: "Smart Battery Monitoring",
      description: "Audio notifications alert users when charging is required, ensuring uninterrupted functionality throughout the day.",
      color: "bg-orange-500"
    },
    {
      icon: <Volume2 size={32} />,
      title: "Remote Sound Alert",
      description: "Activate a sound alert remotely to easily locate your smart stick when misplaced around the home or office.",
      color: "bg-pink-500"
    },
    {
      icon: <Shield size={32} />,
      title: "Ergonomic Design",
      description: "Lightweight and comfortable design ensures ease of use during extended periods, reducing fatigue and strain.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Advanced Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            WonderWond Smart Stick combines cutting-edge technology with user-friendly design 
            to provide comprehensive mobility assistance for visually impaired individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${feature.color} rounded-full p-4 w-16 h-16 flex items-center justify-center text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;