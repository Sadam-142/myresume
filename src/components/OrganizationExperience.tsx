import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, CheckCircle2 } from 'lucide-react';
import { organizationData } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';

interface OrganizationExperienceProps {
  lang: Language;
}

export const OrganizationExperience: React.FC<OrganizationExperienceProps> = ({ lang }) => {
  const currentOrgs = organizationData[lang];

  return (
    <section id="organization" className="relative py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-black font-brand-logo tracking-[0.2em] text-accentCyan uppercase block mb-3">
              // {lang === 'EN' ? 'ORGANIZATIONAL LEADERSHIP' : 'PENGALAMAN ORGANISASI'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-brand-logo text-white tracking-tight">
              {lang === 'EN' ? 'Leadership & Community' : 'Pengalaman Organisasi'}
            </h2>
          </div>
          <p className="text-secondaryText max-w-md text-sm leading-relaxed font-medium">
            {lang === 'EN'
              ? 'Active leadership, organizational management, and tech community contributions across 6 organizations.'
              : 'Jejak kepemimpinan, kepengurusan eksekutif, dan komunitas developer di 6 organisasi kemahasiswaan.'}
          </p>
        </div>

        {/* Responsive 2-column Grid displaying all 6 organizations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentOrgs.map((org, idx) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/15 hover:border-accentCyan/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                  <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-mono font-black text-accentElectric bg-accentCyan/15 border border-accentCyan/30 uppercase tracking-wider whitespace-nowrap">
                    {org.category}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold font-mono text-secondaryText flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                    <Calendar className="w-3.5 h-3.5 text-accentCyan shrink-0" />
                    {org.period}
                  </span>
                </div>

                {/* Title & Role */}
                <h3 className="text-xl sm:text-2xl font-extrabold font-brand-logo text-white group-hover:text-accentElectric transition-colors mb-2 leading-snug">
                  {org.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-accentCyan shrink-0" />
                  <span className="text-sm font-bold text-accentElectric">{org.role}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-secondaryText leading-relaxed mb-6 font-normal">
                  {org.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-white/10">
                <ul className="space-y-2">
                  {org.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-primaryText/90">
                      <CheckCircle2 className="w-4 h-4 text-accentCyan shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
