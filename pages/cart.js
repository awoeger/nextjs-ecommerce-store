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

  @media (min-width: 2560px) {
    font-size: 3.5em;
  }

  @media (max-width: 1024px) {
    font-size: 1.8em;
  }

  @media (max-width: 768px) {
    font-size: 1.6em;
  }
`;

const tableHeading = css`
  background: #182b4f;
  display: flex;
  justify-content: space-between;
  margin: 50px 50px;

  div {
    display: flex;
    color: white;
    font-weight: bold;
    width: 40%;
  }

  p {
    margin-left: 20%;
    margin-right: 20%;
  }

  @media (min-width: 2560px) {
    font-size: 2em;
  }

  @media (max-width: 1024px) {
    font-size: 0.8em;
  }

  @media (max-width: 768px) {
    font-size: 0.6em;
    margin-right: 20px;
  }
`;

const noItemsContainer = css`
  display: flex;
  color: #182b4f;
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 5em;

  @media (min-width: 2560px) {
    font-size: 3em;
  }
`;

const mainContainer = css`
  display: flex;
  position: relative;
  margin-left: 50px;
`;

const container = css`
  display: grid;
  grid-template-columns: 1.4fr 1.8fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px;
  justify-items: stretch;
  align-items: center;
  margin-bottom: 30px;

  img {
    width: 80%;
    margin-right: 8%;
  }

  h3 {
    margin-bottom: 0;
  }

  h4 {
    font-size: 1.3em;
    margin: 0 10px 0 0;
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

  @media (min-width: 2560px) {
    font-size: 1.7em;
  }

  @media (max-width: 1024px) {
    font-size: 0.8em;
  }

  @media (max-width: 768px) {
    font-size: 0.6em;
  }
`;

const subContainer = css`
  width: 100%;
`;

const subContainerRight = css`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  font-size: 1.3em;
`;

const screenreaderSpans = css`
  display: none;
`;

const subTotal = css`
  width: 70%;
  display: flex;
  justify-content: center;
  font-size: 1.3em;
`;

const totalContainer = css`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
  margin-bottom: 50px;
  padding: 30px;
  border-top: 2px solid #182b4f;

  span {
    font-size: 1.6em;
    margin-left: 160px;
    margin-right: 50px;
    font-weight: bold;
    color: #182b4f;
  }

  @media (min-width: 2560px) {
    font-size: 1.7em;

    span {
      margin-left: 240px;
      margin-right: 150px;
    }
  }

  @media (max-width: 1024px) {
    font-size: 0.8em;
  }

  span {
    margin-left: 130px;
    margin-right: 15px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 0.6em;
    margin-right: 10px;
  }
`;

const button = css`
  padding: 13px 30px;
  color: white;
  background: #182b4f;
  border: none;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 2px;
  margin-bottom: 50px;
  margin-right: 60px;
  float: right;

  :hover {
    background: #182b4f;
    color: #f39200;
  }

  @media (min-width: 2560px) {
    font-size: 3em;
    margin-right: 70px;
  }

  @media (max-width: 1024px) {
    font-size: 1.3em;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    margin-right: 20px;
  }
`;

export default function Cart(props) {
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
      <div css={tableHeading}>
        <div>
          <p>Product</p>
          <p>Description</p>
        </div>
        <div>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
      </div>
      <div css={mainContainer}>
        {totalSum > 0 ? (
          <div>
            {finalShoppingCartArray.map((item) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-cy="products-in-cart-div"
                  css={container}
                  key={item.id}
                >
                  <img src={item.imgFront} alt={item.productName} />
                  <div css={subContainer}>
                    <h3>{item.productName}</h3>
                    <p>{item.price} €</p>
                  </div>
                  <div>
                    <div css={subContainerRight}>
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
                      <p>
                        {
                          props.shoppingCart.find((pro) => pro.id === item.id)
                            ?.quantity
                        }
                      </p>
                      <button
                        data-cy="add-quantity-button"
                        onClick={() => {
                          // this updates the cookie state
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
                  <div css={subTotal}>
                    <h4>
                      {finalShoppingCartArray.find((pro) => pro.id === item.id)
                        ?.quantity *
                        finalShoppingCartArray.find((pro) => pro.id === item.id)
                          ?.price}{' '}
                      €
                    </h4>
                  </div>
                </div>
              );
            })}
            <div css={totalContainer}>
              <div>
                <span>Total:</span>
                <span data-cy="cart-counter-shoppingcart">
                  {getTotalAmount(props.shoppingCart)}
                </span>
              </div>
              <div>
                <span>
                  {totalSum} {' €'}
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
          </div>
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

  const finalShoppingCartArray = cookieArray.map((p) => {
    const draftShoppingCartObject = products.find((prod) => prod.id === p.id);

    return {
      id: draftShoppingCartObject.id,
      productName: draftShoppingCartObject.productName,
      imgFront: draftShoppingCartObject.imgFront,
      price: draftShoppingCartObject.price,
      quantity: p.quantity,
    };
  });

  return {
    props: {
      products,
      finalShoppingCartArray,
    },
  };
}
