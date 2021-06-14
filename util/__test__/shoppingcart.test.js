// import { totalSum } from '../../pages/shoppingcart';

import { getTotalAmount } from '../totalAmount';
import { getTotalSum } from '../totalSum';

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

  const result = getTotalSum(testArray);

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

  const result = getTotalAmount(testArray);

  expect(result).toBe(6);
});
