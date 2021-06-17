import '../css/main.css';
import 'aos/dist/aos.css'; // You can also use  for styles
import { css, Global } from '@emotion/react';
import AOS from 'aos';
import Head from 'next/head';
import { useEffect, useState } from 'react';
// import "../scss/style.scss";
import { getShoppingCartCookieValue } from '../util/cookies';

export const vanguardsBlue = '#182B4F';
export const vanguardsOrange = '#F39200';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 50,
    });
  }, []);

  const [shoppingCart, setShoppingCart] = useState([]);

  // Updating the state variable after the page loads,
  // so that we don't run into server-side-rendering inconcistencies
  useEffect(() => {
    setShoppingCart(getShoppingCartCookieValue());
  }, []);

  return (
    <>
      <Global
        styles={css`
          *,
          *::before *::after {
            box-sizing: border-box;
          }

          body {
            margin: 0px;
            padding: 0;
            font-size: 16px;
          }

          h2 {
            color: #f39200;
            font-size: 1.3em;
          }

          h3 {
            color: #182b4f;
            font-size: 1.5em;
          }

          h4 {
            color: #f39200;
            font-size: 1.6em;
          }
        `}
      />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Component
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        {...pageProps}
      />
    </>
  );
}

export default MyApp;

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
