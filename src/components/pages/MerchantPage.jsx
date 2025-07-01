import React from 'react';
import AnimatedShape from '../ui/AnimatedShape';
import FeatureCard from '../ui/FeatureCard';

const MerchantPage = () => (
  <div className="min-h-screen flex flex-col relative text-white">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatedShape size="w-72 h-72" position="-top-36 -right-36" delay={0} />
      <AnimatedShape size="w-48 h-48" position="-bottom-24 -left-24" delay={2} />
      <AnimatedShape size="w-36 h-36" position="top-1/2 right-1/5" delay={4} />
    </div>

    <header className="flex justify-between items-center p-8 md:p-12 relative z-10">
      <div className="text-3xl font-bold text-[#C9F299]">Yumi Finance</div>
      <nav>
        <a href="#book-call" className="bg-[#C9F299]/20 border border-[#C9F299]/30 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-[#C9F299]/30 hover:-translate-y-1 backdrop-blur-sm">
          Book a Call
        </a>
      </nav>
    </header>

    <main className="flex-1 flex items-center justify-center text-center px-8 relative z-10">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
          Yumi <span className="text-[#C9F299]">for</span> Merchants
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-[#6C6C6C]">
          Join our pilot: <span className="text-[#C9F299]">100+</span> merchants already live.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <FeatureCard icon="💰" title="2.5% flat fee" description="(vs 3-6% traditional BNPL)" index={0} />
          <FeatureCard icon="🚀" title="Referral boost" description="Bring a Klarna merchant + fee = 0.1%" index={1} />
          <FeatureCard icon="⚡" title="30-min install" description="SDK install + custom dev support" index={2} />
        </div>
        <div className="mb-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 max-w-2xl mx-auto">
          <p className="mb-4 text-lg font-semibold text-white">
            Native crypto payment — accept <span className="text-[#C9F299]">any</span> coin <span className="text-[#C9F299]">on any</span> chain
          </p>
          <p className="text-lg font-semibold text-white">
            Payout <span className="text-[#C9F299]">in stable</span>-coins <span className="text-[#C9F299]">or</span> fiat, your choice
          </p>
        </div>
        <div className="flex justify-center">
          
          <button className="bg-[#C9F299] text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            Book a Call
          </button>
        </div>
      </div>
    </main>

    <footer className="text-center p-8 relative z-10">
      <div className="flex justify-center items-center gap-6 text-sm">
        <span className="text-[#6C6C6C]">© 2025 Yumi</span>
        <a href="#terms" className="text-[#6C6C6C] hover:text-white transition-colors">Terms</a>
        <a href="#privacy" className="text-[#6C6C6C] hover:text-white transition-colors">Privacy</a>
      </div>
    </footer>
  </div>
);

export default MerchantPage;
