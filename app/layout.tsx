import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'Stitchsy Studios - Handmade Crafts',
  description: 'Digital storefront for exquisite handmade artisan products.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-beige text-olive-800 min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
