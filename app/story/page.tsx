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
            <h1 className="font-serif text-4xl md:text-5xl text-olive-800 font-bold mb-6">Tentang Cerita</h1>
            <div className="w-24 h-1 bg-terracotta mx-auto mb-8"></div>
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="w-full max-w-md relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg mb-8">
              <Image 
                src="/images/himawari.png" 
                alt="Himawari - Bunga Matahari" 
                fill 
                className="object-cover object-center"
              />
            </div>
            
            <div className="w-full space-y-6 text-olive-700 leading-relaxed text-lg text-justify md:text-left">
              <p>
                Hallo teman-teman, mimin ingin memperkenalkan karya baru nih.<br />
                Kenalin &ldquo;Himawari&rdquo; namanya🌻
              </p>
              <p>
                Mungkin ada yang bertanya-tanya kenapa kebanyakan mimin selalu berdampingan dengan &ldquo;Bunga Matahari&rdquo;. Jadi begini ceritanya.
              </p>
              <p>
                Dari begitu banyaknya cerita mimin akan berusaha merangkumnya untuk teman-teman baca, semoga berkenan.<br />
                Berawal dari dua manusia, dengan cerita hidupnya yang berbeda dipertemukan oleh semesta pada suatu tempat yang ternyata akan mengubah dan menempa kehidupannya. Dengan waktu yang terus berjalan menjadikannya dua manusia itu menjadi rekat sampai pada akhirnya obrolan serius membawanya pada sebuah &ldquo;Bunga Matahari&rdquo;. Sampai dimana, ternyata kita mempunyai kesamaan yaitu merepresentasikan &ldquo;Bunga Matahari&rdquo; itu seperti diri kita sendiri.
              </p>
              <p>
                Sebuah bunga yang indah namun kehidupannya begitu unik dan mungkin sedikit rumit. Rumit karena tidak gampang untuk Bunga Matahari itu tumbuh, harus ada perlakuan khusus. Unik dimana Bunga Matahari harus selalu tumbuh mengikuti arah cahaya matahari untuk bertahan hidup. Pada akhirnya mimin belajar mengusahakan memiliki cahaya untuk mengisi energi menjadi diri mimin yang lebih baik dari sebelumnya dan selalu membantu mimin supaya percaya diri dan ceria.
              </p>
              <p>
                &ldquo;Bunga Matahari&rdquo; juga sangat hangat bila diperhatikan dan dirasakan bagi manusia-manusia yang merasakannya dengan penuh kasih. Sampai akhirnya mimin juga ingin seperti &ldquo;Bunga Matahari&rdquo; yang selalu bermanfaat bagi seseorang untuk selalu memberikan kehangatan yang tulus setiap didekatnya.
              </p>
              <p>
                Mungkin mimin tidak begitu punya energi yang besar dan cerah seperti Matahari. Namun mimin akan berusaha menjadi &ldquo;Bunga Matahari&rdquo; dengan rasa percaya diri untuk menyerap energi Matahari yang begitu hangat dan memberikannya kepada orang-orang yang membutuhkannya. Memberikannya rasa nyaman, hangat karena energiku, dan rasa bahagia karena ceriaku.
              </p>
              <p>
                Dan ya kenalin aku &ldquo;Himawari&rdquo; 🌻
              </p>
              <p>
                Mimin berharap kehadiran mimin dengan karya-karya mungil ini, selalu bisa menemani teman-teman dan membuat teman-teman selalu tersenyum merekah setiap harinya.🌻✨
              </p>
              <p className="font-medium text-center mt-12">
                Terimakasih teman-teman sudah berkenan untuk berteman dan berkumpul disini.<br />
                Salam hangat dari mimin untuk kalian🌻🌻✨✨🤍🤍
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
