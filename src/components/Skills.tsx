import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import type { SkillCategoryLocale, Language } from '../data/portfolioData';

interface SkillsProps {
  lang: Language;
  onMouseEnterButton: () => void;
  onMouseLeaveButton: () => void;
}

export const Skills: React.FC<SkillsProps> = ({
  lang,
  onMouseEnterButton,
  onMouseLeaveButton,
}) => {
  const currentSkills = skillCategories[lang];

  const getCategoryConfig = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return {
          icon: <Code2 className="w-5 h-5 text-accentCyan" />,
          glowBg: 'bg-accentCyan/15 border-accentCyan/40',
          titleColor: 'text-accentCyan',
          badgeColor: 'border-accentCyan/30 hover:border-accentCyan hover:bg-accentCyan/15',
        };
      case 'Palette':
        return {
          icon: <Palette className="w-5 h-5 text-accentViolet" />,
          glowBg: 'bg-accentViolet/15 border-accentViolet/40',
          titleColor: 'text-accentViolet',
          badgeColor: 'border-accentViolet/30 hover:border-accentViolet hover:bg-accentViolet/15',
        };
      case 'Wrench':
        return {
          icon: <Wrench className="w-5 h-5 text-accentBlue" />,
          glowBg: 'bg-accentBlue/15 border-accentBlue/40',
          titleColor: 'text-accentBlue',
          badgeColor: 'border-accentBlue/30 hover:border-accentBlue hover:bg-accentBlue/15',
        };
      case 'Sparkles':
        return {
          icon: <Sparkles className="w-5 h-5 text-accentElectric" />,
          glowBg: 'bg-accentCyan/20 border-accentElectric/50',
          titleColor: 'text-accentElectric',
          badgeColor: 'border-accentElectric/40 hover:border-accentElectric hover:bg-accentCyan/20',
        };
      default:
        return {
          icon: <Code2 className="w-5 h-5 text-accentCyan" />,
          glowBg: 'bg-accentCyan/15 border-accentCyan/40',
          titleColor: 'text-accentCyan',
          badgeColor: 'border-accentCyan/30 hover:border-accentCyan hover:bg-accentCyan/15',
        };
    }
  };

  return (
    <section id="skills" className="relative py-10 sm:py-16 lg:py-24 border-t border-white/10 bg-surfaceDarker/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-6 sm:mb-10">
          <span className="text-xs font-black font-brand-logo tracking-[0.2em] text-accentCyan uppercase block mb-2">
            // {lang === 'EN' ? 'TECH STACK & CAPABILITIES' : 'KEAHLIAN & TEKNOLOGI'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-brand-logo text-white tracking-tight">
            {lang === 'EN' ? 'WHAT I WORK WITH' : 'KEAHLIAN & SKILL'}
          </h2>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {currentSkills.map((cat: SkillCategoryLocale, idx: number) => {
            const config = getCategoryConfig(cat.iconName);

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={onMouseEnterButton}
                onMouseLeave={onMouseLeaveButton}
                className="glass-card glass-card-hover p-5 sm:p-6 rounded-2xl relative overflow-hidden group border-white/15 hover:border-accentCyan/50 shadow-xl"
              >
                {/* Background Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accentCyan/10 via-transparent to-accentViolet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-4 relative z-10">
                  <div className={`p-2.5 rounded-xl border ${config.glowBg} group-hover:scale-105 transition-transform duration-300 shadow-md`}>
                    {config.icon}
                  </div>
                  <div>
                    <h3 className={`text-base sm:text-xl font-bold font-brand-logo text-white group-hover:${config.titleColor} transition-colors tracking-wide`}>
                      {cat.category}
                    </h3>
                    <p className="text-xs text-secondaryText/80 font-medium mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill Items Pills Grid */}
                <div className="flex flex-wrap gap-2.5 pt-1 relative z-10">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-surfaceDark border ${config.badgeColor} transition-all duration-200 shadow-sm`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accentCyan shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
