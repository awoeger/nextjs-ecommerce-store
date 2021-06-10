import '../css/main.css';
import { css, Global } from '@emotion/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getShoppingCartCookieValue } from '../util/cookies';

// import "../scss/style.scss";

export const vanguardsBlue = '#182B4F';
export const vanguardsOrange = '#F39200';

function MyApp({ Component, pageProps }) {
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
