import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, UserCheck, ExternalLink } from 'lucide-react';
import { content } from '../data/content';
import { SpotlightCard } from './SpotlightCard';

export const Founders: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <section 
      id="founders" 
      aria-labelledby="founders-heading"
      className="relative py-16 sm:py-24 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto w-full overflow-hidden"
    >
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1000px] h-[400px] opacity-20 blur-[130px] pointer-events-none"
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
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 relative z-10"
      >
        <span className="text-[10px] sm:text-xs font-michroma uppercase tracking-[0.2em] text-[#FF7824] inline-block mb-3">
          {content.founders.badge}
        </span>
        <h2 
          id="founders-heading"
          className="font-exo font-bold text-white tracking-tight leading-[1.2] text-balance"
          style={{
            fontSize: 'clamp(1.85rem, 4vw + 0.2rem, 3.25rem)',
          }}
        >
          {content.founders.headline}
        </h2>
      </motion.div>

      {/* Founders Profile Cards in Apple Glass Style with 3D Tilt & Cursor Spotlight */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12 sm:mb-16 relative z-10">
        {content.founders.members.map((founder, index) => (
          <SpotlightCard
            key={founder.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[32px] p-7 flex items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FF5E0E]/15 border border-[#FF5E0E]/40 flex items-center justify-center text-[#FF7824] shrink-0 group-hover:scale-110 group-hover:border-[#FF7824] transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
              <UserCheck className="w-7 h-7" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-michroma uppercase px-3 py-0.5 rounded-full apple-glass-pill text-[#FFA870] font-bold border border-[#FF7824]/30">
                  {founder.title}
                </span>
              </div>
              <h3 className="font-exo font-bold text-xl text-white group-hover:text-[#FFA870] transition-colors">
                {founder.name}
              </h3>
              <p className="text-xs sm:text-sm font-figtree text-neutral-300">
                {founder.role}
              </p>
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* 16:9 Apple Glass-Framed Video Player Container */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="relative rounded-[36px] overflow-hidden apple-glass-panel shadow-[0_24px_60px_rgba(0,0,0,0.95)] aspect-video group border border-white/20">
          
          {!isPlaying ? (
            /* Custom Glassmorphic Poster & Interactive Apple Glass Play Button */
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none cursor-pointer"
              style={{
                background: 'radial-gradient(circle at center, rgba(32, 22, 18, 0.92) 0%, rgba(10, 8, 7, 0.98) 100%)',
              }}
              onClick={() => setIsPlaying(true)}
              role="button"
              tabIndex={0}
              aria-label="Play Founder's Introduction Video"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsPlaying(true);
                }
              }}
            >
              {/* Subtle Poster Grid & Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
              <div 
                className="absolute w-72 h-72 rounded-full opacity-45 blur-[80px] pointer-events-none group-hover:scale-125 transition-transform duration-700"
                style={{
                  background: 'radial-gradient(circle, #FF5E0E 0%, transparent 70%)',
                }}
              />

              {/* Large Apple-grade Glowing Glass Play Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                type="button"
                className="relative z-10 w-22 h-22 sm:w-26 sm:h-26 rounded-full apple-glass-btn-primary glass-shimmer ambient-sheen-sweep text-white flex items-center justify-center shadow-[0_0_50px_rgba(255,94,14,0.7)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
                aria-label="Play Video"
              >
                <Play className="w-9 h-9 sm:w-11 sm:h-11 translate-x-1 fill-white" />
              </motion.button>

              <div className="relative z-10 mt-6">
                <span className="text-[11px] font-michroma uppercase tracking-[0.2em] text-[#FFA870] block mb-1">
                  {content.founders.video.captionsLabel}
                </span>
                <h4 className="font-exo font-bold text-lg sm:text-2xl text-white">
                  {content.founders.video.title}
                </h4>
                <p className="text-xs text-neutral-400 mt-2 font-figtree">
                  Click to stream system architecture overview
                </p>
              </div>
            </div>
          ) : (
            /* Live Embedded YouTube Frame */
            <iframe
              src={content.founders.video.embedUrl}
              title={content.founders.video.title}
              className="w-full h-full border-0 rounded-[36px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}

        </div>

        {/* Video Direct Link pill */}
        <div className="text-center mt-5">
          <motion.a
            href={content.founders.video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-[#FFA870] px-4 py-2 rounded-full apple-glass-pill transition-all border border-white/10"
          >
            <span>Watch directly on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
