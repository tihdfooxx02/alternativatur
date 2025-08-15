import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin, Heart, Info, Home } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'viagens', label: 'Viagens', icon: MapPin },
    { id: 'historia', label: 'Nossa História', icon: Info },
    { id: 'depoimentos', label: 'Depoimentos', icon: Heart },
    { id: 'contato', label: 'Contato', icon: Phone },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection('home')}
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'hero-text' : 'text-white'
              }`}
            >
              Alternativa Turismo
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                    isScrolled
                      ? 'text-foreground hover:bg-accent hover:text-accent-foreground'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </motion.button>
              );
            })}
          </div>

          {/* CTA Button */}
<Button
  variant={isScrolled ? 'hero' : 'glass'}
  onClick={() => window.open('https://wa.me/5516997411667', '_blank')}
  className="transition-all duration-300"
>
  <Phone className="h-4 w-4 mr-2" />
  Falar no WhatsApp
</Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-soft"
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center px-4 py-3 text-left text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  >
                    <Icon className="h-4 w-4 mr-3" />
                    {item.label}
                  </button>
                );
              })}
              <div className="px-4 pt-2">
                <Button
                  variant="hero"
                  onClick={() => scrollToSection('contato')}
                  className="w-full"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Falar Conosco
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;