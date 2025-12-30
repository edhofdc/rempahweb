
import { Product, Category } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'ADAS MANIS BUBUK',
    slug: 'adas-manis-bubuk',
    description: 'Bubuk adas manis murni dengan aroma khas yang kuat. Cocok untuk bumbu masakan Timur Tengah dan campuran teh herbal.',
    category: Category.BUBUK,
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800',
    benefits: ['Melancarkan pencernaan', 'Mengurangi kembung', 'Anti-inflamasi alami'],
    usage: 'Gunakan 1 sendok teh untuk masakan kari atau seduhan air hangat.'
  },
  {
    id: '2',
    name: 'ADAS MANIS KUPAS',
    slug: 'adas-manis-kupas',
    description: 'Biji adas manis pilihan yang telah dikupas bersih. Memberikan rasa manis dan segar yang autentik.',
    category: Category.BIJI,
    image: 'https://images.unsplash.com/photo-1515544865809-9407489ce86e?auto=format&fit=crop&q=80&w=800',
    benefits: ['Kaya akan antioksidan', 'Meningkatkan kesehatan jantung'],
    usage: 'Cocok untuk topping roti atau bahan utama jamu tradisional.'
  },
  {
    id: '3',
    name: 'AKAR ALANG-ALANG BASAH',
    slug: 'akar-alang-alang-basah',
    description: 'Akar alang-alang segar yang diambil langsung dari tanah pilihan. Dikenal sebagai pereda panas dalam yang ampuh.',
    category: Category.BASAH,
    image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&q=80&w=800',
    benefits: ['Meredakan panas dalam', 'Melancarkan buang air kecil'],
    usage: 'Rebus dengan air secukupnya hingga mendidih.'
  },
  {
    id: '4',
    name: 'ANGCO KURMA CINA',
    slug: 'angco-kurma-cina',
    description: 'Kurma merah Cina berkualitas (Jujube) yang kaya akan nutrisi dan sering digunakan dalam pengobatan tradisional.',
    category: Category.KERING,
    image: 'https://images.unsplash.com/photo-1594911771144-8846399ba7b4?auto=format&fit=crop&q=80&w=800',
    benefits: ['Meningkatkan stamina', 'Menambah sel darah merah'],
    usage: 'Dapat dimakan langsung atau dicampur dalam sup herbal.'
  },
  {
    id: '5',
    name: 'ANGKAK MERAH',
    slug: 'angkak-merah',
    description: 'Beras merah yang difermentasi, sering digunakan sebagai pewarna makanan alami dan pengobatan alternatif.',
    category: Category.HERBAL,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?auto=format&fit=crop&q=80&w=800',
    benefits: ['Meningkatkan trombosit', 'Membantu pemulihan DBD'],
    usage: 'Seduh dengan air panas atau rebus bersama makanan.'
  },
  {
    id: '6',
    name: 'ASAM KANDIS – GANDIS',
    slug: 'asam-kandis',
    description: 'Kulit buah yang dikeringkan, memberikan rasa asam yang segar tanpa mengubah warna masakan secara drastis.',
    category: Category.KERING,
    image: 'https://images.unsplash.com/photo-1614735241165-6756e1df61ab?auto=format&fit=crop&q=80&w=800',
    benefits: ['Kaya Vitamin C', 'Membantu metabolisme lemak'],
    usage: 'Bahan utama dalam masakan Rendang dan Pindang.'
  },
  {
    id: '7',
    name: 'BANGLE BUBUK',
    slug: 'bangle-bubuk',
    description: 'Rimpang bangle yang diproses menjadi bubuk halus. Praktis untuk kebutuhan jamu dan kecantikan.',
    category: Category.BUBUK,
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9caab53?auto=format&fit=crop&q=80&w=800',
    benefits: ['Peluruh lemak alami', 'Mengatasi perut mules'],
    usage: 'Gunakan sebagai campuran lulur atau diminum sebagai jamu.'
  },
  {
    id: '8',
    name: 'BANGLE KERING',
    slug: 'bangle-kering',
    description: 'Irisan rimpang bangle kering matahari. Awet disimpan lama tanpa mengurangi khasiat utamanya.',
    category: Category.KERING,
    image: 'https://images.unsplash.com/photo-1596719041065-225e347713d7?auto=format&fit=crop&q=80&w=800',
    benefits: ['Meredakan demam', 'Anti-rematik'],
    usage: 'Rebus bersama rimpang lainnya seperti jahe dan kunyit.'
  },
  {
    id: '9',
    name: 'BIDARA LAUT – BISADAR PUTIH KERING',
    slug: 'bidara-laut',
    description: 'Kayu bidara laut pilihan yang dikeringkan sempurna. Memiliki rasa pahit yang khas dengan manfaat luas.',
    category: Category.KERING,
    image: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=800',
    benefits: ['Membersihkan darah', 'Meningkatkan nafsu makan'],
    usage: 'Rendam potongan kayu dalam air panas selama 15 menit.'
  },
  {
    id: '10',
    name: 'BUBUK BAWANG BOMBAY',
    slug: 'bubuk-bawang-bombay',
    description: '100% Bawang bombay murni yang dikeringkan dan dihaluskan. Aroma gurih yang kuat untuk segala masakan.',
    category: Category.BUBUK,
    image: 'https://images.unsplash.com/photo-1508737027454-e85e822ca515?auto=format&fit=crop&q=80&w=800',
    benefits: ['Praktis tanpa mengupas', 'Aroma masakan lebih stabil'],
    usage: 'Taburkan pada steak, ayam goreng, atau saus pasta.'
  },
  {
    id: '11',
    name: 'BUBUK BAWANG PUTIH',
    slug: 'bubuk-bawang-putih',
    description: 'Bawang putih pilihan dengan proses pengeringan suhu rendah untuk menjaga kadar allicin tetap tinggi.',
    category: Category.BUBUK,
    image: 'https://images.unsplash.com/photo-1589615232230-281ca3b8232d?auto=format&fit=crop&q=80&w=800',
    benefits: ['Meningkatkan sistem imun', 'Anti-bakteri'],
    usage: 'Sangat cocok untuk bumbu marinasi atau seasoning.'
  },
  {
    id: '12',
    name: 'BINAHONG KERING',
    slug: 'binahong-kering',
    description: 'Daun binahong pilihan yang dikeringkan secara higienis. Sangat populer untuk pemulihan pasca operasi.',
    category: Category.KERING,
    image: 'https://images.unsplash.com/photo-1501004893584-48f107a1584c?auto=format&fit=crop&q=80&w=800',
    benefits: ['Mempercepat penyembuhan luka', 'Menjaga stamina'],
    usage: 'Rebus 3-5 lembar daun kering dengan 2 gelas air.'
  },
  {
    id: '13',
    name: 'BINAHONG BUBUK',
    slug: 'binahong-bubuk',
    description: 'Ekstrak daun binahong dalam bentuk bubuk. Mudah larut dan diserap tubuh dengan lebih cepat.',
    category: Category.BUBUK,
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=800',
    benefits: ['Anti-inflamasi tinggi', 'Membantu masalah ginjal ringan'],
    usage: 'Campurkan ke dalam air hangat atau kapsul herbal.'
  },
  {
    id: '14',
    name: 'BLACK CHIA SEED',
    slug: 'black-chia-seed',
    description: 'Superfood kaya serat dan Omega-3. Biji pilihan berkualitas premium untuk gaya hidup sehat.',
    category: Category.BIJI,
    image: 'https://images.unsplash.com/photo-1510629954389-c1e0da47d414?auto=format&fit=crop&q=80&w=800',
    benefits: ['Tinggi serat', 'Sumber Omega-3 nabati'],
    usage: 'Taburkan pada oatmeal, smoothie, atau pudding.'
  },
  {
    id: '15',
    name: 'BROTOWALI BUBUK',
    slug: 'brotowali-bubuk',
    description: 'Batang brotowali yang dihaluskan. Rasa pahit yang melegenda dengan segudang manfaat kesehatan.',
    category: Category.BUBUK,
    image: 'https://images.unsplash.com/photo-1585141940984-7501a35f7957?auto=format&fit=crop&q=80&w=800',
    benefits: ['Mengontrol gula darah', 'Anti-malaria alami'],
    usage: 'Konsumsi dalam dosis kecil dengan campuran madu.'
  },
  {
    id: '16',
    name: 'BROTOWALI KERING',
    slug: 'brotowali-kering',
    description: 'Potongan batang brotowali kering. Cocok untuk stok ramuan jamu tradisional di rumah.',
    category: Category.KERING,
    image: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=800',
    benefits: ['Meningkatkan nafsu makan', 'Meredakan nyeri sendi'],
    usage: 'Rebus bersama sambiloto atau kunyit.'
  }
];
