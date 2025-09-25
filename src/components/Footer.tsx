import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">WonderWand</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Empowering the visually impaired with advanced mobility technology 
              that promotes independence, safety, and confidence in every step.
            </p>
            <p className="text-gray-400 text-sm">
              Making the world more accessible, one innovation at a time.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-blue-400" />
                <span className="text-gray-300">+20 11 27197834</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-blue-400" />
                <span className="text-gray-300">wonderwand.contact158@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-blue-400" />
                <span className="text-gray-300">Mansoura City<br />Dakahlia Governorate, Egypt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 WonderWand. All rights reserved. | Privacy Policy | Terms of Service | Accessibility Statement
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;