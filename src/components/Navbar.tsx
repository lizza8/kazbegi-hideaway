import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'rooms', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'rooms', label: t('nav.rooms') },
    { id: 'gallery', label: t('nav.gallery') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-secondary-foreground hover:opacity-80 transition-opacity cursor-pointer"
          >
            {t('nav.title')}
          </button>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex gap-2">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`px-4 py-2 text-base font-normal transition-colors cursor-pointer ${
                      activeSection === link.id
                        ? 'text-accent'
                        : isScrolled
                        ? 'text-foreground hover:text-accent'
                        : 'text-secondary-foreground hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden bg-transparent text-secondary-foreground hover:bg-secondary/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" strokeWidth={1.5} />
              ) : (
                <Menu className="h-8 w-8" strokeWidth={1.5} />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-primary border-t border-border">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex flex-col w-full py-4 space-y-2">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.id} className="w-full">
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`w-full text-left px-6 py-3 text-base font-normal transition-colors cursor-pointer ${
                        activeSection === link.id
                          ? 'text-accent bg-muted'
                          : 'text-foreground hover:text-accent hover:bg-muted'
                      }`}
                    >
                      {link.label}
                    </button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </nav>
    </header>
  );
}
