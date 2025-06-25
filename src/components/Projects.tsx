
import { useState } from 'react';
import { ExternalLink, Github, Code, Database, Server } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'APIverse',
      description: 'MongoDB, ExpressJs, ReactJs, NodeJs, Tailwind CSS - Engineered a user-friendly interface enabling seamless registration and API key generation.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
      category: 'fullstack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'Auth-App',
      description: 'Next.Js, MongoDB, Shaden - Implemented secure token generation and validation flows for email verification and password resets.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'MongoDB', 'Shadcn', 'JWT'],
      category: 'fullstack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Crypto Galaxy',
      description: 'ReactJs, API, MaterialUI - All-in-one destination for navigating the world of cryptocurrency with real-time access to multiple cryptocurrency coins.',
      image: 'https://images.unsplash.com/photo-1518544866727-e2bb9e00b1b3?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Material-UI', 'Cryptocurrency API'],
      category: 'frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 4,
      title: 'Admin Dashboard',
      description: 'Dynamic admin dashboard with real-time analytics and content management for seamless monitoring of 1000+ posts daily.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'Charts.js'],
      category: 'fullstack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: 'RESTful API Service',
      description: 'Scalable backend service with optimized platform performance handling over 10,000 API calls daily.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Redis'],
      category: 'backend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with smooth animations and modern design using latest web technologies.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'fullstack', label: 'Full Stack', icon: Server },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend', icon: Database }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-red-200 max-w-3xl mx-auto">
            A showcase of my latest work in full-stack development and competitive programming solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-red-100">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group glass-dark rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-red-400/20 hover:border-red-400/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-red-900/80 rounded-full hover:bg-red-700 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-red-900/80 rounded-full hover:bg-red-700 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors text-red-100">
                    {project.title}
                  </h3>
                  <p className="text-red-200 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-red-800/50 text-red-200 rounded-full text-xs border border-red-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-red-600 text-white neon-red'
                  : 'glass-dark text-red-200 hover:bg-red-700/30 hover:text-white border border-red-400/20'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-dark rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-red-400/20 hover:border-red-400/40"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-red-900/80 rounded-full hover:bg-red-700 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-red-900/80 rounded-full hover:bg-red-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors text-red-100">
                  {project.title}
                </h3>
                <p className="text-red-200 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-800/50 text-red-200 rounded-full text-xs border border-red-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
