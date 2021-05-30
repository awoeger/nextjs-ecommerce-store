import Head from 'next/head';
import Layout from '../components/Layout';

export const productList = [
  {
    id: 1,
    name: 'Jersey blue - short sleeves',
    price: '20',
    currency: '€',
    description:
      'breathable fabric, soft-touch, moisture resistance, quick dry, 100% polyester, unisex cut only',
    img: '/jerseyBlueFront.png',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    name: 'Jersey blue - long sleeves',
    price: '22',
    currency: '€',
    description:
      'breathable fabric, soft-touch, moisture resistance, quick dry, 100% polyester, unisex cut only',
    img: '/jerseyBlueFront.png',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    name: 'Hoodie blue',
    price: '25',
    currency: '€',
    description:
      'Heavyweight three fly fleece cotton rich fabric, soften handle, double layer hood, unisex cut only',
    img: '/jerseyBlueFront.png',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 4,
    name: 'Hoodie grey',
    price: '25',
    currency: '€',
    description:
      'Heavyweight three fly fleece cotton rich fabric, soften handle, double layer hood, unisex cut only',
    img: '/jerseyBlueFront.png',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 5,
    name: 'Softshell Jacket blue',
    price: '30',
    currency: '€',
    description:
      '100% polyester bonded fabric, water repellent, wind proof, thermal fabric, resistant to mechanical damage, durable, unisex cut only',
    img: '/jerseyBlueFront.png',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 6,
    name: 'Pride Jersey - short sleeves',
    price: '20',
    currency: '€',
    description:
      'breathable fabric, soft-touch, moisture resistance, quick dry, 100% polyester, unisex cut only',
    img: '/jerseyBlueFront.png',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 7,
    name: 'Zipper Hoodie grey',
    price: '25',
    currency: '€',
    description:
      'Heavyweight three fly fleece cotton rich fabric, soften handle, double layer hood, unisex cut only',
    img: '/jerseyBlueFront.png',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 8,
    name: 'T-shirt blue',
    price: '20',
    currency: '€',
    description:
      '100% cotton fabric, durable, lightweight, soft-touch, unisex cut only',
    img: '/jerseyBlueFront.png',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 9,
    name: 'Gym bag',
    price: '15',
    currency: '€',
    description: '100% cotton fabric, durable',
    img: '/jerseyBlueFront.png',
  },
  {
    id: 11,
    name: 'Cap',
    price: '10',
    currency: '€',
    description:
      '100% chino cotton twill, single size, adjustable strap with hook and pile',
    img: '/jerseyBlueFront.png',
  },
  {
    id: 12,
    name: 'Headband',
    price: '6',
    currency: '€',
    description:
      '100% polyester, double-sided, breathable fabric, quick dry, single size',
    img: '/jerseyBlueFront.png',
  },
];

export default function products() {
  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>
      <h2>Get your merchandise now and become a real Fanguard</h2>
      {productList.map((product) => {
        return (
          <div key={product.id}>
            <img alt={product.name} src={product.img} />
            <p>{product.name}</p>
            <p>{`${product.price} ${product.currency}`}</p>
          </div>
        );
      })}
    </Layout>
  );
}
