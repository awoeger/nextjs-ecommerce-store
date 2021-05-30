import Head from 'next/head';
import Layout from '../../components/Layout';

export default function SingleProduct(props) {
  return (
    <Layout>
      <Head>
        <title>{props.productList.name}</title>
      </Head>
      <div>
        <img alt={props.productList.name} src={props.productList.img} />
      </div>
      <div>
        <p>{props.productList.name}</p>
        <p>{`${props.productList.price} ${props.productList.currency}`}</p>
        <p>{props.productList.description}</p>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const productId = context.query.productId;

  const { productList } = await import('../../util/database');

  const product = productList.find((product) => product.id === productId);
  return {
    props: {
      productList: productList,
    },
  };
}
