import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-primary text-champagne py-16 border-t-8 border-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4Nm9ZekvnFnciO3xcRFMGqFH1Haa2XnjZjGWe4WzXel7VKAuXYOujv6eLM2YpCRzBsXjcG9b2V8tn_0SWSFlEa9JWLVrgEd8Bh_eKCl-k72vdep47x1GYMCixED9ta8RMxKPTzUxUVGEfPI1SCRCWMMQN0aYlJ68yjqagpYaiqtkw7hJtbWlwIzeA6ukpsWfSCp3QuEMWWlYaeKMU-fRHfPYtwtMdsgI_mvhVfNyumYqUG-xWfygnx1T5ArBXlbRiMUZ39wzCDlD6")'}}></div>
      <div className="flex flex-col items-center justify-center max-w-[960px] mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl lg:text-7xl font-script mb-8">Valeria & Alejandro</h2>
        <p className="text-champagne/80 font-display tracking-[0.3em] uppercase mb-8 text-sm">Gracias por ser parte de nuestra historia</p>
        <p className="text-champagne/40 text-xs font-serif italic">© 2026. Diseñado con estilo Vintage.</p>
      </div>
    </footer>
  );
}
