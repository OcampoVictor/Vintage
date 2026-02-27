import React from 'react';
import { motion } from 'motion/react';

export function Itinerary() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full flex justify-center py-20 bg-background-light border-t border-secondary/20 overflow-hidden">
      <div className="flex flex-col max-w-[960px] flex-1 px-4 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary text-5xl font-script text-center mb-16"
        >
          Itinerario del Día
        </motion.h2>
        <div className="relative">
          {/* Desktop horizontal line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-secondary/30 w-full z-0"></div>
          {/* Mobile vertical line */}
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-secondary/30 z-0"></div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-full border-2 border-secondary flex items-center justify-center mb-6 shadow-glow relative transition-transform hover:-translate-y-2">
                <span className="material-symbols-outlined text-4xl text-primary">church</span>
              </div>
              <div className="text-center bg-background-light/80 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="block text-accent font-bold tracking-widest text-sm mb-2 font-display">17:00</span>
                <h3 className="text-slate-800 font-display text-xl mb-1">Ceremonia</h3>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-full border-2 border-secondary flex items-center justify-center mb-6 shadow-glow relative transition-transform hover:-translate-y-2">
                <span className="material-symbols-outlined text-4xl text-primary">wine_bar</span>
              </div>
              <div className="text-center bg-background-light/80 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="block text-accent font-bold tracking-widest text-sm mb-2 font-display">18:30</span>
                <h3 className="text-slate-800 font-display text-xl mb-1">Cóctel</h3>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-full border-2 border-secondary flex items-center justify-center mb-6 shadow-glow relative transition-transform hover:-translate-y-2">
                <span className="material-symbols-outlined text-4xl text-primary">restaurant</span>
              </div>
              <div className="text-center bg-background-light/80 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="block text-accent font-bold tracking-widest text-sm mb-2 font-display">20:00</span>
                <h3 className="text-slate-800 font-display text-xl mb-1">Cena</h3>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-full border-2 border-secondary flex items-center justify-center mb-6 shadow-glow relative transition-transform hover:-translate-y-2">
                <span className="material-symbols-outlined text-4xl text-primary">music_note</span>
              </div>
              <div className="text-center bg-background-light/80 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="block text-accent font-bold tracking-widest text-sm mb-2 font-display">22:00</span>
                <h3 className="text-slate-800 font-display text-xl mb-1">Baile</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
