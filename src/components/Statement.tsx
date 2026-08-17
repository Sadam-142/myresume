import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';

interface StatementProps {
  lang: Language;
}

export const Statement: React.FC<StatementProps> = ({ lang }) => {
  const currentInfo = personalInfo[lang];

  return (
    <section className="relative py-32 border-t border-white/10 overflow-hidden bg-surfaceDarker/80">
      {/* Background Animated Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-accentCyan/15 via-accentBlue/15 to-accentViolet/15 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex p-4 rounded-2xl bg-surfaceDark border border-white/20 text-accentCyan mb-10 shadow-xl"
        >
          <Quote className="w-8 h-8" />
        </motion.div>

        {/* Extreme Typography Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white whitespace-pre-line"
        >
          "{currentInfo.statementQuote.split('\n')[0]}
          <span className="text-gradient block mt-2">
            {currentInfo.statementQuote.split('\n')[1]}
          </span>
          "
        </motion.blockquote>

        {/* Author Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-3 text-xs font-extrabold uppercase tracking-widest text-secondaryText"
        >
          <span className="h-px w-8 bg-accentCyan/50" />
          <span>Ahmad Sadam Izzatulloh — Software Engineer & Web Developer</span>
          <span className="h-px w-8 bg-accentCyan/50" />
        </motion.div>
      </div>
    </section>
  );
};
