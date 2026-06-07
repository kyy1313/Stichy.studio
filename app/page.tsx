import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';
import ProductCard from './components/ProductCard';
import { getProducts } from './db';

export default async function Home() {
  const allProducts = await getProducts();
  const featuredProducts = allProducts.slice(0, 3); // Take first 3

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-beige-100 py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl text-olive-800 font-bold mb-6">
              Turning Skeins <br /> into Smiles
            </h1>
            <p className="text-lg md:text-xl text-olive-600 mb-10">
              Temukan koleksi kerajinan tangan eksklusif yang dibuat dengan cinta dan dedikasi. Setiap karya memiliki cerita unik untuk melengkapi gaya Anda.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/katalog" className="bg-terracotta text-white px-8 py-3 rounded-full font-bold hover:bg-terracotta-600 transition-colors">
                Lihat Katalog
              </Link>
              <Link href="/story" className="bg-white text-terracotta border border-terracotta px-8 py-3 rounded-full font-bold hover:bg-terracotta hover:text-white transition-colors">
                Kisah Kami
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-olive-800 mb-4">Koleksi Unggulan</h2>
              <div className="w-24 h-1 bg-terracotta mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product as any} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/katalog" className="inline-block border-b-2 border-olive text-olive hover:text-terracotta hover:border-terracotta transition-colors font-medium">
                Lihat Semua Produk &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Story Snippet */}
        <section className="py-20 bg-olive-800 text-beige">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-5xl">
            <div className="w-full md:w-1/2 relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/images/product3.jpg" 
                alt="Proses Pembuatan" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-serif text-3xl font-bold mb-6 text-terracotta-400">Dibuat Dengan Tangan dan Hati</h2>
              <p className="opacity-90 leading-relaxed mb-8">
                Kami percaya bahwa barang yang dibuat dengan tangan memiliki &quot;jiwa&quot; yang tidak bisa digantikan oleh mesin pabrik. Setiap jahitan, setiap rajutan, adalah manifestasi dari kesabaran dan kecintaan kami pada seni kriya.
              </p>
              <Link href="/story" className="inline-block bg-beige text-olive-800 px-6 py-2 rounded-full font-bold hover:bg-white transition-colors">
                Baca Selengkapnya
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
