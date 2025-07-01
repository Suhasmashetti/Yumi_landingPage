// File: src/components/layout/PageSwitcher.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PageSwitcher = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isConsumer = location.pathname === '/';

  return (
    <div className="fixed top-1/2 right-8 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-3xl p-2 z-50 border border-white/20">
      <button
        onClick={() => navigate('/')}
        className={`block px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 mb-1 ${
          isConsumer ? 'bg-white/20 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
        }`}
      >
        Consumer
      </button>
      <button
        onClick={() => navigate('/merchant')}
        className={`block px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 ${
          !isConsumer ? 'bg-white/20 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
        }`}
      >
        Merchant
      </button>
    </div>
  );
};

export default PageSwitcher;