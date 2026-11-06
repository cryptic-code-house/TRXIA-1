import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { content } from '../data/content';
import { TrxiaLogo, TrxiaWordmark } from './BrandIcons';

export const Hero: React.FC = () => {
  return (
    <section 
      aria-labelledby="hero-heading"
      className="relative min-h-[94dvh] w-full flex flex-col justify-center items-center text-center px-4 sm:px-8 lg:px-16 pt-4 sm:pt-8 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Central Radiant Corona */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[600px] lg:w-[850px] h-[280px] sm:h-[600px] lg:h-[850px] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <div 
          className="absolute inset-[15%] rounded-full opacity-60 sm:opacity-85 blur-[80px] sm:blur-[120px] animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, #FF5E0E 0%, #FF8A3D 45%, rgba(255, 94, 14, 0.1) 80%, transparent 100%)',
          }}
        />
        <div 
          className="absolute inset-0 rounded-full opacity-35 sm:opacity-55 blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(255, 120, 36, 0.45) 0%, rgba(200, 50, 0, 0.12) 65%, transparent 85%)',
          }}
        />
      </div>

      {/* Floating Ambient Constellation Particles */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {[
          { x: '15%', y: '25%', size: 4, delay: 0 },
          { x: '82%', y: '30%', size: 5, delay: 1.5 },
          { x: '22%', y: '70%', size: 3, delay: 0.8 },
          { x: '78%', y: '75%', size: 4, delay: 2.2 },
          { x: '50%', y: '15%', size: 3.5, delay: 1.2 },
        ].map((pt, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#FF7824]"
            style={{
              left: pt.x,
              top: pt.y,
              width: pt.size,
              height: pt.size,
              boxShadow: '0 0 16px 2px rgba(255,120,36,0.8)',
            }}
            animate={{
              y: [-12, 12, -12],
              opacity: [0.2, 0.85, 0.2],
              scale: [0.9, 1.3, 0.9],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: pt.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* GIANT & PROMINENT CENTER TRXIA BRAND LOCKUP WITH FLOATING LEVITATION */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12 flex flex-col items-center gap-5 sm:gap-6"
        >
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative p-5 sm:p-7 rounded-[44px] apple-glass-pill shadow-[0_0_80px_rgba(255,94,14,0.55)] border border-white/25 group cursor-pointer"
          >
            <div className="absolute inset-0 rounded-[44px] bg-gradient-to-tr from-[#FF5E0E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <TrxiaLogo 
              size={120} 
              glow={true} 
              className="sm:w-[155px] sm:h-[155px] lg:w-[180px] lg:h-[180px] drop-shadow-[0_4px_36px_rgba(255,94,14,0.7)] transition-transform duration-500 group-hover:scale-105" 
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center max-w-[85vw]"
          >
            <TrxiaWordmark 
              height={40} 
              className="xs:h-[50px] sm:h-[78px] lg:h-[94px] max-w-full brightness-125 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]" 
            />
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          id="hero-heading"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-exo font-bold text-white tracking-tight leading-[1.1] text-balance mb-6"
          style={{
            fontSize: 'clamp(2.35rem, 5.8vw + 0.5rem, 5.25rem)',
          }}
        >
          <span>{content.hero.headlineStart}</span>
          <span className="text-gradient-orange inline-block">
            {content.hero.headlineHighlight}
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-figtree text-neutral-200 text-balance text-base sm:text-xl lg:text-2xl max-w-2xl mb-8 sm:mb-12 font-normal leading-relaxed drop-shadow-sm"
        >
          {content.hero.subline}
        </motion.p>

        {/* Apple-style Glass Action Buttons with Magnetic Springs & Light Sheens */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-10"
        >
          {/* Primary Apple Glass CTA with Light Sheen Sweep */}
          <motion.a
            href={content.hero.primaryButton.href}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center justify-center gap-2.5 text-sm sm:text-base font-semibold font-jakarta text-white apple-glass-btn-primary glass-shimmer ambient-sheen-sweep px-9 py-4 rounded-full min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-2xl relative"
          >
            <span>{content.hero.primaryButton.text}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
          </motion.a>

          {/* Secondary Apple Frosted Glass CTA */}
          <motion.a
            href={content.hero.secondaryButton.href}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center justify-center gap-2 text-sm sm:text-base font-semibold font-jakarta text-neutral-200 hover:text-white apple-glass-btn-secondary glass-shimmer px-8 py-4 rounded-full min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5E0E] shadow-xl"
          >
            <Play className="w-3.5 h-3.5 text-[#FF7824] fill-[#FF7824]/40 transition-transform group-hover:scale-115" aria-hidden="true" />
            <span>{content.hero.secondaryButton.text}</span>
          </motion.a>
        </motion.div>

        {/* Floating Telemetry Micro-Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-neutral-400 font-michroma uppercase tracking-wider"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-pill border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-300">Continuous Network Standby</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-pill border-white/10">
            <Zap className="w-3 h-3 text-[#FF7824]" />
            <span className="text-neutral-300">Ultra-Low Power Envelope</span>
          </div>
        </motion.div>

        {/* Scroll Indicator Prompt */}
        <motion.a
          href="#problem"
          aria-label="Scroll to Problem section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 hidden md:inline-flex flex-col items-center gap-2 text-neutral-400 hover:text-[#FFA870] transition-colors focus-visible:outline-none"
        >
          <span className="text-[10px] font-michroma uppercase tracking-[0.2em]">Explore System</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-8 h-12 rounded-full apple-glass-pill flex items-start justify-center p-2 border border-white/20"
          >
            <motion.div 
              className="w-1.5 h-2.5 rounded-full bg-[#FF7824]"
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.a>

      </div>
    </section>
  );
};
