import React from 'react';

export function RSVP() {
  return (
    <div className="w-full flex justify-center py-24 bg-paper-texture relative" id="rsvp-section">
      <div className="flex flex-col max-w-[800px] flex-1 px-4 lg:px-8 relative z-10">
        <div className="bg-background-light p-1 shadow-card rounded-lg relative overflow-hidden">
          <div className="border-4 border-double border-secondary p-8 md:p-12 relative">
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-secondary"></div>
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-secondary"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-secondary"></div>
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-secondary"></div>
            <div className="text-center mb-10">
              <h2 className="text-primary text-5xl md:text-6xl font-script mb-2">Confirmar asistencia</h2>
              <p className="text-accent font-display tracking-[0.2em] uppercase text-sm mb-6">
                Antes del 1 de Septiembre
              </p>
              <div className="w-16 h-1 bg-secondary mx-auto"></div>
            </div>
            <form className="space-y-6 max-w-lg mx-auto">
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-widest text-secondary font-display" htmlFor="full-name">Nombre</label>
                <input className="w-full bg-[#FFFDF5] border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary px-4 py-3 text-slate-800 font-serif text-lg placeholder:italic" id="full-name" placeholder="Escriba su nombre completo" type="text"/>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-widest text-secondary font-display" htmlFor="guests">Asistentes</label>
                  <input className="w-full bg-[#FFFDF5] border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary px-4 py-3 text-slate-800 font-serif text-lg" id="guests" max="10" min="1" placeholder="0" type="number"/>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-widest text-secondary font-display" htmlFor="dietary">Dieta</label>
                  <select className="w-full bg-[#FFFDF5] border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary px-4 py-3 text-slate-800 font-serif text-lg" id="dietary" defaultValue="">
                    <option disabled value="">Seleccionar</option>
                    <option value="none">Ninguna</option>
                    <option value="vegetarian">Vegetariano</option>
                    <option value="vegan">Vegano</option>
                    <option value="gluten-free">Sin gluten</option>
                  </select>
                </div>
              </div>
              <div className="pt-6 flex justify-center">
                <button className="bg-primary text-champagne font-display uppercase tracking-[0.2em] text-sm py-4 px-12 hover:bg-primary-dark transition-all duration-300 shadow-md border border-secondary/30 hover:shadow-lg rounded-sm" type="button">
                  Enviar Tarjeta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
