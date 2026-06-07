import Link from 'next/link';
import { getProducts, isDbConfigured } from '../db';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

export const metadata = {
  title: 'Admin Dashboard | Stitchsy Studios',
};

export default async function AdminDashboard() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Admin Navbar */}
      <nav className="bg-olive-800 text-beige shadow-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/admin" className="font-serif text-xl font-bold text-terracotta">
            Stitchsy Studios Admin
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-sm hover:text-white transition-colors" target="_blank">
              Lihat Website
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Produk</h1>
          <button className="bg-terracotta hover:bg-terracotta-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <PlusCircle size={20} />
            <span>Tambah Produk</span>
          </button>
        </div>

        {!isDbConfigured && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded shadow-sm">
            <p className="font-bold">Database Belum Terhubung!</p>
            <p>Anda saat ini melihat data statis (mock data). Untuk menambah/mengubah produk secara permanen, harap konfigurasi koneksi PostgreSQL (Neon) di environment variables.</p>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
                  <th className="px-6 py-4 font-bold border-b">Produk</th>

                  <th className="px-6 py-4 font-bold border-b">Status</th>
                  <th className="px-6 py-4 font-bold border-b text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-800">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 relative rounded bg-gray-200 overflow-hidden">
                          <img src={product.imageUrl} alt={product.name} className="object-cover w-full h-full" />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-500">/{product.slug}</div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        product.status === 'Ready Stock' ? 'bg-green-100 text-green-800' : 
                        product.status === 'Pre-Order' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-4" title="Edit">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-900" title="Hapus">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
