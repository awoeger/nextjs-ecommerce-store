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
      quantity: 1,
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

  if (productIdInCookie.quantity > 1) {
    productIdInCookie.quantity = productIdInCookie.quantity - 1;
  } else {
    // get index of product with the id that's passed as a parameter
    const removeIndex = newCookieValue
      .map(function (item) {
        return item.id;
      })
      .indexOf(productId);

    // remove object
    newCookieValue.splice(removeIndex, 1);
  }

  // this function creates the cookie
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
