import { drizzle } from 'drizzle-orm/postgres-js';
import { pgTable, serial, varchar, text, integer } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';
import postgres from 'postgres';

// Mock data fallback if database is not configured
export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Koleksi Rajutan Bunga & Strap",
    slug: "koleksi-rajutan-bunga-strap",
    status: "Ready Stock",
    imageUrl: "/images/product_new_1.jpg",
    description: "Koleksi cantik rajutan bunga matahari dan berbagai strap rajut dengan pilihan warna cerah.",
    material: "Benang Rajut Premium",
    dimensions: "Bervariasi",
    careInstructions: "Cuci dengan tangan perlahan."
  },
  {
    id: 2,
    name: "Cup Sleeve Rajut Pink dengan Gantungan Clover",
    slug: "cup-sleeve-pink-clover",
    status: "Ready Stock",
    imageUrl: "/images/product_new_2.jpg",
    description: "Cup sleeve rajut berwarna pink pastel dilengkapi dengan gantungan daun clover hijau yang menggemaskan.",
    material: "Benang Katun Susu",
    dimensions: "Sesuai ukuran gelas standar",
    careInstructions: "Cuci dengan air dingin."
  },
  {
    id: 3,
    name: "Cup Sleeve Rajut Pink Detail Rajut Renda",
    slug: "cup-sleeve-pink-lace",
    status: "Ready Stock",
    imageUrl: "/images/product_new_3.jpg",
    description: "Detail cup sleeve rajut warna pink dengan pola renda yang berongga dan gantungan clover.",
    material: "Benang Katun Susu",
    dimensions: "Sesuai ukuran gelas standar",
    careInstructions: "Cuci dengan air dingin."
  },
  {
    id: 4,
    name: "Cup Sleeve Rajut Pink Kemasan",
    slug: "cup-sleeve-pink-packaging",
    status: "Ready Stock",
    imageUrl: "/images/product_new_4.jpg",
    description: "Cup sleeve rajut pink dikemas rapi dengan kartu ucapan bercorak bunga kuning, siap dijadikan hadiah.",
    material: "Benang Katun Susu",
    dimensions: "Sesuai ukuran gelas standar",
    careInstructions: "Cuci dengan air dingin."
  },
  {
    id: 5,
    name: "Dompet Kacamata Rajut Bunga Matahari",
    slug: "dompet-kacamata-rajut-bunga-matahari",
    status: "Ready Stock",
    imageUrl: "/images/product_new_5.jpg",
    description: "Dompet kacamata berbentuk setengah lingkaran dengan desain bunga matahari yang ceria.",
    material: "Benang Rajut Premium",
    dimensions: "18cm x 8cm",
    careInstructions: "Lap dengan kain lembab jika kotor."
  },
  {
    id: 6,
    name: "Gantungan Kunci Kucing Hitam & Ikan Biru",
    slug: "gantungan-kunci-kucing-ikan",
    status: "Ready Stock",
    imageUrl: "/images/product_new_6.jpg",
    description: "Gantungan kunci rajut berbentuk kepala kucing hitam yang lucu dengan gantungan kecil berbentuk ikan biru di bawahnya.",
    material: "Benang Katun Susu",
    dimensions: "5cm x 5cm (Kucing)",
    careInstructions: "Cuci perlahan dengan tangan."
  },
  {
    id: 7,
    name: "Strap Lanyard Rajut Hitam Bunga Matahari",
    slug: "strap-lanyard-hitam-bunga-matahari",
    status: "Ready Stock",
    imageUrl: "/images/product_new_7.jpg",
    description: "Strap handphone atau lanyard pergelangan tangan berwarna hitam elegan dengan aksen bunga matahari kuning yang cerah.",
    material: "Benang Katun",
    dimensions: "Panjang 15cm",
    careInstructions: "Sikat lembut pada bagian yang kotor."
  },
  {
    id: 8,
    name: "Strap Lanyard Rajut Hitam (Detail)",
    slug: "strap-lanyard-hitam-detail",
    status: "Ready Stock",
    imageUrl: "/images/product_new_8.jpg",
    description: "Tampilan detail strap handphone rajut hitam dengan hiasan bunga matahari, cocok untuk aksesoris sehari-hari.",
    material: "Benang Katun",
    dimensions: "Panjang 15cm",
    careInstructions: "Sikat lembut pada bagian yang kotor."
  },
  {
    id: 9,
    name: "Koleksi Cup Sleeve Rajut Warna-Warni",
    slug: "koleksi-cup-sleeve-warna-warni",
    status: "Ready Stock",
    imageUrl: "/images/product_new_9.jpg",
    description: "Berbagai pilihan warna ceria untuk cup sleeve rajut, dilengkapi tag label Stitchsy dan hiasan tambahan.",
    material: "Benang Katun Susu",
    dimensions: "Sesuai ukuran gelas standar",
    careInstructions: "Cuci dengan air dingin."
  },
  {
    id: 10,
    name: "Cup Sleeve Warna-Warni & Bunga Matahari",
    slug: "cup-sleeve-warna-warni-bunga-matahari",
    status: "Ready Stock",
    imageUrl: "/images/product_new_10.jpg",
    description: "Deretan cup sleeve rajut dengan tekstur jaring berwarna-warni, ditemani rajutan bunga matahari dan daun clover.",
    material: "Benang Katun Susu",
    dimensions: "Sesuai ukuran gelas standar",
    careInstructions: "Cuci dengan air dingin."
  },
  {
    id: 11,
    name: "Cup Sleeve Rajut Pink Motif Kotak",
    slug: "cup-sleeve-rajut-pink-motif-kotak",
    status: "Ready Stock",
    imageUrl: "/images/product_new_11.jpg",
    description: "Cup sleeve rajut dengan motif kotak-kotak perpaduan warna pink dan putih, dilengkapi tali pegangan praktis.",
    material: "Benang Katun Susu",
    dimensions: "Sesuai ukuran gelas standar",
    careInstructions: "Cuci dengan tangan."
  },
  {
    id: 12,
    name: "Cup Sleeve Rajut Tropis Pink-Hijau",
    slug: "cup-sleeve-rajut-tropis-pink-hijau",
    status: "Ready Stock",
    imageUrl: "/images/product_new_12.jpg",
    description: "Cup sleeve rajut dengan kombinasi warna segar pink dan hijau muda, cocok untuk menemani minuman dingin.",
    material: "Benang Katun Susu",
    dimensions: "Sesuai ukuran gelas standar",
    careInstructions: "Cuci dengan tangan."
  },
  {
    id: 13,
    name: "Cup Sleeve Rajut Senja Ungu-Oren",
    slug: "cup-sleeve-rajut-senja-ungu-oren",
    status: "Ready Stock",
    imageUrl: "/images/product_new_13.jpg",
    description: "Perpaduan warna ungu dan oranye pada cup sleeve rajut ini mengingatkan pada indahnya langit senja.",
    material: "Benang Katun Susu",
    dimensions: "Sesuai ukuran gelas standar",
    careInstructions: "Cuci dengan tangan."
  },
  {
    id: 14,
    name: "Cup Sleeve Rajut Pelangi Pastel",
    slug: "cup-sleeve-rajut-pelangi-pastel",
    status: "Ready Stock",
    imageUrl: "/images/product_new_14.jpg",
    description: "Ceriakan harimu dengan cup sleeve rajut bermotif pelangi dengan sentuhan warna-warna pastel yang lembut.",
    material: "Benang Katun Susu",
    dimensions: "Sesuai ukuran gelas standar",
    careInstructions: "Cuci dengan tangan."
  },
  {
    id: 15,
    name: "Cup Sleeve Rajut Ceria Kuning-Pink",
    slug: "cup-sleeve-rajut-ceria-kuning-pink",
    status: "Ready Stock",
    imageUrl: "/images/product_new_15.jpg",
    description: "Kombinasi warna kuning, oranye, dan pink cerah pada cup sleeve rajut ini siap menyemangati aktivitasmu.",
    material: "Benang Katun Susu",
    dimensions: "Sesuai ukuran gelas standar",
    careInstructions: "Cuci dengan tangan."
  },
  {
    id: 16,
    name: "Cup Sleeve Rajut Hangat Krem-Oren",
    slug: "cup-sleeve-rajut-krem-oren",
    status: "Ready Stock",
    imageUrl: "/images/product_new_16.jpg",
    description: "Perpaduan warna krem dan oranye memberikan kesan hangat pada cup sleeve rajut bertekstur unik ini.",
    material: "Benang Katun Susu",
    dimensions: "Sesuai ukuran gelas standar",
    careInstructions: "Cuci dengan air dingin."
  },
  {
    id: 17,
    name: "Cup Sleeve Rajut Pink Clover (Detail)",
    slug: "cup-sleeve-rajut-pink-clover-detail",
    status: "Ready Stock",
    imageUrl: "/images/product_new_17.jpg",
    description: "Tampilan lebih dekat dari cup sleeve rajut berwarna pink pastel dengan hiasan daun clover hijau cantik.",
    material: "Benang Katun Susu",
    dimensions: "Sesuai ukuran gelas standar",
    careInstructions: "Cuci perlahan dengan tangan."
  }
];

