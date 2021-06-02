import Head from 'next/head';
import Layout from '../components/Layout';
import { addProductByProductId, parseCookieValue } from '../util/cookies';

export default function ShoppingCart(props) {
  return (
    <Layout>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <h2>Shopping cart</h2>
      <p>Products in shopping cart</p>
      {/* {props.quantity.find((p) => p.id === props.product.id)?.quantity} */}
    </Layout>
  );
}

// export async function getServerSideProps(context) {
//   const productId = context.query.productId;

//   const { productList } = await import('../util/database');

//   const product = productList.find((p) => p.id === productId);
//   return {
//     props: {
//       product: product,
//       // Passing a cookie value as a prop
//       quantity: parseCookieValue(context.req.cookies.quantity) || [],
//     },
//   };
// }
