import { useState, useEffect, lazy, Suspense } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { WorkExperience } from './components/WorkExperience';
import { Projects } from './components/Projects';
import { OrganizationExperience } from './components/OrganizationExperience';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import type { ProjectItemLocale, CertificateItemLocale, Language } from './data/portfolioData';

const ProjectModal = lazy(() => import('./components/ProjectModal').then((m) => ({ default: m.ProjectModal })));
const CertificateModal = lazy(() => import('./components/CertificateModal').then((m) => ({ default: m.CertificateModal })));

export function App() {
  const [lang, setLang] = useState<Language>('ID');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'button' | 'project'>('default');
  const [selectedProject, setSelectedProject] = useState<ProjectItemLocale | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItemLocale | null>(null);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && !('ontouchstart' in window));
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop, { passive: true });
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'EN' ? 'ID' : 'EN'));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleMouseEnterButton = () => {
    if (isDesktop) setCursorVariant('button');
  };
  const handleMouseLeaveButton = () => {
    if (isDesktop) setCursorVariant('default');
  };
  const handleMouseEnterProject = () => {
    if (isDesktop) setCursorVariant('project');
  };
  const handleMouseLeaveProject = () => {
    if (isDesktop) setCursorVariant('default');
  };

  return (
    <div className="relative min-h-screen bg-bgDark text-primaryText font-sans selection:bg-accentCyan/20 selection:text-accentElectric overflow-x-hidden transition-colors duration-300">
      {/* Custom Pointer Cursor (Desktop Only for Mobile Performance) */}
      {isDesktop && <CustomCursor cursorVariant={cursorVariant} />}

      {/* Ambient Background & Grid Overlay */}
      <BackgroundEffects />

      {/* Main Page Layout Wrapper */}
      <div className="relative z-10">
        {/* Sticky Header Navigation with EN | ID Switcher & Light/Dark Theme Switcher */}
        <Navbar
          lang={lang}
          theme={theme}
          onToggleLanguage={toggleLanguage}
          onToggleTheme={toggleTheme}
          onMouseEnterButton={handleMouseEnterButton}
          onMouseLeaveButton={handleMouseLeaveButton}
        />

        {/* Hero Section */}
        <Hero
          lang={lang}
          onMouseEnterButton={handleMouseEnterButton}
          onMouseLeaveButton={handleMouseLeaveButton}
        />

        {/* About Section */}
        <About lang={lang} />

        {/* Skills Section */}
        <Skills
          lang={lang}
          onMouseEnterButton={handleMouseEnterButton}
          onMouseLeaveButton={handleMouseLeaveButton}
        />

        {/* 1. PENDIDIKAN & 2. PENGHARGAAN */}
        <Education lang={lang} />

        {/* 3. PENGALAMAN KERJA & MAGANG */}
        <WorkExperience lang={lang} />

        {/* 4. PROYEK dikembangkan */}
        <Projects
          lang={lang}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onMouseEnterProject={handleMouseEnterProject}
          onMouseLeaveProject={handleMouseLeaveProject}
          onMouseEnterButton={handleMouseEnterButton}
          onMouseLeaveButton={handleMouseLeaveButton}
        />

        {/* 5. PENGALAMAN ORGANISASI (Semua 6 Organisasi Lengkap dari CV) */}
        <OrganizationExperience lang={lang} />

        {/* 6. SERTIFIKAT PROFESIONAL */}
        <Certificates
          lang={lang}
          onSelectCertificate={(cert) => setSelectedCertificate(cert)}
          onMouseEnterButton={handleMouseEnterButton}
          onMouseLeaveButton={handleMouseLeaveButton}
        />

        {/* Contact Section */}
        <Contact
          lang={lang}
          onMouseEnterButton={handleMouseEnterButton}
          onMouseLeaveButton={handleMouseLeaveButton}
        />

        {/* Minimal Footer */}
        <Footer
          lang={lang}
          onMouseEnterButton={handleMouseEnterButton}
          onMouseLeaveButton={handleMouseLeaveButton}
        />
      </div>

      {/* Interactive Project Detail Modal Drawer */}
      <Suspense fallback={null}>
        <ProjectModal
          project={selectedProject}
          lang={lang}
          onClose={() => setSelectedProject(null)}
          onMouseEnterButton={handleMouseEnterButton}
          onMouseLeaveButton={handleMouseLeaveButton}
        />
      </Suspense>

      {/* Interactive Certificate Detail Modal Drawer */}
      <Suspense fallback={null}>
        <CertificateModal
          cert={selectedCertificate}
          lang={lang}
          onClose={() => setSelectedCertificate(null)}
          onMouseEnterButton={handleMouseEnterButton}
          onMouseLeaveButton={handleMouseLeaveButton}
        />
      </Suspense>
    </div>
  );
}

export default App;
