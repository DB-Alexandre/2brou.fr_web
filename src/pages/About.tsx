import React from 'react';
import { Terminal, Server, Shield } from 'lucide-react';

export default function About() {
  const projects = [
    {
      title: "Infrastructure Cloud",
      description: "Conception et déploiement d'infrastructures cloud hautement disponibles",
      details: [
        "Migration de services vers AWS et Azure",
        "Mise en place de solutions de conteneurisation",
        "Automatisation des déploiements avec Terraform",
        "Monitoring et alerting avec Prometheus et Grafana"
      ],
      icon: <Server className="h-12 w-12 text-blue-500" />
    },
    {
      title: "Sécurité & Réseaux",
      description: "Implémentation de solutions de sécurité réseau robustes",
      details: [
        "Configuration de pare-feu et VPN",
        "Mise en place de systèmes de détection d'intrusion",
        "Sécurisation des accès et authentification",
        "Audits de sécurité réguliers"
      ],
      icon: <Shield className="h-12 w-12 text-blue-500" />
    },
    {
      title: "Automatisation",
      description: "Développement de solutions d'automatisation sur mesure",
      details: [
        "Scripts de déploiement automatisé",
        "Intégration continue avec Jenkins",
        "Gestion de configuration avec Ansible",
        "Automatisation des tâches système"
      ],
      icon: <Terminal className="h-12 w-12 text-blue-500" />
    }
  ];

  return (
    <div className="min-h-screen gradient-bg text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <Terminal className="h-16 w-16 text-blue-500 mx-auto mb-4 animate-float" />
          <h1 className="text-4xl font-bold mb-4">Projets & Réalisations</h1>
          <p className="text-xl text-gray-400">
            Découvrez mes principales réalisations en infrastructure et automatisation
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card rounded-lg p-8 hover-card fade-in"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="bg-slate-900/50 p-4 rounded-lg animate-float">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-400 text-lg mb-6">{project.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.details.map((detail, detailIndex) => (
                      <div 
                        key={detailIndex} 
                        className="flex items-start"
                        style={{ transitionDelay: `${detailIndex * 100}ms` }}
                      >
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}