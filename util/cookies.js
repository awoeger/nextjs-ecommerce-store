import cookies from 'js-cookie';

export const getShoppingCookieValue = () => {
  return cookies.JSON('shopping');
};

export const addUserIdToShopping = (productId) => {
  const previousCookieValue = cookies.getJSON('shopping');
  cookies.set('shopping', JSON.stringify([...previousCookieValue, productId]));
};
