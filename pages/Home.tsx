import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products.ts';
import ProductCard from '../components/ProductCard.tsx';

const Home: React.FC = () => {
  const featured = products.slice(0, 4);

  return (
    <div className="home-root">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center hero-grid">
            <div className="hero-content fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold uppercase tracking-widest mb-6">✨ Partner Suplai Industri & Ekspor</span>
              <h1 className="font-serif text-5xl lg:text-7xl font-bold text-brand-primary leading-tight mb-8">
                Esensi Murni <br/><span className="text-brand-secondary italic">Rempah Indonesia</span>
              </h1>
              <p className="text-xl text-stone-500 mb-10 max-w-lg leading-relaxed">
                Menyediakan komoditas rempah terbaik dengan jaminan kemurnian 100%. Dari tanah vulkanik Nusantara langsung ke lini produksi Anda.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/produk" className="px-8 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-secondary transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl uppercase tracking-wider text-xs">Jelajahi Katalog</Link>
                <Link to="/kemitraan" className="px-8 py-4 border-2 border-brand-primary text-brand-primary font-bold rounded-lg hover:bg-brand-primary hover:text-white transition-all transform hover:-translate-y-1 uppercase tracking-wider text-xs">Program B2B</Link>
              </div>
            </div>
            <div className="hero-visual-v2 fade-up" style={{animationDelay: '0.2s'}}>
              <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1200" alt="Premium Indonesian Spices Collection" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container text-center">
          <div className="mb-16">
            <h2 className="font-serif text-4xl font-bold text-brand-primary mb-4">Integritas Kualitas</h2>
            <p className="text-stone-500 text-lg">Mengapa industri global memilih rempah dari kemitraan kami?</p>
            <div className="w-20 h-1 bg-brand-accent mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group p-8 rounded-2xl hover:bg-stone-50 transition-colors">
              <div className="text-5xl mb-6">🌿</div>
              <h3 className="font-serif text-xl font-bold mb-4 text-brand-primary">Kemurnian Terjamin</h3>
              <p className="text-stone-500 leading-relaxed text-sm">Tanpa bahan pengisi, pewarna sintetis, maupun rekayasa kimia. Hanya rempah murni apa adanya.</p>
            </div>
            <div className="group p-8 rounded-2xl hover:bg-stone-50 transition-colors">
              <div className="text-5xl mb-6">📉</div>
              <h3 className="font-serif text-xl font-bold mb-4 text-brand-primary">Traceability</h3>
              <p className="text-stone-500 leading-relaxed text-sm">Setiap batch dapat dilacak sumber asalnya, memastikan transparansi rantai pasok yang etis.</p>
            </div>
            <div className="group p-8 rounded-2xl hover:bg-stone-50 transition-colors">
              <div className="text-5xl mb-6">🛡️</div>
              <h3 className="font-serif text-xl font-bold mb-4 text-brand-primary">Standardisasi QC</h3>
              <p className="text-stone-500 leading-relaxed text-sm">Pemeriksaan ketat terhadap kadar air dan profil mikrobiologi untuk keamanan pangan maksimal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 bg-brand-bg">
        <div className="container">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-serif text-4xl font-bold text-brand-primary mb-2">Komoditas Unggulan</h2>
              <p className="text-stone-500">Produk paling dicari dengan ketersediaan stok yang stabil.</p>
            </div>
            <Link to="/produk" className="hidden md:block font-extrabold text-brand-secondary border-b-2 border-brand-accent pb-1 hover:text-brand-primary transition-colors text-xs tracking-widest uppercase">Lihat Katalog Lengkap ⟶</Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((product, idx) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                delay={`${idx * 0.1}s`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Kemitraan Preview Section */}
      <section className="py-24">
        <div className="container">
          <div className="bg-brand-primary rounded-[40px] p-8 lg:p-24 text-white relative overflow-hidden">
             <div className="absolute right-[-10%] bottom-[-10%] text-[40rem] opacity-[0.03] rotate-[-15deg] pointer-events-none select-none font-serif leading-none">🌿</div>
             
             <div className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <span className="text-brand-accent text-[11px] font-black uppercase tracking-[0.4em] block mb-6">Kemitraan Strategis</span>
                    <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-8 leading-tight">Solusi Suplai <br/><span className="text-brand-accent italic">Skala Industrial</span></h2>
                    
                    <div className="space-y-6 mb-10 text-stone-300">
                      <p className="text-lg leading-relaxed">
                        Kami menyediakan kontrak pasokan jangka panjang untuk memastikan stabilitas harga dan kualitas bagi partner industri pengolahan makanan dan ekspor.
                      </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mb-12">
                      <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0 text-brand-accent text-xs">✓</div>
                        <p className="text-sm text-stone-300">Kapasitas Produksi Tonase</p>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0 text-brand-accent text-xs">✓</div>
                        <p className="text-sm text-stone-300">Dokumentasi & Sertifikasi Lengkap</p>
                      </div>
                    </div>

                    <Link to="/kemitraan" className="inline-flex items-center gap-4 px-10 py-5 bg-brand-accent text-brand-primary font-black rounded-xl hover:bg-white transition-all uppercase tracking-widest text-xs shadow-2xl">
                      Hubungi Tim Partnership ⟶
                    </Link>
                  </div>
                  
                  <div className="hidden lg:block">
                    <img 
                      src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=1000" 
                      alt="Industrial Spice Supply Chain" 
                      className="rounded-[32px] shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;