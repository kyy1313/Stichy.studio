import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingWA from '../../components/FloatingWA';
import { getProductBySlug } from '../../db';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: 'Product Not Found' };
  return { title: `${product.name} | Stitchsy Studios` };
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const waNumber = "6281239358245";
  const message = `Halo Stitchsy Studios, saya ingin memesan ${product.name}. Apakah masih tersedia?`;
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

  const statusColor = 
    product.status === 'Ready Stock' ? 'bg-olive text-beige' :
    product.status === 'Pre-Order' ? 'bg-terracotta text-white' :
    'bg-gray-500 text-white';

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Image Gallery (Simplified for MVP, using one large image) */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-beige-100 border border-olive/10 shadow-sm">
                <Image 
                  src={product.imageUrl} 
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 w-max ${statusColor}`}>
                {product.status}
              </div>
              
              <h1 className="font-serif text-3xl md:text-4xl text-olive-800 font-bold mb-4">
                {product.name}
              </h1>
              

              
              <div className="prose text-olive-600 mb-8">
                <p>{product.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-8 bg-beige-50 p-6 rounded-lg border border-beige-200">
                <div>
                  <span className="font-bold text-olive-800 block text-sm mb-1">Material:</span>
                  <span className="text-olive-600">{product.material || '-'}</span>
                </div>
                <div>
                  <span className="font-bold text-olive-800 block text-sm mb-1">Dimensi:</span>
                  <span className="text-olive-600">{product.dimensions || '-'}</span>
                </div>
                <div>
                  <span className="font-bold text-olive-800 block text-sm mb-1">Perawatan:</span>
                  <span className="text-olive-600">{product.careInstructions || '-'}</span>
                </div>
              </div>

              <a 
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-md"
              >
                <MessageCircle size={20} />
                <span>Pesan via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
