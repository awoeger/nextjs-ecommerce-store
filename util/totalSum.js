export function getTotalSum(arr) {
  return arr.reduce((acc, product) => {
    return acc + parseFloat(product.price) * product.quantity;
  }, 0);
}
