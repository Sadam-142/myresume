import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  cursorVariant: 'default' | 'button' | 'project';
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          if (!isVisible) setIsVisible(true);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const springTransition = { type: 'spring' as const, damping: 25, stiffness: 400, mass: 0.3 };
  const springButton = { type: 'spring' as const, damping: 25, stiffness: 350, mass: 0.3 };
  const springProject = { type: 'spring' as const, damping: 25, stiffness: 300, mass: 0.3 };

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'transparent',
      borderColor: 'rgba(6, 182, 212, 0.6)',
      borderWidth: '1.5px',
      transition: springTransition,
    },
    button: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(6, 182, 212, 0.12)',
      borderColor: 'rgba(6, 182, 212, 0.9)',
      borderWidth: '1.5px',
      transition: springButton,
    },
    project: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: 'rgba(59, 130, 246, 0.9)',
      borderColor: '#00F0FF',
      borderWidth: '2px',
      transition: springProject,
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      opacity: 1,
      scale: 1,
    },
    button: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 1,
      scale: 1.5,
    },
    project: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      opacity: 0,
      scale: 0,
    }
  };

  return (
    <div className="custom-cursor-wrapper pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        className="fixed rounded-full flex items-center justify-center pointer-events-none"
        animate={cursorVariant}
        variants={variants}
      >
        {cursorVariant === 'project' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[11px] font-bold tracking-widest text-white uppercase"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed h-1.5 w-1.5 rounded-full bg-accentCyan pointer-events-none shadow-[0_0_8px_#00F0FF]"
        animate={cursorVariant}
        variants={dotVariants}
        transition={{ type: 'spring', damping: 30, stiffness: 500 }}
      />
    </div>
  );
};
