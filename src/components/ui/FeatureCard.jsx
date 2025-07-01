// File: src/components/ui/FeatureCard.jsx
import React from 'react';

const FeatureCard = ({ icon, title, description, index }) => (
  <div className={`text-center opacity-0 animate-fade-in-up`} style={{ animationDelay: `${0.2 + index * 0.2}s` }}>
    <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl backdrop-blur-sm border border-white/20">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{description}</p>
  </div>
);

export default FeatureCard;