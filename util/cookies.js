import cookies from 'js-cookie';

export function getShoppingCartCookieValue() {
  const cookieValue = cookies.getJSON('quantity');
  return Array.isArray(cookieValue) ? cookieValue : [];
}

export function addProductByProductId(productId) {
  const previousCookieValue = [...getShoppingCartCookieValue()];

  const productIdInCookie = previousCookieValue.find((p) => p.id === productId);

  if (productIdInCookie) {
    productIdInCookie.quantity = productIdInCookie.quantity + 1;
  } else {
    previousCookieValue.push({
      id: productId,
      quantity: 0,
    });
  }
  console.log('cookie', previousCookieValue);
  cookies.set('quantity', previousCookieValue);
}

export function substractProductByProductId(productId) {
  const previousCookieValue = [...getShoppingCartCookieValue()];
  const productIdInCookie = previousCookieValue.find((p) => p.id === productId);

  if (productIdInCookie) {
    if (productIdInCookie.quantity === 0) {
      return productIdInCookie.quantity;
    } else {
      productIdInCookie.quantity = productIdInCookie.quantity - 1;
    }
  } else {
    previousCookieValue.push({
      id: productId,
      quantity: 0,
    });
  }
  cookies.set('quantity', previousCookieValue);
}

export function parseCookieValue(value) {
  try {
    return JSON.parse(value);
  } catch (err) {
    return undefined;
  }
}
