import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, FolderGit2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const currentInfo = personalInfo[lang];

  return (
    <section id="about" className="relative py-10 sm:py-16 lg:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6 sm:mb-10">
          <span className="text-xs font-black font-brand-logo tracking-[0.2em] text-accentCyan uppercase">
            // {lang === 'EN' ? 'ABOUT ME' : 'TENTANG SAYA'}
          </span>
          <div className="h-px bg-gradient-to-r from-accentCyan/50 to-transparent flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: HEADLINE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-5xl font-black font-brand-logo text-white leading-tight whitespace-pre-line tracking-tight">
              {currentInfo.aboutHeadline}
            </h2>
          </motion.div>

          {/* RIGHT COLUMN: DESCRIPTION & COUNT CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <p className="text-lg text-primaryText/90 leading-relaxed font-normal">
              {currentInfo.aboutParagraph}
            </p>

            {/* Quick Count Cards Grid (Skill, Pengalaman, Proyek) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
              {/* Skill Count Card */}
              <div className="glass-card p-4 rounded-xl border-white/15 flex items-center gap-3.5 shadow-md group hover:border-accentCyan/50 transition-all">
                <div className="p-2.5 rounded-xl bg-accentCyan/15 border border-accentCyan/30 text-accentElectric shrink-0 group-hover:scale-105 transition-transform">
                  <Code2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-white block leading-tight text-gradient">
                    10+
                  </span>
                  <span className="text-xs font-semibold tracking-normal text-secondaryText/90 block mt-0.5">
                    {lang === 'EN' ? 'Skill & Tech' : 'Skill & Teknologi'}
                  </span>
                </div>
              </div>

              {/* Pengalaman Count Card */}
              <div className="glass-card p-4 rounded-xl border-white/15 flex items-center gap-3.5 shadow-md group hover:border-accentBlue/50 transition-all">
                <div className="p-2.5 rounded-xl bg-accentBlue/15 border border-accentBlue/30 text-accentBlue shrink-0 group-hover:scale-105 transition-transform">
                  <Briefcase className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-white block leading-tight text-gradient">
                    6+
                  </span>
                  <span className="text-xs font-semibold tracking-normal text-secondaryText/90 block mt-0.5">
                    {lang === 'EN' ? 'Experiences' : 'Pengalaman & Peran'}
                  </span>
                </div>
              </div>

              {/* Proyek Count Card (Disesuaikan dengan jumlah 2 proyek aktual) */}
              <div className="glass-card p-4 rounded-xl border-white/15 flex items-center gap-3.5 shadow-md group hover:border-accentViolet/50 transition-all">
                <div className="p-2.5 rounded-xl bg-accentViolet/15 border border-accentViolet/30 text-accentViolet shrink-0 group-hover:scale-105 transition-transform">
                  <FolderGit2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-white block leading-tight text-gradient">
                    2+
                  </span>
                  <span className="text-xs font-semibold tracking-normal text-secondaryText/90 block mt-0.5">
                    {lang === 'EN' ? 'Web Projects' : 'Proyek Web'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
