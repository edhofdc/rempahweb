
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const LogoIcon = () => (
    <svg className="w-10 h-10 text-brand-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V2M12 22C12 22 15 18 15 12C15 6 12 2 12 2M12 22C12 22 9 18 9 12C9 6 12 2 12 2" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5"/>
      <path d="M7 16.5C7 16.5 9 15.5 12 15.5C15 15.5 17 16.5 17 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  return (
    <footer className="bg-brand-primary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute right-0 top-0 text-[20rem] opacity-[0.02] pointer-events-none font-serif translate-x-1/4 -translate-y-1/4">
        🌿
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <LogoIcon />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-black tracking-tight text-white uppercase">REMPAH</span>
                <span className="text-[11px] font-bold tracking-[0.4em] text-brand-accent uppercase -mt-0.5">Nusantara</span>
              </div>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Membawa keajaiban rempah Nusantara ke meja makan dunia. Kami berkomitmen pada kualitas murni, keberlanjutan alam, dan kesejahteraan petani lokal melalui rantai pasok yang transparan.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'LI', 'YT'].map(social => (
                <a key={social} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-brand-accent hover:border-brand-accent hover:text-brand-primary transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Contact - Aligned to the right on large screens */}
          <div className="md:ml-auto">
            <h5 className="text-brand-accent text-[11px] font-black uppercase tracking-[0.3em] mb-10">Hubungi Kami</h5>
            <ul className="space-y-6 text-sm text-stone-300">
              <li className="flex gap-4">
                <span className="text-brand-accent opacity-50">📍</span>
                <span className="max-w-[250px]">Jl. Rempah No. 12, Area Industri, Jakarta Selatan, 12730</span>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-accent opacity-50">📞</span>
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-accent opacity-50">✉️</span>
                <span>sales@birawalestari.my.id</span>
              </li>
              <li className="pt-4">
                <Link to="/kemitraan" className="text-brand-accent font-bold hover:text-white transition-colors text-xs tracking-widest uppercase">
                  Program Kemitraan ⟶
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-stone-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} PT Rempah Nusantara Indonesia. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-stone-500 uppercase tracking-widest">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
