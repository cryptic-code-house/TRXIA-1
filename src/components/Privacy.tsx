import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Trash2, EyeOff } from 'lucide-react';
import { content } from '../data/content';
import { SpotlightCard } from './SpotlightCard';

const privacyIcons = [
  <ShieldCheck className="w-6 h-6 text-[#FF7824]" aria-hidden="true" />,
  <FileText className="w-6 h-6 text-[#FF7824]" aria-hidden="true" />,
  <Trash2 className="w-6 h-6 text-[#FF7824]" aria-hidden="true" />,
  <EyeOff className="w-6 h-6 text-[#FF7824]" aria-hidden="true" />,
];

export const Privacy: React.FC = () => {
  return (
    <section 
      id="privacy" 
      aria-labelledby="privacy-heading"
      className="relative py-16 sm:py-24 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto w-full overflow-hidden"
    >
      {/* Background Subtle Orange Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[900px] h-[300px] opacity-20 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 94, 14, 0.3) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Eyebrow & Title */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 relative z-10"
      >
        <span className="text-[10px] sm:text-xs font-michroma uppercase tracking-[0.2em] text-[#FF7824] inline-block mb-3">
          {content.privacy.badge}
        </span>
        <h2 
          id="privacy-heading"
          className="font-exo font-bold text-white tracking-tight leading-[1.2] text-balance"
          style={{
            fontSize: 'clamp(1.85rem, 4vw + 0.2rem, 3.25rem)',
          }}
        >
          {content.privacy.headline}
        </h2>
      </motion.div>

      {/* 4 Strict DPDP Act Claims in Apple Glass Spotlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
        {content.privacy.claims.map((claim, index) => (
          <SpotlightCard
            key={claim.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[32px] p-7 sm:p-9 flex items-start gap-5 group"
          >
            <div className="w-13 h-13 rounded-2xl bg-[#FF5E0E]/15 border border-[#FF5E0E]/40 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#FF5E0E]/70 group-hover:bg-[#FF5E0E]/25 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
              {privacyIcons[index]}
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] font-michroma uppercase text-[#FF7824] tracking-widest mb-1.5 font-bold">
                DPDP PRINCIPLE 0{index + 1}
              </span>
              <h3 className="font-exo font-bold text-lg sm:text-xl text-white mb-2 group-hover:text-[#FFA870] transition-colors">
                {claim.title}
              </h3>
              <p className="font-figtree text-neutral-300 text-sm sm:text-base leading-relaxed">
                {claim.description}
              </p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};
