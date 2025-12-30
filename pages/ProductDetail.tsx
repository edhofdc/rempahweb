import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products.ts';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!product) navigate('/produk');
  }, [product, navigate]);

  if (!product) return null;

  // Membuat URL produk yang akurat untuk HashRouter
  const productUrl = `${window.location.origin}${window.location.pathname}#/produk/${product.slug}`;
  
  const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(
    `Halo Birawa Lestari, saya tertarik memesan produk berikut:\n\n*${product.name}*\nKategori: ${product.category}\n\nLihat Detail: ${productUrl}\n\nMohon informasi ketersediaan stok dan prosedur pemesanan. Terima kasih!`
  )}`;

  return (
    <div className="pt-32 pb-24 lg:pt-44 bg-brand-bg min-h-screen">
      <div className="container">
        {/* Navigation / Breadcrumb */}
        <nav className="mb-12 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 fade-up">
          <Link to="/" className="hover:text-brand-primary transition-colors">Beranda</Link> 
          <span className="opacity-30">/</span> 
          <Link to="/produk" className="hover:text-brand-primary transition-colors">Katalog</Link> 
          <span className="opacity-30">/</span> 
          <span className="text-brand-secondary">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Gallery Side */}
          <div className="fade-up">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border-[12px] border-white group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-5 py-2 bg-brand-primary/5 text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8">
              Koleksi {product.category}
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-brand-primary leading-[1.1] mb-8">
              {product.name}
            </h1>
            
            <p className="text-xl text-stone-500 leading-relaxed mb-12">
              {product.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">💡</div>
                <h4 className="font-serif text-lg font-bold text-brand-primary mb-2">Saran Penyajian</h4>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {product.usage || "Gunakan dalam porsi sesuai selera untuk mendapatkan aroma dan rasa otentik Nusantara."}
                </p>
              </div>

              <div className="p-8 bg-brand-primary text-white rounded-3xl shadow-xl shadow-brand-primary/20">
                <div className="text-3xl mb-4">🛡️</div>
                <h4 className="font-serif text-lg font-bold text-brand-accent mb-2">Jaminan Mutu</h4>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Lolos uji laboratorium, bebas pengawet, dan diproses secara higienis sesuai standar ekspor.
                </p>
              </div>
            </div>

            {product.benefits && (
              <div className="mb-16">
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-400 mb-6">Manfaat Utama</h4>
                <div className="flex flex-wrap gap-3">
                  {product.benefits.map((benefit, i) => (
                    <span key={i} className="px-6 py-3 bg-white border border-stone-100 rounded-2xl text-xs font-bold text-brand-primary flex items-center gap-2 hover:border-brand-accent transition-colors">
                      <span className="text-brand-accent">✦</span> {benefit}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Prominent WhatsApp Button Container */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={waLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative flex-1 flex items-center justify-center gap-4 bg-[#25D366] text-white py-6 rounded-2xl font-black uppercase tracking-[0.15em] text-xs shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(37,211,102,0.5)] transition-all duration-500 hover:-translate-y-1 active:scale-95 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <svg className="w-6 h-6 fill-current relative z-10" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="relative z-10">Pesan Sekarang via WA</span>
                </a>
                
                <Link 
                  to="/produk" 
                  className="flex-1 flex items-center justify-center gap-3 border-2 border-brand-primary text-brand-primary py-6 rounded-2xl font-black uppercase tracking-[0.15em] text-xs hover:bg-brand-primary hover:text-white transition-all duration-500 hover:-translate-y-1"
                >
                  Kembali ke Katalog
                </Link>
              </div>
              
              <div className="flex items-center justify-center gap-6 py-6 border-t border-stone-100">
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest mb-1">Stock</span>
                  <span className="text-xs font-bold text-green-600">Ready (Kontinu)</span>
                </div>
                <div className="w-px h-8 bg-stone-100" />
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest mb-1">Min. Order</span>
                  <span className="text-xs font-bold text-brand-primary">100g / 1kg</span>
                </div>
                <div className="w-px h-8 bg-stone-100" />
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest mb-1">Pengiriman</span>
                  <span className="text-xs font-bold text-brand-primary">Seluruh Indonesia</span>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-center text-[9px] text-stone-400 font-bold uppercase tracking-[0.3em] leading-relaxed">
              *Harga grosir berlaku untuk pemesanan di atas 10kg.<br/>Hubungi admin untuk penawaran khusus industri.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;