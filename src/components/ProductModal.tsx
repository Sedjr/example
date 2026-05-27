import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { formatPrice } from '../data';
import { X, Minus, Plus, MessageCircle } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState<string>('');
  const [preferences, setPreferences] = useState('');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset state when a new product is selected
  React.useEffect(() => {
    if (product) {
      setQuantity(1);
      setSize('');
      setPreferences('');
      setActiveImageIndex(0);
    }
  }, [product]);

  if (!product) return null;

  const adultSizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const kidSizes = ['2 ans', '4 ans', '6 ans', '8 ans', '10 ans', '12 ans'];
  const availableSizes = product.target === 'Enfant' ? kidSizes : adultSizes;

  const handleOrder = () => {
    if (!size) {
      alert("Veuillez sélectionner une taille avant de commander.");
      return;
    }

    const unformattedSize = size;
    const sizeText = product.target === 'Enfant' ? `Enfant ${unformattedSize}` : `${product.target} ${unformattedSize}`;
    
    const message = `Bonjour, je souhaite commander l'article *${product.name}* (${sizeText}) en ${quantity} exemplaire(s).\n\nPréférences : ${preferences || 'Aucune'}\n\nLien : ${product.images[0]}`;
    
    const whatsappUrl = `https://wa.me/22965983960?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] rounded-3xl"
        >
          {/* Close button - Top right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white md:bg-gray-100 rounded-full hover:bg-black hover:text-white transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Image & Thumbnails */}
          <div className="w-full md:w-1/2 p-4 md:p-6 bg-gray-50 flex-shrink-0 flex flex-col gap-4 overflow-hidden">
            {/* Main Image */}
            <div className="flex-grow w-full relative overflow-hidden rounded-2xl min-h-[40vh] md:min-h-0 bg-gray-200">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[activeImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
            </div>
            
            {/* Thumbnails row */}
            <div className="flex gap-3 h-20 sm:h-24 flex-shrink-0 overflow-x-auto pb-1 scrollbar-hide">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative flex-shrink-0 w-16 sm:w-20 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx 
                      ? 'border-gray-900 opacity-100' 
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-12 overflow-y-auto flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">{product.category} • {product.target}</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{product.name}</h2>
            <p className="text-2xl text-gray-900 font-medium mb-6">{formatPrice(product.price)}</p>

            <div className="w-12 h-[1px] bg-gray-300 mb-6"></div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-6 flex-grow">
              {/* Size Selector */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-900 uppercase tracking-wider">Taille</label>
                  <button className="text-xs text-gray-500 underline underline-offset-4 hover:text-black">Guide des tailles</button>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {availableSizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`py-2 text-sm border transition-colors rounded-xl ${
                        size === s
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 text-gray-900 hover:border-black'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <label className="text-sm font-medium text-gray-900 uppercase tracking-wider block mb-3">Quantité</label>
                <div className="flex items-center inline-flex border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="p-3 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="p-3 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Preferences */}
              <div>
                <label className="text-sm font-medium text-gray-900 uppercase tracking-wider block mb-3">Instructions sur mesure</label>
                <textarea
                  value={preferences}
                  onChange={(e) => setPreferences(e.target.value)}
                  placeholder="Ex: Choix du pagne, ajustements, etc."
                  className="w-full p-3 border border-gray-200 rounded-xl focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none text-sm"
                  rows={3}
                />
              </div>
            </div>

            {/* Action */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={handleOrder}
                className="w-full bg-black text-white py-4 px-6 flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors text-sm uppercase tracking-widest font-medium rounded-full"
              >
                <MessageCircle className="w-5 h-5" />
                Commander sur WhatsApp
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">
                Paiement sécurisé à la validation de la commande avec le styliste.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
