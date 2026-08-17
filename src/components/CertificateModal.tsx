import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, Maximize2 } from 'lucide-react';
import type { CertificateItemLocale, Language } from '../data/portfolioData';

interface CertificateModalProps {
  cert: CertificateItemLocale | null;
  lang: Language;
  onClose: () => void;
  onMouseEnterButton: () => void;
  onMouseLeaveButton: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  cert,
  lang,
  onClose,
  onMouseEnterButton,
  onMouseLeaveButton,
}) => {
  if (!cert) return null;

  const pdfUrl = cert.filePdf;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-bgDark/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl glass-card rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl z-10 bg-surfaceDark p-4 sm:p-8 max-h-[92vh] flex flex-col justify-between overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close certificate modal"
            onMouseEnter={onMouseEnterButton}
            onMouseLeave={onMouseLeaveButton}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 sm:p-2.5 rounded-full bg-surfaceDarker border border-white/20 text-secondaryText hover:text-white hover:border-accentCyan transition-all shadow-md cursor-pointer"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-2.5 sm:gap-4 mb-4 sm:mb-6 pr-10 sm:pr-12">
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-accentCyan/20 border border-accentCyan/40 text-accentElectric shrink-0">
              <Award className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-black font-brand-logo uppercase text-accentCyan tracking-wider block mb-0.5 sm:mb-1">
                {cert.organization} ({cert.year})
              </span>
              <h3 className="text-base sm:text-2xl font-black font-brand-logo text-white leading-tight">
                {cert.title}
              </h3>
            </div>
          </div>

          {/* Certificate Full Image Display Container (Adapts seamlessly for tall/portrait certificates) */}
          <div className="relative w-full min-h-[300px] max-h-[65vh] sm:max-h-[70vh] rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 my-2 sm:my-4 bg-surfaceDarker/90 flex items-center justify-center p-2 sm:p-4">
            <img
              src={cert.image}
              alt={cert.title}
              className="max-h-[60vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />
            
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              title={lang === 'EN' ? 'View Full Image' : 'Buka Gambar Penuh'}
              className="absolute bottom-3 right-3 p-2 rounded-xl bg-bgDark/80 border border-white/20 text-white hover:text-accentCyan hover:border-accentCyan transition-all shadow-lg text-xs flex items-center gap-1.5 backdrop-blur-md"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-mono font-bold text-[10px]">
                {lang === 'EN' ? 'Full Image' : 'Gambar Penuh'}
              </span>
            </a>
          </div>

          {/* Modal Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 sm:pt-4 border-t border-white/10">
            {cert.credentialId && (
              <span className="text-[10px] sm:text-xs font-mono text-secondaryText font-bold">
                ID Credential: {cert.credentialId}
              </span>
            )}

            <div className="flex items-center gap-2 sm:gap-3 ml-auto">
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={onMouseEnterButton}
                  onMouseLeave={onMouseLeaveButton}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-black font-brand-logo text-[10px] sm:text-xs text-bgDark bg-accentCyan hover:bg-accentElectric transition-all uppercase tracking-wider shadow-md"
                >
                  <span>{lang === 'EN' ? 'Open PDF File' : 'Buka File PDF'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={onClose}
                onMouseEnter={onMouseEnterButton}
                onMouseLeave={onMouseLeaveButton}
                className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-bold font-brand-logo text-[10px] sm:text-xs text-white bg-surfaceDarker border border-white/20 hover:border-accentCyan/50 transition-all uppercase tracking-wider cursor-pointer"
              >
                {lang === 'EN' ? 'Close Window' : 'Tutup Tampilan'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
