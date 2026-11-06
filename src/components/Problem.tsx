import React from 'react';
import { motion } from 'framer-motion';
import { Unlink, ZapOff, WifiOff, Link2 } from 'lucide-react';
import { content } from '../data/content';
import { SpotlightCard } from './SpotlightCard';

const iconMap = [
  <Unlink className="w-6 h-6 text-[#FF7824]" aria-hidden="true" />,
  <ZapOff className="w-6 h-6 text-[#FF7824]" aria-hidden="true" />,
  <WifiOff className="w-6 h-6 text-[#FF7824]" aria-hidden="true" />,
];

const InterlockingChainLink: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-2 md:py-0 select-none pointer-events-none" aria-hidden="true">
      <motion.div 
        whileHover={{ scale: 1.15, rotate: 90 }}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full apple-glass-pill flex items-center justify-center text-[#FF8A3D] shadow-[0_0_24px_rgba(255,94,14,0.4)] border border-[#FF7824]/50 z-20 pointer-events-auto cursor-pointer"
      >
        <Link2 className="w-5 h-5 rotate-45" />
      </motion.div>
    </div>
  );
};

export const Problem: React.FC = () => {
  return (
    <section 
      id="problem" 
      aria-labelledby="problem-heading"
      className="relative py-16 sm:py-24 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto w-full overflow-hidden"
    >
      {/* Section Eyebrow & Title */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
      >
        <span className="text-[10px] sm:text-xs font-michroma uppercase tracking-[0.2em] text-[#FF7824] inline-block mb-3">
          {content.problem.badge}
        </span>
        
        {/* Main Section Headline */}
        <h2 
          id="problem-heading"
          className="font-exo font-bold text-white tracking-tight leading-[1.2] text-balance"
          style={{
            fontSize: 'clamp(1.85rem, 4vw + 0.2rem, 3.25rem)',
          }}
        >
          {content.problem.headline}
          <span className="text-[#FF7824] relative inline-block">
            {content.problem.headlineHighlight}
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF7824] to-transparent" />
          </span>
          {content.problem.headlineSuffix}
        </h2>
      </motion.div>

      {/* 3 Vulnerability Apple Glass Cards Connected by Chain Links */}
      <div className="relative">
        
        {/* Desktop Underlying Glowing Chain Line with Signal Travelling Keyframe */}
        <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] -translate-y-1/2 h-1 bg-gradient-to-r from-[#FF5E0E]/20 via-[#FF7824]/50 to-[#FF5E0E]/20 rounded-full border-t border-dashed border-[#FF7824]/60 z-0 pointer-events-none overflow-hidden">
          <div 
            className="w-24 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
            style={{ animation: 'travelSignal 3s infinite linear' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10 items-stretch">
          
          {content.problem.points.map((point, index) => (
            <SpotlightCard
              key={point.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[32px] p-7 sm:p-9 flex flex-col justify-between group relative"
            >
              {/* Chain Link on Card 2 (connecting Card 1 & 3) */}
              {index === 1 && (
                <>
                  <div className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20">
                    <InterlockingChainLink />
                  </div>
                  <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                    <InterlockingChainLink />
                  </div>
                </>
              )}

              {/* Mobile Chain Links */}
              {index > 0 && (
                <div className="md:hidden flex justify-center -mt-3 -mb-3 z-20">
                  <InterlockingChainLink />
                </div>
              )}

              <div>
                <div className="w-13 h-13 rounded-2xl bg-white/[0.06] border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#FF5E0E]/60 group-hover:bg-[#FF5E0E]/15 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  {iconMap[index]}
                </div>

                <h3 className="font-exo font-semibold text-xl text-white mb-3 tracking-wide group-hover:text-[#FFA870] transition-colors duration-200">
                  {point.title}
                </h3>
                <p className="font-figtree text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-michroma text-neutral-400">
                <span className="text-[#FF8A3D] font-bold">STAGE 0{index + 1}</span>
                <span className="w-2 h-2 rounded-full bg-[#FF7824]/60 group-hover:bg-[#FF7824] group-hover:scale-125 transition-all duration-300" />
              </div>
            </SpotlightCard>
          ))}

        </div>
      </div>
    </section>
  );
};
