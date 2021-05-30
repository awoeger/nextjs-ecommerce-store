import Head from 'next/head';
import Layout from '../../components/Layout';

export default function SingleProduct(props) {
  return (
    <Layout>
      <Head>
        <title>One</title>
      </Head>
      <div>
        <img alt={props.product.name} src={props.product.img} />
      </div>
      <div>
        <p>{props.product.name}</p>
        <p>{`${props.product.price} ${props.product.currency}`}</p>
        <p>{props.products.description}</p>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { productList } = await import('../../util/database');
  return {
    props: {
      productList: productList,
    },
  };
}
