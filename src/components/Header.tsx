import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-navy-900">WonderWand</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-700 hover:text-navy-900 px-3 py-2 text-lg font-medium transition-colors">
                Features
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-navy-900 px-3 py-2 text-lg font-medium transition-colors">
                Benefits
              </a>
              <a href="#team" className="text-gray-700 hover:text-navy-900 px-3 py-2 text-lg font-medium transition-colors">
                Team
              </a>
              <a href="#contact" className="bg-navy-900 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-navy-800 transition-colors">
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-navy-900 p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#features"
                className="block px-3 py-2 text-lg font-medium text-gray-700 hover:text-navy-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#benefits"
                className="block px-3 py-2 text-lg font-medium text-gray-700 hover:text-navy-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#team"
                className="block px-3 py-2 text-lg font-medium text-gray-700 hover:text-navy-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-lg font-medium bg-navy-900 text-white rounded-lg mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;