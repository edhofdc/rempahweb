# Birawa Lestari - Company Profile

Website profil perusahaan statis untuk penjualan rempah-rempah.

## Teknologi Utama
- **React 18+** dengan **TypeScript**
- **Tailwind CSS** untuk desain modern & earthy
- **React Router (HashRouter)** untuk navigasi tanpa backend
- **Data Statis**: Semua produk disimpan di `data/products.ts` untuk kemudahan maintenance manual via GitHub.

## Struktur Folder
- `components/`: UI yang dapat digunakan kembali (Navbar, Footer, Card).
- `pages/`: Halaman utama aplikasi (Home, Product List, Detail).
- `data/`: File data produk (format JSON/Object TS).
- `types.ts`: Definisi tipe data.

## Cara Update Produk
Untuk menambah atau mengubah produk:
1. Buka file `data/products.ts`.
2. Edit array `products` sesuai kebutuhan.
3. Commit dan push ke GitHub.
4. Netlify akan otomatis melakukan rebuild.

## Instruksi Deploy ke Netlify
1. Hubungkan repo GitHub ini ke Netlify.
2. Atur **Build Settings**:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
3. Klik "Deploy site".