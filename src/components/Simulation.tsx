import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Radio, 
  Signal, 
  Wifi, 
  WifiOff, 
  CheckCircle, 
  AlertTriangle,
  Shield,
  Activity,
  ArrowRight,
  Send,
  Zap,
  Play,
  Pause,
  Terminal
} from 'lucide-react';
import { content } from '../data/content';

/**
 * Realistic Smartphone Frame Component (Apple iPhone / Titanium Style)
 */
interface PhoneProps {
  label: string;
  sublabel: string;
  role: string;
  battery: number;
  isActive: boolean;
  screenContent: React.ReactNode;
}

const RealisticPhone: React.FC<PhoneProps> = ({
  label,
  sublabel,
  role,
  battery,
  isActive,
  screenContent,
}) => {
  return (
    <motion.div 
      animate={{ scale: isActive ? 1.03 : 0.98, opacity: isActive ? 1 : 0.85 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center z-10"
    >
      {/* Outer Titanium Phone Hardware Frame */}
      <div className={`relative w-[230px] sm:w-[260px] h-[460px] rounded-[44px] p-3 bg-gradient-to-b from-[#2A2422] via-[#151110] to-[#251E1C] border-[3px] transition-all duration-500 ${
        isActive 
          ? 'border-[#FF7824] shadow-[0_0_50px_rgba(255,94,14,0.45),0_20px_50px_rgba(0,0,0,0.9)]' 
          : 'border-white/20 shadow-[0_16px_36px_rgba(0,0,0,0.8)]'
      }`}>
        
        {/* Hardware Side Buttons */}
        <div className="absolute -left-[5px] top-24 w-[3px] h-8 bg-neutral-600 rounded-l-sm" />
        <div className="absolute -left-[5px] top-36 w-[3px] h-8 bg-neutral-600 rounded-l-sm" />
        <div className="absolute -right-[5px] top-28 w-[3px] h-12 bg-neutral-600 rounded-r-sm" />

        {/* Inner Glass Display Screen */}
        <div className="relative w-full h-full rounded-[34px] bg-[#0A0808] border border-white/10 overflow-hidden flex flex-col justify-between p-3.5 select-none">
          
          {/* Dynamic Island / Speaker Pill */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full border border-white/10 flex items-center justify-end px-2 z-30">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF5E0E]/80 animate-pulse" />
          </div>

          {/* Status Bar */}
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-1 px-1 z-20">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <Signal className="w-2.5 h-2.5 text-neutral-400" />
              <div className="flex items-center gap-1 text-[9px]">
                <span className={battery <= 20 ? 'text-red-400 font-bold' : 'text-neutral-300'}>{battery}%</span>
                <div className="w-4 h-2 rounded-[2px] border border-neutral-400 p-[1px] flex items-center">
                  <div 
                    className={`h-full rounded-[1px] transition-all duration-300 ${battery <= 20 ? 'bg-red-500 animate-pulse' : 'bg-emerald-400'}`}
                    style={{ width: `${Math.min(battery, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* App Screen Content */}
          <div className="relative z-10 flex-1 flex flex-col justify-center items-center my-2 text-center">
            {screenContent}
          </div>

          {/* Hardware Home Indicator Bar */}
          <div className="w-24 h-1 bg-white/30 rounded-full mx-auto z-20" />
        </div>
      </div>

      {/* Device Info Caption */}
      <div className="text-center mt-3">
        <span className="text-[10px] font-michroma uppercase text-[#FF8A3D] tracking-wider block">
          {label}
        </span>
        <h4 className="font-exo font-bold text-white text-sm">{sublabel}</h4>
        <span className="text-[11px] text-neutral-400 font-figtree">{role}</span>
      </div>
    </motion.div>
  );
};

/**
 * Detailed Cellular Transmission Lattice Tower Graphic
 */
const RealisticCellTower: React.FC<{ active: boolean; pulseText: string }> = ({ active, pulseText }) => {
  return (
    <div className="relative flex flex-col items-center z-10">
      {active && (
        <>
          <div className="absolute -top-4 w-32 h-32 rounded-full border border-[#FF7824]/40 animate-ping pointer-events-none" />
          <div className="absolute -top-1 w-20 h-20 rounded-full border border-[#FF7824]/60 animate-pulse pointer-events-none" />
        </>
      )}

      <svg width="130" height="230" viewBox="0 0 120 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_24px_rgba(255,94,14,0.45)]">
        <line x1="60" y1="5" x2="60" y2="40" stroke="#FF5E0E" strokeWidth="2.5" />
        <circle cx="60" cy="6" r="3.5" fill="#FF5E0E" className="animate-pulse" />

        <rect x="42" y="38" width="6" height="22" rx="1.5" fill="#EAE5E2" stroke="#443E3B" />
        <rect x="72" y="38" width="6" height="22" rx="1.5" fill="#EAE5E2" stroke="#443E3B" />
        <line x1="48" y1="48" x2="72" y2="48" stroke="#888" strokeWidth="2" />

        <circle cx="60" cy="72" r="10" fill="#2A2422" stroke="#FF7824" strokeWidth="2" />
        <circle cx="60" cy="72" r="4" fill="#FF5E0E" />

        <line x1="52" y1="60" x2="25" y2="210" stroke="#DDD" strokeWidth="2.5" />
        <line x1="68" y1="60" x2="95" y2="210" stroke="#DDD" strokeWidth="2.5" />

        <line x1="50" y1="85" x2="70" y2="85" stroke="#AAA" strokeWidth="1.5" />
        <line x1="45" y1="115" x2="75" y2="115" stroke="#AAA" strokeWidth="1.5" />
        <line x1="38" y1="150" x2="82" y2="150" stroke="#AAA" strokeWidth="1.5" />
        <line x1="30" y1="185" x2="90" y2="185" stroke="#AAA" strokeWidth="1.5" />

        <line x1="50" y1="60" x2="70" y2="85" stroke="#777" strokeWidth="1" />
        <line x1="70" y1="60" x2="50" y2="85" stroke="#777" strokeWidth="1" />
        <line x1="50" y1="85" x2="75" y2="115" stroke="#777" strokeWidth="1" />
        <line x1="70" y1="85" x2="45" y2="115" stroke="#777" strokeWidth="1" />
        <line x1="45" y1="115" x2="82" y2="150" stroke="#777" strokeWidth="1" />
        <line x1="75" y1="115" x2="38" y2="150" stroke="#777" strokeWidth="1" />
        <line x1="38" y1="150" x2="90" y2="185" stroke="#777" strokeWidth="1" />
        <line x1="82" y1="150" x2="30" y2="185" stroke="#777" strokeWidth="1" />

        <rect x="18" y="210" width="84" height="6" rx="2" fill="#555" />
      </svg>

      <span className="text-[11px] font-mono text-[#FFA870] mt-2 block font-semibold">{pulseText}</span>
    </div>
  );
};

/**
 * Detailed Datacenter Server Rack Component
 */
const RealisticServerRack: React.FC<{ active: boolean; label: string }> = ({ active, label }) => {
  return (
    <div className="relative flex flex-col items-center z-10">
      <div className={`w-[200px] sm:w-[230px] h-[230px] rounded-2xl p-3 bg-gradient-to-b from-[#1C1715] to-[#0E0B0A] border-[2px] transition-all duration-300 ${
        active 
          ? 'border-[#FF7824] shadow-[0_0_40px_rgba(255,94,14,0.4)]' 
          : 'border-white/15 shadow-xl'
      } flex flex-col justify-between`}>
        
        {/* Top Unit: Master Gateway Unit */}
        <div className="p-2 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] font-mono text-neutral-300">TRXIA-GW-01</span>
          </div>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7824]" />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          </div>
        </div>

        {/* Blade Server Chassis 1 */}
        <div className="p-2 rounded-lg bg-[#14100F] border border-white/5 space-y-1.5">
          <div className="flex justify-between items-center text-[8px] font-mono text-neutral-400">
            <span>BLADE A1: TELEMETRY</span>
            <span className="text-emerald-400">ONLINE</span>
          </div>
          <div className="grid grid-cols-6 gap-1">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`h-2 rounded-[1px] transition-colors ${active && i % 2 === 0 ? 'bg-[#FF5E0E] animate-pulse' : 'bg-neutral-700'}`} />
            ))}
          </div>
        </div>

        {/* Blade Server Chassis 2 */}
        <div className="p-2 rounded-lg bg-[#14100F] border border-white/5 space-y-1.5">
          <div className="flex justify-between items-center text-[8px] font-mono text-neutral-400">
            <span>BLADE B2: ROUTING</span>
            <span className="text-blue-400">SYNC</span>
          </div>
          <div className="grid grid-cols-6 gap-1">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`h-2 rounded-[1px] transition-colors ${active && i > 2 ? 'bg-blue-400 animate-pulse' : 'bg-neutral-700'}`} />
            ))}
          </div>
        </div>

        {/* Fiber Optic Patch Bay */}
        <div className="p-1.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between px-2 text-[9px] font-mono text-neutral-400">
          <span>OPTICAL PORTS</span>
          <div className="flex gap-1.5">
            <span className="w-2 h-1 bg-emerald-400 rounded-sm" />
            <span className="w-2 h-1 bg-[#FF7824] rounded-sm" />
            <span className="w-2 h-1 bg-blue-400 rounded-sm" />
          </div>
        </div>
      </div>

      <span className="text-[11px] font-mono text-[#FFA870] mt-2 block font-semibold">{label}</span>
    </div>
  );
};

export const Simulation: React.FC = () => {
  const [mode, setMode] = useState<'crowd' | 'isolation'>('crowd');
  
  // Crowd Simulation State
  const [batteryLevel, setBatteryLevel] = useState<number>(18);
  const [crowdStep, setCrowdStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  // Isolation Simulation State
  const [networkAvailable, setNetworkAvailable] = useState<boolean>(true);
  const [isolationSignalStep, setIsolationSignalStep] = useState<number>(1);

  // Auto-progress Crowd Simulation
  useEffect(() => {
    if (mode !== 'crowd' || !isSimulating) return;

    const timer = setInterval(() => {
      setCrowdStep((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [mode, isSimulating]);

  // Auto-progress Isolation Signal Travelling
  useEffect(() => {
    if (mode !== 'isolation' || !isSimulating) return;

    const timer = setInterval(() => {
      setIsolationSignalStep((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 2800);

    return () => clearInterval(timer);
  }, [mode, isSimulating]);

  const handleModeChange = (newMode: 'crowd' | 'isolation') => {
    setMode(newMode);
    setCrowdStep(1);
    setIsolationSignalStep(1);
  };

  const triggerBurst = () => {
    if (mode === 'crowd') {
      setCrowdStep(1);
    } else {
      setIsolationSignalStep(1);
    }
    setIsSimulating(true);
  };

  return (
    <section 
      id="simulation" 
      aria-labelledby="simulation-heading"
      className="relative py-16 sm:py-24 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto w-full overflow-hidden"
    >
      {/* Background Radiance */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1200px] h-[550px] opacity-25 blur-[150px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 94, 14, 0.35) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Header & Tagline */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 relative z-10"
      >
        <span className="text-[10px] sm:text-xs font-michroma uppercase tracking-[0.2em] text-[#FF7824] inline-block mb-3">
          {content.simulation.badge}
        </span>
        <h2 
          id="simulation-heading"
          className="font-exo font-bold text-white tracking-tight leading-[1.2] text-balance mb-3"
          style={{
            fontSize: 'clamp(1.85rem, 4vw + 0.2rem, 3.25rem)',
          }}
        >
          {content.simulation.headline}
        </h2>
        
        {/* Prominent Safety Tagline */}
        <p className="font-exo font-semibold text-base sm:text-xl text-[#FFA870] tracking-wide">
          &ldquo;{content.simulation.tagline}&rdquo;
        </p>
      </motion.div>

      {/* Apple-style Recessed Segmented Mode Toggle with Sliding Glass Pill */}
      <div className="flex justify-center mb-10 sm:mb-14 relative z-10">
        <div 
          role="group"
          aria-label="Simulation Mode Selector"
          className="relative inline-flex p-1.5 rounded-full apple-glass-track w-full max-w-md shadow-2xl border border-white/15"
        >
          {/* Button 1: Crowd Source Mode */}
          <button
            type="button"
            onClick={() => handleModeChange('crowd')}
            aria-pressed={mode === 'crowd'}
            className={`relative flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs sm:text-sm font-semibold font-jakarta transition-colors duration-200 min-h-[48px] z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              mode === 'crowd' ? 'text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            {mode === 'crowd' && (
              <motion.span
                layoutId="simModePill"
                className="absolute inset-0 rounded-full apple-glass-btn-primary shadow-[0_4px_24px_rgba(255,94,14,0.6)]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <Radio className="w-4 h-4 shrink-0 relative z-10" />
            <span className="relative z-10">Crowd Source Mode</span>
          </button>

          {/* Button 2: Isolation Mode */}
          <button
            type="button"
            onClick={() => handleModeChange('isolation')}
            aria-pressed={mode === 'isolation'}
            className={`relative flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs sm:text-sm font-semibold font-jakarta transition-colors duration-200 min-h-[48px] z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              mode === 'isolation' ? 'text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            {mode === 'isolation' && (
              <motion.span
                layoutId="simModePill"
                className="absolute inset-0 rounded-full apple-glass-btn-primary shadow-[0_4px_24px_rgba(255,94,14,0.6)]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <Signal className="w-4 h-4 shrink-0 relative z-10" />
            <span className="relative z-10">Isolation Mode</span>
          </button>
        </div>
      </div>

      {/* SIMULATION CANVAS WITH APPLE GLASS PANEL */}
      <div className="apple-glass-panel rounded-[36px] p-6 sm:p-10 lg:p-12 border border-white/20 relative z-10 shadow-2xl">
        
        {/* ========================================================================= */}
        {/* MODE A: CROWD SOURCE (Realistic Phones with Signals Travelling)          */}
        {/* ========================================================================= */}
        {mode === 'crowd' && (
          <div className="flex flex-col gap-8">
            
            {/* Top Interactive Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl apple-glass-card">
              <div className="flex items-center gap-3">
                <span className="text-xs font-michroma uppercase text-neutral-300">Phase:</span>
                {/* Step Scrubber Pills */}
                <div className="flex gap-1.5">
                  {[
                    { step: 1, label: '01: Beacon TX' },
                    { step: 2, label: '02: Peer Relay' },
                    { step: 3, label: '03: Delivered' },
                  ].map((s) => (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => setCrowdStep(s.step)}
                      className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                        crowdStep === s.step 
                          ? 'apple-glass-btn-primary text-white font-bold shadow-md' 
                          : 'apple-glass-pill text-neutral-400 hover:text-white'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Broadcaster Battery Threshold Interactive Slider & Play/Pause */}
              <div className="flex items-center gap-3 flex-wrap">
                <label htmlFor="battery-slider" className="text-xs font-figtree text-neutral-200">
                  Battery: <strong className={batteryLevel <= 20 ? 'text-[#FF7824]' : 'text-neutral-400'}>{batteryLevel}%</strong>
                </label>
                <input
                  id="battery-slider"
                  type="range"
                  min="5"
                  max="100"
                  value={batteryLevel}
                  onChange={(e) => setBatteryLevel(Number(e.target.value))}
                  className="w-24 sm:w-32 accent-[#FF5E0E] cursor-pointer"
                  aria-label="Set Phone A battery level"
                />

                {/* Trigger Emergency Burst Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={triggerBurst}
                  className="p-2 px-3.5 rounded-full apple-glass-btn-primary glass-shimmer text-xs flex items-center gap-1.5 font-semibold text-white shadow-md"
                >
                  <Zap className="w-3.5 h-3.5 text-white" />
                  <span>Trigger Burst</span>
                </motion.button>

                {/* Play / Pause Toggle */}
                <button
                  type="button"
                  onClick={() => setIsSimulating(!isSimulating)}
                  className="p-2 px-3 rounded-full apple-glass-btn-secondary text-xs flex items-center gap-1.5"
                  aria-label={isSimulating ? "Pause simulation" : "Play simulation"}
                >
                  {isSimulating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isSimulating ? 'Playing' : 'Paused'}</span>
                </button>
              </div>
            </div>

            {/* 3 REALISTIC PHONES WITH ACTIVE PHYSICAL SIGNALS TRAVELLING BETWEEN THEM */}
            <div className="relative pt-6 pb-2">
              
              {/* DESKTOP ANIMATED SIGNAL PATHWAYS (A ➔ B ➔ C) */}
              <div className="hidden md:block absolute top-[210px] left-[15%] right-[15%] h-[40px] pointer-events-none z-20">
                {/* Pathway 1: Device A to Device B */}
                <div className="absolute left-0 w-[45%] top-1/2 -translate-y-1/2 h-1 bg-white/10 rounded-full overflow-hidden">
                  {crowdStep === 1 && (
                    <div 
                      className="h-full bg-gradient-to-r from-transparent via-[#FF7824] to-white rounded-full w-[45%] shadow-[0_0_15px_#FF5E0E] animate-pulse"
                      style={{
                        animation: 'travelSignal 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                      }}
                    />
                  )}
                </div>

                {/* Signal In-Transit Indicator (A ➔ B) */}
                {crowdStep === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-[-26px] left-[18%] px-2.5 py-1 rounded-full apple-glass-pill text-[10px] font-mono text-[#FFA870] flex items-center gap-1.5 shadow-lg border border-[#FF7824]/40"
                  >
                    <Radio className="w-3 h-3 text-[#FF7824] animate-spin" />
                    <span>BLE Wave In Transit</span>
                    <ArrowRight className="w-3 h-3 text-[#FF7824]" />
                  </motion.div>
                )}

                {/* Pathway 2: Device B to Device C */}
                <div className="absolute right-0 w-[45%] top-1/2 -translate-y-1/2 h-1 bg-white/10 rounded-full overflow-hidden">
                  {crowdStep === 2 && (
                    <div 
                      className="h-full bg-gradient-to-r from-transparent via-blue-400 to-white rounded-full w-[45%] shadow-[0_0_15px_#3B82F6] animate-pulse"
                      style={{
                        animation: 'travelSignal 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                      }}
                    />
                  )}
                </div>

                {/* Signal In-Transit Indicator (B ➔ C) */}
                {crowdStep === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-[-26px] right-[18%] px-2.5 py-1 rounded-full apple-glass-pill text-[10px] font-mono text-blue-300 flex items-center gap-1.5 shadow-lg border border-blue-400/40"
                  >
                    <Send className="w-3 h-3 text-blue-400" />
                    <span>GPS Telemetry In Transit</span>
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                  </motion.div>
                )}
              </div>

              {/* THREE PHONES GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
                
                {/* PHONE A: BROADCASTER */}
                <RealisticPhone
                  label="DEVICE A"
                  sublabel="Broadcaster Phone"
                  role="Critical Battery"
                  battery={batteryLevel}
                  isActive={crowdStep === 1}
                  screenContent={
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-[#FF5E0E]/40 animate-ping" />
                        <div className="w-12 h-12 rounded-full bg-[#FF5E0E]/20 border border-[#FF5E0E] flex items-center justify-center text-[#FF7824]">
                          <Radio className="w-6 h-6 animate-pulse" />
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-[#FFA870] font-bold">
                        {batteryLevel <= 20 ? 'BLE BEACON TX' : 'STANDBY'}
                      </span>
                      <div className="text-[9px] font-mono text-neutral-300 bg-black/60 px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-[#FF7824]" />
                        <span>Vastly Reduced Drain</span>
                      </div>
                    </div>
                  }
                />

                {/* PHONE B: LISTENER */}
                <RealisticPhone
                  label="DEVICE B"
                  sublabel="Peer Listener Phone"
                  role="Healthy Battery"
                  battery={88}
                  isActive={crowdStep === 2}
                  screenContent={
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-blue-500/40 animate-ping" />
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-400">
                          <Activity className="w-6 h-6 animate-pulse" />
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-blue-300 font-bold">
                        {crowdStep === 2 ? 'OFFLOAD GPS ACQUIRED' : 'LISTENING ON BLE'}
                      </span>
                      <div className="text-[9px] font-mono text-neutral-300 bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
                        Routing to Database
                      </div>
                    </div>
                  }
                />

                {/* PHONE C: EMERGENCY RECIPIENT */}
                <RealisticPhone
                  label="DEVICE C"
                  sublabel="Emergency Contact"
                  role="Trusted Recipient"
                  battery={95}
                  isActive={crowdStep === 3}
                  screenContent={
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-emerald-500/40 animate-ping" />
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
                          <Shield className="w-6 h-6 animate-pulse" />
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-300 font-bold">
                        {crowdStep === 3 ? 'ALERT RECEIVED' : 'LIFELINE ACTIVE'}
                      </span>
                      <div className="text-[9px] font-mono text-neutral-300 bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
                        Exact Location Verified
                      </div>
                    </div>
                  }
                />

              </div>
            </div>

            {/* LIVE CRYPTOGRAPHIC TELEMETRY HUD BAR */}
            <div className="p-3.5 sm:p-4 rounded-2xl apple-glass-card border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#FF7824]" />
                <span className="text-neutral-300">TELEMETRY PAYLOAD:</span>
                <span className="text-[#FFA870]">0x7F 0x9B 0x33 0xA1 (Encrypted)</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-neutral-400">
                <span>HOP: <strong className="text-white">{crowdStep}/3</strong></span>
                <span>CIPHER: <strong className="text-emerald-400">AES-GCM-256</strong></span>
                <span>RTT: <strong className="text-white">1.2ms</strong></span>
              </div>
            </div>

            {/* Power Metrics Comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-2xl apple-glass-card">
                <div className="flex justify-between items-center mb-1 text-xs">
                  <span className="text-neutral-400">Standard Continuous GPS</span>
                  <span className="text-red-400 font-mono font-bold">Rapid Battery Drain</span>
                </div>
                <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[94%]" />
                </div>
              </div>

              <div className="p-4 rounded-2xl apple-glass-card">
                <div className="flex justify-between items-center mb-1 text-xs">
                  <span className="text-neutral-400">TRXIA BLE Broadcast</span>
                  <span className="text-emerald-400 font-mono font-bold">Vastly Reduced Energy</span>
                </div>
                <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 w-[5%]" />
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* MODE B: ISOLATION (Phone -> Realistic Cell Tower -> Datacenter Server)    */}
        {/* ========================================================================= */}
        {mode === 'isolation' && (
          <div className="flex flex-col gap-8">
            
            {/* Top Interactive Scenario Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl apple-glass-card">
              <div>
                <span className="text-xs font-michroma uppercase text-neutral-300 block mb-0.5">
                  Scenario Selection:
                </span>
                <p className="text-xs text-neutral-400 font-figtree">
                  Observe signals travelling when cellular network is connected vs total dead zone.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setNetworkAvailable(true)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold font-jakarta transition-all min-h-[40px] ${
                    networkAvailable 
                      ? 'apple-glass-btn-primary text-white font-bold' 
                      : 'apple-glass-btn-secondary text-neutral-400'
                  }`}
                >
                  <Wifi className="w-3.5 h-3.5" />
                  <span>Network Available</span>
                </button>

                <button
                  type="button"
                  onClick={() => setNetworkAvailable(false)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold font-jakarta transition-all min-h-[40px] ${
                    !networkAvailable 
                      ? 'apple-glass-btn-primary text-white font-bold' 
                      : 'apple-glass-btn-secondary text-neutral-400'
                  }`}
                >
                  <WifiOff className="w-3.5 h-3.5" />
                  <span>No Network (Dead Zone)</span>
                </button>
              </div>
            </div>

            {/* THREE PROPER STRUCTURES WITH SIGNALS TRAVELLING BETWEEN THEM */}
            <div className="relative pt-6 pb-2">
              
              {/* DESKTOP ACTIVE SIGNAL PATHWAYS */}
              <div className="hidden lg:block absolute top-[180px] left-[15%] right-[15%] h-[40px] pointer-events-none z-20">
                {/* Pathway 1: Phone to Tower */}
                <div className="absolute left-0 w-[45%] top-1/2 -translate-y-1/2 h-1 bg-white/10 rounded-full overflow-hidden">
                  {isolationSignalStep === 1 && (
                    <div 
                      className="h-full bg-gradient-to-r from-transparent via-[#FF7824] to-white rounded-full w-[45%] shadow-[0_0_15px_#FF5E0E]"
                      style={{ animation: 'travelSignal 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}
                    />
                  )}
                </div>

                {/* Pathway 2: Tower to Server Rack */}
                <div className="absolute right-0 w-[45%] top-1/2 -translate-y-1/2 h-1 bg-white/10 rounded-full overflow-hidden">
                  {networkAvailable ? (
                    isolationSignalStep === 2 && (
                      <div 
                        className="h-full bg-gradient-to-r from-transparent via-emerald-400 to-white rounded-full w-[45%] shadow-[0_0_15px_#10B981]"
                        style={{ animation: 'travelSignal 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}
                      />
                    )
                  ) : (
                    <div className="h-full bg-gradient-to-r from-transparent via-amber-400 to-white rounded-full w-[45%] shadow-[0_0_15px_#F59E0B]" />
                  )}
                </div>
              </div>

              {/* THREE STRUCTURES GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-items-center">
                
                {/* 1. REALISTIC PHONE IN ISOLATION */}
                <RealisticPhone
                  label="NODE 1"
                  sublabel="Isolated Phone"
                  role="Reads Hardware Cell ID"
                  battery={14}
                  isActive={isolationSignalStep === 1}
                  screenContent={
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[10px] font-mono text-[#FFA870] uppercase">CELL ID CAPTURE</span>
                      <div className="p-2 rounded bg-black/60 border border-white/10 text-[9px] font-mono text-neutral-300">
                        LAC: 404 &bull; CID: 18294
                      </div>
                      <span className="text-[9px] font-figtree text-neutral-400">Zero GPS drain</span>
                    </div>
                  }
                />

                {/* 2. REALISTIC CELL TOWER STRUCTURE */}
                <div className="flex flex-col items-center text-center">
                  <RealisticCellTower 
                    active={true} 
                    pulseText={networkAvailable ? 'Cell Tower: Signal Active' : 'Cell Tower: Dead Zone / Offline'} 
                  />
                  <span className="text-xs font-michroma uppercase text-neutral-400 mt-3 block">
                    TRANSMISSION TOWER
                  </span>
                  <p className="text-xs text-neutral-300 font-figtree max-w-[220px]">
                    Captures baseband hardware cell-site telemetry.
                  </p>
                </div>

                {/* 3. REALISTIC SERVER RACK STRUCTURE */}
                <div className="flex flex-col items-center text-center">
                  <RealisticServerRack 
                    active={networkAvailable && isolationSignalStep >= 2} 
                    label={networkAvailable ? 'TRXIA Cloud Rack: Synchronized' : 'TRXIA Cloud Rack: Standby SMS Gateway'} 
                  />
                  <span className="text-xs font-michroma uppercase text-neutral-400 mt-3 block">
                    CENTRAL CLOUD GATEWAY
                  </span>
                  <p className="text-xs text-neutral-300 font-figtree max-w-[220px]">
                    {networkAvailable 
                      ? 'Encrypted telemetry server routing alert to emergency contacts.'
                      : 'Awaiting network reconnection or autonomous SMS beacon.'}
                  </p>
                </div>

              </div>
            </div>

            {/* LIVE SIGNAL ROUTING LOG */}
            <div className="text-center pt-2">
              {networkAvailable ? (
                <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-5 rounded-3xl apple-glass-card border border-emerald-500/40 text-left max-w-2xl mx-auto">
                  <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <h5 className="font-exo font-bold text-white text-base">Network Active: Compressed Telemetry Dispatched</h5>
                    <p className="font-figtree text-neutral-300 text-xs sm:text-sm">
                      Signal travels from Phone ➔ Cell Tower ➔ Cloud Server Rack. Momentary GPS fix is captured, encapsulated into a minimal telemetry packet, and routed directly to emergency contacts.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-5 rounded-3xl apple-glass-card border border-[#FF5E0E]/40 text-left max-w-2xl mx-auto">
                  <AlertTriangle className="w-6 h-6 text-[#FF7824] shrink-0" />
                  <div>
                    <h5 className="font-exo font-bold text-white text-base">Dead Zone: Autonomous SMS Fallback Engaged</h5>
                    <p className="font-figtree text-neutral-300 text-xs sm:text-sm">
                      Data pipeline to server is paused in autonomous queue. Phone switches to cellular SMS frequency and fires an emergency SOS containing the last recorded Cell ID.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
