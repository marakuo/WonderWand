import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const Goals: React.FC = () => {
  const goals = [
    {
      icon: <Target size={40} />,
      title: "Safe & Reliable Solutions",
      description: "Provide a mobility aid that users can depend on every day, with consistent performance and safety features that prevent accidents and enhance navigation confidence.",
      color: "text-blue-600"
    },
    {
      icon: <Users size={40} />,
      title: "Increased Independence",
      description: "Empower visually impaired individuals to navigate their world with greater confidence, reducing reliance on others while maintaining safety and security.",
      color: "text-green-600"
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Accessible Technology",
      description: "Integrate advanced technology in a way that is simple, intuitive, and accessible for all users, regardless of their technical background or experience level.",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Mission & Goals
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            WonderWand is committed to creating mobility solutions that transform lives, 
            promote independence, and build confidence in every step forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {goals.map((goal, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <div className={goal.color}>
                  {goal.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {goal.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;