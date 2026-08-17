import React from 'react';
import { motion } from 'framer-motion';
import { Send, FolderGit2, Sparkles, Code2 } from 'lucide-react';
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
    <section id="hero" className="relative min-h-[auto] md:min-h-screen pt-24 sm:pt-36 pb-12 sm:pb-24 flex items-center overflow-hidden">
      {/* Floating Modern Code Snippets Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Code Chip 1: Top Left */}
        <div className="absolute top-[12%] left-[4%] hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card border-accentCyan/40 text-xs font-mono shadow-[0_0_20px_rgba(0,240,255,0.2)] bg-surfaceDark/80 backdrop-blur-md opacity-70">
          <span className="w-2 h-2 rounded-full bg-accentCyan animate-ping" />
          <span className="text-accentCyan font-bold">&lt;React.FC /&gt;</span>
        </div>

        {/* Code Chip 2: Top Right */}
        <div className="absolute top-[15%] right-[6%] hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-card border-accentViolet/40 text-xs font-mono shadow-[0_0_20px_rgba(139,92,246,0.2)] bg-surfaceDark/80 backdrop-blur-md opacity-70">
          <span className="text-accentViolet font-semibold">const</span>
          <span className="text-white font-medium">developer</span>
          <span className="text-accentCyan font-semibold">=</span>
          <span className="text-emerald-400 font-bold">true</span>
          <span className="text-white/60">;</span>
        </div>

        {/* Code Chip 3: Middle Right near text */}
        <div className="absolute top-[48%] right-[3%] hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card border-accentBlue/40 text-xs font-mono shadow-[0_0_20px_rgba(59,130,246,0.2)] bg-surfaceDark/80 backdrop-blur-md opacity-75">
          <span className="text-accentBlue font-bold">await</span>
          <span className="text-accentCyan">fetch</span>
          <span className="text-amber-300">('/api/v1/build')</span>
        </div>

        {/* Code Chip 4: Bottom Left near Photo */}
        <div className="absolute bottom-[18%] left-[2%] hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card border-emerald-500/40 text-xs font-mono shadow-[0_0_20px_rgba(16,185,129,0.2)] bg-surfaceDark/80 backdrop-blur-md opacity-70">
          <span className="text-emerald-400 font-bold">{'{'} status: 200, ok: true {'}'}</span>
        </div>

        {/* Code Chip 5: Floating Mobile/Tablet Chip */}
        <div className="absolute top-[8%] left-[45%] hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg glass-card border-accentCyan/30 text-[10px] font-mono shadow-sm bg-surfaceDark/70 opacity-60">
          <span className="text-accentElectric font-semibold">npm run dev</span>
        </div>

        {/* Code Chip 6: Bottom Right */}
        <div className="absolute bottom-[12%] right-[8%] hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card border-accentViolet/40 text-xs font-mono shadow-[0_0_20px_rgba(139,92,246,0.2)] bg-surfaceDark/80 backdrop-blur-md opacity-75">
          <span className="text-accentViolet font-semibold">&lt;NextJS16</span>
          <span className="text-accentCyan font-medium">pwa=</span>
          <span className="text-amber-300">"offline-first"</span>
          <span className="text-accentViolet font-semibold">/&gt;</span>
        </div>

        {/* Ambient Glowing Cyber Grid Aura behind Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-accentCyan/15 via-accentBlue/20 to-accentViolet/15 rounded-full blur-[90px] pointer-events-none z-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full flex flex-col md:grid md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* LEFT COLUMN - ULTRA-MODERN PHOTO FRAME */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full md:col-span-5 flex justify-center items-center relative transform-gpu"
        >
          {/* REAR GLOWING LIGHT FLARE AURA (Kilauan Cahaya dari Belakang) */}
          <div className="absolute -inset-3 sm:-inset-6 rounded-3xl bg-gradient-to-r from-accentCyan via-accentBlue to-accentViolet opacity-70 blur-lg sm:blur-xl animate-pulse-slow pointer-events-none z-0 transform-gpu" />
          <div className="absolute -inset-6 sm:-inset-10 rounded-full bg-gradient-to-tr from-accentElectric/40 via-accentCyan/20 to-accentViolet/50 opacity-50 blur-xl sm:blur-2xl animate-spin-slow pointer-events-none z-0 transform-gpu" />

          {/* Animated Glowing Ring Border around Photo */}
          <motion.div
            animate={{
              scale: [0.98, 1.03, 0.98],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -inset-1 sm:-inset-2 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-accentCyan via-accentElectric to-accentViolet blur-sm z-0 pointer-events-none transform-gpu"
          />

          {/* Corner Ambient Flare Highlights */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-accentCyan/60 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accentViolet/60 rounded-full blur-2xl pointer-events-none" />

          {/* MAIN PHOTO FRAME CONTAINER */}
          <motion.div
            whileHover={{ scale: 1.04, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-[210px] sm:max-w-xs md:max-w-md aspect-[4/5] rounded-2xl sm:rounded-3xl p-[2px] sm:p-[3px] bg-gradient-to-b from-accentCyan via-white/40 to-accentViolet shadow-[0_0_40px_rgba(0,240,255,0.4)] backdrop-blur-2xl border border-white/40 cursor-pointer"
          >
            <div className="relative w-full h-full rounded-[13px] sm:rounded-[21px] bg-surfaceDark overflow-hidden flex flex-col justify-end group shadow-2xl">
              {/* Profile Photo */}
              <img
                src="/foto.webp"
                alt={currentInfo.name}
                decoding="async"
                width={400}
                height={500}
                className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-95 group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              {/* Shimmer Light Flare Sweep Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accentCyan/20 via-transparent to-accentViolet/20 opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-bgDark/95 via-bgDark/20 to-transparent pointer-events-none" />

              {/* Floating Bottom Info Tag */}
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                <div className="glass-card p-2 sm:p-2.5 rounded-lg sm:rounded-xl border-white/20 backdrop-blur-md flex items-center justify-between shadow-xl bg-surfaceDark/90">
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    <div className="p-1 sm:p-1.5 rounded-md sm:rounded-lg bg-accentCyan/20 text-accentElectric border border-accentCyan/40 shadow-sm shrink-0">
                      <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <div className="truncate min-w-0">
                      <h4 className="text-[10px] sm:text-xs font-semibold text-white leading-tight truncate">
                        {currentInfo.name}
                      </h4>
                      <p className="text-[9px] sm:text-[10px] text-accentCyan font-medium leading-tight truncate">
                        {currentInfo.title}
                      </p>
                    </div>
                  </div>
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accentCyan animate-pulse shrink-0 ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN - TYPOGRAPHY & SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="w-full md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left z-10"
        >
          {/* Unique Curved Handwriting Greeting */}
          <span className="font-handwriting text-accentCyan text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide block mb-1">
            {currentInfo.greeting}
          </span>

          {/* Full Name in Ultra-Modern Font */}
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black font-brand-logo tracking-tight leading-[1.15] mb-3 sm:mb-6">
            <span className="text-gradient">
              {currentInfo.heroName}
            </span>
          </h1>

          {/* Primary Skills & Role Description */}
          <p className="text-sm sm:text-lg lg:text-xl font-medium sm:font-bold text-white leading-relaxed mb-6 sm:mb-8 max-w-2xl text-center md:text-left">
            {currentInfo.heroDescription}
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 w-full sm:w-auto mb-5 sm:mb-6">
            <a
              href="#contact"
              onMouseEnter={onMouseEnterButton}
              onMouseLeave={onMouseLeaveButton}
              className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-bgDark bg-accentCyan hover:bg-accentElectric transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] text-center whitespace-nowrap"
            >
              <span>{lang === 'EN' ? 'Contact Me' : 'Hubungi Saya'}</span>
              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>

            <a
              href="#projects"
              onMouseEnter={onMouseEnterButton}
              onMouseLeave={onMouseLeaveButton}
              className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-surfaceDark/90 border border-white/20 hover:border-accentCyan/60 hover:bg-surfaceDark transition-all duration-300 shadow-sm text-center whitespace-nowrap"
            >
              <span>{lang === 'EN' ? 'View Work' : 'Lihat Proyek'}</span>
              <FolderGit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accentCyan group-hover:scale-110 group-hover:rotate-6 transition-transform shrink-0" />
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center justify-center md:justify-start gap-3.5 w-full max-w-md pt-1">
            <span className="text-xs sm:text-sm font-medium text-secondaryText/90 tracking-normal">
              {lang === 'EN' ? 'Connect:' : 'Sosial Media:'}
            </span>
            <div className="flex items-center gap-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                onMouseEnter={onMouseEnterButton}
                onMouseLeave={onMouseLeaveButton}
                className="p-2 sm:p-2.5 rounded-xl glass-card text-white hover:text-accentCyan hover:border-accentCyan/50 transition-all duration-200 shadow-sm"
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
                className="p-2 sm:p-2.5 rounded-xl glass-card text-white hover:text-accentBlue hover:border-accentBlue/50 transition-all duration-200 shadow-sm"
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
                className="p-2 sm:p-2.5 rounded-xl glass-card text-white hover:text-accentViolet hover:border-accentViolet/50 transition-all duration-200 shadow-sm"
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
