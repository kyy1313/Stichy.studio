import { MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Custom Order | Stitchsy Studios',
  description: 'Pesan produk kerajinan tangan dengan desain khusus impian Anda.',
};

export default function CustomOrderPage() {
  const waNumber = "6281239358245";
  const message = "Halo Stitchsy Studios, saya tertarik untuk membuat custom order. Bolehkah saya berkonsultasi mengenai desain dan harganya?";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-beige-50 min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="font-serif text-4xl text-olive-800 font-bold mb-6">Wujudkan Desain Impian Anda</h1>
          <p className="text-lg text-olive-600 mb-10 leading-relaxed">
            Tidak menemukan yang Anda cari di katalog? Kami menerima pesanan khusus (Custom Order) dengan desain, warna, dan ukuran sesuai keinginan Anda. Mari diskusikan ide Anda bersama kami!
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-olive/10 mb-10">
            <h2 className="font-bold text-olive-800 mb-4 text-xl">Bagaimana Cara Kerjanya?</h2>
            <ol className="text-left text-olive-700 space-y-4 max-w-lg mx-auto list-decimal pl-5">
              <li>Hubungi kami via WhatsApp dengan mengklik tombol di bawah.</li>
              <li>Sampaikan ide, referensi desain, dan ukuran yang diinginkan.</li>
              <li>Kami akan mengonfirmasi ketersediaan bahan, estimasi waktu, dan harga.</li>
              <li>Setelah sepakat, kami akan mulai mengerjakan pesanan Anda.</li>
            </ol>
          </div>

          <a 
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-md text-lg"
          >
            <MessageCircle size={24} />
            Mulai Konsultasi via WhatsApp
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
