import React from 'react';
import { personalInfo } from '../data/portfolioData';
import type { Language } from '../data/portfolioData';

interface FooterProps {
  lang: Language;
  onMouseEnterButton: () => void;
  onMouseLeaveButton: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onMouseEnterButton,
  onMouseLeaveButton,
}) => {
  const currentYear = new Date().getFullYear();
  const currentInfo = personalInfo[lang];

  return (
    <footer className="relative py-6 sm:py-10 border-t border-white/10 bg-bgDark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="#hero"
            onMouseEnter={onMouseEnterButton}
            onMouseLeave={onMouseLeaveButton}
            className="text-xl md:text-2xl font-black font-brand-logo text-white tracking-[0.22em] mb-1"
          >
            {currentInfo.brandName}
          </a>
          <p className="text-xs text-secondaryText font-bold">
            {currentInfo.name} — {currentInfo.title}
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="text-xs text-secondaryText/70 font-mono text-center md:text-right font-semibold">
          © {currentYear} Ahmad Sadam Izzatulloh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
