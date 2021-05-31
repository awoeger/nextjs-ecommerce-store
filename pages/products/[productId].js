import { css } from '@emotion/react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Layout from '../../components/Layout';

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

  p {
    color: #182b4f;
  }

  select {
    font-size: 1.2em;
    color: white;
    background: #182b4f;
    padding: 10px 0 10px 20px;
  }

  button {
    padding: 10px 20px;
    color: white;
    background: #182b4f;
    border: none;
    font-size: 1.5em;
    border-radius: 2px;
    margin: 20px 0px;
  }

  button:hover {
    color: #f39200;
  }
`;

export default function SingleProduct(props) {
  return (
    <Layout>
      <Head>
        <title>{props.product.name}</title>
      </Head>
      <div css={container}>
        <div css={subContainer}>
          <div css={imageContainer}>
            <img alt={props.product.name} src={props.product.imgFront} />
          </div>
          <div css={descriptionContainer}>
            <h3>{props.product.name}</h3>
            <h2>{`${props.product.price} ${props.product.currency}`}</h2>
            <p>{props.product.color}</p>
            <p>{props.product.description}</p>
            <select>
              <option disabled>Choose size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>XLarge</option>
            </select>
            <button>
              Add to <FontAwesomeIcon size="1x" icon={faShoppingCart} />
            </button>
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
    },
  };
}
