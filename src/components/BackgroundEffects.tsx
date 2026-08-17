import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none contain-strict">
      {/* Dynamic Grid Pattern Overlay with Cyber Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 transform-gpu" />

      {/* Ambient Radial Gradient Flare Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accentBlue/10 via-transparent to-bgDark opacity-80" />

      {/* Ambient Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-20" />

      {/* Top Left Gradient Orb - Soft Electric Cyan */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accentCyan/20 via-accentBlue/10 to-transparent blur-[80px] transform-gpu will-change-transform"
      />

      {/* Top Right Gradient Orb - Violet */}
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-accentViolet/20 via-accentBlue/10 to-transparent blur-[90px] transform-gpu will-change-transform"
      />

      {/* Center Ambient Light Flare - Cyber Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-gradient-to-r from-accentCyan/10 via-accentBlue/12 to-accentViolet/10 blur-[90px] transform-gpu will-change-transform"
      />

      {/* Bottom Center Gradient Orb - Deep Blue */}
      <motion.div
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 left-1/3 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-accentBlue/12 via-accentCyan/12 to-transparent blur-[80px] transform-gpu will-change-transform"
      />
    </div>
  );
};
