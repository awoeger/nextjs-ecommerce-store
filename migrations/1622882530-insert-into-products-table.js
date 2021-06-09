const productList = [
  {
    id: '1',
    product_name: 'Jersey - short sleeves',
    color: 'Light blue',
    price: 'price_1J04JFBBQ7bqL4ww8T87Ie4U',
    currency: '€',
    product_description:
      'Breathable fabric, soft-touch, moisture resistance, quick dry, 100% polyester',
    cut: 'Unisex cut only',
    img_front: '/jerseyBlueShortFront.jpg',
    img_back: '/jerseyBlueShortBack.jpg',
    sizes: 'S, M, L, XL',
  },
  {
    id: '2',
    product_name: 'Jersey - long sleeves',
    color: 'Light blue',
    price: 'price_1J06xSBBQ7bqL4wwPOvBxTZX',
    currency: '€',
    product_description:
      'Breathable fabric, soft-touch, moisture resistance, quick dry, 100% polyester',
    cut: 'Unisex cut only',
    img_front: '/jerseyBlueLongFront.jpg',
    img_back: 'none',
    sizes: 'S, M, L, XL',
  },
  {
    id: '3',
    product_name: 'Hoodie',
    color: 'Navy blue',
    price: 'price_1J06yBBBQ7bqL4wwcNhwwF3I',
    currency: '€',
    product_description:
      'Heavyweight three fly fleece cotton rich fabric, soften handle, double layer hood',
    cut: 'Unisex cut only',
    img_front: '/hoodieBlueFront.jpg',
    img_back: '/hoodieBlueBack.jpg',
    sizes: 'S, M, L, XL',
  },
  {
    id: '4',
    product_name: 'Hoodie',
    color: 'Light grey',
    price: 'price_1J06yXBBQ7bqL4wwy3dEURHc',
    currency: '€',
    product_description:
      'Heavyweight three fly fleece cotton rich fabric, soften handle, double layer hood',
    cut: 'Unisex cut only',
    img_front: '/hoodieGreyFront.jpg',
    img_back: '/hoodieGreyBack.jpg',
    sizes: 'S, M, L, XL',
  },
  {
    id: '5',
    product_name: 'Zipper Hoodie',
    color: 'Light grey',
    price: 'price_1J06zGBBQ7bqL4wwEGaiCF3h',
    currency: '€',
    product_description:
      'Heavyweight three fly fleece cotton rich fabric, soften handle, double layer hood',
    cut: 'Unisex cut only',
    img_front: '/hoodieZipperGreyFront.jpg',
    img_back: '/hoodieGreyBack.jpg',
    sizes: 'S, M, L, XL',
  },
  {
    id: '6',
    product_name: 'Softshell Jacket',
    color: 'Navy blue',
    price: 'price_1J06znBBQ7bqL4wwrrfrogjH',
    currency: '€',
    product_description:
      '100% polyester bonded fabric, water repellent, wind proof, thermal fabric, resistant to mechanical damage, durable',
    cut: 'Unisex cut only',
    img_front: '/softshellFront.jpg',
    img_back: '/softshellBack.jpg',
    sizes: 'S, M, L, XL',
  },
  {
    id: '7',
    product_name: 'Gym bag',
    color: 'Navy blue',
    price: 'price_1J070GBBQ7bqL4wwYmb7v9T8',
    currency: '€',
    product_description: '100% cotton fabric, durable, water resistent',
    cut: 'Unisex cut only',
    img_front: '/gymbag.PNG',
    img_back: 'none',
    sizes: 'none',
  },
  {
    id: '8',
    product_name: 'Cap',
    color: 'Navy blue',
    price: 'price_1J070oBBQ7bqL4wwtevvLpUe',
    currency: '€',
    product_description:
      '100% chino cotton twill, single size, adjustable strap with hook and pile',
    cut: 'Unisex cut only',
    img_front: '/snapback.PNG',
    img_back: 'none',
    sizes: 'none',
  },
  {
    id: '9',
    product_name: 'Headband',
    color: 'double sided - green white',
    price: 'price_1J071GBBQ7bqL4wwIzE7pqF5',
    currency: '€',
    product_description:
      '100% polyester, double-sided, breathable fabric, quick dry, single size',
    cut: 'Unisex cut only',
    img_front: '/headband.jpg',
    img_back: 'none',
    sizes: 'none',
  },
];

exports.up = async function up(sql) {
  await sql`
	INSERT INTO products ${sql(
    productList,
    'product_name',
    'color',
    'price',
    'currency',
    'product_description',
    'cut',
    'img_front',
    'img_back',
    'sizes',
  )}
	`;
};

// TODO Loop through the products like in lecture
exports.down = async function down(sql) {
  await sql`
		DELETE FROM
products
	`;
};