export const productsTable = pgTable('Products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull(),
  status: varchar('status', { length: 50 }).notNull(), // Ready Stock, Pre-Order, Sold Out
  imageUrl: text('imageUrl').notNull(),
  description: text('description'),
  material: varchar('material', { length: 255 }),
  dimensions: varchar('dimensions', { length: 255 }),
  careInstructions: text('careInstructions'),
});

const isDbConfigured = !!process.env.POSTGRES_URL;

let db: ReturnType<typeof drizzle> | null = null;
let client: ReturnType<typeof postgres> | null = null;

if (isDbConfigured) {
  client = postgres(`${process.env.POSTGRES_URL}?sslmode=require`);
  db = drizzle(client);
}

export async function ensureProductsTableExists() {
  if (!isDbConfigured || !client) return MOCK_PRODUCTS;

  const result = await client`
    SELECT EXISTS (
      SELECT FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'Products'
    );`;

  if (!result[0].exists) {
    await client`
        CREATE TABLE "Products" (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          slug VARCHAR(255) NOT NULL,
          status VARCHAR(50) NOT NULL,
          "imageUrl" TEXT NOT NULL,
          description TEXT,
          material VARCHAR(255),
          dimensions VARCHAR(255),
          "careInstructions" TEXT
        );`;
      
    // Seed initial data
    if (db) {
      for (const p of MOCK_PRODUCTS) {
        await db.insert(productsTable).values(p);
      }
    }
  }

  return productsTable;
}

export async function getProducts() {
  if (!isDbConfigured || !db) return MOCK_PRODUCTS;
  await ensureProductsTableExists();
  return await db.select().from(productsTable);
}

export async function getProductBySlug(slug: string) {
  if (!isDbConfigured || !db) return MOCK_PRODUCTS.find(p => p.slug === slug) || null;
  await ensureProductsTableExists();
  const results = await db.select().from(productsTable).where(eq(productsTable.slug, slug));
  return results.length > 0 ? results[0] : null;
}

// Simple export of db for admin page
export { db, isDbConfigured };
