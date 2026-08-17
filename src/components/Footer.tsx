import React from 'react';

interface FooterProps {
  lang?: string;
  onMouseEnterButton?: () => void;
  onMouseLeaveButton?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-6 border-t border-white/10 bg-bgDark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-center">
        {/* Bottom Copyright */}
        <div className="text-xs text-secondaryText/70 font-mono text-center font-semibold">
          © {currentYear} Ahmad Sadam Izzatulloh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
