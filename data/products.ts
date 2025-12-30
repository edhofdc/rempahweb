import { Product, Category } from '../types.ts';

export const products: Product[] = [
  {
    id: '1',
    name: 'ADAS MANIS BUBUK',
    slug: 'adas-manis-bubuk',
    description: 'Bubuk adas manis murni kualitas grade A. Diproses dengan penggilingan suhu rendah untuk mempertahankan aroma manis-pedas yang intens.',
    category: Category.BUBUK,
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=800',
    benefits: ['Melancarkan pencernaan', 'Mengurangi kembung', 'Anti-inflamasi alami'],
    usage: 'Campurkan 5-10g pada masakan kari atau adonan kue tradisional.'
  },
  {
    id: '2',
    name: 'ADAS MANIS KUPAS',
    slug: 'adas-manis-kupas',
    description: 'Biji adas manis utuh yang telah dibersihkan dari sekam. Memiliki kadar minyak atsiri tinggi untuk rasa yang lebih tajam.',
    category: Category.BIJI,
    image: 'https://images.unsplash.com/photo-1515544865809-9407489ce86e?auto=format&fit=crop&q=80&w=800',
    benefits: ['Kaya antioksidan', 'Membantu relaksasi'],
    usage: 'Seduh bersama teh atau gunakan sebagai bumbu dasar tumisan.'
  },
  {
    id: '3',
    name: 'AKAR ALANG-ALANG BASAH',
    slug: 'akar-alang-alang-basah',
    description: 'Rimpang alang-alang pilihan, dipanen saat usia optimal untuk kandungan zat aktif Imperata Cylindrica yang maksimal.',
    category: Category.BASAH,
    image: 'https://images.unsplash.com/photo-1506484334402-40ff22e0716a?auto=format&fit=crop&q=80&w=800',
    benefits: ['Pereda panas dalam', 'Diuretik alami'],
    usage: 'Cuci bersih dan rebus 100g rimpang dengan 1 liter air.'
  },
  {
    id: '4',
    name: 'ANGCO KURMA CINA',
    slug: 'angco-kurma-cina',
    description: 'Ziziphus jujuba pilihan dengan daging buah tebal dan rasa manis alami. Tanpa tambahan pemanis buatan maupun pengawet.',
    category: Category.KERING,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?auto=format&fit=crop&q=80&w=800',
    benefits: ['Meningkatkan energi', 'Melancarkan peredaran darah'],
    usage: 'Dapat langsung dikonsumsi atau dicampurkan ke dalam sup herbal.'
  },
  {
    id: '5',
    name: 'ANGKAK MERAH',
    slug: 'angkak-merah',
    description: 'Beras merah fermentasi (Monascus purpureus) kualitas ekspor. Diproses higienis untuk menjamin keamanan konsumsi.',
    category: Category.HERBAL,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800',
    benefits: ['Menaikkan trombosit', 'Menurunkan kolesterol'],
    usage: 'Rebus 1 sendok makan angkak dengan 2 gelas air hingga tersisa 1 gelas.'
  },
  {
    id: '6',
    name: 'ASAM KANDIS – GANDIS',
    slug: 'asam-kandis',
    description: 'Irisan buah Garcinia xanthochymus kering. Memberikan cita rasa asam yang elegan dan bersih pada masakan.',
    category: Category.KERING,
    image: 'https://images.unsplash.com/photo-1605652136005-728b7884d85e?auto=format&fit=crop&q=80&w=800',
    benefits: ['Meningkatkan nafsu makan', 'Anti-obesitas'],
    usage: 'Cukup masukkan 2-3 keping ke dalam masakan Rendang atau Pindang.'
  },
  {
    id: '7',
    name: 'BANGLE BUBUK',
    slug: 'bangle-bubuk',
    description: 'Zingiber cassumunar murni yang dikeringkan dan dihaluskan. Memiliki aroma earthy yang khas dan kuat.',
    category: Category.BUBUK,
    image: 'https://images.unsplash.com/photo-1596719041065-225e347713d7?auto=format&fit=crop&q=80&w=800',
    benefits: ['Menurunkan berat badan', 'Mengatasi masuk angin'],
    usage: 'Gunakan sebagai bahan jamu seduh atau lulur kecantikan.'
  },
  {
    id: '8',
    name: 'BANGLE KERING',
    slug: 'bangle-kering',
    description: 'Rimpang bangle iris kering matahari. Mempertahankan profil enzim alami karena proses pengeringan yang lambat.',
    category: Category.KERING,
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9caab53?auto=format&fit=crop&q=80&w=800',
    benefits: ['Meredakan nyeri sendi', 'Pelancar ASI'],
    usage: 'Rebus bersama kencur dan jahe untuk ramuan kesehatan.'
  },
  {
    id: '9',
    name: 'BIDARA LAUT – BISADAR PUTIH KERING',
    slug: 'bidara-laut',
    description: 'Potongan kayu bidara laut murni. Dikenal dalam pengobatan tradisional sebagai penawar racun dan pembersih sistemik.',
    category: Category.KERING,
    image: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=800',
    benefits: ['Anti-mikroba', 'Mengobati malaria'],
    usage: 'Rendam potongan kayu dalam air panas semalaman, minum airnya.'
  },
  {
    id: '10',
    name: 'BUBUK BAWANG BOMBAY',
    slug: 'bubuk-bawang-bombay',
    description: 'Dihasilkan dari bawang bombay segar yang dikeringkan (dehydrated) hingga kadar air <5%. Tanpa campuran tepung.',
    category: Category.BUBUK,
    image: 'https://images.unsplash.com/photo-1581074817932-84293dec26e1?auto=format&fit=crop&q=80&w=800',
    benefits: ['Anti-oksidan', 'Mendukung imun'],
    usage: 'Taburkan sebagai seasoning pada daging, sup, atau snack.'
  },
  {
    id: '11',
    name: 'BUBUK BAWANG PUTIH',
    slug: 'bubuk-bawang-putih',
    description: 'Bawang putih murni dengan konsentrasi rasa 1:5 (1g bubuk setara 5g bawang putih segar).',
    category: Category.BUBUK,
    image: 'https://images.unsplash.com/photo-1589615232230-281ca3b8232d?auto=format&fit=crop&q=80&w=800',
    benefits: ['Menurunkan tekanan darah', 'Anti-biotik alami'],
    usage: 'Sangat efisien untuk industri pengolahan makanan/snack.'
  },
  {
    id: '12',
    name: 'BINAHONG KERING',
    slug: 'binahong-kering',
    description: 'Daun binahong Anredera cordifolia yang diproses dengan metode cool-drying untuk menjaga saponin dan polifenol.',
    category: Category.KERING,
    image: 'https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&q=80&w=800',
    benefits: ['Pemulihan pasca operasi', 'Mengobati maag'],
    usage: 'Seduh 3 lembar daun dengan air mendidih selama 10 menit.'
  },
  {
    id: '13',
    name: 'BINAHONG BUBUK',
    slug: 'binahong-bubuk',
    description: 'Bubuk halus daun binahong murni. Mempermudah formulasi dalam industri farmasi atau pembuatan kapsul herbal.',
    category: Category.BUBUK,
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=800',
    benefits: ['Anti-aging', 'Membantu fungsi ginjal'],
    usage: 'Dapat digunakan sebagai campuran masker wajah atau kapsul diet.'
  },
  {
    id: '14',
    name: 'BLACK CHIA SEED',
    slug: 'black-chia-seed',
    description: 'Salvia hispanica kualitas premium dengan tingkat kemurnian 99.9%. Kaya akan Omega-3 dan serat pangan.',
    category: Category.BIJI,
    image: 'https://images.unsplash.com/photo-1510629954389-c1e0da47d414?auto=format&fit=crop&q=80&w=800',
    benefits: ['Sumber kalsium tinggi', 'Manajemen berat badan'],
    usage: 'Campurkan pada smoothie, salad, atau rendam dalam air.'
  },
  {
    id: '15',
    name: 'BROTOWALI BUBUK',
    slug: 'brotowali-bubuk',
    description: 'Ekstrak batang Tinospora crispa. Memiliki profil kepahitan yang stabil and konsisten.',
    category: Category.BUBUK,
    image: 'https://images.unsplash.com/photo-1585141940984-7501a35f7957?auto=format&fit=crop&q=80&w=800',
    benefits: ['Detoksifikasi hati', 'Mengobati gatal-gatal'],
    usage: 'Gunakan dalam porsi kecil karena rasa pahit yang sangat kuat.'
  },
  {
    id: '16',
    name: 'BROTOWALI KERING',
    slug: 'brotowali-kering',
    description: 'Batang brotowali potong kering. Ideal untuk kebutuhan stok industri jamu tradisional.',
    category: Category.KERING,
    image: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=800',
    benefits: ['Anti-diabetes', 'Menurunkan demam'],
    usage: 'Rebus 10g batang kering dengan 3 gelas air hingga mendidih.'
  }
];