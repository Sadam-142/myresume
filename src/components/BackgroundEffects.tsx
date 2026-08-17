import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35" />

      {/* Ambient Radial Gradient Flare Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accentBlue/10 via-transparent to-bgDark opacity-80" />

      {/* Ambient Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-20" />

      {/* Top Left Gradient Orb */}
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-accentCyan/20 via-accentBlue/10 to-transparent blur-[70px] transform-gpu" />

      {/* Top Right Gradient Orb */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-accentViolet/20 via-accentBlue/10 to-transparent blur-[80px] transform-gpu" />

      {/* Center Ambient Light Flare */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[300px] rounded-full bg-gradient-to-r from-accentCyan/10 via-accentBlue/12 to-accentViolet/10 blur-[80px] transform-gpu" />

      {/* Bottom Center Gradient Orb */}
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accentBlue/12 via-accentCyan/12 to-transparent blur-[70px] transform-gpu" />
    </div>
  );
};
