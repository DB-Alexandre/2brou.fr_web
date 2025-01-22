import React from 'react';
import { Network, Home, User, Terminal, Mail, Menu, X, Github } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', name: 'Accueil', icon: <Home className="w-5 h-5" /> },
    { path: '/about', name: 'À propos', icon: <User className="w-5 h-5" /> },
    { path: '/skills', name: 'Compétences', icon: <Terminal className="w-5 h-5" /> },
    { path: '/projects', name: 'Projets', icon: <Github className="w-5 h-5" /> },
    { path: '/contact', name: 'Contact', icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-slate-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Network className="h-8 w-8 text-blue-500" />
              <span className="font-bold text-xl">Alexandre</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === link.path
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-300 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-2 ${
                  location.pathname === link.path
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:bg-blue-600 hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}