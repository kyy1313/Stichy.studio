import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWA from '../components/FloatingWA';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../db';

export const metadata = {
  title: 'Katalog Produk | Stitchsy Studios',
  description: 'Galeri lengkap semua barang kerajinan tangan yang tersedia.',
};

export default async function KatalogPage() {
  const products = await getProducts();

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-beige-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="font-serif text-4xl text-olive-800 font-bold mb-4">Katalog Produk</h1>
            <p className="text-olive-600 max-w-2xl mx-auto">
              Jelajahi koleksi kerajinan tangan eksklusif kami. Klik pada produk untuk melihat detail dan melakukan pemesanan via WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product as any} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
