import { useState } from "react";
import { Code, Database, Server, Cpu, Globe } from "lucide-react";
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
  SiSocketdotio,
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

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Code,
      color: "from-red-500 to-orange-500",
      skills: [
        { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />},
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" />},
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
        { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
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
        { name: "Database Design", level: 80, icon: "🗄️" },
        { name: "Data Modeling", level: 75, icon: "📋" },
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
        { name: "Chrome DevTools", icon: <SiGooglechrome className="text-yellow-400" />},
      ],
    },
    programming: {
      title: "Programming Languages",
      icon: Code,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-red-500" /> },
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

  const categories = Object.keys(skillCategories) as Array<
    keyof typeof skillCategories
  >;
  const currentCategory =
    skillCategories[activeCategory as keyof typeof skillCategories];

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
            A comprehensive overview of my technical expertise and programming
            competencies
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const categoryData = skillCategories[category];
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? `bg-gradient-to-r ${categoryData.color} text-white shadow-lg neon-red`
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <categoryData.icon className="w-4 h-4" />
                {categoryData.title}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {currentCategory.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-2 lg:p-4 rounded-xl border border-gray-700 hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105 hover-glow"
            >
              <div className="flex items-center gap-2 lg:gap-6 mb-2">
                <span className="text-4xl lg:text-6xl">{skill.icon}</span>
                <h3 className="text-sm lg:text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </div>

              {/* <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Proficiency</span>
                  <span className="text-white font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${currentCategory.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* Skill Summary */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-red-600/50 transition-colors">
              <div className="text-3xl font-bold text-red-400 mb-2">1+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            {/* <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-colors">
              <div className="text-3xl font-bold text-orange-400 mb-2">223rd</div>
              <div className="text-gray-400">CodeChef Rank</div>
            </div> */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-600/50 transition-colors">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                450+
              </div>
              <div className="text-gray-400">Problems Solved</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-red-500/50 transition-colors">
              <div className="text-3xl font-bold text-red-500 mb-2">10+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
