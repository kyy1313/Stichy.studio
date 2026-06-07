import { MessageCircle } from 'lucide-react';

export default function FloatingWA() {
  const waNumber = "6281239358245";
  const message = "Halo Stitchsy Studios, saya ingin bertanya tentang produk Anda.";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
