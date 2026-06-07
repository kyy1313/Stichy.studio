create landing page with following PRD below : 

PRD: Artisan-Ku Landing Page (WA-Based Conversion)
Versi: 1.0
Status: Final
Teknologi Utama: Next.js, Tailwind CSS, Drizzle ORM, PostgreSQL.
1. Ringkasan Eksekutif
Tujuan dari proyek ini adalah membangun landing page yang berfungsi sebagai etalase digital untuk produk kerajinan tangan. Website ini tidak menggunakan sistem checkout otomatis yang kompleks, melainkan mengarahkan setiap minat pembelian langsung ke WhatsApp untuk konsultasi dan transaksi manual.
2. Fitur Utama & Kebutuhan Fungsional
A. Struktur Menu (Navigasi)
Home: Menampilkan value proposition dan produk unggulan.
Katalog Produk: Galeri lengkap semua barang yang tersedia.
Kisah Artisan (Story): Bagian narasi tentang proses pembuatan (untuk meningkatkan nilai jual).
Custom Order: Tombol khusus yang mengarahkan ke form atau chat WA untuk pesanan khusus.
Cek Ongkir (Opsional): Widget sederhana untuk membantu user memperkirakan biaya kirim.
B. Komponen Tampilan Barang (Product Display)
Setiap produk dalam katalog harus memiliki:

Image Gallery: Minimal 3 foto (Sudut lebar, close-up tekstur, dan foto skala produk).
Product Tag: Label status (Ready Stock, Pre-Order, Sold Out).
Deskripsi Produk: Cerita singkat material, dimensi, dan perawatan.
Direct WA Button: Tombol "Pesan via WhatsApp" dengan pesan otomatis.
Contoh Pesan: "Halo Artisan-Ku, saya ingin memesan [Nama Produk] seharga [Harga]. Apakah masih tersedia?"
C. Alur Pembayaran via WhatsApp
User klik tombol "Pesan Sekarang".
Sistem membuka aplikasi WhatsApp dengan pesan yang sudah terisi otomatis (menyebutkan nama produk).
Admin (Anda) melakukan konfirmasi stok dan memberikan total biaya + ongkir.
Admin mengirimkan nomor rekening/QRIS secara manual di chat.
User mengirimkan bukti transfer.
3. Spesifikasi Teknis (4-Stack Alignment)
Untuk memastikan website ini ringan, mudah dikelola, dan skalabel:

Frontend: Next.js dengan App Router untuk SEO yang optimal.
Styling: Tailwind CSS untuk desain mobile-first yang estetik dan bersih.
Database: PostgreSQL untuk menyimpan data produk, kategori, dan testimoni.
ORM: Drizzle ORM untuk pengelolaan data yang cepat dan type-safe.
Admin Dashboard: Halaman internal sederhana untuk Anda melakukan input, edit, atau menghapus produk tanpa perlu menyentuh kode program.
4. UI/UX & Desain Visual
Palet Warna: Menggunakan warna-warna bumi (earthy tones) seperti Beige, Terakota, dan Hijau Zaitun untuk memberikan kesan natural.
Tipografi: Font Serif (seperti Playfair Display) untuk judul agar terkesan premium, dan Sans-serif (seperti Inter) untuk teks konten agar mudah dibaca.
Visual Element: Penggunaan white space yang luas agar foto produk terlihat menonjol dan tidak sesak.
5. Saran Menu & Fitur Tambahan (Value-Add)
Menu "Proses Pembuatan": Galeri video singkat atau foto behind-the-scenes. Ini krusial untuk membuktikan bahwa barang tersebut benar-benar handmade.
Menu "Perawatan Produk": Panduan cara membersihkan atau merawat barang (misal: perawatan kayu agar tidak berjamur). Ini membangun kepercayaan pelanggan.
Testimoni & User Gallery: Menampilkan foto-foto asli dari pembeli yang sudah menggunakan produk Anda di rumah mereka.
Floating WA Button: Tombol WhatsApp yang selalu muncul di pojok bawah untuk pertanyaan umum.
6. Target Metrik (Success Metrics)
Kecepatan Laman: Skor Google PageSpeed Insights di atas 90 (Mobile & Desktop).
Conversion Rate: Jumlah klik tombol "Pesan via WA" dibandingkan jumlah pengunjung unik.
Responsivitas: Tampilan sempurna di berbagai ukuran layar (iPhone, Android, Tablet, Laptop).