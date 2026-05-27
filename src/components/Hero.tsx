import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onScrollToCollection: () => void;
}

export function Hero({ onScrollToCollection }: HeroProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Parallax effect simulation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000"
          alt="Haute Couture"
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6"
        >
          Maison de Couture
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide max-w-4xl leading-tight"
        >
          Créations <span className="italic font-serif">Sur-Mesure</span> <br />& Élégance Absolue
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 flex flex-col items-center"
        >
          <p className="text-white/60 text-xs uppercase tracking-widest mb-4">Découvrir la collection</p>
          <button
            onClick={onScrollToCollection}
            className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 animate-bounce"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
