
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  delay?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, delay }) => {
  const navigate = useNavigate();
  
  const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(
    `Halo Rempah Nusantara, saya tertarik dengan produk ${product.name}. Mohon informasi lebih lanjut mengenai harga dan ketersediaan.`
  )}`;

  const handleCardClick = () => {
    navigate(`/produk/${product.slug}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group bg-white rounded-2xl p-5 border border-black/5 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(44,24,16,0.25)] hover:border-brand-accent/30 flex flex-col h-full fade-up cursor-pointer relative"
      style={{ animationDelay: delay }}
    >
      {/* Image Container with strict consistent aspect ratio */}
      <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 bg-stone-100 relative flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
        />
        
        {/* WhatsApp Quick Action Overlay */}
        <a 
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 right-3 w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 z-10"
          title="Tanya via WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/5 transition-colors duration-500 pointer-events-none" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow">
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
          {product.category}
        </span>
        <h3 className="font-serif text-lg font-bold text-brand-primary mb-2 line-clamp-1 group-hover:text-brand-secondary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-6 opacity-90 group-hover:opacity-100 transition-opacity">
          {product.description}
        </p>
      </div>

      {/* Footer / CTA */}
      <div className="mt-auto pt-5 border-t border-black/5 flex justify-between items-center">
        <span className="text-[10px] font-black tracking-widest text-brand-primary group-hover:text-brand-secondary transition-colors duration-300">
          LIHAT DETAIL
        </span>
        <div className="flex items-center gap-2">
           <span className="text-brand-accent text-xl transition-all duration-500 group-hover:translate-x-2 group-hover:text-brand-secondary">
            ⟶
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
