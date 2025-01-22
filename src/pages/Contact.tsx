import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen gradient-bg text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <Mail className="h-16 w-16 text-blue-500 mx-auto mb-4 animate-float" />
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-gray-400">
            N'hésitez pas à me contacter pour discuter de vos projets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-8 rounded-lg hover-card fade-in">
            <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-slate-800/50 border border-slate-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md bg-slate-800/50 border border-slate-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-slate-800/50 border border-slate-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Envoyer
              </button>
            </form>
          </div>

          <div className="glass-card p-8 rounded-lg hover-card fade-in" style={{ transitionDelay: '200ms' }}>
            <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
            <div className="space-y-6">
              <div className="flex items-start fade-in" style={{ transitionDelay: '300ms' }}>
                <Mail className="h-6 w-6 text-blue-500 mr-4 animate-float" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-400">alexandre@example.com</p>
                </div>
              </div>
              <div className="flex items-start fade-in" style={{ transitionDelay: '400ms' }}>
                <MapPin className="h-6 w-6 text-blue-500 mr-4 animate-float" />
                <div>
                  <h3 className="font-medium">Localisation</h3>
                  <p className="text-gray-400">France</p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-700 fade-in" style={{ transitionDelay: '500ms' }}>
                <h3 className="font-medium mb-4">Réseaux sociaux</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Linkedin className="h-6 w-6 animate-float" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Github className="h-6 w-6 animate-float" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}