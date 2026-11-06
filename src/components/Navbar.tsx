import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { content } from '../data/content';
import { TrxiaLogo, TrxiaWordmark } from './BrandIcons';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section based on scroll position
      const sections = ['problem', 'solution', 'how-it-works', 'simulation', 'privacy', 'founders'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
          menuBtnRef.current?.focus();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Dynamic Top Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FF5E0E] via-[#FF8A3D] to-[#FFA870] z-50 origin-left shadow-[0_0_12px_rgba(255,94,14,0.85)] pointer-events-none"
        style={{ scaleX: scrollYProgress }} 
      />

      <motion.header 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-40 w-full pt-2.5 sm:pt-4 px-2.5 sm:px-8 lg:px-12 pointer-events-none"
      >
        <div className="max-w-[1720px] mx-auto flex items-center justify-between pointer-events-auto">
          
          {/* Brand Lockup: Large, Bold & Noticeable TRXIA Logo + Wordmark */}
          <motion.a 
            href="#" 
            aria-label="TRXIA Home"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 sm:gap-3.5 py-1.5 sm:py-2.5 px-3 sm:px-5 rounded-full apple-glass-pill hover:border-[#FF5E0E]/70 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5E0E] min-h-[44px] sm:min-h-[52px] shadow-xl relative overflow-hidden"
          >
            <TrxiaLogo size={36} glow={true} className="sm:w-[48px] sm:h-[48px] transition-transform group-hover:scale-105 shrink-0" />
            <TrxiaWordmark height={24} className="sm:h-[32px] brightness-125 contrast-125 tracking-wider" />
          </motion.a>

          {/* Desktop Apple-Grade Floating Glass Pill Nav with Sliding Active Indicator */}
          <nav 
            aria-label="Main Navigation"
            className={`hidden lg:flex items-center gap-1 xl:gap-2 px-4 lg:px-6 py-2 rounded-full apple-glass-pill transition-all duration-300 relative ${
              scrolled ? 'shadow-[0_20px_45px_rgba(0,0,0,0.9)] border-white/25' : 'border-white/15'
            }`}
          >
            {content.navigation.links.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs xl:text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5E0E] z-10 ${
                    isActive ? 'text-white font-semibold' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {/* Sliding Pill Indicator for Active Nav Item */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-white/15 border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Apple-style Primary Glass CTA Button with Shimmer */}
            <motion.a
              href={content.navigation.actionButton.href}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold font-jakarta text-white apple-glass-btn-primary glass-shimmer ambient-sheen-sweep px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[46px] group"
            >
              <span>{content.navigation.actionButton.text}</span>
              <ArrowUpRight className="w-4 h-4 opacity-90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </motion.a>

            {/* Mobile Menu Hamburger Button */}
            <motion.button
              ref={menuBtnRef}
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full apple-glass-pill text-neutral-200 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5E0E]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Glass Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              ref={drawerRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden fixed inset-0 top-[72px] z-50 bg-[#070606]/95 backdrop-blur-2xl border-t border-white/15 p-6 flex flex-col justify-between overflow-y-auto pointer-events-auto safe-pb"
            >
              <div className="flex flex-col space-y-3 pt-2">
                <span className="text-[11px] font-michroma uppercase tracking-widest text-[#FF7824] px-3 pb-1">
                  Navigation
                </span>
                {content.navigation.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between text-base font-medium text-neutral-200 hover:text-white hover:bg-white/10 py-3.5 px-4 rounded-2xl apple-glass-pill border border-transparent hover:border-white/15 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5E0E] min-h-[48px]"
                  >
                    <span>{link.label}</span>
                    <span className="text-neutral-500 text-xs">→</span>
                  </a>
                ))}
              </div>

              <div className="pt-6 pb-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={content.navigation.actionButton.href}
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 text-sm font-semibold font-jakarta text-white apple-glass-btn-primary py-3.5 px-6 rounded-full transition-all min-h-[48px]"
                >
                  <span>{content.navigation.actionButton.text}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-center text-xs text-neutral-400 font-figtree">
                  {content.brand.tagline}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
