
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C1810] text-[#FCFAF7] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-[#1B4332] rounded flex items-center justify-center font-bold text-xs">RN</div>
              <span className="font-playfair text-xl font-black">Rempah <span className="opacity-50">Nusantara</span></span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm font-medium">
              Eksportir dan supplier rempah-rempah berkualitas premium. Menjaga warisan rasa Indonesia untuk pasar global.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-8">Navigasi</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/" className="hover:opacity-60">Home</Link></li>
              <li><Link to="/produk" className="hover:opacity-60">Katalog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-8">Kontak</h4>
            <ul className="space-y-4 text-[12px] font-medium opacity-60">
              <li>Jakarta, Indonesia</li>
              <li>+62 812 3456 7890</li>
              <li>hello@rempah.com</li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] opacity-30">
          <p>© {new Date().getFullYear()} REMPAH NUSANTARA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
