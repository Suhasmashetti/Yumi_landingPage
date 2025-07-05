import React from 'react';

const FeatureCard = ({ icon, title, description, index }) => (
  <div 
    className="group p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm border border-zinc-700/50 hover:border-[#C9F299]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C9F299]/10 opacity-0 animate-fadeInUp"
    style={{
      animationDelay: `${index * 0.3}s`,
      animationFillMode: 'forwards',
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#C9F299]/0 to-[#C9F299]/0 group-hover:from-[#C9F299]/5 group-hover:to-[#C9F299]/10 rounded-xl transition-all duration-700"></div>
    <div className="relative text-2xl mb-3 group-hover:scale-110 transition-all duration-500 animate-pulse group-hover:animate-bounce">
      {icon}
      <div className="absolute inset-0 animate-ping opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        {icon}
      </div>
    </div>
    <h3 className="relative text-lg font-semibold mb-2 text-white group-hover:text-[#C9F299] transition-all duration-500 overflow-hidden">
      <span className="relative z-10">{title}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9F299]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </h3>
    <p className="relative text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
      {description}
    </p>
    <div className="absolute top-0 right-0 w-0 h-0 border-t-8 border-r-8 border-transparent border-t-[#C9F299]/0 border-r-[#C9F299]/0 group-hover:border-t-[#C9F299]/30 group-hover:border-r-[#C9F299]/30 transition-all duration-500 rounded-tr-xl"></div>
     <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C9F299] to-transparent group-hover:w-full transition-all duration-700 delay-200"></div>
  </div>
);

export default FeatureCard;