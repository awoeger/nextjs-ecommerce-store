export function getTotalAmount(arr) {
  return arr
    .map((item) => item.quantity)
    .reduce((total, amount) => total + amount, 0);
}
