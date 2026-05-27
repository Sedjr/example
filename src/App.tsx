import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { products } from './data';
import { Category, TargetAudience, Product } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Tout'>('Tout');
  const [selectedTarget, setSelectedTarget] = useState<TargetAudience | 'Tous'>('Tous');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const collectionRef = useRef<HTMLDivElement>(null);

  const categories: (Category | 'Tout')[] = ['Tout', 'Collections Traditionnelles', 'Robes de Soirée', 'Costumes'];
  const targets: (TargetAudience | 'Tous')[] = ['Tous', 'Homme', 'Femme', 'Enfant'];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'Tout' || product.category === selectedCategory;
    const targetMatch = selectedTarget === 'Tous' || product.target === selectedTarget;
    return categoryMatch && targetMatch;
  });

  const scrollToCollection = () => {
    collectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-200">
      
      {/* Hero Section */}
      <Hero onScrollToCollection={scrollToCollection} />

      {/* Main Content */}
      <main ref={collectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">Notre Collection</h2>
          <div className="w-16 h-[1px] bg-black mx-auto"></div>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-gray-100 pb-8">
          
          {/* Target Audience Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {targets.map(target => (
              <button
                key={target}
                onClick={() => setSelectedTarget(target)}
                className={`px-6 py-2 text-xs font-medium uppercase tracking-widest transition-colors rounded-full ${
                  selectedTarget === target
                    ? 'bg-black text-white'
                    : 'bg-transparent text-gray-500 hover:text-black hover:bg-gray-50'
                }`}
              >
                {target}
              </button>
            ))}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 md:space-x-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative text-sm tracking-wide transition-colors py-2 ${
                  selectedCategory === category
                    ? 'text-black font-medium'
                    : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {category}
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-black"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 text-gray-500"
          >
            <p className="text-lg">Aucune création ne correspond à vos filtres.</p>
            <button
              onClick={() => { setSelectedCategory('Tout'); setSelectedTarget('Tous'); }}
              className="mt-4 text-sm border-b border-gray-500 pb-1 hover:text-black hover:border-black transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 md:py-16 text-center">
        <p className="text-xl font-serif italic text-gray-900 mb-4">L'élégance est la seule beauté qui ne se fane jamais.</p>
        <p className="text-xs uppercase tracking-widest text-gray-400">© 2026 Maison de Couture</p>
      </footer>

      {/* Modal / Popup */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
