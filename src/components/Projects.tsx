import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { ProjectItemLocale, Language } from '../data/portfolioData';
import { IconGithub } from './Icons';

interface ProjectsProps {
  lang: Language;
  onSelectProject: (project: ProjectItemLocale) => void;
  onMouseEnterProject: () => void;
  onMouseLeaveProject: () => void;
  onMouseEnterButton: () => void;
  onMouseLeaveButton: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  lang,
  onSelectProject,
  onMouseEnterProject,
  onMouseLeaveProject,
  onMouseEnterButton,
  onMouseLeaveButton,
}) => {
  const currentProjects = projects[lang];

  return (
    <section id="projects" className="relative py-10 sm:py-16 lg:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-6 sm:mb-10">
          <span className="text-xs font-black font-brand-logo tracking-[0.2em] text-accentCyan uppercase block mb-2">
            // {lang === 'EN' ? 'SELECTED WORK' : 'PROYEK PILIHAN'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-brand-logo text-white tracking-tight">
            {lang === 'EN' ? "Things I've Built" : 'Proyek Yang Dikembangkan'}
          </h2>
        </div>

        {/* Editorial Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {currentProjects.map((project: ProjectItemLocale, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="lg:col-span-12 group relative rounded-2xl overflow-hidden glass-card border border-white/15 hover:border-accentCyan/60 transition-all duration-300 cursor-pointer shadow-xl"
              onClick={() => onSelectProject(project)}
              onMouseEnter={onMouseEnterProject}
              onMouseLeave={onMouseLeaveProject}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                {/* Project Image Box */}
                <div className="relative overflow-hidden lg:col-span-7 h-64 sm:h-80 lg:h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surfaceDark via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
                </div>

                {/* Project Details Box */}
                <div className="p-5 sm:p-7 lg:p-8 flex flex-col justify-between lg:col-span-5">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-accentElectric">
                        {project.category}
                      </span>
                      <div className="p-2.5 rounded-full bg-accentCyan/15 border border-accentCyan/40 group-hover:border-accentCyan group-hover:bg-accentCyan group-hover:text-bgDark transition-all duration-300 shadow-sm">
                        <ArrowUpRight className="w-4 h-4 text-accentCyan group-hover:text-bgDark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-brand-logo text-white mb-2.5 group-hover:text-accentElectric transition-colors tracking-wide">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-secondaryText leading-relaxed mb-4 font-normal">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-semibold text-white bg-surfaceDark border border-white/20 shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* External Links Bar */}
                    <div
                      className="flex items-center gap-3 pt-3 border-t border-white/10"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={onMouseEnterButton}
                          onMouseLeave={onMouseLeaveButton}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-accentCyan hover:text-accentElectric uppercase tracking-wider"
                        >
                          <span>{lang === 'EN' ? 'View Details' : 'Lihat Detail'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={onMouseEnterButton}
                          onMouseLeave={onMouseLeaveButton}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondaryText hover:text-white uppercase tracking-wider ml-auto"
                        >
                          <span>GitHub</span>
                          <IconGithub className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
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
