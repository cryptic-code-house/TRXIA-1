import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Signal, BatteryMedium, Cpu, CheckCircle2, ArrowLeftRight } from 'lucide-react';
import { content } from '../data/content';
import { SpotlightCard } from './SpotlightCard';

export const Solution: React.FC = () => {
  const [activeMethod, setActiveMethod] = useState<'A' | 'B'>('A');

  return (
    <section 
      id="solution" 
      aria-labelledby="solution-heading"
      className="relative py-16 sm:py-24 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto w-full overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1100px] h-[350px] opacity-25 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 94, 14, 0.28) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Section Eyebrow & Title */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 relative z-10"
      >
        <span className="text-[10px] sm:text-xs font-michroma uppercase tracking-[0.2em] text-[#FF7824] inline-block mb-3">
          {content.solution.badge}
        </span>
        <h2 
          id="solution-heading"
          className="font-exo font-bold text-white tracking-tight leading-[1.2] text-balance"
          style={{
            fontSize: 'clamp(1.85rem, 4vw + 0.2rem, 3.25rem)',
          }}
        >
          {content.solution.headline}
        </h2>
      </motion.div>

      {/* AUTONOMOUS SITUATION SWITCHER BADGE - INTERACTIVE SLIDING SWITCH */}
      <div className="flex justify-center mb-12 relative z-10">
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full apple-glass-pill border border-[#FF7824]/40 shadow-[0_0_30px_rgba(255,94,14,0.3)] text-xs font-medium text-neutral-200 cursor-pointer select-none group"
          onClick={() => setActiveMethod(activeMethod === 'A' ? 'B' : 'A')}
        >
          <motion.div 
            animate={{ rotate: activeMethod === 'A' ? 0 : 180 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-6 h-6 rounded-full bg-[#FF5E0E]/25 flex items-center justify-center text-[#FF7824] border border-[#FF7824]/50 group-hover:scale-110"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
          </motion.div>
          <span className="font-michroma text-[10px] sm:text-[11px] text-[#FFA870] uppercase tracking-wider font-semibold">
            Autonomous Situation Switch
          </span>
          <span className="text-neutral-500 hidden sm:inline">&bull;</span>
          <span className="text-neutral-300 text-xs hidden sm:inline">
            Active: <span className="text-[#FF8A3D] font-mono font-bold">Method {activeMethod}</span> (Click to preview transition)
          </span>
        </motion.div>
      </div>

      {/* Two Apple-Grade Glass Cards with 3D Tilt & Cursor Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        
        {/* Card 1: Crowd-Sourced Relay */}
        <SpotlightCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          spotlightColor="rgba(255, 94, 14, 0.2)"
          className={`rounded-[36px] p-8 sm:p-11 flex flex-col justify-between transition-all duration-300 ${
            activeMethod === 'A' ? 'border-[#FF7824]/60 shadow-[0_0_35px_rgba(255,94,14,0.3)]' : ''
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-14 h-14 rounded-2xl bg-[#FF5E0E]/15 border border-[#FF5E0E]/40 flex items-center justify-center text-[#FF7824] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
              >
                <Radio className="w-7 h-7" aria-hidden="true" />
              </motion.div>
              <span className="text-xs font-michroma tracking-wider uppercase px-4 py-1.5 rounded-full apple-glass-pill text-[#FFA870] border border-[#FF7824]/30">
                Method A
              </span>
            </div>

            <h3 className="font-exo font-bold text-2xl sm:text-3xl text-white mb-2 tracking-tight">
              {content.solution.cards[0].title}
            </h3>
            <p className="text-sm font-medium text-[#FF8A3D] mb-4">
              {content.solution.cards[0].subtitle}
            </p>

            <p className="font-figtree text-neutral-300 text-base sm:text-lg leading-relaxed mb-8">
              {content.solution.cards[0].description}
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3 text-xs sm:text-sm font-medium text-neutral-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FF7824] shrink-0" aria-hidden="true" />
              <span>{content.solution.cards[0].highlight}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-michroma text-neutral-400">
              <BatteryMedium className="w-4 h-4 text-[#FF7824]" />
              <span>THRESHOLD &le;20%</span>
            </div>
          </div>
        </SpotlightCard>

        {/* Card 2: Cell ID Isolation Protocol */}
        <SpotlightCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          spotlightColor="rgba(255, 120, 36, 0.2)"
          className={`rounded-[36px] p-8 sm:p-11 flex flex-col justify-between transition-all duration-300 ${
            activeMethod === 'B' ? 'border-[#FF7824]/60 shadow-[0_0_35px_rgba(255,94,14,0.3)]' : ''
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <motion.div 
                whileHover={{ rotate: -10, scale: 1.1 }}
                className="w-14 h-14 rounded-2xl bg-[#FF5E0E]/15 border border-[#FF5E0E]/40 flex items-center justify-center text-[#FF7824] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
              >
                <Signal className="w-7 h-7" aria-hidden="true" />
              </motion.div>
              <span className="text-xs font-michroma tracking-wider uppercase px-4 py-1.5 rounded-full apple-glass-pill text-[#FFA870] border border-[#FF7824]/30">
                Method B
              </span>
            </div>

            <h3 className="font-exo font-bold text-2xl sm:text-3xl text-white mb-2 tracking-tight">
              {content.solution.cards[1].title}
            </h3>
            <p className="text-sm font-medium text-[#FF8A3D] mb-4">
              {content.solution.cards[1].subtitle}
            </p>

            <p className="font-figtree text-neutral-300 text-base sm:text-lg leading-relaxed mb-8">
              {content.solution.cards[1].description}
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3 text-xs sm:text-sm font-medium text-neutral-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FF7824] shrink-0" aria-hidden="true" />
              <span>{content.solution.cards[1].highlight}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-michroma text-neutral-400">
              <Cpu className="w-4 h-4 text-[#FF7824]" />
              <span>HARDWARE FALLBACK</span>
            </div>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
};
