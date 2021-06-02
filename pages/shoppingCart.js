import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

// import { addProductByProductId, parseCookieValue } from '../util/cookies';

export default function ShoppingCart(props) {
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <h2>Shopping cart</h2>
      <p>Products in shopping cart</p>
    </Layout>
  );
}
