
import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'coding', label: 'Coding' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-red-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 group">
            <span className="text-3xl font-bold flex items-center gap-2 cursor-pointer">
              <Sparkles className="w-8 h-8 text-red-400 animate-glow" />
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-red-600 to-orange-600 neon-red'
                      : 'text-red-200 hover:text-white glass border border-red-400/10 hover-lift'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection !== item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="glass border border-red-400/10 inline-flex items-center justify-center p-3 rounded-full text-red-300 hover:text-white hover-lift transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-b border-red-400 bg-black/80">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-6 py-4 rounded-xl text-base font-medium w-full text-left transition-all duration-300 hover-lift ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white neon-red'
                    : 'text-red-200 hover:text-white glass border border-red-400/10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="flex items-center gap-3">
                  {activeSection === item.id && <Sparkles className="w-4 h-4" />}
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
