import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { workExperienceData } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';

interface WorkExperienceProps {
  lang: Language;
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({ lang }) => {
  const currentWork = workExperienceData[lang];

  return (
    <section id="work" className="relative py-20 sm:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-black font-brand-logo tracking-[0.2em] text-accentCyan uppercase block mb-2">
            // {lang === 'EN' ? 'PROFESSIONAL EXPERIENCE' : 'PENGALAMAN KERJA & MAGANG'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-brand-logo text-white tracking-tight">
            {lang === 'EN' ? 'Work Experience' : 'Pengalaman Kerja'}
          </h2>
        </div>

        {/* Featured Work Experience Card */}
        <div className="grid grid-cols-1 gap-6">
          {currentWork.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-5 sm:p-7 rounded-2xl border border-white/15 hover:border-accentCyan/60 transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-accentCyan/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
                {/* Left Header Column */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accentCyan/20 border border-accentCyan/40 text-accentElectric font-mono text-xs font-bold uppercase tracking-wider mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span>{lang === 'EN' ? 'Research Intern' : 'Magang Riset / Developer'}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-brand-logo text-white leading-tight mb-2">
                      {work.company}
                    </h3>

                    <span className="text-sm sm:text-base font-semibold text-accentElectric block mb-3">
                      {work.role}
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono text-secondaryText">
                      <Calendar className="w-3.5 h-3.5 text-accentCyan" />
                      <span className="text-white font-semibold">{work.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-secondaryText">
                      <MapPin className="w-3.5 h-3.5 text-accentCyan" />
                      <span>{work.location}</span>
                    </div>
                  </div>
                </div>

                {/* Right Content Column */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-primaryText/90 leading-relaxed font-normal mb-4">
                      {work.description}
                    </p>

                    <span className="text-xs font-bold font-brand-logo text-white uppercase tracking-wider block mb-2.5">
                      // {lang === 'EN' ? 'Key Deliverables & Achievements' : 'Pencapaian & Hasil Kerja'}
                    </span>

                    <ul className="space-y-2 mb-5">
                      {work.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-primaryText/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accentCyan shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2">
                    {work.techUsed.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-semibold text-white bg-surfaceDark border border-white/20 shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
