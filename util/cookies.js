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
  // newCookieValue is the decoded version of whatever is inside the cookie; currently an array
  const newCookieValue = [...getShoppingCartCookieValue()];

  // id that we're passing and the id of the product
  const productIdInCookie = newCookieValue.find((p) => p.id === productId);

  if (productIdInCookie.quantity > 0) {
    productIdInCookie.quantity = productIdInCookie.quantity - 1;
  } else {
    alert(
      'Do you want to remove the item from the cart? Then please click on the bin to confirm.',
    );
  }

  // this function creates the cookie
  cookies.set('quantity', newCookieValue);

  return newCookieValue;
}

export function clearShoppingCart() {
  const newCookieValue = [...getShoppingCartCookieValue()];
  newCookieValue.splice(0, newCookieValue.length);
  cookies.set('quantity', newCookieValue);
  return newCookieValue;
}

export function removeProductById(productId) {
  const newCookieValue = [...getShoppingCartCookieValue()];
  const productIdInCookie = newCookieValue.find((p) => p.id === productId);

  if (productIdInCookie) {
    newCookieValue.splice(productIdInCookie, 1);
  } else {
    return newCookieValue;
  }

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
