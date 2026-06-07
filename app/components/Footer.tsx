export default function Footer() {
  return (
    <footer className="bg-olive-800 text-beige py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-2xl mb-4 text-terracotta">Stitchsy Studios</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Menghadirkan kehangatan dan keunikan produk buatan tangan ke dalam rumah Anda. Setiap karya memiliki cerita.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="/" className="hover:text-terracotta">Home</a></li>
            <li><a href="/katalog" className="hover:text-terracotta">Katalog</a></li>
            <li><a href="/story" className="hover:text-terracotta">Kisah Kami</a></li>
            <li><a href="/custom-order" className="hover:text-terracotta">Custom Order</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Kontak</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>WhatsApp: +62 812-3935-8245</li>
            <li>Email: hello@stitchsy.studios.com</li>
            <li>Instagram: <a href="https://instagram.com/stitchsy.studios" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">@stitchsy.studios</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-12 opacity-60 border-t border-olive-600 pt-6">
        &copy; {new Date().getFullYear()} Stitchsy Studios. All rights reserved.
      </div>
    </footer>
  );
}
