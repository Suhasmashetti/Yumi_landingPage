import React from 'react';
import AnimatedShape from '../ui/AnimatedShape';
import FeatureCard from '../ui/FeatureCard';

const ConsumerPage = () => (
  <div className="min-h-screen flex flex-col relative text-white">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatedShape size="w-72 h-72" position="-top-36 -right-36" delay={0} />
      <AnimatedShape size="w-48 h-48" position="-bottom-24 -left-24" delay={2} />
      <AnimatedShape size="w-36 h-36" position="top-1/2 right-1/5" delay={4} />
    </div>

    <header className="flex justify-between items-center p-8 md:p-12 relative z-10">
      <div className="text-3xl font-bold Display text-[#C9F299]">Yumi Finance </div>
      <nav className="hidden md:flex">
        <a
          href="/merchant"
          className="text-[#6C6C6C] hover:text-white transition-all duration-300 hover:-translate-y-1"
        >
          For Merchants ↗
        </a>
      </nav>
    </header>

    <main className="flex-1 flex items-center justify-center text-center px-8 relative z-10">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
          Buy Now, <span className="text-[#C9F299]">Pay Later</span>  for the<br />Next Generation of Money
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-[#6C6C6C]">
          4 payments • 0% interest • <span className="text-[#C9F299]">Earn</span> while you shop
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <FeatureCard icon="💳" title="Pay with wallet" description="Use your wallet or crypto card" index={0} />
          <FeatureCard icon="📈" title="DeFi yield" description="Offsets the final installment" index={1} />
          <FeatureCard icon="⚡" title="4 Payments" description="0% interest Next-gen money" index={2} />
        </div>
      </div>
    </main>

    <footer className="text-center p-8 relative z-10">
      <div className="flex justify-center items-center gap-6 text-sm">
        <span className="text-[#6C6C6C]">© 2025 Yumi</span>
        <a href="#twitter" className="text-[#6C6C6C] hover:text-white transition-colors">Twitter</a>
        <a href="#discord" className="text-[#6C6C6C] hover:text-white transition-colors">Discord</a>
      </div>
    </footer>
  </div>
);

export default ConsumerPage;