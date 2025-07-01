// File: src/components/ui/AnimatedShape.jsx
import React from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';

const AnimatedShape = ({ size, position, delay }) => {
  const scrollY = useScrollPosition();

  return (
    <div
      className={`absolute rounded-full bg-white/10 ${size} ${position} animate-pulse`}
      style={{
        animationDelay: `${delay}s`,
        transform: `translateY(${scrollY * -0.5}px)`
      }}
    />
  );
};

export default AnimatedShape;