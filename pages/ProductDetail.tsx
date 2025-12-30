
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

  const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(`Halo Rempah Nusantara, saya tertarik memesan: ${product.name}`)}`;

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

        <div className="detail-grid">
          <div className="detail-gallery fade-up">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="detail-content fade-up" style={{animationDelay: '0.2s'}}>
            <span className="hero-tag" style={{margin: 0, padding: '0.4rem 1rem', fontSize: '0.7rem'}}>
              KATEGORI: {product.category.toUpperCase()}
            </span>
            <h1 className="serif" style={{fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1.1, margin: '1.5rem 0 2rem'}}>
              {product.name}
            </h1>
            <p style={{fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.8}}>
              {product.description}
            </p>

            <div style={{background: 'white', borderRadius: 'var(--radius-md)', padding: '2rem', border: '1px solid var(--border-soft)', marginBottom: '3rem', boxShadow: 'var(--shadow-soft)'}}>
              <h4 className="serif" style={{marginBottom: '1rem', fontSize: '1.25rem', color: 'var(--primary)'}}>💡 Cara Penggunaan</h4>
              <p style={{fontSize: '0.95rem', color: 'var(--text-main)', opacity: 0.8, lineHeight: 1.7}}>
                {product.usage || "Dapat ditambahkan langsung pada masakan atau diseduh sebagai minuman kesehatan untuk mendapatkan profil rasa maksimal."}
              </p>
            </div>

            {product.benefits && (
              <div style={{marginBottom: '3rem'}}>
                <h4 className="serif" style={{marginBottom: '1.5rem', fontSize: '1.25rem'}}>Manfaat Kesehatan</h4>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem'}}>
                  {product.benefits.map((b, i) => (
                    <span key={i} style={{
                      background: 'rgba(27, 67, 50, 0.05)', 
                      color: 'var(--success)', 
                      padding: '0.6rem 1.2rem', 
                      borderRadius: '12px', 
                      fontSize: '0.85rem', 
                      fontWeight: 700,
                      border: '1px solid rgba(27, 67, 50, 0.1)'
                    }}>
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div style={{display: 'flex', gap: '1rem', marginTop: '4rem'}}>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{flex: 1, gap: '0.75rem', borderRadius: '12px'}}>
                 Hubungi Marketing Untuk Pesanan
              </a>
            </div>
            <p style={{marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center'}}>
              *Tersedia kemasan Retail (100g) dan Grosir (1kg - 25kg) dengan harga kompetitif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
