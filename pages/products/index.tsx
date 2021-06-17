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

  @media (max-width: 1024px) {
    font-size: 1.8em;
  }

  @media (max-width: 768px) {
    font-size: 1.4em;
  }

  @media (max-width: 426px) {
    font-size: 1em;
    margin-bottom: 30px;
  }

  @media (max-width: 321px) {
    font-size: 0.9em;
  }

  @media (min-width: 2560px) {
    font-size: 4em;
  }
`;

const container = css`
  margin: 50px;
  text-align: center;

  @media (max-width: 426px) {
    margin: 0 0 30px 0;
  }
`;

const productContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 30px 0;

  @media (max-width: 1024px) {
    gap: 30px 10px;
  }

  @media (max-width: 768px) {
    gap: 30px 10px;
  }

  @media (max-width: 426px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: 2560px) {
    gap: 50px 0;
  }
`;

const productSubContainer = css`
  display: flex;
  flex-direction: column;

  img {
    width: 90%;
    margin-bottom: 10px;
  }

  h3 {
    margin: 10px 0 5px 0;
    font-size: 1.2em;
  }

  h4 {
    margin: 0;
    font-size: 1.2em;
  }

  @media (max-width: 1024px) {
    img {
      width: 95%;
    }

    h3 {
      font-size: 0.9em;
    }

    h4 {
      font-size: 1em;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 95%;
    }

    h3 {
      font-size: 0.6em;
    }

    h4 {
      font-size: 0.8em;
    }
  }

  @media (max-width: 426px) {
    h3,
    h4 {
      font-size: 1em;
    }
  }

  @media (max-width: 376px) {
    h3 {
      font-size: 0.8em;
    }
  }

  @media (max-width: 321px) {
    h3,
    h4 {
      font-size: 0.6em;
    }
  }

  @media (min-width: 2560px) {
    h3,
    h4 {
      font-size: 2.3em;
    }
  }
`;

const productInfo = css`
  display: flex;
  align-items: center;

  @media (max-width: 426px) {
    flex-direction: column;
  }
`;

const productInfoLeft = css`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1024px) {
    width: 55%;
  }

  @media (max-width: 768px) {
    width: 55%;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const productInfoRight = css`
  display: flex;
  justify-content: flex-end;
  width: 40%;

  button {
    background: white;
    color: #182b4f;
    padding: 5px 10px;
    font-size: 1.1em;
    border: 2px solid #182b4f;
  }

  @media (max-width: 1024px) {
    font-size: 1.1em;
    padding: 5px 5px;
  }

  @media (max-width: 768px) {
    font-size: 0.7em;
    padding: 5px 5px;
  }

  @media (max-width: 426px) {
    font-size: 0.6em;
    padding: 5px 5px;
    margin-right: 10px;
    width: 100%;
    justify-content: flex-start;
  }

  @media (max-width: 376px) {
    font-size: 0.5em;
    padding: 5px 5px;
    /* margin-right: 10px; */
  }

  @media (min-width: 2560px) {
    font-size: 2.3em;
    padding: 5px 20px;
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
