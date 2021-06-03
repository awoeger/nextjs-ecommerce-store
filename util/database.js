import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

//Read the PostgreSQL secret connection information
// (host, database, username password) from the .env file
dotenvSafe.config();

// connect to database
const sqpl = postgres();

// Perform a first query
export async function getUsers() {
  const users = await sql`SELECT * FROM users`;
  return users.map((user) => camelcaseKeys(user));
}

export const productList = [
  {
    id: '1',
    name: 'Jersey - short sleeves',
    color: 'Light blue',
    price: '20',
    currency: '€',
    description:
      'Breathable fabric, soft-touch, moisture resistance, quick dry, 100% polyester',
    cut: 'Unisex cut only',
    imgFront: '/jerseyBlueShortFront.jpg',
    imgBack: '/jerseyBlueShortBack.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '2',
    name: 'Jersey - long sleeves',
    color: 'Light blue',
    price: '22',
    currency: '€',
    description:
      'Breathable fabric, soft-touch, moisture resistance, quick dry, 100% polyester',
    cut: 'Unisex cut only',
    imgFront: '/jerseyBlueLongFront.jpg',
    imgBack: 'none',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '3',
    name: 'Hoodie',
    color: 'Navy blue',
    price: '25',
    currency: '€',
    description:
      'Heavyweight three fly fleece cotton rich fabric, soften handle, double layer hood',
    cut: 'Unisex cut only',
    imgFront: '/hoodieBlueFront.jpg',
    imgBack: '/hoodieBlueBack.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '4',
    name: 'Hoodie',
    color: 'Light grey',
    price: '25',
    currency: '€',
    description:
      'Heavyweight three fly fleece cotton rich fabric, soften handle, double layer hood',
    cut: 'Unisex cut only',
    imgFront: '/hoodieGreyFront.jpg',
    imgBack: '/hoodieGreyBack.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '5',
    name: 'Zipper Hoodie',
    color: 'Light grey',
    price: '25',
    currency: '€',
    description:
      'Heavyweight three fly fleece cotton rich fabric, soften handle, double layer hood',
    cut: 'Unisex cut only',
    imgFront: '/hoodieZipperGreyFront.jpg',
    imgBack: '/hoodieGreyBack.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '6',
    name: 'Softshell Jacket',
    color: 'Navy blue',
    price: '30',
    currency: '€',
    description:
      '100% polyester bonded fabric, water repellent, wind proof, thermal fabric, resistant to mechanical damage, durable',
    cut: 'Unisex cut only',
    imgFront: '/softshellFront.jpg',
    imgBack: '/softshellBack.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '7',
    name: 'Gym bag',
    color: 'Navy blue',
    price: '15',
    currency: '€',
    description: '100% cotton fabric, durable',
    imgFront: '/gymbag.PNG',
    imgBack: 'none',
  },
  {
    id: '8',
    name: 'Cap',
    color: 'Navy blue',
    price: '10',
    currency: '€',
    description:
      '100% chino cotton twill, single size, adjustable strap with hook and pile',
    imgFront: '/snapback.PNG',
    imgBack: 'none',
  },
  {
    id: '9',
    name: 'Headband',
    color: 'double sided - green white',
    price: '6',
    currency: '€',
    description:
      '100% polyester, double-sided, breathable fabric, quick dry, single size',
    imgFront: '/headband.jpg',
    imgBack: 'none',
  },
];
