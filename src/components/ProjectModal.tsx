import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { ProjectItemLocale, Language } from '../data/portfolioData';
import { IconGithub } from './Icons';

interface ProjectModalProps {
  project: ProjectItemLocale | null;
  lang: Language;
  onClose: () => void;
  onMouseEnterButton: () => void;
  onMouseLeaveButton: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  lang,
  onClose,
  onMouseEnterButton,
  onMouseLeaveButton,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-bgDark/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl glass-card rounded-3xl border border-white/20 shadow-2xl overflow-hidden z-10 my-auto bg-surfaceDark"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            onMouseEnter={onMouseEnterButton}
            onMouseLeave={onMouseLeaveButton}
            className="absolute top-6 right-6 z-20 p-3 rounded-full bg-surfaceDarker/80 border border-white/20 text-secondaryText hover:text-white hover:border-accentCyan transition-all shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Hero Banner / Image */}
          <div className="relative w-full h-64 sm:h-80 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surfaceDark via-surfaceDark/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-end">
              <span className="text-xs uppercase font-extrabold text-white/90 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20">
                {project.category}
              </span>
            </div>
          </div>

          {/* Modal Content Details */}
          <div className="p-6 sm:p-10 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                {project.title}
              </h2>
              <p className="text-base text-secondaryText leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-accentCyan mb-3">
                {lang === 'EN' ? 'Technologies Used' : 'Teknologi Yang Penggunaan'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-surfaceDarker border border-white/20 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features & Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-widest text-accentCyan mb-3">
                  {lang === 'EN' ? 'Key Capabilities & Impact' : 'Fitur Utama & Hasil'}
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-surfaceDarker/80 border border-white/10"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accentCyan shrink-0 mt-0.5" />
                      <span className="text-sm text-primaryText font-medium">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={onMouseEnterButton}
                    onMouseLeave={onMouseLeaveButton}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-bgDark bg-accentCyan hover:bg-accentElectric transition-all shadow-lg shadow-accentCyan/20 uppercase tracking-wider"
                  >
                    <span>{lang === 'EN' ? 'View Demo / Repository' : 'Lihat Repositori'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={onMouseEnterButton}
                    onMouseLeave={onMouseLeaveButton}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-surfaceDarker border border-white/20 hover:border-accentCyan/50 transition-all uppercase tracking-wider"
                  >
                    <span>GitHub</span>
                    <IconGithub className="w-4 h-4" />
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                onMouseEnter={onMouseEnterButton}
                onMouseLeave={onMouseLeaveButton}
                className="text-xs font-bold text-secondaryText hover:text-white uppercase tracking-wider"
              >
                {lang === 'EN' ? 'Close Window' : 'Tutup'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
