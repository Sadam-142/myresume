import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transform-gpu" style={{ contain: 'strict' }}>
      {/* Dynamic Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Ambient Radial Gradient Flare Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accentBlue/10 via-transparent to-bgDark opacity-80" />

      {/* Top Left Gradient Orb */}
      <div className="absolute -top-32 -left-32 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-accentCyan/15 via-accentBlue/10 to-transparent blur-[50px] transform-gpu pointer-events-none" />

      {/* Top Right Gradient Orb */}
      <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-accentViolet/15 via-accentBlue/10 to-transparent blur-[50px] transform-gpu pointer-events-none" />

      {/* Center Ambient Light Flare */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[250px] rounded-full bg-gradient-to-r from-accentCyan/10 via-accentBlue/10 to-accentViolet/10 blur-[50px] transform-gpu pointer-events-none" />
    </div>
  );
};
