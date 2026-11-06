import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Signal, ArrowRight } from 'lucide-react';
import { content } from '../data/content';
import { SpotlightCard } from './SpotlightCard';

export const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'crowd' | 'isolation'>('crowd');

  const steps = activeTab === 'crowd' ? content.howItWorks.crowdSteps : content.howItWorks.isolationSteps;

  return (
    <section 
      id="how-it-works" 
      aria-labelledby="how-it-works-heading"
      className="relative py-16 sm:py-24 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto w-full overflow-hidden"
    >
      {/* Eyebrow & Headline */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
      >
        <span className="text-[10px] sm:text-xs font-michroma uppercase tracking-[0.2em] text-[#FF7824] inline-block mb-3">
          {content.howItWorks.badge}
        </span>
        <h2 
          id="how-it-works-heading"
          className="font-exo font-bold text-white tracking-tight leading-[1.2] text-balance mb-4"
          style={{
            fontSize: 'clamp(1.85rem, 4vw + 0.2rem, 3.25rem)',
          }}
        >
          {content.howItWorks.headline}
        </h2>
      </motion.div>

      {/* Apple-style Recessed Glass Mode Switcher Tabs with Sliding Glass Pill Animation */}
      <div className="flex justify-center mb-12 sm:mb-16">
        <div 
          role="tablist" 
          aria-label="Protocol Selection"
          className="relative inline-flex p-1.5 rounded-full apple-glass-track border border-white/15"
        >
          {/* Option 1: Crowd Source Protocol */}
          <button
            role="tab"
            aria-selected={activeTab === 'crowd'}
            aria-controls="crowd-panel"
            onClick={() => setActiveTab('crowd')}
            className={`relative flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold font-jakarta transition-colors duration-200 min-h-[46px] z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              activeTab === 'crowd' ? 'text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            {activeTab === 'crowd' && (
              <motion.span
                layoutId="activePillTab"
                className="absolute inset-0 rounded-full apple-glass-btn-primary shadow-[0_4px_24px_rgba(255,94,14,0.6)]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <Radio className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Crowd Source Protocol</span>
          </button>
          
          {/* Option 2: Isolation Cell ID Protocol */}
          <button
            role="tab"
            aria-selected={activeTab === 'isolation'}
            aria-controls="isolation-panel"
            onClick={() => setActiveTab('isolation')}
            className={`relative flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold font-jakarta transition-colors duration-200 min-h-[46px] z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              activeTab === 'isolation' ? 'text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            {activeTab === 'isolation' && (
              <motion.span
                layoutId="activePillTab"
                className="absolute inset-0 rounded-full apple-glass-btn-primary shadow-[0_4px_24px_rgba(255,94,14,0.6)]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <Signal className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Isolation Cell ID Protocol</span>
          </button>
        </div>
      </div>

      {/* Interactive Step Display with Sliding AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          id={`${activeTab}-panel`}
          role="tabpanel"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {steps.map((item, index) => (
            <SpotlightCard
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-[32px] p-7 sm:p-8 flex flex-col justify-between relative group"
            >
              {/* Desktop Connector Arrow between steps */}
              {index < steps.length - 1 && (
                <div 
                  className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full apple-glass-pill items-center justify-center text-[#FF7824] shadow-md border-white/20"
                  aria-hidden="true"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}

              <div>
                {/* Step Number & Device Eyebrow */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#FF5E0E]/20 border border-[#FF5E0E]/50 flex items-center justify-center font-michroma text-xs font-bold text-[#FF8A3D] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                    0{item.step}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300 apple-glass-pill px-2.5 py-0.5 rounded-md">
                    {item.device}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-exo font-bold text-lg text-white mb-2 group-hover:text-[#FFA870] transition-colors">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="font-figtree text-neutral-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Metric Tag */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#FFA870]">
                <span className="w-2 h-2 rounded-full bg-[#FF7824] animate-ping" />
                <span>{item.metric}</span>
              </div>
            </SpotlightCard>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
