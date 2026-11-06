import React, { useRef, useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface SpotlightCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  enableTilt?: boolean;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 120, 36, 0.16)',
  enableTilt = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);
  const [tilt, setTilt] = useState<{ rx: number; ry: number }>({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    setOpacity(1);

    if (enableTilt && window.innerWidth >= 1024) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rx = ((y - centerY) / centerY) * -4; // Max 4 deg tilt
      const ry = ((x - centerX) / centerX) * 4;
      setTilt({ rx, ry });
    }
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tilt.rx !== 0 || tilt.ry !== 0 ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` : undefined,
        transition: 'transform 0.15s ease-out',
      }}
      className={`relative overflow-hidden apple-glass-card max-w-full ${className}`}
      {...props}
    >
      {/* Radial Spotlight Overlay following Cursor */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Card Content */}
      <div className="relative z-20 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
};
