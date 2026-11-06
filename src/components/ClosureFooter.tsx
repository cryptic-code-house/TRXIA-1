import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, ArrowUp, Shield } from 'lucide-react';
import { content } from '../data/content';
import { TrxiaLogo, TrxiaWordmark } from './BrandIcons';

export const ClosureFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 sm:pt-24 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto w-full overflow-hidden">
      
      {/* Background Soft Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85vw] max-w-[1000px] h-[350px] opacity-20 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 94, 14, 0.4) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Main Apple Glass Enclosure */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="apple-glass-panel rounded-[40px] p-8 sm:p-12 lg:p-16 relative z-10 shadow-2xl border border-white/15"
      >
        
        {/* CLOSING TAGLINE SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-michroma uppercase tracking-[0.2em] text-[#FF7824] inline-block mb-3">
            MISSION DIRECTIVE
          </span>
          <h2 
            className="font-exo font-bold text-white tracking-tight leading-[1.18] text-balance mb-4"
            style={{
              fontSize: 'clamp(2rem, 4.2vw + 0.3rem, 3.5rem)',
            }}
          >
            &ldquo;{content.closure.tagline}&rdquo;
          </h2>
        </div>

        {/* Brand Lockup & Contact / Social Grid */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10">
          
          {/* Large, Bold & Noticeable Footer Brand Lockup */}
          <motion.a 
            href="#" 
            aria-label="TRXIA Home"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-4 sm:gap-5 py-3 px-6 sm:px-8 rounded-full apple-glass-pill hover:border-[#FF5E0E]/70 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5E0E] min-h-[64px] shadow-2xl relative overflow-hidden"
          >
            <TrxiaLogo size={62} glow={true} className="sm:w-[72px] sm:h-[72px] transition-transform group-hover:scale-105 shrink-0" />
            <TrxiaWordmark height={38} className="sm:h-[46px] brightness-125 contrast-125 tracking-wider" />
          </motion.a>

          {/* Contact & Social Links in Apple Glass Pills with Magnetic Springs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Contact Email */}
            <motion.a
              href={`mailto:${content.closure.contactEmail}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full apple-glass-pill text-neutral-200 hover:text-white hover:border-[#FF5E0E]/60 transition-all text-xs sm:text-sm font-medium min-h-[46px] shadow-lg"
            >
              <Mail className="w-4 h-4 text-[#FF7824]" aria-hidden="true" />
              <span>{content.closure.contactEmail}</span>
            </motion.a>

            {/* Instagram Link */}
            <motion.a
              href={content.closure.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow TRXIA on Instagram (opens in a new tab)"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full apple-glass-pill text-neutral-200 hover:text-white hover:border-[#FF5E0E]/60 transition-all text-xs sm:text-sm font-medium min-h-[46px] shadow-lg"
            >
              <Instagram className="w-4 h-4 text-[#FF7824]" aria-hidden="true" />
              <span>@trxia.co</span>
            </motion.a>

            {/* Back to Top Button */}
            <motion.button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-full apple-glass-pill hover:border-[#FF5E0E]/60 flex items-center justify-center text-neutral-300 hover:text-white transition-all min-h-[46px] min-w-[46px] shadow-lg group"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </motion.button>
          </div>

        </div>

        {/* Legal Disclaimer & DPDP Act Reference */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <p>{content.closure.copyright}</p>
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#FF7824]" />
            <span>Digital Personal Data Protection Act, 2023 Compliant</span>
          </div>
        </div>

      </motion.div>
    </footer>
  );
};
