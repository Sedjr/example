import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { formatPrice } from '../data';
import { ChevronRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer flex flex-col"
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-xl">
        <img
          src={product.images[0]}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        {/* Hover overlay button */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white text-black px-6 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-gray-100 uppercase tracking-widest shadow-xl rounded-xl">
            Découvrir
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-5 space-y-1 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">{product.target}</p>
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600">{formatPrice(product.price)}</p>
      </div>
    </motion.div>
  );
}
