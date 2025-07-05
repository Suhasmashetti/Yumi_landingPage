import React from 'react';
import FeatureCard from '../ui/FeatureCard';
import { Link } from 'react-router-dom';

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

const ConsumerPage = () => (
  <div className="min-h-screen flex flex-col relative bg-black text-white overflow-x-hidden">

    <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/50 to-black"></div>

    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatedShape size="w-96 h-96" position="-top-48 -right-48" delay={0} />
      <AnimatedShape size="w-64 h-64" position="-bottom-32 -left-32" delay={2} />
      <AnimatedShape size="w-40 h-40" position="top-1/3 right-1/6" delay={4} />
      <AnimatedShape size="w-24 h-24" position="top-3/4 left-1/4" delay={6} />

      <div className="absolute top-1/4 left-1/6 w-1 h-32 bg-gradient-to-b from-[#C9F299]/20 to-transparent rotate-45"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-24 bg-gradient-to-b from-[#C9F299]/15 to-transparent -rotate-45"></div>
    </div>

    <header className="flex justify-between items-center p-6 md:p-8 relative z-10">
      <div className="text-4xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-[#C9F299] to-white bg-clip-text text-transparent">
          Yumi
        </span>
        <span className="text-white ml-2 font-light">Finance</span>
      </div>

      <nav className="hidden md:flex">
        <Link
          to="/merchant"
          className="group relative text-zinc-400 hover:text-white transition-all duration-500 text-lg font-medium"
        >
          <span className="relative z-10">For Merchants </span>
        </Link>
      </nav>
    </header>

    <main className="flex-1 flex items-center justify-center text-center px-6 relative z-10">
      <div className="max-w-6xl">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#C9F299]/10 to-[#C9F299]/5 border border-[#C9F299]/20 text-[#C9F299] text-sm font-medium mb-8">
            ✨ Next-Generation Financial Technology
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight text-white">
          <span className="block mb-2">Buy Now,</span>
          <span className="block">
            <span className="bg-gradient-to-r from-[#C9F299] via-[#C9F299] to-white bg-clip-text text-transparent">
              Pay Later
            </span>
            <span className="text-white font-light"> for the Future of Money</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-8 text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          <span className="font-semibold text-white">4 payments</span> • 
          <span className="font-semibold text-white"> 0% interest</span> • 
          <span className="text-[#C9F299] font-semibold"> Earn rewards</span> while you shop
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <FeatureCard 
            icon="💳" 
            title="Crypto Payments" 
            description="Seamlessly pay with your favorite crypto wallet or digital card" 
            index={0} 
          />
          <FeatureCard 
            icon="📈" 
            title="DeFi Rewards" 
            description="Earn yield on your deposits that offset your final payment" 
            index={1} 
          />
          <FeatureCard 
            icon="⚡" 
            title="Instant Setup" 
            description="Get started in seconds with zero fees and no credit checks" 
            index={2} 
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-3 bg-gradient-to-r from-[#C9F299] to-[#A8E063] text-black font-semibold rounded-xl hover:shadow-xl hover:shadow-[#C9F299]/25 transition-all duration-500 hover:-translate-y-1 hover:scale-105">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button className="group px-8 py-3 border border-zinc-600 text-white font-semibold rounded-xl hover:border-[#C9F299]/50 hover:text-[#C9F299] transition-all duration-500">
            Learn More
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </main>

    <footer className="text-center p-4 relative z-10 border-t border-zinc-800/50">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="flex items-center gap-6 text-xs">
          <span className="text-zinc-500">© 2025 Yumi Finance</span>
          <div className="w-px h-3 bg-zinc-700"></div>
          <a href="#twitter" className="text-zinc-500 hover:text-[#C9F299] transition-all duration-300 hover:-translate-y-0.5">
            Twitter
          </a>
          <a href="#discord" className="text-zinc-500 hover:text-[#C9F299] transition-all duration-300 hover:-translate-y-0.5">
            Discord
          </a>
          <a href="#docs" className="text-zinc-500 hover:text-[#C9F299] transition-all duration-300 hover:-translate-y-0.5">
            Documentation
          </a>
        </div>
      </div>
    </footer>
  </div>
);

export default ConsumerPage;
