import React, { useEffect, useState } from 'react';
import { Github, ExternalLink, Calendar, Star } from 'lucide-react';

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

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/DB-Alexandre/repos?sort=updated&per_page=12');
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
      <div className="min-h-screen gradient-bg text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen gradient-bg text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Github className="h-12 w-12 mx-auto mb-4 text-blue-500 animate-float" />
            <p className="text-gray-400">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 fade-in">
          <Github className="h-16 w-16 text-blue-500 mx-auto mb-4 animate-float" />
          <h1 className="text-4xl font-bold mb-4">Projets Open Source</h1>
          <p className="text-xl text-gray-400">
            Découvrez l'ensemble de mes contributions et projets sur GitHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(repo.updated_at).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
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