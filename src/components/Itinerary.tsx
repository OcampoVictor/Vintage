import React from 'react';

export function Itinerary() {
  return (
    <div className="w-full flex justify-center py-20 bg-background-light border-t border-secondary/20">
      <div className="flex flex-col max-w-[960px] flex-1 px-4 lg:px-8">
        <h2 className="text-primary text-5xl font-script text-center mb-16">Itinerario del Día</h2>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-secondary/30 w-full z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-full border-2 border-secondary flex items-center justify-center mb-6 shadow-glow relative transition-transform hover:-translate-y-2">
                <span className="material-symbols-outlined text-4xl text-primary">church</span>
              </div>
              <div className="text-center">
                <span className="block text-accent font-bold tracking-widest text-sm mb-2 font-display">17:00</span>
                <h3 className="text-slate-800 font-display text-xl mb-1">Ceremonia</h3>
              </div>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-full border-2 border-secondary flex items-center justify-center mb-6 shadow-glow relative transition-transform hover:-translate-y-2">
                <span className="material-symbols-outlined text-4xl text-primary">wine_bar</span>
              </div>
              <div className="text-center">
                <span className="block text-accent font-bold tracking-widest text-sm mb-2 font-display">18:30</span>
                <h3 className="text-slate-800 font-display text-xl mb-1">Cóctel</h3>
              </div>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-full border-2 border-secondary flex items-center justify-center mb-6 shadow-glow relative transition-transform hover:-translate-y-2">
                <span className="material-symbols-outlined text-4xl text-primary">restaurant</span>
              </div>
              <div className="text-center">
                <span className="block text-accent font-bold tracking-widest text-sm mb-2 font-display">20:00</span>
                <h3 className="text-slate-800 font-display text-xl mb-1">Cena</h3>
              </div>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-full border-2 border-secondary flex items-center justify-center mb-6 shadow-glow relative transition-transform hover:-translate-y-2">
                <span className="material-symbols-outlined text-4xl text-primary">music_note</span>
              </div>
              <div className="text-center">
                <span className="block text-accent font-bold tracking-widest text-sm mb-2 font-display">22:00</span>
                <h3 className="text-slate-800 font-display text-xl mb-1">Baile</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
