import React from 'react';

export function Accommodation() {
  return (
    <div className="w-full flex justify-center py-24 bg-white relative">
      <div className="flex flex-col max-w-[1024px] flex-1 px-4 lg:px-8 z-10">
        <div className="text-center mb-16">
          <span className="material-symbols-outlined text-4xl text-secondary mb-4">hotel</span>
          <h2 className="text-primary text-4xl md:text-5xl font-display mb-6">Hospedaje</h2>
          <p className="text-slate-600 font-serif text-lg max-w-2xl mx-auto">
            Para su comodidad, hemos bloqueado habitaciones en excelentes hoteles cercanos al evento. Por favor, mencionen que asisten a la boda de <span className="font-bold text-primary">Valeria y Alejandro</span> para recibir una tarifa especial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Hotel Option 1 */}
          <div className="flex flex-col items-center text-center bg-background-light p-6 rounded-t-full rounded-b-xl shadow-md border border-secondary/20 relative overflow-hidden group">
            <div className="w-full aspect-square rounded-full overflow-hidden mb-6 border-4 border-white shadow-inner relative z-10">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000")'}}></div>
              <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
            </div>
            <h3 className="text-primary text-xl font-display mb-2 relative z-10">Hotel Boutique San José</h3>
            <div className="flex items-center justify-center gap-1 text-accent mb-4 relative z-10">
              <span className="material-symbols-outlined text-xs">star</span>
              <span className="material-symbols-outlined text-xs">star</span>
              <span className="material-symbols-outlined text-xs">star</span>
              <span className="material-symbols-outlined text-xs">star</span>
              <span className="material-symbols-outlined text-xs">star</span>
            </div>
            <p className="text-slate-500 font-serif italic text-sm mb-6 relative z-10 flex-grow">
              A 10 minutos de la recepción. Incluye desayuno buffet y transporte al evento.
            </p>
            <a href="https://maps.google.com/?q=Hotel+Boutique+San+Jose+Oaxaca" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors font-display tracking-widest uppercase text-xs relative z-10 w-full">
              Ver en Mapa
            </a>
          </div>

          {/* Hotel Option 2 */}
          <div className="flex flex-col items-center text-center bg-background-light p-6 rounded-t-full rounded-b-xl shadow-md border border-secondary/20 relative overflow-hidden group">
            <div className="w-full aspect-square rounded-full overflow-hidden mb-6 border-4 border-white shadow-inner relative z-10">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1000")'}}></div>
              <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
            </div>
            <h3 className="text-primary text-xl font-display mb-2 relative z-10">Grand Hotel Centro Histórico</h3>
            <div className="flex items-center justify-center gap-1 text-accent mb-4 relative z-10">
              <span className="material-symbols-outlined text-xs">star</span>
              <span className="material-symbols-outlined text-xs">star</span>
              <span className="material-symbols-outlined text-xs">star</span>
              <span className="material-symbols-outlined text-xs">star</span>
            </div>
            <p className="text-slate-500 font-serif italic text-sm mb-6 relative z-10 flex-grow">
              Ubicado en el corazón de la ciudad. Ideal para quienes desean turistear el fin de semana.
            </p>
            <a href="https://maps.google.com/?q=Grand+Hotel+Centro+Historico+Oaxaca" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors font-display tracking-widest uppercase text-xs relative z-10 w-full">
              Ver en Mapa
            </a>
          </div>

          {/* Hotel Option 3 */}
          <div className="flex flex-col items-center text-center bg-background-light p-6 rounded-t-full rounded-b-xl shadow-md border border-secondary/20 relative overflow-hidden group">
            <div className="w-full aspect-square rounded-full overflow-hidden mb-6 border-4 border-white shadow-inner relative z-10">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1000")'}}></div>
              <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
            </div>
            <h3 className="text-primary text-xl font-display mb-2 relative z-10">Quinta Real Oaxaca</h3>
            <div className="flex items-center justify-center gap-1 text-accent mb-4 relative z-10">
              <span className="material-symbols-outlined text-xs">star</span>
              <span className="material-symbols-outlined text-xs">star</span>
              <span className="material-symbols-outlined text-xs">star</span>
              <span className="material-symbols-outlined text-xs">star</span>
              <span className="material-symbols-outlined text-xs">star</span>
            </div>
            <p className="text-slate-500 font-serif italic text-sm mb-6 relative z-10 flex-grow">
              Una experiencia de lujo en un ex-convento del siglo XVI. Arquitectura colonial inigualable.
            </p>
            <a href="https://maps.google.com/?q=Quinta+Real+Oaxaca" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors font-display tracking-widest uppercase text-xs relative z-10 w-full">
              Ver en Mapa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
