import React from 'react';
import { motion } from 'framer-motion';
import { Send, FolderGit2 } from 'lucide-react';
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

  return (
    <section id="hero" className="relative min-h-[auto] lg:min-h-screen pt-20 sm:pt-28 lg:pt-36 pb-10 sm:pb-16 lg:pb-24 flex items-center overflow-hidden">
      {/* Background Ambient Grid & Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[400px] bg-gradient-to-r from-accentCyan/15 via-accentBlue/20 to-accentViolet/15 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center justify-items-center lg:justify-items-start">
        {/* LEFT / TOP COLUMN - PREMIUM PHOTO PORTRAIT FRAME */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full col-span-1 lg:col-span-5 flex justify-center items-center relative transform-gpu"
        >
          {/* Ambient Outer Aura Ring */}
          <div className="absolute -inset-3 sm:-inset-6 rounded-[35px] bg-gradient-to-r from-accentCyan via-accentBlue to-accentViolet opacity-60 blur-xl animate-pulse-slow pointer-events-none z-0 transform-gpu" />

          {/* Glowing Ring Border */}
          <div className="absolute -inset-1.5 sm:-inset-2 rounded-[30px] bg-gradient-to-tr from-accentCyan via-accentElectric to-accentViolet blur-sm z-0 pointer-events-none transform-gpu opacity-80" />

          {/* MAIN PHOTO CONTAINER */}
          <div className="relative z-10 w-full max-w-[200px] sm:max-w-[240px] lg:max-w-sm aspect-[4/5] rounded-[24px] sm:rounded-[28px] p-[2.5px] bg-gradient-to-b from-accentCyan via-white/50 to-accentViolet shadow-[0_0_50px_rgba(0,240,255,0.35)] backdrop-blur-2xl border border-white/30">
            <div className="relative w-full h-full rounded-[21px] sm:rounded-[25px] bg-surfaceDark overflow-hidden group shadow-2xl">
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
          </div>
        </motion.div>

        {/* RIGHT / CONTENT COLUMN - TYPOGRAPHY & SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="w-full col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          {/* Plain Handwriting Greeting */}
          <span className="font-handwriting text-accentCyan text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wide block mb-1">
            {currentInfo.greeting}
          </span>

          {/* Full Name in Ultra-Modern Font */}
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black font-brand-logo tracking-tight leading-[1.12] mb-2 sm:mb-4">
            <span className="text-gradient">
              {currentInfo.heroName}
            </span>
          </h1>

          {/* Role Description */}
          <p className="text-sm sm:text-lg lg:text-xl font-medium text-secondaryText leading-relaxed mb-5 sm:mb-6 max-w-2xl text-center lg:text-left">
            <span className="text-white font-bold">{currentInfo.heroDescription}</span>
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto mb-5 sm:mb-6">
            <a
              href="#contact"
              onMouseEnter={onMouseEnterButton}
              onMouseLeave={onMouseLeaveButton}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-bgDark bg-accentCyan hover:bg-accentElectric transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] text-center cursor-pointer"
            >
              <span>{lang === 'EN' ? 'Contact Me' : 'Hubungi Saya'}</span>
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

