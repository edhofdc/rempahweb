
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Category } from '../types';

const ProductList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const categories = useMemo(() => ['Semua', ...Object.values(Category)], []);

  const filtered = useMemo(() => 
    activeCategory === 'Semua' ? products : products.filter(p => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#FCFAF7]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black font-playfair text-[#2C1810] mb-4">Katalog <span className="text-[#1B4332] italic">Rempah</span></h1>
          <p className="text-[#2C1810]/50 text-base md:text-lg font-medium max-w-xl">
            Jelajahi beragam pilihan rempah berkualitas tinggi yang siap melengkapi kebutuhan Anda.
          </p>
        </header>

        {/* Categories - Light & Snappy */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest transition-soft border ${
                activeCategory === cat 
                ? 'bg-[#2C1810] text-white border-transparent' 
                : 'bg-white text-[#2C1810]/60 border-black/5 hover:border-black/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(product => (
            <Link 
              key={product.id} 
              to={`/produk/${product.slug}`}
              className="group flex flex-col bg-white p-3 rounded-2xl transition-expo card-shadow border border-black/[0.03]"
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-gray-50 mb-4 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-2 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332]"></span>
                  <span className="text-[9px] font-extrabold text-[#1B4332] uppercase tracking-widest">{product.category}</span>
                </div>
                <h3 className="text-lg font-bold text-[#2C1810] leading-tight mb-2 group-hover:text-[#1B4332] transition-colors">{product.name}</h3>
                <p className="text-[12px] text-[#2C1810]/50 line-clamp-2 leading-relaxed mb-6 font-medium">
                  {product.description}
                </p>
                <div className="mt-auto pt-4 border-t border-black/5 flex items-center justify-between text-[10px] font-extrabold text-[#2C1810] uppercase tracking-widest">
                  <span>Lihat Detail</span>
                  <span className="w-6 h-6 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-[#1B4332] group-hover:text-white transition-colors">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
