import React from 'react';
import { motion } from 'motion/react';

export function Story() {
  return (
    <div className="w-full flex justify-center py-20 lg:py-32 bg-background-light relative overflow-hidden">
      <svg className="absolute top-0 right-0 h-full w-auto opacity-5 pointer-events-none text-primary" preserveAspectRatio="none" viewBox="0 0 100 200">
        <path d="M100,0 C20,50 80,100 20,150 C-10,175 40,200 100,200 L100,0 Z" fill="currentColor"></path>
      </svg>
      <div className="flex flex-col max-w-[1200px] flex-1 px-4 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8, 
                ease: "easeInOut" 
              }}
              className="relative w-full aspect-[4/5] rounded-t-[10rem] rounded-b-lg overflow-hidden border-2 border-secondary/30 p-2"
            >
              <div className="w-full h-full rounded-t-[9.5rem] rounded-b-md overflow-hidden relative">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDb5FOCQJRkgk948fG_pYZNh0KinhNtsztMWPEpNTwi9q8WEg6_PIqHIj5MQ2gqeZb41_DjZsRH4cQ2jGKONzNlYANUQUF0S2IyEata-i7SpjGia1qdBEcp-rERJH0akpkVTZJ-gNQVVbtVyQGACCTva-H33OTFU4spz5j5QK1gfP-slKW_RXe_RylNhM-KNId5xhX79_O3eaRuCcozwcFnddecYabw9pwXBTJ5vFUhjeK7qbszt779YCM0CY31MZ51cDSKUek9Oe6F")'}}
                ></motion.div>
                <div className="absolute inset-0 bg-primary/20 mix-blend-color"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-secondary -mb-2 -ml-2"></div>
            </motion.div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <div className="relative">
              <span className="absolute -left-8 top-0 text-8xl text-secondary/10 font-script -z-10">Amor</span>
              <h2 className="text-primary text-5xl lg:text-6xl font-display leading-tight">
                Nuestra Historia
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent mt-4"></div>
            </div>
            <div className="space-y-6 text-slate-600 font-serif text-lg lg:text-xl leading-relaxed">
              <p>
                <span className="text-4xl float-left mr-2 font-display text-secondary">T</span>odo comenzó con una taza de café en una tarde lluviosa de abril. Lo que parecía ser un encuentro casual pronto se transformó en horas de conversación sobre sueños, viajes y pasiones compartidas.
              </p>
              <p>
                Desde ese día, nuestras vidas se entrelazaron de la manera más hermosa. Hemos recorrido ciudades juntos, superado desafíos y celebrado cada pequeño triunfo como un equipo.
              </p>
              <p className="font-bold text-primary italic">
                Hoy, después de tres años de construir memorias inolvidables, estamos listos para dar el siguiente gran paso.
              </p>
            </div>
            <div className="pt-8">
              <img alt="signature" className="h-16 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1leG3Dyg4__kiLb-waYi-PH3JX2q4ZGxTcz7uI45sDAOt0mI9UwXamEVv9wMm2VIYJiNBPrqR6rzKubESe7RhInO1PWF24aAe2xxWtROiteG3w7L3RyXJPt9c05RPFH2T1uYdNh9uGYOnuK2BhMZEifsrIvyHXDIq7Omm_kxnRtmiJkZd3dzlzh56tPXYz-Tf0IQJiVoYWeDj_m6h-ybSx6V6L5SwUwRwqZnLiQ15UQ4A1aECTPTNmlIoZMmDgFlqViNri6TqBwnV" style={{filter: 'brightness(0) saturate(100%) invert(35%) sepia(16%) saturate(1011%) hue-rotate(152deg) brightness(91%) contrast(92%)'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
