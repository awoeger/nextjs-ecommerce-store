import { css } from '@emotion/react';
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';
import {
  addProductByProductId,
  removeProductById,
  substractProductByProductId,
} from '../util/cookies';

// Todo: Clear Cart Button doesn't work anymore

const heading = css`
  font-size: 2em;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  margin-left: 50px;
`;

const buttonQuantity = css`
  background-color: #000000;
  color: #182b4f;
  border: none;
  padding: 5px 8px;
`;

const noItemsContainer = css`
  display: flex;
  color: #182b4f;
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 5em;
`;

const mainContainer = css`
  display: flex;
  position: relative;
  margin-left: 50px;
`;

const container = css`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 50px;
  width: 50%;

  > div {
    display: flex;
    align-items: center;
    align-items: flex-start;
    flex-direction: column;
  }

  img {
    width: 30%;
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
  position: absolute;
  left: 50%;

  span {
    font-size: 1.5em;
    margin: 0 10px 50px 0;
    color: #182b4f;
    font-weight: bold;
  }
`;

const button = css`
  padding: 13px 30px;
  color: white;
  background: #182b4f;
  border: none;
  font-size: 1em;
  font-weight: bold;
  border-radius: 2px;
  margin-top: 50px;
  margin-bottom: 30px;

  :hover {
    background: #182b4f;
    color: #f39200;
  }
`;

export default function ShoppingCart(props) {
  const [finalShoppingCartArray, setFinalShoppingCartArray] = useState(
    props.finalShoppingCartArray,
  );

  // calculate the total sum of products inside shopping cart
  const totalSum = finalShoppingCartArray.reduce((acc, product) => {
    return acc + parseFloat(product.price) * product.quantity;
  }, 0);

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
        {totalSum > 0 ? (
          <>
            <div>
              {finalShoppingCartArray.map((item) => {
                return (
                  <div css={container} key={item.id}>
                    <img src={item.imgFront} alt={item.productName} />
                    <div>
                      <div css={subContainer}>
                        <h3>{item.productName}</h3>
                        <h4>{item.price} €</h4>
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
                          css={buttonQuantity}
                          onClick={() => {
                            console.log(props.shoppingCart);
                            props.setShoppingCart(
                              substractProductByProductId(item.id),
                            );
                            setFinalShoppingCartArray(
                              finalShoppingCartArray.map((prod) => {
                                if (prod.id === item.id) {
                                  return {
                                    ...prod,
                                    quantity: prod.quantity - 1,
                                  };
                                } else {
                                  return prod;
                                }
                              }),
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
                            console.log(props.shoppingCart);
                            props.setShoppingCart(
                              addProductByProductId(item.id),
                            );
                            setFinalShoppingCartArray(
                              finalShoppingCartArray.map((prod) => {
                                if (prod.id === item.id) {
                                  // console.log(
                                  //   'prod inside finalShoppingCartArray',
                                  //   prod,
                                  // );
                                  return {
                                    ...prod,
                                    quantity: prod.quantity + 1,
                                  };
                                } else {
                                  return prod;
                                }
                              }),
                            );
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
                            setFinalShoppingCartArray(
                              finalShoppingCartArray.filter(
                                (prod) => prod.id !== item.id,
                              ),
                            );
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
                <span>
                  Total amount of products:{' '}
                  {props.shoppingCart
                    .map((item) => item.quantity)
                    .reduce((total, amount) => total + amount, 0)}
                </span>
              </div>
              <div>
                <span>
                  Total sum: {totalSum} {' €'}
                </span>
              </div>
              <div>
                {/* <button
                css={clearAllButton}
                onClick={() => props.setShoppingCart(clearShoppingCart())}
              >
                Clear Cart <FontAwesomeIcon size="1x" icon={faShoppingCart} />
              </button> */}
                <Link href="/checkout">
                  <a>
                    <button data-cy="checkout-link" css={button}>
                      Checkout
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div css={noItemsContainer}>
            <div>
              <p>There are currently no items in your shopping cart.</p>
              <p>
                Please turn back and put some merchandise in your shopping cart.
              </p>
            </div>
            {/* <Image src="/noItemsInCart.JPG" width="300" height="800" /> */}
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // changed products for getProducts after PostgreSQL lecture
  const { getProducts } = await import('../util/database');
  const products = await getProducts();

  const rawCookie = context.req.cookies.quantity;
  const cookieArray = rawCookie ? JSON.parse(rawCookie) : [];
  console.log('cookieArray', cookieArray);

  const finalShoppingCartArray = cookieArray.map((p) => {
    const draftShoppingCartObject = products.find((prod) => prod.id === p.id);
    console.log('draftShoppingCartObject', draftShoppingCartObject);

    return {
      id: draftShoppingCartObject.id,
      productName: draftShoppingCartObject.productName,
      imgFront: draftShoppingCartObject.imgFront,
      price: draftShoppingCartObject.price,
      quantity: p.quantity,
    };
  });

  console.log('finalShoppingCartArray', finalShoppingCartArray);

  return {
    props: {
      products,
      finalShoppingCartArray,
    },
  };
}
