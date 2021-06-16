import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import Layout from '../../components/Layout';

const heading = css`
  text-align: center;
  font-size: 2.5em;
  margin: 50px 0 50px 0;

  h2 {
    margin-bottom: 10px;
  }

  p {
    color: #f39200;
    font-weight: bold;
    margin-top: 0;
  }
`;

const container = css`
  margin: 50px;
  text-align: center;
`;

const productContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 30px 0;
`;

const productSubContainer = css`
  display: flex;
  flex-direction: column;

  img {
    width: 90%;
  }

  h3 {
    margin: 10px 0 5px 0;
    font-size: 1.2em;
  }

  h4 {
    margin: 0;
    font-size: 1.2em;
  }
`;

const productInfo = css`
  display: flex;
  align-items: center;
`;

const productInfoLeft = css`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const productInfoRight = css`
  display: flex;
  justify-content: flex-end;
  width: 40%;

  button {
    background: white;
    color: #182b4f;
    padding: 3px 8px;
    font-size: 1.1em;
    border: 2px solid #182b4f;
  }
`;

type Props = {
  productList: {
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
  }[];
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
};

export default function Products(props: Props) {
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Products</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
      </Head>
      <div css={heading}>
        <h2>Get your merchandise now</h2>
        <p>and become a real Fanguard</p>
      </div>
      <div css={container}>
        <div css={productContainer}>
          {console.log('---productList', props.productList)}
          {props.productList.map((product) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                css={productSubContainer}
                key={product.id}
              >
                <img alt={product.productName} src={product.imgFront} />

                <div css={productInfo}>
                  <div css={productInfoLeft}>
                    <h3>{product.productName}</h3>
                    <h4>{`${product.price} ${product.currency}`}</h4>
                  </div>
                  <div css={productInfoRight}>
                    <Link href={`/products/${product.id}`}>
                      <a data-cy="learn-more-about-product-link">
                        <button>See details</button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { getProducts } = await import('../../util/database');
  const productList = await getProducts();

  return {
    props: {
      productList: productList,
    },
  };
}
