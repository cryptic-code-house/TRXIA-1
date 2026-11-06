import React from 'react';
import { BackgroundGlows } from './components/BackgroundGlows';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { Simulation } from './components/Simulation';
import { Privacy } from './components/Privacy';
import { Founders } from './components/Founders';
import { ClosureFooter } from './components/ClosureFooter';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-[100dvh] bg-[#080707] text-[#EDEAE7] font-figtree selection:bg-[#FF5E0E]/30 selection:text-white overflow-x-hidden">
      {/* Fixed Ambient Glow & Streaks */}
      <BackgroundGlows />

      {/* 1 & 2. Top Bar & Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main id="main-content" className="relative z-10 overflow-x-hidden">
        {/* 3. Hook (Hero) */}
        <Hero />

        {/* 4. Problem */}
        <Problem />

        {/* 5. Solution */}
        <Solution />

        {/* 6. How It Works */}
        <HowItWorks />

        {/* 7. Simulation */}
        <Simulation />

        {/* 8. Privacy */}
        <Privacy />

        {/* 9. Meet The Founders */}
        <Founders />
      </main>

      {/* 10. Closure Tag & Footer */}
      <ClosureFooter />
    </div>
  );
};

export default App;
