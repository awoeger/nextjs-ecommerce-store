import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const heading = css`
  text-align: center;
  font-size: 2.5em;
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
    width: 80%;
  }

  h3 {
    margin: 10px 0 5px 0;
  }

  h4 {
    margin: 0;
  }
`;

export default function Products(props) {
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Products</title>
      </Head>
      <h2 css={heading}>Get your merchandise now and become a real Fanguard</h2>
      <div css={container}>
        <div css={productContainer}>
          {props.productList.map((product) => {
            return (
              <div css={productSubContainer} key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <a data-cy="learn-more-about-product-link">
                    <img alt={product.productName} src={product.imgFront} />
                  </a>
                </Link>
                <h3>{product.productName}</h3>
                <h4>{`${product.price} ${product.currency}`}</h4>
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
