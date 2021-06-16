import { css } from '@emotion/react';
import { faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import {
  addProductByProductId,
  removeProductById,
  substractProductByProductId,
} from '../util/cookies';
import { getTotalAmount } from '../util/totalAmount';
import { getTotalSum } from '../util/totalSum';

const heading = css`
  font-size: 2em;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  margin-left: 50px;
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
    width: 40%;
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
  background: rgba(234, 239, 253, 0.7);
  border: 2px solid black;
  padding: 20px;

  /* span {
    font-size: 1.3em;
    margin: 0 10px 50px 0;
    color: #182b4f;
  } */
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

  useEffect(() => {
    // [
    // {id: 1, quantity: 2, price: 590, src:"/", productName: ""},
    // {id: 2, quantity: 1, price: 590, src:"/", productName: ""}
    // ]
    const newFinalShoppingCartArray = props.finalShoppingCartArray
      // filter out all objects with a quantity below 1
      .filter((pro) => {
        const isInSubtractedValue = props.shoppingCart.find((item) => {
          return pro.id === item.id;
        });
        return isInSubtractedValue;
      })
      // update the quantity of objects inside newFinalShoppingCartArray with the quantity inside subtractedValue
      .map((pro) => {
        const q = props.shoppingCart.find((item) => {
          return item.id === pro.id;
        }).quantity;

        pro.quantity = q;
        return pro;
      });
    setFinalShoppingCartArray(newFinalShoppingCartArray);
    // if either of these things changes, then it will update the finalShoppingCart
  }, [props.finalShoppingCartArray, props.shoppingCart]);

  // calculate the total sum of products inside shopping cart
  const totalSum = getTotalSum(finalShoppingCartArray);

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
                  <div
                    data-cy="products-in-cart-div"
                    css={container}
                    key={item.id}
                  >
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
                          data-cy="substract-quantity-button"
                          onClick={() => {
                            // [{id: 1, quantity: 2}]
                            const subtractedValue = substractProductByProductId(
                              item.id,
                            );
                            props.setShoppingCart(subtractedValue);
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
                          data-cy="add-quantity-button"
                          onClick={() => {
                            console.log(
                              'props.shoppingCart',
                              props.shoppingCart,
                            );
                            // this updates the cookie state
                            props.setShoppingCart(
                              addProductByProductId(item.id),
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
                          data-cy="remove-quantity-button"
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
                <span data-cy="cart-counter-shoppingcart">
                  Total amount: {getTotalAmount(props.shoppingCart)}
                </span>
              </div>
              <div>
                <span>
                  Total sum: {totalSum} {' €'}
                </span>
              </div>
            </div>
            <div>
              <Link href="/checkout">
                <a>
                  <button data-cy="checkout-link" css={button}>
                    Checkout
                  </button>
                </a>
              </Link>
            </div>
          </>
        ) : (
          <div data-cy="no-items-in-cart-div" css={noItemsContainer}>
            <div>
              <p>There are currently no items in your shopping cart.</p>
            </div>
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
