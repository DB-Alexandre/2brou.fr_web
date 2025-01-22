import React from 'react';
import { Network, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="glass-card text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 fade-in">
            <div className="flex items-center space-x-2">
              <Network className="h-6 w-6 text-blue-500 animate-float" />
              <span className="font-bold text-xl">Alexandre</span>
            </div>
            <p className="text-gray-400">
              Administrateur Système & Réseaux passionné par la technologie et l'innovation.
            </p>
          </div>
          
          <div className="fade-in" style={{ transitionDelay: '100ms' }}>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Compétences
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-500 transition-colors flex items-center">
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="fade-in" style={{ transitionDelay: '200ms' }}>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 group">
                <Mail className="h-4 w-4 text-blue-500 group-hover:scale-110 transition-transform" />
                <a href="mailto:alexandre@example.com" className="text-gray-400 hover:text-blue-500 transition-colors">
                  alexandre@example.com
                </a>
              </li>
              <li className="flex items-center space-x-2 group">
                <Github className="h-4 w-4 text-blue-500 group-hover:scale-110 transition-transform" />
                <a href="https://github.com/DB-Alexandre" className="text-gray-400 hover:text-blue-500 transition-colors">
                  GitHub
                </a>
              </li>
              <li className="flex items-center space-x-2 group">
                <Linkedin className="h-4 w-4 text-blue-500 group-hover:scale-110 transition-transform" />
                <a href="https://linkedin.com/in/votre-profil" className="text-gray-400 hover:text-blue-500 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          
          <div className="fade-in" style={{ transitionDelay: '300ms' }}>
            <h3 className="font-semibold text-lg mb-4">Technologies</h3>
            <ul className="space-y-2 text-gray-400">
              {["Linux / Windows Server", "AWS / Azure", "Docker / Kubernetes", "Sécurité & Réseaux"].map((tech, index) => (
                <li 
                  key={index}
                  className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="h-1.5 w-1.5 bg-blue-500 rounded-full"></span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
          <p className="hover:text-blue-500 transition-colors">
            &copy; {new Date().getFullYear()} Alexandre. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}