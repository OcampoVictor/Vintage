import React from 'react';
import { motion } from 'motion/react';

const HERO_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYjebzrYlpk5pZHh1TdxJ9MWQEeeNenx44dCSqos4xqyWu-Y1WpKLcFkomZYw3aT5fX-jnfGzJnLrkDtDXdvM7f_VO1ctpePBCAqjBz0pfwZgLwdopCg8EkAkDAkIkHfXY0dyAOBi8WyGPAcEjISPrp0U1s4HfTjqxCAvgscqI0ea7M9yExqMm2XrpculAsYoLOfiMZOF669NRmw6wVv3KwTw_tTdVeJxGJh4IoIhmBn_41355Oy-XR24r0vBoiEfNjX8CsIGjj-3e';

export function Gallery() {
  const images = [
    'https://i.postimg.cc/L5Xm93Gj/vintage-momentos-1.jpg',
    HERO_IMAGE_URL,
    HERO_IMAGE_URL,
    HERO_IMAGE_URL,
  ];

  const gridClasses = [
    "col-span-2 row-span-2 relative group overflow-hidden rounded-tl-[4rem] border border-white/10",
    "col-span-1 row-span-1 relative group overflow-hidden border border-white/10",
    "col-span-1 row-span-2 relative group overflow-hidden rounded-br-[4rem] border border-white/10",
    "col-span-1 row-span-1 relative group overflow-hidden border border-white/10",
  ];

  return (
    <div className="w-full flex justify-center py-20 bg-primary-dark text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/floral-linen.png')]"></div>
      <div className="flex flex-col max-w-[1100px] flex-1 px-4 md:px-8 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center mb-16 text-center"
        >
          <span className="material-symbols-outlined text-secondary text-4xl mb-4">camera</span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-widest uppercase text-champagne">Momentos</h2>
          <p className="text-white/60 mt-2 font-serif italic">Fragmentos de nuestra vida juntos</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div 
              key={index} 
              className={gridClasses[index]}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url("${img}")`}}></div>
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
