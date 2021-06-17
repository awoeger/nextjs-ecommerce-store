import 'react-slideshow-image/dist/styles.css';
import { css } from '@emotion/react';
import {
  faArrowCircleLeft,
  faMinus,
  faPlus,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { Slide } from 'react-slideshow-image';
import Layout from '../../components/Layout';
import {
  addProductByProductId,
  parseCookieValue,
  substractProductByProductId,
} from '../../util/cookies';

// Todo: biggest screen

const container = css`
  margin: 100px 50px 60px 50px;
`;

const subContainer = css`
  display: flex;
`;

const imageContainer = css`
  width: 40%;
  position: relative;

  img {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 65%;

    img {
      width: 100%;
    }
  }

  @media (min-width: 2560px) {
    width: 60%;

    img {
      width: 100%;
    }
  }
`;
const descriptionContainer = css`
  position: relative;
  width: 60%;
  margin-left: 50px;

  div {
    width: 50%;
  }

  h3 {
    font-size: 1.6em;
    font-weight: bold;
    text-decoration: underline;
  }

  h2 {
    font-size: 1.6em;
  }

  p {
    color: #182b4f;
    font-size: 1.2em;
  }

  span {
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    width: 60%;

    div {
      width: 100%;
    }

    h3,
    h2 {
      font-size: 1.4em;
    }

    p {
      font-size: 1.2em;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 100px;

    div {
      width: 100%;
    }

    h3,
    h2 {
      font-size: 1em;
    }

    p {
      font-size: 1em;
    }
  }

  @media (min-width: 2560px) {
    div {
      width: 100%;
    }

    h3,
    h2 {
      font-size: 3em;
    }

    p {
      font-size: 2.7em;
    }
  }
`;

const eachSlide = css`
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 520px;
  }

  @media (max-width: 768px) {
    height: 600px;
  }

  @media (min-width: 2560px) {
    height: 1200px;
  }
`;

const addToCardButton = css`
  background-color: white;
  color: #182b4f;
  border: #182b4f 1px solid;
  font-size: 1em;
  padding: 0.5em 1.2em;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }

  @media (min-width: 2560px) {
    font-size: 2em;
  }
`;

const proceedToCardButton = css`
  padding: 13px 30px;
  color: white;
  background: #182b4f;
  border: none;
  font-size: 1.2em;
  border-radius: 2px;
  width: 100%;
  margin: 1.3em 0;
  position: absolute;
  left: 75%;
  top: 85%;
  max-width: 200px;

  :hover {
    color: #f39200;
  }

  @media (max-width: 1024px) {
    left: 45%;
    top: 87%;

    font-size: 1em;
  }

  @media (max-width: 768px) {
    left: 30%;
    top: 115%;

    font-size: 1em;
  }

  @media (min-width: 2560px) {
    font-size: 2em;
  }
`;

const backButton = css`
  border: none;
  color: #182b4f;
  background-color: white;
  position: absolute;
  bottom: 106%;
  font-size: 1em;
`;

const buttonQuantity = css`
  background-color: white;
  color: #182b4f;
  border: #182b4f 1px solid;
  padding: 5px 8px;
  margin: 10px 10px 0 0;
`;

const screenreaderSpans = css`
  display: none;
`;

type Props = {
  shoppingCart: {
    id: number;
    quantity: number;
  }[];
  setShoppingCart: Dispatch<
    SetStateAction<
      {
        id: string;
        quantity: string;
      }[]
    >
  >;
  product: {
    color: string;
    currency: string;
    cut: string;
    id: number;
    imgBack: string;
    imgFront: string;
    price: string;
    productDescription: string;
    productName: string;
    sizes: string;
  };
};

export default function SingleProduct(props: Props) {
  return (
    // Pass props
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>{props.product.productName}</title>
      </Head>

      <div css={container}>
        <div css={subContainer}>
          <div css={imageContainer}>
            <Link href="/products">
              <a>
                <button css={backButton}>
                  <FontAwesomeIcon size="2x" icon={faArrowCircleLeft} /> {'  '}{' '}
                  <span>Back to shop</span>
                </button>
              </a>
            </Link>
            <Slide
              autoplay={false}
              easing="ease"
              arrows={props.product.imgBack === 'none' ? false : true}
            >
              <div css={eachSlide}>
                <div
                  style={{ backgroundImage: `url(${props.product.imgFront})` }}
                />
              </div>
              <div css={eachSlide}>
                <div
                  style={{ backgroundImage: `url(${props.product.imgBack})` }}
                />
              </div>
            </Slide>
          </div>
          <div css={descriptionContainer}>
            <div>
              <h3>{props.product.productName}</h3>
              <h2>{`${props.product.price} ${props.product.currency}`}</h2>
              <p>
                <span>Color: </span>
                {props.product.color}
              </p>
              <p>
                <span>Cut: </span>
                {props.product.cut}
              </p>
              <p>
                <span>Description: </span>
                {props.product.productDescription}
              </p>
              <div>
                <button
                  css={addToCardButton}
                  data-cy="single-product-page-add-to-cart-link"
                  onClick={() => {
                    props.setShoppingCart(
                      addProductByProductId(props.product.id),
                    );
                  }}
                >
                  Add to <FontAwesomeIcon size="1x" icon={faShoppingCart} />
                </button>
                <div>
                  <button
                    data-cy="substract-quantity-button"
                    css={buttonQuantity}
                    onClick={() => {
                      props.setShoppingCart(
                        substractProductByProductId(props.product.id),
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
                    data-cy="add-quantity-button"
                    css={buttonQuantity}
                    onClick={() => {
                      props.setShoppingCart(
                        addProductByProductId(props.product.id),
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
                </div>
              </div>
              <Link href="/cart">
                <a>
                  <button
                    css={proceedToCardButton}
                    data-cy="single-product-page-proceed-to-shopping-cart"
                  >
                    Proceed to{' '}
                    <FontAwesomeIcon size="1x" icon={faShoppingCart} />
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const productId = context.query.productId;

  const { getProductById } = await import('../../util/database');

  const product = await getProductById(productId);
  console.log('---product----', product);
  return {
    props: {
      product: product,
      // Passing a cookie value as a prop
      quantity: parseCookieValue(context.req.cookies.quantity) || [],
    },
  };
}
