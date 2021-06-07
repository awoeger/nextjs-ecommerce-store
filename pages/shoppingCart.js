import { css } from '@emotion/react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import {
  addProductByProductId,
  clearShoppingCart,
  removeProductById,
  substractProductByProductId,
} from '../util/cookies';

// Todo: product goes under null - remove
// Todo: import product pictures, name and price
// Todo: Calculate total price

const noButton = css`
  display: none;
`;

const buttonQuantity = css`
  background: grey;
`;

export default function ShoppingCart(props) {
  // retrieve array of product ids that are inside shopping cart
  const productsByIdInShoppingCart = props.shoppingCart.map((p) => p.id);
  console.log('---productsByIdInShoppingCart---', productsByIdInShoppingCart);

  // filter all products (array of objects) and return an array ob objects of only those that are inside shopping cart
  const productsInShoppingCart = props.products.filter((p) =>
    productsByIdInShoppingCart.includes(p.id),
  );
  console.log('---productsInShoppingCart---', productsInShoppingCart);

  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <h2>Shopping cart</h2>
      <div>
        {productsInShoppingCart.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <img src={item.imgFront} alt={item.productName} />
              </div>
              <div>
                <p>{item.productName}</p>

                <p>
                  Amount:{' '}
                  {
                    props.shoppingCart.find((pro) => pro.id === item.id)
                      ?.quantity
                  }
                </p>
              </div>
              <button
                css={
                  props.shoppingCart.find((pro) => pro.id === item.id)
                    ?.quantity === 1
                    ? noButton
                    : buttonQuantity
                }
                onClick={() => {
                  props.setShoppingCart(substractProductByProductId(item.id));
                }}
              >
                -
              </button>
              <button
                onClick={() => {
                  props.setShoppingCart(addProductByProductId(item.id));
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  props.setShoppingCart(removeProductById(item.id));
                }}
              >
                Remove item
              </button>
              <p>
                {item.price} {item.currency}
              </p>
            </div>
          );
        })}
      </div>
      <button onClick={() => props.setShoppingCart(clearShoppingCart())}>
        Clear Shopping Cart <FontAwesomeIcon size="1x" icon={faShoppingCart} />
      </button>
      <Link href="/checkout">
        <a>
          <button>Go to checkout</button>
        </a>
      </Link>
      <p>
        Total amount of products:
        {props.shoppingCart
          .map((item) => item.quantity)
          .reduce((total, amount) => total + amount, 0)}
      </p>
      <p>
        Total sum:{' '}
        {productsInShoppingCart
          .map((p) => Number(p.price))
          .reduce((total, amount) => total + amount, 0)}
        €
      </p>
    </Layout>
  );
}

export async function getServerSideProps() {
  // changed products for getProducts after PostgreSQL lecture
  const { getProducts } = await import('../util/database');
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}
