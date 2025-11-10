'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Repo {
  id: number;
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
}

export default function Portfolio() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('/api/github/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError('Failed to load portfolio projects. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio projects and see examples of my work. Each project demonstrates my skills in web development, design, and problem-solving.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0B1F3A]"></div>
              <p className="mt-4 text-gray-600">Loading projects...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-[#0B1F3A] text-white px-6 py-2 rounded-lg hover:bg-[#0B1F3A]/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && repos.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600">No projects found.</p>
            </div>
          )}

          {!loading && !error && repos.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {repos.map((repo) => (
                  <div
                    key={repo.id}
                    className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#F4C542] transition-all duration-200 transform hover:-translate-y-2 shadow-md hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-[#0B1F3A] flex-1">
                        {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                      </h3>
                      {repo.language && (
                        <span className="bg-[#F4C542] text-[#0B1F3A] px-2 py-1 rounded text-xs font-semibold">
                          {repo.language}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 mb-4 min-h-[60px]">
                      {repo.description || 'No description available'}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v1a1 1 0 11-2 0v-1A5 5 0 0011 9H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {repo.forks}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      {repo.homepage ? (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#0B1F3A] text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-[#0B1F3A]/90 transition-colors duration-200"
                        >
                          View Project
                        </a>
                      ) : (
                        <span className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg text-center font-semibold cursor-not-allowed">
                          View Project
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-gray-400 mt-4">
                      Updated {formatDate(repo.updatedAt)}
                    </p>
                  </div>
                ))}
              </div>

            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#F4C542] to-[#f5d066]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
            Like What You See?
          </h2>
          <p className="text-xl text-[#0B1F3A]/80 mb-8">
            Let's work together to build something amazing for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0B1F3A] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#0B1F3A]/90 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

