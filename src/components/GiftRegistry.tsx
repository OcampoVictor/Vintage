import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function GiftRegistry() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full flex justify-center py-24 bg-background-light relative border-t border-secondary/20">
      <div className="flex flex-col items-center max-w-[800px] flex-1 px-4 lg:px-8 z-10 text-center">
        <span className="material-symbols-outlined text-4xl text-primary mb-4">redeem</span>
        <h2 className="text-primary text-4xl md:text-5xl font-display mb-6">Mesa de Regalos</h2>
        <div className="flex justify-center items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="w-16 h-[1px] bg-secondary"></span>
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
        </div>
        <p className="text-slate-600 font-serif text-lg italic mb-10 max-w-lg">
          Su presencia es nuestro regalo más grande. Pero si desean tener un detalle con nosotros, pueden hacerlo a través de las siguientes opciones:
        </p>
        
        <div className="grid sm:grid-cols-3 gap-6 w-full max-w-3xl">
          <a href="https://mesaderegalos.liverpool.com.mx/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-white border border-secondary/30 hover:border-primary hover:shadow-md transition-all group rounded-lg">
            <span className="material-symbols-outlined text-3xl text-secondary group-hover:text-primary mb-3 transition-colors">shopping_bag</span>
            <span className="font-display text-lg text-primary">Liverpool</span>
            <span className="text-xs text-slate-400 mt-2 uppercase tracking-widest group-hover:text-primary transition-colors">Ver tienda</span>
          </a>
          
          <a href="https://www.amazon.com.mx/wedding/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-white border border-secondary/30 hover:border-primary hover:shadow-md transition-all group rounded-lg">
            <span className="material-symbols-outlined text-3xl text-secondary group-hover:text-primary mb-3 transition-colors">inventory_2</span>
            <span className="font-display text-lg text-primary">Amazon</span>
            <span className="text-xs text-slate-400 mt-2 uppercase tracking-widest group-hover:text-primary transition-colors">Ver tienda</span>
          </a>
          
          <button onClick={() => setIsModalOpen(true)} className="flex flex-col items-center p-6 bg-white border border-secondary/30 hover:border-primary hover:shadow-md transition-all group rounded-lg">
            <span className="material-symbols-outlined text-3xl text-secondary group-hover:text-primary mb-3 transition-colors">payments</span>
            <span className="font-display text-lg text-primary">Efectivo</span>
            <span className="text-xs text-slate-400 mt-2 uppercase tracking-widest group-hover:text-primary transition-colors">Ver detalles</span>
          </button>
        </div>
      </div>

      {/* Modal Efectivo */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-8 md:p-12 rounded-2xl shadow-2xl w-[90%] max-w-md border-4 border-double border-secondary/30"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              
              <div className="text-center">
                <span className="material-symbols-outlined text-5xl text-secondary mb-4">account_balance</span>
                <h3 className="text-3xl font-display text-primary mb-6">Datos Bancarios</h3>
                
                <div className="space-y-4 text-left bg-background-light p-6 rounded-xl border border-secondary/20">
                  <div>
                    <p className="text-xs font-display uppercase tracking-widest text-secondary mb-1">Banco</p>
                    <p className="font-serif text-lg text-slate-800">BBVA Bancomer</p>
                  </div>
                  <div>
                    <p className="text-xs font-display uppercase tracking-widest text-secondary mb-1">Titular</p>
                    <p className="font-serif text-lg text-slate-800">Valeria y Alejandro</p>
                  </div>
                  <div>
                    <p className="text-xs font-display uppercase tracking-widest text-secondary mb-1">Cuenta</p>
                    <p className="font-serif text-lg text-slate-800 tracking-wider">0123 4567 89</p>
                  </div>
                  <div>
                    <p className="text-xs font-display uppercase tracking-widest text-secondary mb-1">CLABE</p>
                    <p className="font-serif text-lg text-slate-800 tracking-wider">012 345 67890 123456 7</p>
                  </div>
                </div>
                
                <p className="mt-8 text-slate-500 font-serif italic text-sm">
                  ¡Muchas gracias por su detalle!
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
