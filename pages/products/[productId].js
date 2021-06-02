import 'react-slideshow-image/dist/styles.css';
import { css } from '@emotion/react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import { Slide } from 'react-slideshow-image';
import Layout from '../../components/Layout';
import { addProductByProductId, parseCookieValue } from '../../util/cookies';

// Todo: Delete size input for products with only single size

const container = css`
  margin: 50px;
`;

const subContainer = css`
  display: flex;
`;

const imageContainer = css`
  width: 40%;

  img {
    width: 80%;
  }
`;
const descriptionContainer = css`
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

  select {
    font-size: 1.2em;
    background: white;
    color: #182b4f;
    padding: 12px 0 12px 20px;
    border: 1px solid #182b4f;
    border-radius: 2px;
    margin-right: 40px;
    margin-top: 40px;
  }

  button {
    padding: 13px 30px;
    color: white;
    background: #182b4f;
    border: none;
    font-size: 1.2em;
    border-radius: 2px;
  }

  button:hover {
    color: #f39200;
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
`;

export default function SingleProduct(props) {
  return (
    // Pass props
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>{props.product.name}</title>
      </Head>
      <div css={container}>
        <div css={subContainer}>
          <div css={imageContainer}>
            <Slide autoplay={false} easing="ease">
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
              <h3>{props.product.name}</h3>
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
                {props.product.description}
              </p>
              <select>
                <option disabled>Choose size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XLarge</option>
              </select>
              <button
                onClick={() => {
                  props.setShoppingCart(
                    addProductByProductId(props.product.id),
                  );
                }}
              >
                Add to <FontAwesomeIcon size="1x" icon={faShoppingCart} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const productId = context.query.productId;

  const { productList } = await import('../../util/database');

  const product = productList.find((p) => p.id === productId);
  return {
    props: {
      product: product,
      // Passing a cookie value as a prop
      quantity: parseCookieValue(context.req.cookies.quantity) || [],
    },
  };
}
