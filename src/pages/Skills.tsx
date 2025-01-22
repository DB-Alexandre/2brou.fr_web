import React from 'react';
import { Terminal, Server, Shield, Cloud } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      category: "Systèmes & Virtualisation",
      items: ["Windows Server", "Linux (Debian/Ubuntu)", "VMware", "Hyper-V", "Active Directory"],
      icon: <Server className="h-6 w-6 text-blue-500" />,
      progress: 90
    },
    {
      category: "Réseaux & Sécurité",
      items: ["Cisco", "PfSense", "VPN", "Pare-feu", "Routage/Switching"],
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      progress: 85
    },
    {
      category: "Supervision",
      items: ["Zabbix", "Grafana", "PRTG", "Centreon", "Nagios"],
      icon: <Terminal className="h-6 w-6 text-blue-500" />,
      progress: 90
    },
    {
      category: "Services & Applications",
      items: ["Exchange", "SQL Server", "Apache/Nginx", "Docker", "Veeam"],
      icon: <Cloud className="h-6 w-6 text-blue-500" />,
      progress: 85
    }
  ];

  return (
    <div className="min-h-screen gradient-bg text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <Terminal className="h-16 w-16 text-blue-500 mx-auto mb-4 animate-float" />
          <h1 className="text-4xl font-bold mb-4">Compétences Techniques</h1>
          <p className="text-xl text-gray-400">
            Expertise en administration système, réseaux et supervision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-lg hover-card fade-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="animate-float">{skill.icon}</div>
                <h2 className="text-xl font-bold ml-2">{skill.category}</h2>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Niveau de maîtrise</span>
                  <span className="text-blue-500">{skill.progress}%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2">
                  <div
                    className="bg-blue-500 rounded-full h-2 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>

              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className="flex items-center text-gray-300 fade-in"
                    style={{ transitionDelay: `${itemIndex * 100}ms` }}
                  >
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}