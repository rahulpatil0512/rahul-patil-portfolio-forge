
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Home, Briefcase, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Current Role', path: '/current-role', icon: User },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            RP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link to="/current-role" className="text-gray-700 hover:text-blue-600 transition-colors">
              Current Role
            </Link>
            
            {/* About Me Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                About Me
                <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/background-education">Background & Education</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/interests-hobbies">Interests & Hobbies</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/connect" className="text-gray-700 hover:text-blue-600 transition-colors">
              Connect
            </Link>
            
            <Button asChild size="sm">
              <Link to="/resume">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-blue-600 transition-colors px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className="block text-gray-700 hover:text-blue-600 transition-colors px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/current-role" 
                className="block text-gray-700 hover:text-blue-600 transition-colors px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Current Role
              </Link>
              <Link 
                to="/background-education" 
                className="block text-gray-700 hover:text-blue-600 transition-colors px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Background & Education
              </Link>
              <Link 
                to="/interests-hobbies" 
                className="block text-gray-700 hover:text-blue-600 transition-colors px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Interests & Hobbies
              </Link>
              <Link 
                to="/connect" 
                className="block text-gray-700 hover:text-blue-600 transition-colors px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Connect
              </Link>
              <div className="px-3 py-2">
                <Button asChild size="sm" className="w-full">
                  <Link to="/resume">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
