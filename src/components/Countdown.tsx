import React, { useState, useEffect } from 'react';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-10-12T17:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center py-16 lg:py-24 bg-white relative">
      <div className="flex flex-col items-center max-w-[960px] flex-1 px-4 lg:px-8 relative z-10">
        <div className="relative mb-12">
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-champagne opacity-40 font-script z-0">Tiempo</span>
          <h2 className="relative text-primary text-3xl tracking-[0.15em] font-display uppercase text-center z-10">
            La Cuenta Regresiva
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 text-center">
          <div className="flex flex-col items-center relative group">
            <div className="absolute inset-0 border border-secondary/30 rounded-full scale-110 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col justify-center items-center bg-background-light rounded-full shadow-inner z-10">
              <span className="text-3xl md:text-4xl lg:text-5xl font-display text-primary">{timeLeft.days}</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-secondary mt-1">Días</span>
            </div>
          </div>
          <div className="flex flex-col items-center relative group">
            <div className="absolute inset-0 border border-secondary/30 rounded-full scale-110 -rotate-12 group-hover:-rotate-45 transition-transform duration-700"></div>
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col justify-center items-center bg-background-light rounded-full shadow-inner z-10">
              <span className="text-3xl md:text-4xl lg:text-5xl font-display text-primary">{timeLeft.hours}</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-secondary mt-1">Horas</span>
            </div>
          </div>
          <div className="flex flex-col items-center relative group">
            <div className="absolute inset-0 border border-secondary/30 rounded-full scale-110 rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col justify-center items-center bg-background-light rounded-full shadow-inner z-10">
              <span className="text-3xl md:text-4xl lg:text-5xl font-display text-primary">{timeLeft.minutes}</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-secondary mt-1">Minutos</span>
            </div>
          </div>
          <div className="flex flex-col items-center relative group">
            <div className="absolute inset-0 border border-secondary/30 rounded-full scale-110 -rotate-45 group-hover:rotate-12 transition-transform duration-700"></div>
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col justify-center items-center bg-background-light rounded-full shadow-inner z-10">
              <span className="text-3xl md:text-4xl lg:text-5xl font-display text-primary">{timeLeft.seconds}</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-secondary mt-1">Segundos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
