import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Hero() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToRSVP = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('rsvp-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Vintage animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] } 
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" } 
    },
  };

  const imageVariants = {
    hidden: isMobile ? { opacity: 1, scale: 1, filter: 'sepia(0%) blur(0px)' } : { opacity: 0, scale: 0.95, filter: 'sepia(100%) blur(10px)' },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: 'sepia(0%) blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <div className="w-full flex justify-center py-12 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-champagne/40 via-background-light to-background-light opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 hidden md:block">
        <svg className="relative block w-full h-[60px]" data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-white" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col max-w-[1200px] flex-1 px-4 lg:px-20 relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={fadeUpVariants} className="mb-4 inline-flex items-center justify-center p-2 border-b border-secondary/50">
              <span className="material-symbols-outlined text-primary text-2xl mr-2">spa</span>
              <span className="text-primary text-sm tracking-[0.4em] uppercase font-display">La Boda De</span>
              <span className="material-symbols-outlined text-primary text-2xl ml-2 scale-x-[-1]">spa</span>
            </motion.div>
            
            <motion.h1 variants={fadeUpVariants} className="text-primary text-7xl md:text-9xl font-script leading-none mb-2 drop-shadow-sm">
              Valeria <br/> 
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                className="text-secondary text-5xl md:text-6xl font-display ml-12 inline-block"
              >
                & Alejandro
              </motion.span>
            </motion.h1>
            
            <div className="flex items-center gap-4 my-8 w-full justify-center lg:justify-start overflow-hidden">
              <motion.div variants={lineVariants} className="h-[1px] w-12 bg-secondary origin-right"></motion.div>
              <motion.h3 variants={fadeUpVariants} className="text-slate-600 text-xl font-display tracking-[0.2em] uppercase">
                12 de Octubre, 2026
              </motion.h3>
              <motion.div variants={lineVariants} className="h-[1px] w-12 bg-secondary origin-left"></motion.div>
            </div>
            
            <motion.p variants={fadeUpVariants} className="text-slate-600 font-serif text-lg lg:text-xl italic max-w-md mb-8">
              "El amor no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección."
            </motion.p>
            
            <motion.div variants={fadeUpVariants}>
              <a 
                href="#rsvp-section" 
                onClick={scrollToRSVP}
                className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-display tracking-widest text-primary transition duration-300 ease-out border-2 border-primary rounded-full shadow-md hover:text-white"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">Confirmar Asistencia</span>
                <span className="relative invisible">Confirmar Asistencia</span>
              </a>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center">
            <motion.div variants={imageVariants} className="relative w-full max-w-[400px]">
              <motion.div 
                animate={{ rotate: [3, 5, 3] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -inset-4 border-2 border-secondary/40 rounded-t-full rounded-b-[10rem] scale-105 z-0"
              ></motion.div>
              <motion.div 
                animate={{ rotate: [-2, -4, -2] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                className="absolute -inset-2 border border-primary/20 rounded-t-full rounded-b-[10rem] z-0"
              ></motion.div>
              
              <div className="relative w-full aspect-[3/4] rounded-t-full rounded-b-[10rem] overflow-hidden shadow-card border-4 border-white z-10">
                <motion.div 
                  initial={{ scale: isMobile ? 1 : 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{backgroundImage: 'url("https://i.postimg.cc/MZhLKDkn/hero-vintage.jpg")'}}
                ></motion.div>
                <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
              </div>
              
              <motion.div 
                initial={{ opacity: isMobile ? 0.8 : 0, rotate: isMobile ? 0 : -45 }}
                animate={{ opacity: 0.8, rotate: 0 }}
                transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                className="absolute -bottom-8 -right-8 w-32 h-32 z-20 pointer-events-none text-secondary"
              >
                <svg className="w-full h-full fill-current" viewBox="0 0 100 100">
                  <path d="M50,10 C60,40 90,50 90,50 C90,50 60,60 50,90 C40,60 10,50 10,50 C10,50 40,40 50,10 Z"></path>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
