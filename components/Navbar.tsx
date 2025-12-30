
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Katalog', path: '/produk' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md py-4 border-b border-black/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2.5 z-[110]">
            <div className="w-9 h-9 bg-[#1B4332] rounded-lg flex items-center justify-center text-white font-bold text-sm">
              RN
            </div>
            <div className="flex flex-col">
              <span className={`font-playfair font-black text-lg leading-none ${isScrolled || isMenuOpen ? 'text-[#2C1810]' : 'text-[#2C1810] md:text-white'}`}>
                REMPAH
              </span>
              <span className={`text-[9px] font-bold tracking-[0.2em] ${isScrolled || isMenuOpen ? 'text-[#1B4332]' : 'text-[#1B4332] md:text-white/70'}`}>
                NUSANTARA
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`text-[11px] font-extrabold uppercase tracking-widest transition-opacity hover:opacity-60 ${
                  isScrolled ? 'text-[#2C1810]' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest transition-all ${
                isScrolled ? 'bg-[#2C1810] text-white' : 'bg-white text-[#2C1810]'
              } hover:scale-105 active:scale-95`}
            >
              Hubungi
            </a>
          </nav>

          {/* Toggle Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 z-[110]"
            aria-label="Menu"
          >
            <div className="w-5 flex flex-col items-end gap-1.5">
              <span className={`h-0.5 transition-all duration-300 ${isMenuOpen ? 'w-5 rotate-45 translate-y-2 bg-[#2C1810]' : `w-5 ${isScrolled ? 'bg-[#2C1810]' : 'bg-[#2C1810] md:bg-white'}`}`}></span>
              <span className={`h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : `w-3 ${isScrolled ? 'bg-[#2C1810]' : 'bg-[#2C1810] md:bg-white'}`}`}></span>
              <span className={`h-0.5 transition-all duration-300 ${isMenuOpen ? 'w-5 -rotate-45 -translate-y-2 bg-[#2C1810]' : `w-4 ${isScrolled ? 'bg-[#2C1810]' : 'bg-[#2C1810] md:bg-white'}`}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Simplified Mobile Overlay */}
      <div className={`fixed inset-0 z-[90] transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-[#FCFAF7] transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="h-full flex flex-col items-center justify-center p-8 space-y-10">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-4xl font-playfair font-black text-[#2C1810]"
              >
                {link.name}
              </Link>
            ))}
            <div className="w-12 h-1 bg-[#1B4332]/20"></div>
            <a href="https://wa.me/6281234567890" className="text-sm font-bold uppercase tracking-widest text-[#1B4332]">
              WhatsApp Kami ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
