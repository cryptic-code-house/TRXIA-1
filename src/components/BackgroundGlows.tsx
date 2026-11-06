import React from 'react';

export const BackgroundGlows: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 w-full h-full max-w-full pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* 1. Full-Screen Edge-to-Edge Network Globe Background */}
      <div className="absolute inset-0 w-full h-[100dvh] opacity-35 sm:opacity-50 mix-blend-screen pointer-events-none overflow-hidden">
        <img
          src="/assets/network-globe.png"
          alt=""
          className="w-full h-full object-cover object-top network-globe-orange"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070606]/40 to-[#070606]" />
      </div>

      {/* 2. Primary Top Warm Glow */}
      <div 
        className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-[650px] rounded-full opacity-60 sm:opacity-75 blur-[140px] overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 94, 14, 0.32) 0%, rgba(255, 60, 0, 0.12) 45%, rgba(7, 6, 6, 0) 70%)',
        }}
      />

      {/* 3. Ambient Lateral Light Beams */}
      <div 
        className="absolute top-[20%] -left-[5%] w-[400px] sm:w-[900px] h-[900px] opacity-25 sm:opacity-35 blur-[150px] rotate-[-25deg] overflow-hidden"
        style={{
          background: 'radial-gradient(circle, rgba(255, 115, 29, 0.22) 0%, rgba(200, 50, 0, 0.05) 50%, transparent 80%)',
        }}
      />

      <div 
        className="absolute top-[50%] -right-[5%] w-[400px] sm:w-[900px] h-[900px] opacity-20 sm:opacity-30 blur-[160px] overflow-hidden"
        style={{
          background: 'radial-gradient(circle, rgba(255, 94, 14, 0.22) 0%, rgba(180, 40, 0, 0.04) 55%, transparent 75%)',
        }}
      />

      {/* 4. Subtle precision dot grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:40px_40px] opacity-35" />
    </div>
  );
};
