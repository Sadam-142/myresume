import React from 'react';
import { motion } from 'framer-motion';
import { Send, FolderGit2, Sparkles, Terminal } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';
import { IconGithub, IconLinkedin, IconInstagram } from './Icons';

interface HeroProps {
  lang: Language;
  onMouseEnterButton: () => void;
  onMouseLeaveButton: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onMouseEnterButton,
  onMouseLeaveButton,
}) => {
  const currentInfo = personalInfo[lang];

  const techBadges = ['React.js', 'Next.js', 'Laravel', 'TypeScript', 'Node.js', 'Tailwind'];

  return (
    <section id="hero" className="relative min-h-[auto] lg:min-h-screen pt-24 sm:pt-36 pb-12 sm:pb-24 flex items-center overflow-hidden">
      {/* Background Ambient Grid & Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[400px] bg-gradient-to-r from-accentCyan/15 via-accentBlue/20 to-accentViolet/15 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT / TOP COLUMN - PREMIUM PHOTO PORTRAIT FRAME */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full lg:col-span-5 flex justify-center items-center relative transform-gpu"
        >
          {/* Ambient Outer Aura Ring */}
          <div className="absolute -inset-4 sm:-inset-6 rounded-[35px] bg-gradient-to-r from-accentCyan via-accentBlue to-accentViolet opacity-60 blur-xl animate-pulse-slow pointer-events-none z-0 transform-gpu" />

          {/* Glowing Ring Border */}
          <div className="absolute -inset-1.5 sm:-inset-2 rounded-[30px] bg-gradient-to-tr from-accentCyan via-accentElectric to-accentViolet blur-sm z-0 pointer-events-none transform-gpu opacity-80" />

          {/* MAIN PHOTO CONTAINER */}
          <div className="relative z-10 w-full max-w-[240px] sm:max-w-xs md:max-w-sm aspect-[4/5] rounded-[26px] p-[2.5px] bg-gradient-to-b from-accentCyan via-white/50 to-accentViolet shadow-[0_0_50px_rgba(0,240,255,0.35)] backdrop-blur-2xl border border-white/30">
            <div className="relative w-full h-full rounded-[23px] bg-surfaceDark overflow-hidden group shadow-2xl">
              {/* Photo Image */}
              <img
                src="/foto.webp"
                alt={currentInfo.name}
                decoding="async"
                width={400}
                height={500}
                className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-95 group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              {/* Gradient Overlay Light Sweeps */}
              <div className="absolute inset-0 bg-gradient-to-t from-bgDark/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Top Right Floating Status Tag: Available for Hire */}
            <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-20">
              <div className="glass-card px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full border-emerald-500/40 bg-surfaceDark/95 backdrop-blur-md flex items-center gap-2 shadow-xl border">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-emerald-400 font-mono tracking-tight">
                  {lang === 'EN' ? 'Open to Work' : 'Siap Rekrut'}
                </span>
              </div>
            </div>

            {/* Bottom Left Floating Tech Tag */}
            <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 z-20">
              <div className="glass-card px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl border-accentCyan/40 bg-surfaceDark/95 backdrop-blur-md flex items-center gap-2 shadow-xl border">
                <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accentCyan shrink-0" />
                <span className="text-[10px] sm:text-xs font-bold text-white font-mono">
                  Software Engineer
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT / CONTENT COLUMN - TYPOGRAPHY & SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="w-full lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          {/* Greeting Tag with Sparkles */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentCyan/10 border border-accentCyan/30 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-accentCyan animate-pulse" />
            <span className="font-handwriting text-accentCyan text-xl sm:text-2xl font-bold tracking-wide">
              {currentInfo.greeting}
            </span>
          </div>

          {/* Full Name in Ultra-Modern Font */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-brand-logo tracking-tight leading-[1.12] mb-3 sm:mb-5">
            <span className="text-gradient">
              {currentInfo.heroName}
            </span>
          </h1>

          {/* Role Description */}
          <p className="text-sm sm:text-lg lg:text-xl font-medium text-secondaryText leading-relaxed mb-5 sm:mb-6 max-w-2xl text-center lg:text-left">
            <span className="text-white font-bold">{currentInfo.heroDescription}</span>
          </p>

          {/* Tech Stack Badges Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 mb-6 sm:mb-8">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono font-semibold text-accentElectric bg-surfaceDark/90 border border-accentCyan/25 shadow-xs"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto mb-6 sm:mb-8">
            <a
              href="#contact"
              onMouseEnter={onMouseEnterButton}
              onMouseLeave={onMouseLeaveButton}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-bgDark bg-accentCyan hover:bg-accentElectric transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] text-center cursor-pointer"
            >
              <span>{lang === 'EN' ? 'Recruit / Contact Me' : 'Hubungi / Rekrut Saya'}</span>
              <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>

            <a
              href="#projects"
              onMouseEnter={onMouseEnterButton}
              onMouseLeave={onMouseLeaveButton}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-surfaceDark/90 border border-white/20 hover:border-accentCyan/60 hover:bg-surfaceDark transition-all duration-300 shadow-md text-center cursor-pointer"
            >
              <span>{lang === 'EN' ? 'Explore Work' : 'Lihat Proyek'}</span>
              <FolderGit2 className="w-4 h-4 text-accentCyan group-hover:scale-110 group-hover:rotate-6 transition-transform shrink-0" />
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center justify-center lg:justify-start gap-4 w-full max-w-md pt-1">
            <span className="text-xs sm:text-sm font-semibold text-secondaryText tracking-wide">
              {lang === 'EN' ? 'Social Media:' : 'Sosial Media:'}
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                onMouseEnter={onMouseEnterButton}
                onMouseLeave={onMouseLeaveButton}
                className="p-2.5 rounded-xl glass-card text-white hover:text-accentCyan hover:border-accentCyan/50 transition-all duration-200 shadow-sm"
              >
                <IconGithub className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                onMouseEnter={onMouseEnterButton}
                onMouseLeave={onMouseLeaveButton}
                className="p-2.5 rounded-xl glass-card text-white hover:text-accentBlue hover:border-accentBlue/50 transition-all duration-200 shadow-sm"
              >
                <IconLinkedin className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                onMouseEnter={onMouseEnterButton}
                onMouseLeave={onMouseLeaveButton}
                className="p-2.5 rounded-xl glass-card text-white hover:text-accentViolet hover:border-accentViolet/50 transition-all duration-200 shadow-sm"
              >
                <IconInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

