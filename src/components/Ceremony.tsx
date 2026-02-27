import React from 'react';

export function Ceremony() {
  return (
    <div className="w-full flex justify-center py-20 bg-white relative overflow-hidden">
      <div className="flex flex-col max-w-[1024px] flex-1 px-4 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary text-5xl font-display mb-4">La Ceremonia</h2>
          <div className="flex justify-center items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="w-24 h-[1px] bg-secondary"></span>
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="w-full aspect-[4/5] rounded-t-[10rem] relative overflow-hidden shadow-xl border-4 border-white group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                style={{backgroundImage: 'url("https://i.postimg.cc/J4WzHvSh/vintage-parroquia.jpg")'}}
              ></div>
              <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:pl-10 order-1 md:order-2 text-center md:text-left">
            <div>
              <h3 className="text-primary text-3xl font-display mb-2">Parroquia de Santo Domingo</h3>
              <p className="text-slate-600 font-serif text-lg italic mb-4">Oaxaca de Juárez, México</p>
              <p className="text-slate-600 font-serif text-lg leading-relaxed">
                La unión sagrada comenzará puntualmente a las <span className="text-accent font-bold">4:00 PM</span>. Esperamos contar con su presencia en este momento tan especial para nosotros.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-4">
              <a 
                href="https://maps.google.com/?q=Templo+de+Santo+Domingo+de+Guzman+Oaxaca" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center md:justify-start gap-3 w-full py-3 px-6 bg-primary text-white rounded-xl font-display uppercase tracking-widest text-sm hover:bg-primary-dark transition-colors shadow-md"
              >
                <span className="material-symbols-outlined">map</span>
                Google Maps
              </a>
              <a 
                href="https://waze.com/ul?q=Templo+de+Santo+Domingo+de+Guzman+Oaxaca" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center md:justify-start gap-3 w-full py-3 px-6 bg-white border-2 border-primary text-primary rounded-xl font-display uppercase tracking-widest text-sm hover:bg-slate-50 transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined">navigation</span>
                Waze
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
