import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../data/portfolioData';
import type { CertificateItemLocale, Language } from '../data/portfolioData';

interface CertificatesProps {
  lang: Language;
  onSelectCertificate: (cert: CertificateItemLocale) => void;
  onMouseEnterButton: () => void;
  onMouseLeaveButton: () => void;
}

export const Certificates: React.FC<CertificatesProps> = ({
  lang,
  onSelectCertificate,
  onMouseEnterButton,
  onMouseLeaveButton,
}) => {
  const currentCerts = certificates[lang];

  return (
    <section id="certificates" className="relative py-10 sm:py-16 lg:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <span className="text-[10px] sm:text-xs font-black font-brand-logo tracking-[0.2em] text-accentCyan uppercase block mb-2 sm:mb-3">
              // {lang === 'EN' ? 'RECOGNITION & CREDENTIALS' : 'SERTIFIKASI PROFESIONAL'}
            </span>
            <h2 className="text-2xl sm:text-5xl font-black font-brand-logo text-white tracking-tight">
              {lang === 'EN' ? 'ACHIEVEMENTS' : 'SERTIFIKAT & LISENSI'}
            </h2>
          </div>
        </div>

        {/* Certificate Cards Grid - 2 columns on mobile, 3 columns on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {currentCerts.map((cert: CertificateItemLocale, idx: number) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-card glass-card-hover rounded-2xl sm:rounded-3xl border-white/15 hover:border-accentCyan/50 overflow-hidden flex flex-col justify-between group shadow-xl sm:shadow-2xl"
            >
              {/* Card Header & Image Preview */}
              <div>
                <div className="relative h-28 sm:h-44 md:h-52 overflow-hidden bg-surfaceDarker border-b border-white/10">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surfaceDark via-transparent to-transparent" />
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                    <span className="px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-mono font-bold text-accentElectric bg-bgDark/90 border border-accentCyan/60 backdrop-blur-md shadow-md">
                      {cert.year}
                    </span>
                  </div>
                </div>

                <div className="p-3 sm:p-5 md:p-7">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-accentCyan mb-1.5 sm:mb-3">
                    <div className="p-1 sm:p-1.5 rounded-md sm:rounded-lg bg-accentCyan/20 border border-accentCyan/40 shrink-0">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-accentCyan" />
                    </div>
                    <span className="line-clamp-1">{cert.organization}</span>
                  </div>

                  <h3 className="text-xs sm:text-lg md:text-xl font-extrabold font-brand-logo text-white mb-2 sm:mb-4 group-hover:text-accentElectric transition-colors tracking-wide leading-snug line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-6">
                    {cert.skillsBadge.map((s) => (
                      <span
                        key={s}
                        className="px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-[9px] sm:text-xs font-semibold text-white bg-surfaceDark border border-white/20 shadow-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="px-3 sm:px-7 pb-3 sm:pb-7 pt-0">
                <button
                  onClick={() => onSelectCertificate(cert)}
                  onMouseEnter={onMouseEnterButton}
                  onMouseLeave={onMouseLeaveButton}
                  className="w-full inline-flex items-center justify-center gap-1 sm:gap-2.5 py-2 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold font-brand-logo text-[10px] sm:text-xs text-white bg-surfaceDark border border-white/20 hover:border-accentCyan/60 hover:bg-accentCyan/15 transition-all uppercase tracking-wider shadow-md cursor-pointer"
                >
                  <span>{lang === 'EN' ? 'View Certificate' : 'Lihat Sertifikat'}</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-accentCyan" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
