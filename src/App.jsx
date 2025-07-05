// File: src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConsumerPage from './components/pages/ConsumerPage';
import MerchantPage from './components/pages/MerchantPage';
import PageSwitcher from './components/layout/PageSwitcher';

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center text-center px-8">
    <div>
      <h1 className="text-4xl font-bold mb-4 text-white">404 - Page Not Found</h1>
      <p className="text-lg text-[#6C6C6C] mb-6">The page you're looking for doesn't exist.</p>
      <a href="/" className="text-[#C9F299] hover:underline">Go back to Home</a>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="bg-yumi-gradient min-h-screen text-white pb-20 md:pb-0">
      <Router>
        <PageSwitcher />
        <Routes>
          <Route path="/" element={<ConsumerPage />} />
          <Route path="/merchant" element={<MerchantPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
