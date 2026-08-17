import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
  theme: 'dark' | 'light';
  onToggleLanguage: () => void;
  onToggleTheme: () => void;
  onMouseEnterButton: () => void;
  onMouseLeaveButton: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  theme,
  onToggleLanguage,
  onToggleTheme,
  onMouseEnterButton,
  onMouseLeaveButton,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const currentInfo = personalInfo[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = [
        'hero',
        'about',
        'skills',
        'education',
        'work',
        'projects',
        'organization',
        'certificates',
        'contact',
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: lang === 'EN' ? 'About' : 'Tentang', href: '#about' },
    { label: lang === 'EN' ? 'Skills' : 'Keahlian', href: '#skills' },
    { label: lang === 'EN' ? 'Education' : 'Pendidikan', href: '#education' },
    { label: lang === 'EN' ? 'Work' : 'Pengalaman', href: '#work' },
    { label: lang === 'EN' ? 'Projects' : 'Proyek', href: '#projects' },
    { label: lang === 'EN' ? 'Organization' : 'Organisasi', href: '#organization' },
    { label: lang === 'EN' ? 'Certificates' : 'Sertifikat', href: '#certificates' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3.5 glass-nav border-b border-white/10 shadow-2xl backdrop-blur-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          onMouseEnter={onMouseEnterButton}
          onMouseLeave={onMouseLeaveButton}
          className="group flex items-center gap-2.5 cursor-pointer"
        >
          <span className="text-xl sm:text-2xl font-black font-brand-logo tracking-tight text-white group-hover:text-accentElectric transition-colors">
            {currentInfo.brandName}
          </span>
        </a>

        {/* Desktop Floating Pill Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 glass-card px-2.5 py-1.5 rounded-full border border-white/15 shadow-xl backdrop-blur-2xl bg-surfaceDark/85">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                onMouseEnter={onMouseEnterButton}
                onMouseLeave={onMouseLeaveButton}
                className={`relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-normal transition-all duration-300 ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-secondaryText/90 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-accentCyan/25 via-accentBlue/25 to-accentViolet/25 border border-accentCyan/50 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          {/* Language Switcher Button (EN | ID) */}
          <button
            onClick={onToggleLanguage}
            onMouseEnter={onMouseEnterButton}
            onMouseLeave={onMouseLeaveButton}
            aria-label="Switch Language"
            className="group relative inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-normal text-white bg-surfaceDark/90 border border-white/20 hover:border-accentCyan/60 transition-all duration-300 shadow-md cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-accentCyan group-hover:rotate-45 transition-transform duration-300" />
            <div className="flex items-center gap-1 font-mono">
              <span className={lang === 'EN' ? 'text-accentElectric font-black' : 'text-secondaryText font-medium'}>
                EN
              </span>
              <span className="text-white/30 font-light">|</span>
              <span className={lang === 'ID' ? 'text-accentElectric font-black' : 'text-secondaryText font-medium'}>
                ID
              </span>
            </div>
          </button>

          {/* Light / Dark Mode Theme Switcher Button */}
          <button
            onClick={onToggleTheme}
            onMouseEnter={onMouseEnterButton}
            onMouseLeave={onMouseLeaveButton}
            aria-label="Toggle Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-normal text-white bg-surfaceDark/90 border border-white/20 hover:border-accentCyan/60 transition-all duration-300 shadow-md cursor-pointer"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-90 transition-transform duration-300" />
                <span className="font-mono text-[11px] text-amber-400 font-bold hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-sky-400 group-hover:-rotate-12 transition-transform duration-300" />
                <span className="font-mono text-[11px] text-sky-400 font-bold hidden sm:inline">Dark</span>
              </>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            onMouseEnter={onMouseEnterButton}
            onMouseLeave={onMouseLeaveButton}
            className="xl:hidden p-2.5 rounded-xl text-secondaryText hover:text-white bg-surfaceDark/90 border border-white/20 focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="xl:hidden glass-nav border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center justify-between text-sm font-semibold tracking-normal text-secondaryText hover:text-accentElectric py-2.5 border-b border-white/5 transition-colors"
                >
                  <span>{item.label}</span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-3 text-center py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-normal text-bgDark bg-accentCyan shadow-lg"
              >
                {lang === 'EN' ? 'Start a Conversation' : 'Hubungi Saya'}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
