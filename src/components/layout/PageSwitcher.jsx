import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PageSwitcher = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isConsumer = location.pathname === '/';

  return (
    <>
      <div className="hidden md:flex fixed top-1/2 right-4 lg:right-8 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-3xl p-2 z-50 border border-white/20 flex-col items-center">
        <button
          onClick={() => navigate('/')}
          className={`block px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 mb-1 min-w-[90px] ${
            isConsumer ? 'bg-white/20 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => navigate('/merchant')}
          className={`block px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 min-w-[90px] ${
            !isConsumer ? 'bg-white/20 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
          }`}
        >
          Merchant
        </button>
      </div>
      <div className='bg-black'>
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full p-1 z-50 border border-white/20 flex items-center gap-1">
        <button
          onClick={() => navigate('/')}
          className={`flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 min-w-[100px] ${
            isConsumer 
              ? 'bg-white/20 text-white shadow-lg' 
              : 'text-white/70 hover:bg-white/10 hover:text-white active:scale-95'
          }`}
        >
          <span className="mr-2"></span> Home
        </button>
        <button
          onClick={() => navigate('/merchant')}
          className={`flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 min-w-[100px] ${
            !isConsumer 
              ? 'bg-white/20 text-white shadow-lg' 
              : 'text-white/70 hover:bg-white/10 hover:text-white active:scale-95'
          }`}
        >
          <span className="mr-2"></span> Merchant
        </button>
      </div>
      </div>
    </>
  );
};

export default PageSwitcher;
