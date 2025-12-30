import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Koleksi Rempah', path: '/produk' },
    { name: 'Kemitraan', path: '/kemitraan' },
  ];

  const LogoIcon = () => (
    <svg className="w-8 h-8 text-brand-accent transition-transform group-hover:rotate-12 duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V2M12 22C12 22 15 18 15 12C15 6 12 2 12 2M12 22C12 22 9 18 9 12C9 6 12 2 12 2" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5"/>
      <path d="M7 16.5C7 16.5 9 15.5 12 15.5C15 15.5 17 16.5 17 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  const WhatsAppIcon = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  return (
    <>
      <nav className={`nav-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container flex justify-between items-center w-full">
          <Link to="/" className="flex items-center gap-3 group">
            <LogoIcon />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl font-black tracking-tight text-brand-primary group-hover:text-brand-secondary transition-colors uppercase">BIRAWA</span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-brand-accent uppercase -mt-0.5">Lestari</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-[11px] font-extrabold uppercase tracking-widest text-brand-primary hover:text-brand-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <a href="https://wa.me/6281234567890?text=Halo%20Birawa%20Lestari%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20rempah." className="flex items-center gap-2 px-6 py-2.5 bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest rounded transition-all hover:bg-brand-secondary hover:-translate-y-0.5 shadow-sm">
                <WhatsAppIcon />
                <span>Kontak Kami</span>
              </a>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-brand-primary focus:outline-none z-50"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between relative overflow-hidden">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-translate-x-full opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[40] lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-brand-primary/20 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-brand-bg shadow-2xl transition-transform duration-500 flex flex-col p-12 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mb-16">
            <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.3em] block mb-2">Navigasi</span>
            <div className="w-10 h-0.5 bg-brand-accent"></div>
          </div>
          <div className="flex flex-col gap-8">
            {navLinks.map((link, idx) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="font-serif text-3xl font-bold text-brand-primary hover:text-brand-secondary transition-colors"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto">
            <p className="text-xs text-stone-400 mb-6 leading-relaxed">Kualitas rempah terbaik dari tanah Nusantara untuk dunia.</p>
            <a href="https://wa.me/6281234567890?text=Halo%20Birawa%20Lestari%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20rempah." className="flex justify-center items-center gap-3 w-full py-5 bg-brand-primary text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all hover:bg-brand-secondary">
              <WhatsAppIcon />
              <span>WhatsApp Kami</span>
              <span className="text-lg">⟶</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;