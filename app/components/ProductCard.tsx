import Image from 'next/image';
import Link from 'next/link';

export type Product = {
  id: string;
  name: string;
  slug: string;

  status: 'Ready Stock' | 'Pre-Order' | 'Sold Out';
  imageUrl: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const statusColor = 
    product.status === 'Ready Stock' ? 'bg-olive text-beige' :
    product.status === 'Pre-Order' ? 'bg-terracotta text-white' :
    'bg-gray-500 text-white';

  return (
    <Link href={`/katalog/${product.slug}`} className="group block">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-olive/10">
        <div className="relative h-64 w-full bg-beige-100">
          <Image 
            src={product.imageUrl} 
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className={`absolute top-3 right-3 text-xs px-2 py-1 rounded font-bold ${statusColor}`}>
            {product.status}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-serif text-lg text-olive-800 font-bold mb-1">{product.name}</h3>

        </div>
      </div>
    </Link>
  );
}
