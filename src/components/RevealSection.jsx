import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function RevealSection({ children, className = '', direction = 'up' }) {
  const ref = useScrollReveal();
  const dirClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal';
  return (
    <div ref={ref} className={`${dirClass} ${className}`}>
      {children}
    </div>
  );
}
