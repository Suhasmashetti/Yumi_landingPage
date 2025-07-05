import React from 'react';
import FeatureCard from '../ui/FeatureCard';

const AnimatedShape = ({ size, position, delay }) => (
  <div
    className={`absolute ${size} ${position} rounded-full opacity-10 animate-pulse`}
    style={{
      background: 'linear-gradient(135deg, #C9F299, rgba(201, 242, 153, 0.3))',
      animationDelay: `${delay}s`,
      animationDuration: '6s',
    }}
  />
);

const MerchantPage = () => (
  <div className="min-h-screen flex flex-col relative bg-black text-white overflow-x-hidden">
    
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/50 to-black"></div>
    
    {/* Floating shapes */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatedShape size="w-96 h-96" position="-top-48 -right-48" delay={0} />
      <AnimatedShape size="w-64 h-64" position="-bottom-32 -left-32" delay={2} />
      <AnimatedShape size="w-40 h-40" position="top-1/3 right-1/6" delay={4} />
      <AnimatedShape size="w-24 h-24" position="top-3/4 left-1/4" delay={6} />

      <div className="absolute top-1/4 left-1/6 w-1 h-32 bg-gradient-to-b from-[#C9F299]/20 to-transparent rotate-45"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-24 bg-gradient-to-b from-[#C9F299]/15 to-transparent -rotate-45"></div>
    </div>

    {/* Header */}
    <header className="flex justify-between items-center p-6 md:p-8 relative z-10">
      <div className="text-4xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-[#C9F299] to-white bg-clip-text text-transparent">
          Yumi
        </span>
        <span className="text-white ml-2 font-light">Finance</span>
      </div>
      <nav>
        <button className="group relative bg-[#C9F299]/20 border border-[#C9F299]/30 text-white px-3 py-2 text-sm rounded-full font-semibold transition-all duration-500 hover:bg-[#C9F299]/30 hover:-translate-y-1 backdrop-blur-sm hover:shadow-lg hover:shadow-[#C9F299]/25">
          <span className="relative z-10">Book a Call</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#C9F299]/10 to-transparent rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        </button>
      </nav>
    </header>

    {/* Main Section */}
    <main className="flex-1 flex items-center justify-center text-center px-6 relative z-10">
      <div className="max-w-6xl">

        <div className="mb-6">
          <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#C9F299]/10 to-[#C9F299]/5 border border-[#C9F299]/20 text-[#C9F299] text-sm font-medium">
            🚀 Join 100+ Live Merchants
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
          <span className="block text-white mb-2">Yumi</span>
          <span className="block">
            <span className="text-[#C9F299]">for</span>
            <span className="text-white"> Merchants</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-8 text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Join our pilot program with 
          <span className="text-[#C9F299] font-semibold"> 100+</span> merchants already live
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <FeatureCard 
            icon="💰" 
            title="2.5% Flat Fee" 
            description="Compare to 3-6% traditional BNPL solutions" 
            index={0} 
          />
          <FeatureCard 
            icon="🚀" 
            title="Referral Boost" 
            description="Bring a Klarna merchant and reduce fee to 0.1%" 
            index={1} 
          />
          <FeatureCard 
            icon="⚡" 
            title="30-Min Setup" 
            description="Quick SDK install with custom dev support" 
            index={2} 
          />
        </div>

        {/* Info Box */}
        <div className="mb-6 p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C9F299]/5 to-transparent rounded-2xl"></div>
            <p className="relative mb-3 text-lg font-semibold text-white">
              Native crypto payment — accept <span className="text-[#C9F299]">any</span> coin <span className="text-[#C9F299]">on any</span> chain
            </p>
            <p className="relative text-lg font-semibold text-white">
              Payout <span className="text-[#C9F299]">in stablecoins</span> <span className="text-[#C9F299]">or</span> fiat, your choice
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-5">
          <button className="group relative px-6 py-2 bg-gradient-to-r from-[#C9F299] to-[#A8E063] text-black font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-[#C9F299]/25 transition-all duration-500 hover:-translate-y-1 hover:scale-105">
            <span className="relative z-10">Book a Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </main>

    {/* Footer */}
    <footer className="text-center p-4 relative z-10 border-t border-zinc-800/50">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="flex items-center gap-6 text-xs">
          <span className="text-zinc-500">© 2025 Yumi Finance</span>
          <div className="w-px h-3 bg-zinc-700"></div>
          <a href="#terms" className="text-zinc-500 hover:text-[#C9F299] transition-all duration-300 hover:-translate-y-0.5">
            Terms
          </a>
          <a href="#privacy" className="text-zinc-500 hover:text-[#C9F299] transition-all duration-300 hover:-translate-y-0.5">
            Privacy
          </a>
          <a href="#support" className="text-zinc-500 hover:text-[#C9F299] transition-all duration-300 hover:-translate-y-0.5">
            Support
          </a>
        </div>
      </div>
    </footer>
  </div>
);

export default MerchantPage;
