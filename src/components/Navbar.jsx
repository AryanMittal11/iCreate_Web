import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              iCreate Club
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="nav-link">Home</a>
              <a href="#events" className="nav-link">Events</a>
              <a href="#team" className="nav-link">Team</a>
              <a href="#contact" className="nav-link">Contact</a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="mobile-nav-link">Home</a>
            <a href="#events" className="mobile-nav-link">Events</a>
            <a href="#team" className="mobile-nav-link">Team</a>
            <a href="#contact" className="mobile-nav-link">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}