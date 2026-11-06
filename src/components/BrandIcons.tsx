import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
  variant?: 'white' | 'orange';
}

/**
 * Exact TRXIA Guardian Emblem:
 * High-resolution 789x711px source rendered with crisp Retina fidelity.
 */
export const TrxiaLogo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 48, 
  glow = false,
  variant = 'white'
}) => {
  const imgSrc = variant === 'orange' 
    ? '/assets/trxia-tight-logo-orange.png' 
    : '/assets/trxia-tight-logo-white.png';

  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {glow && (
        <div 
          className="absolute inset-[-20%] rounded-full opacity-70 blur-lg pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 94, 14, 0.9) 0%, rgba(255, 138, 61, 0.5) 45%, transparent 75%)',
          }}
        />
      )}
      <img
        src={imgSrc}
        alt="TRXIA Emblem"
        className="w-full h-full object-contain relative z-10 drop-shadow-[0_4px_16px_rgba(255,94,14,0.4)]"
        width={size}
        height={size}
      />
    </div>
  );
};

/**
 * Exact TRXIA Custom Wordmark:
 * Pure SVG vector matching the official custom font with infinite resolution.
 * Zero pixelation or blur at any scale.
 */
export const TrxiaWordmark: React.FC<{ 
  className?: string; 
  height?: number;
  color?: string;
}> = ({ 
  className = '', 
  height = 32,
  color = '#FFFFFF'
}) => {
  return (
    <div 
      className={`inline-flex items-center select-none ${className}`} 
      style={{ height }}
    >
      <svg
        viewBox="0 0 178 28"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
        style={{ height }}
        aria-label="TRXIA"
      >
        {/* T */}
        <path d="M 3 4 L 25 4 L 25 7.6 L 15.9 7.6 L 15.9 25.5 L 12.1 25.5 L 12.1 7.6 L 3 7.6 Z" />
        
        {/* R */}
        <path d="M 44 4 L 57.5 4 C 62.5 4 65.5 6.8 65.5 11.2 C 65.5 14.8 63 17.2 58.5 17.7 L 65.5 25.5 L 61 25.5 L 54.5 18 L 47.8 18 L 47.8 25.5 L 44 25.5 Z M 47.8 7.3 L 47.8 14.7 L 57 14.7 C 60 14.7 61.6 13.4 61.6 11.2 C 61.6 8.8 60 7.3 57 7.3 Z" />

        {/* X */}
        <path d="M 83 4 L 87.8 4 L 94 13.6 L 100.2 4 L 105 4 L 96.4 16.5 L 105 25.5 L 100.2 25.5 L 94 17.4 L 87.8 25.5 L 83 25.5 L 91.6 15 Z" />

        {/* I */}
        <path d="M 126 4 L 129.8 4 L 129.8 25.5 L 126 25.5 Z" />

        {/* A (Open Lambda Style) */}
        <path d="M 148 25.5 L 159.2 4 L 163 4 L 174 25.5 L 170.1 25.5 L 161.1 7.8 L 151.9 25.5 Z" />
      </svg>
    </div>
  );
};
