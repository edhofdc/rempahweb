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

  const productUrl = window.location.href;
  const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(
    `Halo Rempah Nusantara, saya tertarik memesan: ${product.name}\n\nDetail: ${productUrl}`
  )}`;

  return (
    <div style={{paddingTop: '120px', paddingBottom: '8rem'}}>
      <div className="container">
        <nav style={{marginBottom: '3rem', fontSize: '0.8rem', fontWeight: 600}} className="fade-up">
          <Link to="/" style={{color: 'var(--text-muted)', textDecoration: 'none'}}>Beranda</Link> 
          <span style={{margin: '0 0.5rem', opacity: 0.3}}>/</span> 
          <Link to="/produk" style={{color: 'var(--text-muted)', textDecoration: 'none'}}>Katalog</Link> 
          <span style={{margin: '0 0.5rem', opacity: 0.3}}>/</span> 
          <span style={{color: 'var(--secondary)'}}>{product.name}</span>
        </nav>

        <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <div className="detail-gallery fade-up">
            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(44,24,16,0.15)' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>

          <div className="detail-content fade-up" style={{animationDelay: '0.2s'}}>
            <span style={{ 
              display: 'inline-block', 
              padding: '0.4rem 1rem', 
              fontSize: '0.7rem', 
              background: 'rgba(164, 74, 63, 0.1)', 
              color: 'var(--secondary)', 
              fontWeight: 800, 
              borderRadius: '99px',
              letterSpacing: '0.1em'
            }}>
              KATEGORI: {product.category.toUpperCase()}
            </span>
            <h1 className="serif" style={{fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1.1, margin: '1.5rem 0 2rem', color: 'var(--primary)', fontWeight: 800 }}>
              {product.name}
            </h1>
            <p style={{fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.8}}>
              {product.description}
            </p>

            <div style={{background: 'white', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(44, 24, 16, 0.05)', marginBottom: '3rem', boxShadow: '0 4px 20px rgba(0,0,0,0.02)'}}>
              <h4 className="serif" style={{marginBottom: '1rem', fontSize: '1.25rem', color: 'var(--primary)', fontWeight: 700 }}>💡 Cara Penggunaan</h4>
              <p style={{fontSize: '0.95rem', color: '#57534e', lineHeight: 1.7}}>
                {product.usage || "Dapat ditambahkan langsung pada masakan atau diseduh sebagai minuman kesehatan untuk mendapatkan profil rasa maksimal."}
              </p>
            </div>

            {product.benefits && (
              <div style={{marginBottom: '3rem'}}>
                <h4 className="serif" style={{marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--primary)', fontWeight: 700 }}>Manfaat Kesehatan</h4>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem'}}>
                  {product.benefits.map((b, i) => (
                    <span key={i} style={{
                      background: 'rgba(212, 175, 55, 0.1)', 
                      color: 'var(--primary)', 
                      padding: '0.6rem 1.2rem', 
                      borderRadius: '12px', 
                      fontSize: '0.85rem', 
                      fontWeight: 700,
                      border: '1px solid rgba(212, 175, 55, 0.2)'
                    }}>
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div style={{display: 'flex', gap: '1rem', marginTop: '4rem'}}>
              <a href={waLink} target="_blank" rel="noopener noreferrer" style={{
                flex: 1, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '0.75rem', 
                background: '#25D366', 
                color: 'white', 
                padding: '1.2rem', 
                borderRadius: '12px', 
                fontWeight: 800, 
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                boxShadow: '0 10px 20px -5px rgba(37, 211, 102, 0.3)'
              }}>
                 Hubungi Marketing Untuk Pesanan
              </a>
            </div>
            <p style={{marginTop: '1.5rem', fontSize: '0.75rem', color: '#a8a29e', textAlign: 'center', fontWeight: 600 }}>
              *Tersedia kemasan Retail (100g) dan Grosir (1kg - 25kg) dengan harga kompetitif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;