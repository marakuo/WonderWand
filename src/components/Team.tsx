import React from 'react';
import { User, Code, Briefcase, Cpu } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Hossam Elshafei",
      role: "Software Engineer",
      department: "Software Development",
      icon: <Code size={32} />,
      color: "bg-blue-500",
      description: "Leading the development of intelligent software systems and user interfaces for the WonderWand Smart Stick."
    },
    {
      name: "Aml Salah",
      role: "Business Strategist",
      department: "Business Development",
      icon: <Briefcase size={32} />,
      color: "bg-green-500",
      description: "Driving business strategy, market analysis, and partnerships to bring WonderWand to those who need it most."
    },
    {
      name: "Malak Abdelhamed",
      role: "Hardware Engineer",
      department: "Hardware Development",
      icon: <Cpu size={32} />,
      color: "bg-purple-500",
      description: "Designing and optimizing the advanced sensor systems and hardware components that power WonderWand."
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The passionate innovators behind WonderWand, dedicated to creating 
            technology that transforms lives and empowers independence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`${member.color} rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center text-white`}>
                {member.icon}
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                {member.name}
              </h3>
              <p className="text-lg font-semibold text-gray-700 mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
                {member.department}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Connect?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Have questions about WonderWand or want to learn more about our mission? 
              Our team is here to help.
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <User size={20} className="text-blue-200" />
              <span>Contact us at:</span>
              <a 
                href="mailto:wonderwand.contact158@gmail.com" 
                className="font-semibold hover:text-blue-200 transition-colors underline"
              >
                wonderwand.contact158@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;