import { css } from '@emotion/react';
import {
  faMinus,
  faPlus,
  faShoppingCart,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
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

// Todo: Calculate total price

const heading = css`
  font-size: 2em;
  margin: 1.5em 0;
`;

const clearAllButton = {};

const noButton = css`
  display: none;
`;

const buttonQuantity = css`
  background-color: #000000;
  color: #182b4f;
  border: none;
  padding: 5px 8px;
`;

const mainContainer = css`
  display: flex;
`;

const container = css`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 50%;

  > div {
    display: flex;
    align-items: center;
    align-items: flex-start;
    flex-direction: column;
  }

  img {
    width: 20%;
    margin-right: 20px;
  }

  h3 {
    font-size: 1.2em;
    margin: 0 20px 0 0;
  }

  h4 {
    font-size: 1.2em;
    margin: 0 20px 0 0;
  }

  p {
    margin-right: 20px;
    font-size: 1.2em;
    color: #182b4f;
  }

  button {
    margin-right: 20px;
    background: white;
    color: #182b4f;
    padding: 3px 8px;
    font-size: 0.9em;
    border: 2px solid #182b4f;
  }
`;

const subContainer = css`
  display: inline-flex;
  align-items: center;
`;

const screenreaderSpans = css`
  display: none;
`;

const sumContainer = css`
  p > span {
  }
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
      <h2 css={heading}>Shopping cart</h2>
      <div css={mainContainer}>
        <div>
          {productsInShoppingCart.map((item) => {
            return (
              <div css={container} key={item.id}>
                <img src={item.imgFront} alt={item.productName} />
                <div>
                  <div css={subContainer}>
                    <h3>{item.productName}</h3>
                    <h4>
                      {item.price} {item.currency}
                    </h4>
                  </div>
                  <div css={subContainer}>
                    <p>
                      Amount:{' '}
                      {
                        props.shoppingCart.find((pro) => pro.id === item.id)
                          ?.quantity
                      }
                    </p>
                    <button
                      css={
                        props.shoppingCart.find((pro) => pro.id === item.id)
                          ?.quantity === 1
                          ? noButton
                          : buttonQuantity
                      }
                      onClick={() => {
                        props.setShoppingCart(
                          substractProductByProductId(item.id),
                        );
                      }}
                    >
                      <FontAwesomeIcon
                        size="xs"
                        icon={faMinus}
                        aria-hidden="true"
                        title="Substract item"
                      />
                      <span css={screenreaderSpans}>Substract item</span>
                    </button>
                    <button
                      css={buttonQuantity}
                      onClick={() => {
                        props.setShoppingCart(addProductByProductId(item.id));
                      }}
                    >
                      <FontAwesomeIcon
                        size="xs"
                        icon={faPlus}
                        aria-hidden="true"
                        title="Add item"
                      />
                      <span css={screenreaderSpans}>Add item</span>
                    </button>
                    <button
                      onClick={() => {
                        props.setShoppingCart(removeProductById(item.id));
                      }}
                    >
                      <FontAwesomeIcon
                        size="sm"
                        icon={faTrashAlt}
                        aria-hidden="true"
                        title="Delete item"
                      />{' '}
                      <span css={screenreaderSpans}>Delete item</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div css={sumContainer}>
          <div>
            <span>Total amount of products:</span>{' '}
            <span>
              {props.shoppingCart
                .map((item) => item.quantity)
                .reduce((total, amount) => total + amount, 0)}
            </span>
          </div>
          <div>
            <span>Total sum:</span>{' '}
            <span>
              {productsInShoppingCart
                .map((p) => Number(p.price))
                .reduce((total, amount) => total + amount, 0)}
              €
            </span>
          </div>
          <div>
            <button
              css={clearAllButton}
              onClick={() => props.setShoppingCart(clearShoppingCart())}
            >
              Clear Cart <FontAwesomeIcon size="1x" icon={faShoppingCart} />
            </button>
            <Link href="/checkout">
              <a>
                <button>Checkout</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
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
