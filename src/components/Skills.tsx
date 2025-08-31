import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiVercel,
  SiPostman,
  SiExpress,
  SiJsonwebtokens,
  SiMysql,
  SiAmazonwebservices,
  SiGit,
  SiGooglechrome,
  SiC,
  SiCplusplus,
  SiPython,
  SiDatabricks,
  SiThealgorithms,
  SiCodeforces,
  SiLeetcode,
  SiCodechef,
} from "react-icons/si";
import { Code, Database, Server, Cpu, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Code,
      color: "from-red-500 to-orange-500",
      skills: [
        { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
        { name: "HTML/CSS", icon: <SiHtml5 className="text-orange-500" /> },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: Server,
      color: "from-orange-500 to-yellow-600",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
        { name: "Express.js", icon: <SiExpress className="text-green-400" /> },
        { name: "REST APIs", icon: "🔗" },
        // { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="text-green-400" /> },
      ],
    },
    database: {
      title: "Database & Storage",
      icon: Database,
      color: "from-yellow-600 to-red-500",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "AWS", icon: <SiAmazonwebservices className="text-white" /> },
        { name: "Database Design", icon: "🗄️" },
        { name: "Data Modeling", icon: "📋" },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      icon: Cpu,
      color: "from-red-500 to-orange-600",
      skills: [
        { name: "Git", icon: <SiGit className="text-red-600" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Chrome DevTools", icon: <SiGooglechrome className="text-yellow-400" /> },
      ],
    },
    programming: {
      title: "Programming Languages",
      icon: Code,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "C++", icon: <SiCplusplus className="text-red-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        
        { name: "C", icon: <SiC className="text-blue-500" /> },
        { name: "Python", icon: <SiPython className="text-green-300" /> },
      ],
    },
    competitive: {
      title: "Competitive Programming",
      icon: Globe,
      color: "from-yellow-600 to-orange-500",
      skills: [
        { name: "Data Structures", icon: <SiDatabricks className="text-red-500" /> },
        { name: "Algorithms", icon: <SiThealgorithms className="text-red-500" /> },
        { name: "Codeforces", icon: <SiCodeforces className="text-blue-500" /> },
        { name: "LeetCode", icon: <SiLeetcode className="text-orange-500" /> },
        { name: "CodeChef", icon: <SiCodechef className="text-white" /> },
      ],
    },
  };

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and programming competencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([key, category]) => (
            <div
              key={key}
              className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-red-600/50 transition-all duration-300 hover:scale-105 hover-glow"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-white" />
                <h3 className="text-white text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gray-700/40 rounded-lg p-3 hover:bg-gray-700/60 transition-colors"
                  >
                    <div className="text-2xl flex-shrink-0">{skill.icon}</div>
                    <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
