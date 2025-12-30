
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!product) navigate('/produk');
  }, [product, navigate]);

  if (!product) return null;

  const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(`Halo, saya ingin memesan: ${product.name}`)}`;

  return (
    <div className="bg-[#FCFAF7] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest mb-12 opacity-40">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/produk">Catalog</Link>
          <span>/</span>
          <span className="text-[#1B4332]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-sm border border-black/[0.03]">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col h-full justify-center">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#1B4332] mb-4">
              {product.category} Collection
            </span>
            <h1 className="text-4xl md:text-6xl font-black font-playfair text-[#2C1810] leading-tight mb-8">
              {product.name}
            </h1>
            <p className="text-lg text-[#2C1810]/60 leading-relaxed font-medium mb-12">
              {product.description}
            </p>

            <div className="space-y-8 mb-16">
              {product.benefits && (
                <div className="p-8 bg-white rounded-2xl border border-black/5 shadow-sm">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-[#1B4332] mb-6">Manfaat Utama</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-[#2C1810]/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332]"></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row gap-4">
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow py-5 bg-[#25D366] text-white rounded-full flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-widest hover:brightness-105 transition-all shadow-xl shadow-green-900/10"
              >
                Pesan via WhatsApp
              </a>
              <button className="px-10 py-5 border border-black/10 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                Spesifikasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
