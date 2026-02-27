import React from 'react';

export function Reception() {
  return (
    <div className="w-full flex justify-center py-20 bg-background-light relative overflow-hidden">
      <div className="flex flex-col max-w-[1024px] flex-1 px-4 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary text-5xl font-display mb-4">La Recepción</h2>
          <div className="flex justify-center items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="w-24 h-[1px] bg-secondary"></span>
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 md:pr-10 order-1 text-center md:text-right items-center md:items-end">
            <div>
              <h3 className="text-primary text-3xl font-display mb-2">Hacienda Los Laureles</h3>
              <p className="text-slate-600 font-serif text-lg italic mb-4">Oaxaca de Juárez, México</p>
              <p className="text-slate-600 font-serif text-lg leading-relaxed">
                Acompáñanos a partir de las <span className="text-accent font-bold">6:00 PM</span> a un cóctel de bienvenida en los jardines, seguido de una cena y baile bajo las estrellas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-4 w-full md:w-auto">
              <a 
                href="https://maps.google.com/?q=Hacienda+Los+Laureles+Oaxaca" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center md:justify-end gap-3 w-full py-3 px-6 bg-primary text-white rounded-xl font-display uppercase tracking-widest text-sm hover:bg-primary-dark transition-colors shadow-md"
              >
                <span className="material-symbols-outlined">map</span>
                Google Maps
              </a>
              <a 
                href="https://waze.com/ul?q=Hacienda+Los+Laureles+Oaxaca" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center md:justify-end gap-3 w-full py-3 px-6 bg-white border-2 border-primary text-primary rounded-xl font-display uppercase tracking-widest text-sm hover:bg-slate-50 transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined">navigation</span>
                Waze
              </a>
            </div>
          </div>
          <div className="relative order-2">
            <div className="w-full aspect-[4/5] rounded-t-[10rem] relative overflow-hidden shadow-xl border-4 border-white group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                style={{backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000")'}}
              ></div>
              <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
