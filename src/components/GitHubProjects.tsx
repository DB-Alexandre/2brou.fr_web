import React, { useEffect, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  topics: string[];
  created_at: string;
  updated_at: string;
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/DB-Alexandre/repos?sort=updated&per_page=3');
        if (!response.ok) throw new Error('Erreur lors de la récupération des projets');
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError('Impossible de charger les projets GitHub');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12 fade-in">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-gray-400 fade-in">
        <Github className="h-12 w-12 mx-auto mb-4 text-blue-500 animate-float" />
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="py-16 glass-card mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <Github className="h-12 w-12 text-blue-500 mx-auto mb-4 animate-float" />
          <h2 className="text-3xl font-bold text-white mb-4">Derniers Projets</h2>
          <p className="text-gray-400">Découvrez mes dernières contributions sur GitHub</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <div 
              key={repo.id} 
              className="glass-card rounded-lg p-6 hover-card fade-in"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{repo.name}</h3>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              
              <p className="text-gray-400 mb-4 h-20 line-clamp-3">
                {repo.description || 'Aucune description disponible'}
              </p>
              
              <div className="space-y-4">
                {repo.language && (
                  <div className="flex items-center space-x-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>
                    <span className="text-sm text-gray-400">{repo.language}</span>
                  </div>
                )}
                
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.slice(0, 3).map((topic, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 glass-card text-base font-medium rounded-md text-white hover:bg-blue-600 transition-all duration-300"
          >
            Voir tous les projets
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}