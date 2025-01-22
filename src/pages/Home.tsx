import React, { useEffect, useRef } from 'react';
import { Network, Server, Shield, Terminal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GitHubProjects from '../components/GitHubProjects';

export default function Home() {
  const featuredProjects = [
    {
      title: "Supervision & Monitoring",
      description: "Mise en place et gestion de solutions de supervision (Zabbix, Grafana)",
      icon: <Terminal className="h-8 w-8 text-blue-500" />,
      tags: ["Zabbix", "Grafana", "Monitoring", "Alerting"]
    },
    {
      title: "Infrastructure & Virtualisation",
      description: "Gestion d'infrastructures virtualisées et solutions de stockage",
      icon: <Server className="h-8 w-8 text-blue-500" />,
      tags: ["VMware", "Hyper-V", "SAN", "NAS"]
    },
    {
      title: "Sécurité & Réseaux",
      description: "Configuration et maintenance des équipements réseau et sécurité",
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      tags: ["Cisco", "PfSense", "VPN", "Firewall"]
    }
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <Network className="h-20 w-20 text-blue-500 mx-auto mb-8 animate-float" />
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 fade-in">
            Administrateur Système & Réseaux
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 fade-in">
            Spécialisé en supervision, virtualisation et sécurité des infrastructures
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in">
            <Link
              to="/skills"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white glass-card hover:bg-blue-600 transition-all duration-300"
            >
              Découvrir mes compétences
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center fade-in">
          Domaines d'Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card rounded-lg p-6 hover-card fade-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 animate-float">{project.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Projects */}
      <GitHubProjects />
    </div>
  );
}