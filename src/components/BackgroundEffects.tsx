import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Grid Pattern Overlay with Cyber Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Ambient Radial Gradient Flare Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accentBlue/10 via-transparent to-bgDark opacity-80" />

      {/* Ambient Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-30" />

      {/* Top Left Gradient Orb - Soft Electric Cyan */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-accentCyan/25 via-accentBlue/15 to-transparent blur-[140px]"
      />

      {/* Top Right Gradient Orb - Violet */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-accentViolet/25 via-accentBlue/15 to-transparent blur-[150px]"
      />

      {/* Center Ambient Light Flare - Cyber Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-gradient-to-r from-accentCyan/10 via-accentBlue/15 to-accentViolet/10 blur-[160px]"
      />

      {/* Bottom Center Gradient Orb - Deep Blue */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 left-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accentBlue/15 via-accentCyan/15 to-transparent blur-[140px]"
      />
    </div>
  );
};
