import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Copy, Check, Phone } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';
import { IconGithub, IconLinkedin, IconInstagram } from './Icons';

interface ContactProps {
  lang: Language;
  onMouseEnterButton: () => void;
  onMouseLeaveButton: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  lang,
  onMouseEnterButton,
  onMouseLeaveButton,
}) => {
  const [copied, setCopied] = useState(false);
  const currentInfo = personalInfo[lang];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/${socialLinks.phone.replace(/[^0-9]/g, '')}`;

  return (
    <section id="contact" className="relative py-10 sm:py-16 lg:py-24 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Main CTA Box Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden border-white/20 hover:border-accentCyan/50 shadow-2xl"
        >
          {/* Gradient background highlights */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-accentCyan/20 via-accentBlue/10 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accentViolet/20 via-accentBlue/10 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-accentCyan uppercase mb-2 sm:mb-3 block">
                // {lang === 'EN' ? 'GET IN TOUCH' : 'HUBUNGI SAYA'}
              </span>

              <h2 className="text-lg sm:text-2xl font-bold font-brand-logo text-white tracking-normal leading-snug whitespace-pre-line mb-3 sm:mb-4">
                {currentInfo.contactHeadline}
              </h2>

              <p className="text-xs sm:text-sm text-secondaryText max-w-lg font-normal leading-relaxed mb-6">
                {currentInfo.contactDescription}
              </p>

              {/* Email CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${socialLinks.email}`}
                  onMouseEnter={onMouseEnterButton}
                  onMouseLeave={onMouseLeaveButton}
                  className="group inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 rounded-xl sm:rounded-2xl font-semibold font-sans text-xs text-bgDark bg-accentCyan hover:bg-accentElectric transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] uppercase tracking-wider"
                >
                  <Mail className="w-4 h-4" />
                  <span>{lang === 'EN' ? 'Contact / Hire Me' : 'Hubungi / Rekrut Saya'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={onMouseEnterButton}
                  onMouseLeave={onMouseLeaveButton}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl sm:rounded-2xl font-semibold font-sans text-xs text-white bg-surfaceDark border border-white/20 hover:border-accentCyan/60 transition-all shadow-md cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-accentCyan" />
                      <span className="text-accentElectric">{lang === 'EN' ? 'Copied!' : 'Tersalin!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-accentCyan" />
                      <span>{lang === 'EN' ? 'Copy Email' : 'Salin Email'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: WhatsApp & Social Media Cards */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {/* WhatsApp Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={onMouseEnterButton}
                onMouseLeave={onMouseLeaveButton}
                className="glass-card p-4 rounded-xl sm:rounded-2xl border-white/15 hover:border-emerald-500/60 transition-all flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold font-sans text-secondaryText tracking-wider block">
                      {lang === 'EN' ? 'WhatsApp / Phone' : 'Telepon / WhatsApp'}
                    </span>
                    <span className="text-xs sm:text-sm font-bold font-sans text-white group-hover:text-emerald-400 transition-colors">
                      {socialLinks.phone}
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 group-hover:bg-emerald-500/20 transition-all">
                  Chat
                </span>
              </a>

              {/* Social Channels List */}
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={onMouseEnterButton}
                  onMouseLeave={onMouseLeaveButton}
                  className="glass-card p-3 rounded-xl border-white/15 hover:border-accentCyan/60 transition-all flex items-center gap-3 group text-white hover:text-accentElectric shadow-sm"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white group-hover:border-accentCyan/40 shrink-0">
                    <IconGithub className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase font-semibold font-sans text-secondaryText block leading-tight">
                      GitHub
                    </span>
                    <span className="text-xs font-bold font-sans text-white group-hover:text-accentElectric truncate block">
                      @Sadam-142
                    </span>
                  </div>
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={onMouseEnterButton}
                  onMouseLeave={onMouseLeaveButton}
                  className="glass-card p-3 rounded-xl border-white/15 hover:border-accentBlue/60 transition-all flex items-center gap-3 group text-white hover:text-accentBlue shadow-sm"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white group-hover:border-accentBlue/40 shrink-0">
                    <IconLinkedin className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase font-semibold font-sans text-secondaryText block leading-tight">
                      LinkedIn
                    </span>
                    <span className="text-xs font-bold font-sans text-white group-hover:text-accentBlue truncate block">
                      Sadam Attirmidzi
                    </span>
                  </div>
                </a>

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={onMouseEnterButton}
                  onMouseLeave={onMouseLeaveButton}
                  className="glass-card p-3 rounded-xl border-white/15 hover:border-accentViolet/60 transition-all flex items-center gap-3 group text-white hover:text-accentViolet shadow-sm"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white group-hover:border-accentViolet/40 shrink-0">
                    <IconInstagram className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase font-semibold font-sans text-secondaryText block leading-tight">
                      Instagram
                    </span>
                    <span className="text-xs font-bold font-sans text-white group-hover:text-accentViolet truncate block">
                      @sadam_attirmidzi
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
