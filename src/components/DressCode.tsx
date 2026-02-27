import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function DressCode() {
  const [activeTab, setActiveTab] = useState<'mujeres' | 'hombres'>('mujeres');

  const images = {
    mujeres: [
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800"
    ],
    hombres: [
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?auto=format&fit=crop&q=80&w=800"
    ]
  };

  return (
    <div className="w-full flex justify-center py-24 bg-primary-dark text-champagne relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/floral-linen.png')]"></div>
      
      <div className="flex flex-col items-center max-w-[1024px] flex-1 px-4 lg:px-8 z-10 text-center w-full">
        <span className="material-symbols-outlined text-5xl text-secondary mb-6">checkroom</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-6 tracking-widest uppercase break-words px-2 w-full">Código de Vestimenta</h2>
        <div className="w-16 h-[1px] bg-secondary mb-8"></div>
        <p className="text-3xl font-serif italic text-white/90 mb-4">Formal</p>
        <p className="text-lg font-serif text-white/70 mb-12 max-w-md px-4">
          Sugerimos vestido largo para las damas y traje oscuro para los caballeros.
        </p>

        {/* Interactive Tabs */}
        <div className="flex bg-white/10 p-1 rounded-full mb-10 w-full max-w-sm mx-auto backdrop-blur-sm border border-white/10 relative z-20">
          <button
            onClick={() => setActiveTab('mujeres')}
            className={`flex-1 py-3 px-4 sm:px-6 rounded-full font-display uppercase tracking-widest text-xs transition-all duration-300 ${
              activeTab === 'mujeres' 
                ? 'bg-secondary text-primary shadow-md' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            Mujeres
          </button>
          <button
            onClick={() => setActiveTab('hombres')}
            className={`flex-1 py-3 px-4 sm:px-6 rounded-full font-display uppercase tracking-widest text-xs transition-all duration-300 ${
              activeTab === 'hombres' 
                ? 'bg-secondary text-primary shadow-md' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            Hombres
          </button>
        </div>

        {/* Mobile-First Gallery (Horizontal Scroll on Mobile, Grid on Desktop) */}
        <div className="w-full max-w-4xl mx-auto relative z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: '-100vw' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100vw' }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex sm:grid sm:grid-cols-3 gap-4 md:gap-8 overflow-x-auto pb-8 px-4 sm:px-0 sm:overflow-visible sm:pb-0 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none' }}
            >
              {images[activeTab].map((src, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="min-w-[75vw] sm:min-w-0 aspect-[3/4] rounded-2xl overflow-hidden relative group shadow-2xl border-4 border-white/10 snap-center shrink-0"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${src})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-display uppercase tracking-widest text-xs border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                      Ejemplo {index + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-12 p-4 border border-secondary/30 rounded-xl bg-white/5 backdrop-blur-sm max-w-2xl mx-auto w-full">
          <p className="text-sm font-display tracking-widest uppercase text-white/70 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-secondary">info</span>
            Nota importante
          </p>
          <p className="text-white/50 font-serif italic mt-2 text-sm">
            Nos reservamos el color blanco, perla y beige exclusivamente para la novia.
          </p>
        </div>
      </div>
    </div>
  );
}
