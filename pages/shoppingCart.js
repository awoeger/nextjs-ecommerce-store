import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import {
  addProductByProductId,
  clearShoppingCart,
  substractProductByProductId,
} from '../util/cookies';

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
        Total amount of products: {console.log(props.shoppingCart)}
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
              <button
                onClick={() => {
                  props.setShoppingCart(addProductByProductId(item.id));
                }}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={() => props.setShoppingCart(clearShoppingCart())}>
        Clear <FontAwesomeIcon size="1x" icon={faShoppingCart} />
      </button>
      <Link href="/checkout">
        <a>
          <button>Place order</button>
        </a>
      </Link>
    </Layout>
  );
}
