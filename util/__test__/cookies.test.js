/**
 * @jest-environment jsdom
 */

// The comment above is important!
// Without it, jest won't know about frontend context, e.g. cookies

import {
  addProductByProductId,
  removeProductById,
  substractProductByProductId,
} from '../cookies';

// 1. Test: Increase product quantity in shopping cart cookies

// 1.1 Test: Increase on first call
test('addProductByProductId returns correct value of 1 on first call', () => {
  const testId = 1;
  const testQuantity = [{ id: testId, quantity: 1 }];
  const result = addProductByProductId(testId);
  expect(result).toEqual(testQuantity);
});

// 1.2 Test: Increase on multiple calls
test('addProductByProductId returns correct value of 2 on two calls', () => {
  const testId = '1';
  const testQuantity1 = { id: testId, quantity: 1 };
  const testQuantity2 = { id: testId, quantity: 2 };
  const result1 = addProductByProductId(testId);
  const result2 = addProductByProductId(testId);

  expect(result1).toContainEqual(testQuantity1);
  expect(result2).toContainEqual(testQuantity2);
});

// 2. Test: Decrease product quantity in shopping cart cookies

test('substractProductByProductId reduces quantity of object with key', () => {
  const testId = '1';
  const testQuantity1 = { id: testId, quantity: 1 };
  const testQuantity2 = { id: testId, quantity: 2 };
  const testQuantity3 = { id: testId, quantity: 1 };
  const result1 = addProductByProductId(testId);
  const result2 = addProductByProductId(testId);
  const result3 = substractProductByProductId(testId);
  expect(result1).toContainEqual(testQuantity1);
  expect(result2).toContainEqual(testQuantity2);
  expect(result3).toContainEqual(testQuantity3);
});

//  3. Test: Remove product in shopping cart cookies
test('removeProductByProductId removes object with key from array', () => {
  const testId = 1;
  const testValueArray = removeProductById(testId);
  expect(testValueArray.some(({ id }) => id === testId)).toBe(false);
});
