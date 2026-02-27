import React from 'react';

export function BackgroundDecorations() {
  return (
    <>
      <div className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-50 opacity-60 mix-blend-multiply hidden md:block">
        <svg className="w-full h-full stroke-secondary fill-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 Q50,0 80,40 Q110,80 100,120 Q90,160 50,150 Q20,140 30,100 Q40,60 10,50 L0,50" strokeWidth="2"></path>
          <path d="M0,20 Q60,20 90,60 Q120,100 110,140" opacity="0.6" strokeWidth="1"></path>
          <circle cx="95" cy="55" fill="#2D5D6E" r="3" stroke="none"></circle>
          <circle cx="100" cy="120" fill="#2D5D6E" r="4" stroke="none"></circle>
        </svg>
      </div>
      <div className="fixed bottom-0 right-0 w-64 h-64 pointer-events-none z-50 opacity-60 mix-blend-multiply rotate-180 hidden md:block">
        <svg className="w-full h-full stroke-secondary fill-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 Q50,0 80,40 Q110,80 100,120 Q90,160 50,150 Q20,140 30,100 Q40,60 10,50 L0,50" strokeWidth="2"></path>
          <path d="M0,20 Q60,20 90,60 Q120,100 110,140" opacity="0.6" strokeWidth="1"></path>
          <circle cx="95" cy="55" fill="#2D5D6E" r="3" stroke="none"></circle>
        </svg>
      </div>
    </>
  );
}
