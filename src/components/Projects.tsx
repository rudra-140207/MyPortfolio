import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Savi",
      description:
        "Revolutionizes educational assessment with AI-powered viva voce exams generating contextual questions, real-time evaluation, and performance analytics.",
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      technologies: ["OpenAI", "Next.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/rudra-140207/SAVI",
      liveUrl: "https://savi.rpsingh.tech",
    },
    {
      id: 2,
      title: "Campus Bites",
      description:
        "Simplifies mess plan discovery and booking for college students with student portal, mess admin dashboard, and superadmin panel.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Tailwind CSS", "SMTP", "MongoDB"],
      githubUrl: "https://github.com/rudra-140207/MessMaster",
      liveUrl: "https://campus-bites-eight.vercel.app",
    },
    {
      id: 3,
      title: "APIverse",
      description:
        "Engineered a user-friendly interface enabling seamless API management and API key generation.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      githubUrl: "https://github.com/rudra-140207/APIverse-Frontend",
      liveUrl: "https://apiverse-07.onrender.com",
    },
    {
      id: 4,
      title: "Auth-App",
      description:
        "Implemented secure token generation and validation flows for email verification and password resets.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      technologies: ["Next.js", "MongoDB", "Shadcn", "JWT"],
      githubUrl: "https://github.com/rudra-140207/Auth-NextJs",
      liveUrl: "https://auth-next-07.vercel.app",
    },
    {
      id: 5,
      title: "Crypto Galaxy",
      description:
        "All-in-one destination for navigating the world of cryptocurrency with real-time access to multiple cryptocurrency coins.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      technologies: ["React.js", "Material-UI", "Cryptocurrency API"],
      githubUrl: "https://github.com/rudra-140207/Crypto_Galaxy",
      liveUrl: "https://crypto-galaxy-07.onrender.com",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-red-200 max-w-3xl mx-auto">
            A showcase of my work in Web Dev
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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

          {/* Load More Button */}
          <div className="flex items-center justify-center glass-dark rounded-xl border border-red-400/20 hover:border-red-400/40 transition-all duration-300">
            <a
              href="https://rpsingh.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center h-full w-full p-8 text-center hover:bg-red-700/10 transition-colors rounded-xl"
            >
              <div className="text-4xl mb-4 text-red-400">+</div>
              <h3 className="text-xl font-bold text-red-100 mb-2">Load More</h3>
              <p className="text-red-200 text-sm">View all projects</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
