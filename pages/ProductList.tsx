
import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import { Category } from '../types';
import ProductCard from '../components/ProductCard';

const ProductList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = useMemo(() => ['Semua', ...Object.values(Category)], []);

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory !== 'Semua') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen pb-24">
      <div className="container">
        <header className="py-20 fade-up text-center lg:text-left">
          <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Standard Kualitas Global</span>
          <h1 className="font-serif text-5xl font-bold text-brand-primary mb-6">Katalog Komoditas Rempah</h1>
          <p className="text-stone-500 max-w-2xl leading-relaxed text-lg">
            Akses langsung ke rantai pasok rempah Nusantara. Kami mengkurasi varietas unggul dengan spesifikasi teknis yang memenuhi standar industri makanan, farmasi, dan pasar ekspor.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16 fade-up">
          <div className="relative w-full lg:max-w-md">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 opacity-30">🔍</span>
            <input 
              type="text" 
              placeholder="Cari spesifikasi rempah..." 
              className="w-full pl-14 pr-6 py-4 rounded-full bg-white border border-stone-200 outline-none focus:border-brand-accent transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-auto px-4 lg:px-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest whitespace-nowrap transition-all border ${
                  activeCategory === cat 
                  ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-black/10' 
                  : 'bg-white text-stone-600 border-stone-200 hover:border-brand-accent hover:text-brand-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map((product, idx) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                delay={`${idx * 0.05}s`} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-40 opacity-50 fade-up">
            <div className="text-6xl mb-6">🏜️</div>
            <h3 className="font-serif text-2xl font-bold mb-2">Komoditas tidak ditemukan</h3>
            <p>Sesuaikan kriteria pencarian atau filter kategori Anda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
