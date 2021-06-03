import cookies from 'js-cookie';

export function getShoppingCartCookieValue() {
  const cookieValue = cookies.getJSON('quantity');
  return Array.isArray(cookieValue) ? cookieValue : [];
}

export function addProductByProductId(productId) {
  const newCookieValue = [...getShoppingCartCookieValue()];

  const productIdInCookie = newCookieValue.find((p) => p.id === productId);

  if (productIdInCookie) {
    productIdInCookie.quantity = productIdInCookie.quantity + 1;
  } else {
    newCookieValue.push({
      id: productId,
      quantity: 0,
    });
  }

  cookies.set('quantity', newCookieValue);

  return newCookieValue;
}

export function substractProductByProductId(productId) {
  const newCookieValue = [...getShoppingCartCookieValue()];

  const productIdInCookie = newCookieValue.find((p) => p.id === productId);

  // Todo: Remove item if quantity is 0
  if (productIdInCookie) {
    if (productIdInCookie.quantity > 1) {
      productIdInCookie.quantity = productIdInCookie.quantity - 1;
    } else if (productIdInCookie.quantity === 1) {
      return productIdInCookie;
    } else {
      newCookieValue.splice(productIdInCookie, 1);
    }
  } else {
    newCookieValue.push({
      id: productId,
      quantity: 0,
    });
  }
  cookies.set('quantity', newCookieValue);
  return newCookieValue;
}

export function clearShoppingCart() {
  const newCookieValue = [...getShoppingCartCookieValue()];
  newCookieValue.splice(0, newCookieValue.length);
  cookies.set('quantity', newCookieValue);
  return newCookieValue;
}

export function parseCookieValue(value) {
  try {
    return JSON.parse(value);
  } catch (err) {
    return undefined;
  }
}
