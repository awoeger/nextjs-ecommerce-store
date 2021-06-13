// import { totalSum } from '../../pages/shoppingcart';

// Test 1: Calculate total sum for shopping cart

test('totalSum returns correct value', () => {
  const testArray = [
    {
      id: 1,
      price: '20',
      quantity: 1,
    },
    {
      id: 2,
      price: '22',
      quantity: 2,
    },
    {
      id: 3,
      price: '25',
      quantity: 3,
    },
  ];

  const result = testArray.reduce((acc, product) => {
    return acc + parseFloat(product.price) * product.quantity;
  }, 0);

  expect(result).toBe(139);
});

// Test 2: Calculate total amount of products in shopping cart
test('totalSum returns correct value', () => {
  const testArray = [
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 2,
      quantity: 2,
    },
    {
      id: 3,
      quantity: 3,
    },
  ];

  const result = testArray
    .map((item) => item.quantity)
    .reduce((total, amount) => total + amount, 0);

  expect(result).toBe(6);
});
