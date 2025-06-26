
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Sparkles, Code, Zap } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Full Stack Developer',
    'MERN Stack Expert',
    'Competitive Programmer',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentTitle.length) {
          setText(currentTitle.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, currentIndex, isDeleting, titles]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Create floating particles
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="particle animate-particle"
      style={{
        width: Math.random() * 4 + 2 + 'px',
        height: Math.random() * 4 + 2 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDelay: Math.random() * 8 + 's',
        animationDuration: (Math.random() * 8 + 4) + 's'
      }}
    />
  ));

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse neon-red"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000 neon-orange"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-600/15 rounded-full blur-3xl animate-pulse delay-500 neon-gold"></div>
        
        {/* Floating particles */}
        <div className="particles">
          {particles}
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Code className="w-8 h-8 text-blue-400/30" />
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="w-6 h-6 text-blue-400/30" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Sparkles className="w-7 h-7 text-blue-600/30" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-red-400/10 rounded-full px-6 py-2 my-10 glass">
            <Sparkles className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-100">Welcome to my digital portfolio</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="" data-text="Rudra Pratap Singh">
              Rudra Pratap Singh
            </span>
          </h1>
          
          {/* <div className="h-20 flex items-center justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-red-100 cyber-border rounded-lg px-6 py-4">
              <span className="text-glow">{text}</span>
              <span className="animate-pulse text-blue-600 ml-1">|</span>
            </h2>
          </div> */}
        </div>

        <p className="text-xl sm:text-2xl text-red-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
          I craft exceptional digital experiences using cutting-edge technologies.
          <br />
          <span className="text-lg text-red-300">Passionate about scalable applications and algorithmic excellence.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16 animate-slide-up">
          <button 
            onClick={scrollToAbout}
            className="group relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 hover:from-red-700 hover:via-orange-700 hover:to-yellow-700 text-white font-bold py-5 px-10 rounded-full transition-all duration-500 transform hover:scale-105 hover-lift neon-red"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <span className="relative flex items-center gap-3">
              <Sparkles className="w-5 h-5" />
              Explore My Work
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/rudra-140207"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 glass rounded-full transition-all duration-300 hover-lift hover-glow border border-red-400/10"
            >
              <Github className="w-6 h-6 text-red-200 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/rudra07"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 glass rounded-full transition-all duration-300 hover-lift hover-glow border border-red-400/10"
            >
              <Linkedin className="w-6 h-6 text-red-200 group-hover:text-red-400 transition-colors" />
            </a>
            <a
              href="mailto:rudra.010402@gmail.com"
              className="group p-4 glass rounded-full transition-all duration-300 hover-lift hover-glow border border-red-400/10"
            >
              <Mail className="w-6 h-6 text-red-200 group-hover:text-yellow-600 transition-colors" />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-red-300 hover:text-white transition-colors duration-300 hover-glow"
        >
          <ChevronDown className="w-10 h-10 mx-auto animate-glow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
