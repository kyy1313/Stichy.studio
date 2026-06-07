import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWA from '../components/FloatingWA';

export const metadata = {
  title: 'Kisah Kami | Stitchsy Studios',
  description: 'Proses di balik pembuatan karya-karya artisan kami.',
};

export default function StoryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-olive-800 font-bold mb-6">Cerita di Balik Setiap Jahitan</h1>
            <div className="w-24 h-1 bg-terracotta mx-auto mb-8"></div>
            <p className="text-lg text-olive-600 leading-relaxed max-w-2xl mx-auto">
              Lebih dari sekadar produk, setiap karya Stitchsy Studios adalah medium di mana tradisi bertemu dengan estetika modern.
            </p>
          </div>

          <div className="space-y-20">
            {/* Story Section 1 */}
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/product_new_1.jpg" 
                  alt="Proses Rajut" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="font-serif text-2xl font-bold text-terracotta mb-4">Pemilihan Material Terbaik</h2>
                <p className="text-olive-700 leading-relaxed">
                  Kami memulai perjalanan setiap karya dengan memilih bahan baku yang tidak hanya kuat, tetapi juga ramah lingkungan. Benang-benang pilihan yang digunakan dipastikan bebas dari bahan kimia berbahaya, memberikan tekstur alami yang nyaman di tangan.
                </p>
              </div>
            </div>

            {/* Story Section 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="w-full md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/product2.jpg" 
                  alt="Dedikasi" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="font-serif text-2xl font-bold text-terracotta mb-4">Dedikasi dan Kesabaran</h2>
                <p className="text-olive-700 leading-relaxed mb-4">
                  Setiap tas, dompet, dan aksesori dikerjakan secara manual tanpa bantuan mesin besar. Proses ini menuntut kesabaran tingkat tinggi dan mata yang jeli untuk detail. 
                </p>
                <p className="text-olive-700 leading-relaxed">
                  Bagi kami, merajut adalah bentuk meditasi. Energi positif yang kami salurkan selama proses pembuatan diharapkan dapat dirasakan oleh Anda saat mengenakan produk kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
