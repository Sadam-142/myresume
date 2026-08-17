import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData, awardsData } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';

interface EducationProps {
  lang: Language;
}

export const Education: React.FC<EducationProps> = ({ lang }) => {
  const currentEdu = educationData[lang];
  const currentAwards = awardsData[lang];

  return (
    <section id="education" className="relative py-10 sm:py-16 lg:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-6 sm:mb-10">
          <span className="text-xs font-black font-brand-logo tracking-[0.2em] text-accentCyan uppercase block mb-2">
            // {lang === 'EN' ? 'ACADEMIC & HONORS' : 'PENDIDIKAN & PENGHARGAAN'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-brand-logo text-white tracking-tight">
            {lang === 'EN' ? 'Education & Awards' : 'Pendidikan & Penghargaan'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* 1. PENDIDIKAN CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-5 sm:p-7 rounded-2xl border border-white/15 hover:border-accentCyan/50 transition-all duration-300 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-accentCyan/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-accentCyan/20 border border-accentCyan/40 text-accentElectric font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="whitespace-nowrap">{lang === 'EN' ? 'Education' : 'Pendidikan Utama'}</span>
                </div>
                <span className="text-[11px] sm:text-xs font-semibold font-mono text-secondaryText flex items-center gap-1.5 whitespace-nowrap">
                  <Calendar className="w-3.5 h-3.5 text-accentCyan shrink-0" />
                  {currentEdu[0].period}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-brand-logo text-white mb-2 leading-tight">
                {currentEdu[0].institution}
              </h3>

              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="text-sm sm:text-base font-semibold text-accentElectric">
                  {currentEdu[0].degree}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accentCyan hidden sm:inline-block" />
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold text-bgDark bg-accentCyan">
                  {currentEdu[0].gpa}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-secondaryText/90 leading-relaxed mb-5 font-normal text-justify">
                {currentEdu[0].description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-bold font-brand-logo text-white uppercase tracking-wider block mb-2.5">
                // {lang === 'EN' ? 'Key Highlights' : 'Sorotan Akademik'}
              </span>
              <ul className="space-y-2">
                {currentEdu[0].highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-primaryText/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accentCyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* 2. PENGHARGAAN CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 glass-card p-5 sm:p-7 rounded-2xl border border-white/15 hover:border-accentBlue/50 transition-all duration-300 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-accentBlue/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-accentBlue/20 border border-accentBlue/40 text-accentBlue font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="whitespace-nowrap">{lang === 'EN' ? 'Honors & Award' : 'Penghargaan'}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold text-accentElectric bg-surfaceDark border border-accentCyan/40 whitespace-nowrap">
                  {currentAwards[0].year}
                </span>
              </div>

              <span className="text-xs uppercase font-bold tracking-wider text-accentBlue mb-1.5 block">
                {currentAwards[0].issuer}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold font-brand-logo text-white mb-3 leading-snug">
                {currentAwards[0].title}
              </h3>

              <p className="text-xs sm:text-sm text-secondaryText/90 leading-relaxed mb-5 font-normal text-justify">
                {currentAwards[0].description}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-surfaceDark/80 border border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-secondaryText uppercase tracking-wider">
                {lang === 'EN' ? 'Status' : 'Kategori'}
              </span>
              <span className="text-xs font-bold font-brand-logo text-accentElectric uppercase tracking-wider">
                {currentAwards[0].badge}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
