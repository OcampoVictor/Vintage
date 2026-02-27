import React, { useState } from 'react';
import { motion } from 'motion/react';
import { editImage, urlToBase64 } from '../services/geminiService';

const HERO_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYjebzrYlpk5pZHh1TdxJ9MWQEeeNenx44dCSqos4xqyWu-Y1WpKLcFkomZYw3aT5fX-jnfGzJnLrkDtDXdvM7f_VO1ctpePBCAqjBz0pfwZgLwdopCg8EkAkDAkIkHfXY0dyAOBi8WyGPAcEjISPrp0U1s4HfTjqxCAvgscqI0ea7M9yExqMm2XrpculAsYoLOfiMZOF669NRmw6wVv3KwTw_tTdVeJxGJh4IoIhmBn_41355Oy-XR24r0vBoiEfNjX8CsIGjj-3e';

export function Gallery() {
  const [images, setImages] = useState([
    'https://i.postimg.cc/L5Xm93Gj/vintage-momentos-1.jpg',
    HERO_IMAGE_URL,
    HERO_IMAGE_URL,
    HERO_IMAGE_URL,
  ]);
  
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = async () => {
    if (editingIndex === null || !prompt) return;
    setIsEditing(true);
    try {
      const { base64, mimeType } = await urlToBase64(images[editingIndex]);
      const newImageUrl = await editImage(base64, mimeType, prompt);
      const newImages = [...images];
      newImages[editingIndex] = newImageUrl;
      setImages(newImages);
      setEditingIndex(null);
      setPrompt('');
    } catch (error) {
      console.error("Error editing image:", error);
      alert("Hubo un error al editar la imagen.");
    } finally {
      setIsEditing(false);
    }
  };

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
                <button 
                  onClick={() => setEditingIndex(index)}
                  className="bg-secondary text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-secondary-light transition-colors"
                >
                  <span className="material-symbols-outlined">image_edit_auto</span>
                  <span>Editar con IA</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {editingIndex !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background-light text-slate-800 p-8 rounded-2xl max-w-lg w-full shadow-2xl"
          >
            <h3 className="text-2xl font-display text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">image_edit_auto</span>
              Edición Mágica
            </h3>
            <p className="text-slate-600 mb-6 font-serif italic">
              Describe cómo quieres editar esta foto de los novios. Por ejemplo: "Añade un filtro retro" o "Haz que parezca una pintura al óleo".
            </p>
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Escribe tu prompt aquí..."
              className="w-full p-4 border border-secondary/30 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-primary font-serif resize-none h-32"
            />
            <div className="flex justify-end gap-4">
              <button 
                onClick={() => { setEditingIndex(null); setPrompt(''); }}
                className="px-6 py-2 text-slate-600 hover:text-primary transition-colors font-display tracking-widest uppercase text-sm"
                disabled={isEditing}
              >
                Cancelar
              </button>
              <button 
                onClick={handleEdit}
                disabled={isEditing || !prompt}
                className="bg-primary text-champagne px-6 py-2 rounded-full hover:bg-primary-dark transition-colors font-display tracking-widest uppercase text-sm disabled:opacity-50 flex items-center gap-2"
              >
                {isEditing ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Generando...
                  </>
                ) : (
                  'Aplicar Magia'
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
