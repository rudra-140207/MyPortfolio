
import { Code, Coffee, Trophy, Users, Sparkles, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Code,
      number: '1+',
      label: 'Years Experience',
      color: 'text-red-400',
      bgColor: 'from-red-500/20 to-red-600/10'
    },
    {
      icon: Trophy,
      number: '450+',
      label: 'Problems Solved',
      color: 'text-yellow-600',
      bgColor: 'from-yellow-600/20 to-yellow-700/10'
    },
    {
      icon: Coffee,
      number: '1000+',
      label: 'Cups of Tea',
      color: 'text-orange-400',
      bgColor: 'from-orange-500/20 to-orange-600/10'
    },
    {
      icon: Users,
      number: '10+',
      label: 'Projects Completed',
      color: 'text-amber-400',
      bgColor: 'from-amber-500/20 to-amber-600/10'
    }
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 animate-float opacity-20">
        <Sparkles className="w-12 h-12 text-red-400" />
      </div>
      <div className="absolute bottom-20 left-10 animate-float opacity-20" style={{ animationDelay: '3s' }}>
        <Zap className="w-10 h-10 text-orange-400" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-red-400/10 rounded-full px-6 py-2 mb-8 glass">
            <Code className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-200">Get to know me</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            About <span className="text-shimmer">Me</span>
          </h2>
          <p className="text-xl text-red-200 max-w-3xl mx-auto">
            Passionate developer with expertise in full-stack development and competitive programming
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="glass-dark rounded-2xl p-8 border border-red-400/10 hover-lift">
              <p className="text-lg text-red-100 leading-relaxed mb-6">
                I'm Rudra Pratap Singh, a driven full-stack developer and tech enthusiast, currently pursuing my B.Tech at KIET Group of Institutions, Ghaziabad. With a strong foundation in the MERN stack and a passion for competitive programming, I thrive on building impactful web applications and solving algorithmic challenges.
              </p>
              
              <p className="text-lg text-red-100 leading-relaxed mb-6">
                I’ve interned at IR-Collab (R-Cube Green Technology LLP), where I built real-time admin dashboards and analytics systems, and at SARACA Solutions, where I focused on designing RESTful APIs and optimizing backend systems.
              </p>

              <p className="text-lg text-red-100 leading-relaxed">
                Outside of development, I actively engage in competitive coding on platforms like LeetCode and CodeChef, with over 450+ problems solved and consistent top-tier rankings. I'm always eager to learn, explore new technologies, and build products that make a difference.
              </p>
            </div>

            {/* <div className="flex flex-wrap gap-4">
              <span className="px-6 py-3 gradient-border rounded-full text-red-300 text-sm font-medium hover-glow transition-all duration-300">
                React.js
              </span>
              <span className="px-6 py-3 gradient-border rounded-full text-yellow-600 text-sm font-medium hover-glow transition-all duration-300">
                Node.js
              </span>
              <span className="px-6 py-3 gradient-border rounded-full text-orange-300 text-sm font-medium hover-glow transition-all duration-300">
                MongoDB
              </span>
              <span className="px-6 py-3 gradient-border rounded-full text-amber-300 text-sm font-medium hover-glow transition-all duration-300">
                Express.js
              </span>
            </div> */}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`glass-dark p-8 rounded-2xl border border-red-400/10 hover-lift hover-glow transition-all duration-500 group relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br from-red-800 to-gray-800 mb-6 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className={`text-4xl font-bold mb-3 ${stat.color} text-glow`}>
                    {stat.number}
                  </div>
                  <div className="text-red-200 text-sm group-hover:text-red-100 transition-colors">
                    {stat.label}
                  </div>
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
