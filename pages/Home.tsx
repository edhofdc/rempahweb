
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featured = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Light Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-[#0D1510]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 scale-105"
            alt="Spices"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1510] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] font-playfair tracking-tight">
              Kearifan <span className="italic text-white/60">Tanah</span> Nusantara.
            </h1>
            <p className="text-base md:text-lg text-white/70 mb-10 leading-relaxed font-medium max-w-lg">
              Kami menghadirkan koleksi rempah murni langsung dari sumber terbaik di Indonesia untuk kualitas yang tak tertandingi.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/produk" className="px-8 py-4 bg-[#1B4332] text-white rounded-full text-[11px] font-extrabold uppercase tracking-widest hover:brightness-110 transition-soft">
                Buka Katalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Grid */}
      <section className="py-24 bg-[#FCFAF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-6 mb-16">
            <h2 className="text-3xl md:text-5xl font-black font-playfair text-[#2C1810]">Produk Unggulan</h2>
            <Link to="/produk" className="text-[10px] font-bold uppercase tracking-widest text-[#1B4332] border-b border-[#1B4332]/20 pb-1">
              Lihat Semua ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map(product => (
              <Link 
                key={product.id} 
                to={`/produk/${product.slug}`}
                className="group flex flex-col bg-white p-3 rounded-2xl transition-expo card-shadow border border-black/[0.03]"
              >
                <div className="aspect-square overflow-hidden rounded-xl bg-gray-50 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-2 flex flex-col flex-grow">
                  <span className="text-[9px] font-extrabold text-[#1B4332]/60 uppercase tracking-widest mb-1.5">{product.category}</span>
                  <h3 className="text-base font-bold text-[#2C1810] leading-tight mb-4 group-hover:text-[#1B4332] transition-colors">{product.name}</h3>
                  <div className="mt-auto flex items-center justify-between text-[10px] font-bold text-[#2C1810]/30 uppercase tracking-tighter">
                    <span>Lihat Detail</span>
                    <span className="group-hover:translate-x-1 transition-transform">⟶</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Story Section */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Spice Processing" />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black font-playfair italic leading-tight text-[#2C1810]">Kualitas Murni, <span className="text-[#1B4332] not-italic">Tanpa Kompromi.</span></h2>
            <p className="text-base text-[#2C1810]/60 leading-relaxed font-medium">
              Kami percaya bahwa keaslian adalah kunci dari setiap hidangan. Sejak 1998, Rempah Nusantara berkomitmen untuk menjaga integritas rasa dan aroma asli Indonesia melalui proses seleksi yang ketat.
            </p>
            <div className="pt-8 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-black text-[#1B4332]">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2C1810]/40">Alami</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#1B4332]">25+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2C1810]/40">Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
