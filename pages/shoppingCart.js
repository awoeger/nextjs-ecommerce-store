import Head from 'next/head';
import Layout from '../components/Layout';
import { parseCookieValue, substractProductByProductId } from '../util/cookies';

export default function ShoppingCart(props) {
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <h2>Shopping cart</h2>
      <p>
        Total amount of products:{' '}
        {props.shoppingCart
          .map((item) => item.quantity)
          .reduce((total, amount) => total + amount, 0)}
      </p>
      <div>
        {props.shoppingCart.map((item) => {
          return (
            <div key={item.id}>
              <div>{`${item.id} ${item.quantity}`}</div>
              <button
                onClick={() => {
                  props.setShoppingCart(substractProductByProductId(item.id));
                }}
              >
                -
              </button>
              <button>+</button>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
