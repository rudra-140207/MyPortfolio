
import { useState } from 'react';
import { Code, Database, Server, Palette, Cpu, Globe } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
        { name: 'Next.js', level: 80, icon: '⚡' },
        { name: 'Tailwind CSS', level: 88, icon: '🎨' },
        { name: 'JavaScript', level: 92, icon: '💛' },
        { name: 'HTML/CSS', level: 95, icon: '🌐' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: Server,
      color: 'from-orange-500 to-yellow-600',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 88, icon: '🚂' },
        { name: 'REST APIs', level: 90, icon: '🔌' },
        { name: 'Socket.io', level: 75, icon: '⚡' },
        { name: 'JWT', level: 80, icon: '🔐' },
        { name: 'API Development', level: 85, icon: '📊' }
      ]
    },
    database: {
      title: 'Database & Storage',
      icon: Database,
      color: 'from-yellow-600 to-red-500',
      skills: [
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'MySQL', level: 78, icon: '🐬' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Redis', level: 65, icon: '🔴' },
        { name: 'Database Design', level: 80, icon: '🗄️' },
        { name: 'Data Modeling', level: 75, icon: '📋' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: Cpu,
      color: 'from-red-500 to-orange-600',
      skills: [
        { name: 'Git/GitHub', level: 90, icon: '📦' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Vercel', level: 80, icon: '▲' },
        { name: 'Docker', level: 65, icon: '🐳' },
        { name: 'Postman', level: 85, icon: '📬' },
        { name: 'Chrome DevTools', level: 88, icon: '🔧' }
      ]
    },
    programming: {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'JavaScript', level: 92, icon: '💛' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
        { name: 'C++', level: 88, icon: '⚡' },
        { name: 'C', level: 85, icon: '🔧' },
        { name: 'Python', level: 75, icon: '🐍' },
        { name: 'Java', level: 70, icon: '☕' }
      ]
    },
    competitive: {
      title: 'Competitive Programming',
      icon: Globe,
      color: 'from-yellow-600 to-orange-500',
      skills: [
        { name: 'Data Structures', level: 88, icon: '🧩' },
        { name: 'Algorithms', level: 85, icon: '⚡' },
        { name: 'Problem Solving', level: 90, icon: '🎯' },
        { name: 'LeetCode', level: 85, icon: '💻' },
        { name: 'CodeChef', level: 80, icon: '🍳' },
        { name: 'Dynamic Programming', level: 78, icon: '🔄' }
      ]
    }
  };

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>;
  const currentCategory = skillCategories[activeCategory as keyof typeof skillCategories];

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and programming competencies
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
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <categoryData.icon className="w-4 h-4" />
                {categoryData.title}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105 hover-glow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              </div>
              
              <div className="space-y-2">
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
              </div>
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
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-colors">
              <div className="text-3xl font-bold text-orange-400 mb-2">223rd</div>
              <div className="text-gray-400">CodeChef Rank</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-600/50 transition-colors">
              <div className="text-3xl font-bold text-yellow-600 mb-2">450+</div>
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
