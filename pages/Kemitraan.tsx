import React, { useEffect } from 'react';

const Kemitraan: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const models = [
    {
      title: "Penyedia Industri (B2B)",
      desc: "Suplai bahan baku skala besar untuk pabrik makanan, farmasi, dan kosmetik dengan standar spesifikasi teknis yang presisi.",
      icon: "🏭",
      features: ["Kontrak volume besar", "Uji lab berkala", "Custom particle size"]
    },
    {
      title: "Grosir & Distribusi",
      desc: "Solusi bagi pedagang besar, HOREKA, dan distributor daerah yang membutuhkan stok stabil dengan harga tangan pertama.",
      icon: "📦",
      features: ["Harga kompetitif", "Prioritas stok", "Dukungan logistik"]
    },
    {
      title: "Private Label (Maklon)",
      desc: "Bangun merek rempah Anda sendiri. Kami urus dari pemilihan bahan baku hingga pengemasan siap jual.",
      icon: "🏷️",
      features: ["Konsultasi branding", "Varian kemasan", "Izin edar lengkap"]
    }
  ];

  const steps = [
    { num: "01", title: "Konsultasi Kebutuhan", desc: "Diskusikan jenis rempah, volume, dan standar kualitas yang Anda cari." },
    { num: "02", title: "Pengiriman Sampel", desc: "Kami mengirimkan sampel produk untuk pengecekan kualitas di tempat Anda." },
    { num: "03", title: "Negosiasi & Kontrak", desc: "Penentuan harga terbaik dan durasi kerjasama untuk stabilitas suplai." },
    { num: "04", title: "Pengiriman Terukur", desc: "Produk dikirim tepat waktu dengan dokumentasi lengkap dan aman." }
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511130523294-919835ca6d74?auto=format&fit=crop&q=80&w=2000" 
            alt="Authentic Spice Processing" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl fade-up">
            <span className="inline-block px-4 py-1 bg-brand-accent text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded">B2B & Partnership</span>
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Tumbuh Bersama <span className="text-brand-accent italic">Birawa Lestari</span>
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed mb-10">
              Rantai pasok rempah yang andal, transparan, dan berkelanjutan. Kami menghubungkan dedikasi petani lokal dengan standar kebutuhan industri global melalui Birawa Lestari.
            </p>
            <a href="https://wa.me/6281234567890?text=Halo%20Birawa%20Lestari%2C%20saya%20tertarik%20mengenai%20program%20kemitraan%20bisnis." className="inline-flex items-center gap-4 px-10 py-5 bg-brand-accent text-brand-primary font-black rounded-xl hover:bg-white transition-all uppercase tracking-widest text-xs">
               Mulai Konsultasi Bisnis ⟶
            </a>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-brand-accent/20 rounded-[40px] translate-x-6 translate-y-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1592176372045-2139bc3463a7?auto=format&fit=crop&q=80&w=1200" 
                alt="Farmer & Spice Quality" 
                className="relative z-10 rounded-[40px] shadow-2xl"
              />
            </div>
            <div className="fade-up">
              <h2 className="font-serif text-4xl font-bold text-brand-primary mb-8 leading-tight">Keunggulan Rantai Pasok <br/>Birawa Lestari</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center shrink-0 text-2xl">🌱</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-brand-primary">Direct Sourcing</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">Kami bekerja sama langsung dengan kelompok tani terpilih di seluruh Indonesia untuk memangkas rantai distribusi yang tidak efisien.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center shrink-0 text-2xl">🔬</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-brand-primary">Standar Laboratorium</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">Setiap batch rempah melalui uji kadar air, cemaran mikroba, dan profil aroma untuk memastikan konsistensi kualitas industri.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center shrink-0 text-2xl">🌎</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-brand-primary">Kesiapan Ekspor</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">Dokumentasi lengkap (Phytosanitary, Certificate of Origin) untuk kelancaran distribusi ke mancanegara.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Kemitraan */}
      <section className="py-24 bg-brand-bg overflow-hidden">
        <div className="container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.3em] block mb-4">Pilih Kolaborasi Anda</span>
            <h2 className="font-serif text-4xl font-bold text-brand-primary mb-6">Model Kemitraan Strategis</h2>
            <div className="w-16 h-1 bg-brand-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {models.map((model, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[32px] shadow-sm border border-stone-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block">{model.icon}</div>
                <h3 className="font-serif text-2xl font-bold text-brand-primary mb-4">{model.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-8">{model.desc}</p>
                <ul className="space-y-3">
                  {model.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-xs font-bold text-stone-400">
                      <span className="text-brand-accent">✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-brand-primary text-white">
        <div className="container">
          <div className="mb-20">
            <h2 className="font-serif text-4xl font-bold mb-4">Langkah Sederhana Bermitra</h2>
            <p className="text-stone-400">Proses yang transparan bersama Birawa Lestari untuk hasil yang maksimal.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="text-6xl font-serif font-black text-white/10 mb-6 group-hover:text-brand-accent/20 transition-colors">{step.num}</div>
                <h4 className="text-lg font-bold mb-4 text-brand-accent uppercase tracking-wider">{step.title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{step.desc}</p>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-6 text-2xl opacity-20">⟶</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container">
          <div className="bg-white rounded-[40px] p-8 lg:p-20 shadow-xl border border-stone-100 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="font-serif text-4xl font-bold text-brand-primary mb-6">Siap Menjadi Partner Kami?</h2>
              <p className="text-stone-500 leading-relaxed mb-10">
                Tim spesialis Birawa Lestari siap membantu Anda menemukan solusi rempah terbaik untuk skala bisnis Anda. Hubungi kami melalui WhatsApp untuk mendapatkan katalog harga grosir terbaru.
              </p>
              <div className="flex flex-wrap gap-4">
                 <a href="https://wa.me/6281234567890?text=Halo%20Birawa%20Lestari%2C%20saya%20ingin%20bertanya%20mengenai%20kerjasama%20suplai%20rempah." className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-black rounded-xl hover:brightness-110 transition-all uppercase tracking-widest text-xs">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Business
                 </a>
                 <div className="flex items-center gap-4 pl-4 border-l border-stone-200">
                    <div>
                      <p className="text-[10px] font-black uppercase text-stone-400 tracking-widest">Respon Cepat</p>
                      <p className="font-bold text-brand-primary">Senin - Sabtu, 08:00 - 17:00</p>
                    </div>
                 </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/3">
              <div className="text-9xl grayscale opacity-10">🌿</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kemitraan;