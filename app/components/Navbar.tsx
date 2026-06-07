import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-beige/90 backdrop-blur-md border-b border-olive/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-terracotta flex items-center gap-3">
          <Image src="/images/logo.png" alt="Stitchsy Studios Logo" width={80} height={80} className="object-contain" />
          <span>studios</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-olive hover:text-terracotta transition-colors">Home</Link>
          <Link href="/katalog" className="text-olive hover:text-terracotta transition-colors">Katalog Produk</Link>
          <Link href="/story" className="text-olive hover:text-terracotta transition-colors">Kisah Kami </Link>
          <Link href="/custom-order" className="text-olive hover:text-terracotta transition-colors">Custom Order</Link>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button could go here */}
          <button className="text-olive">Menu</button>
        </div>
      </div>
    </nav>
  );
}
