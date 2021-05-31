import Head from 'next/head';
import Layout from '../../components/Layout';

export default function SingleProduct(props) {
  return (
    <Layout>
      <Head>
        <title>{props.product.name}</title>
      </Head>
      <div>
        <img alt={props.product.name} src={props.product.imgFront} />
      </div>
      <div>
        <p>{props.product.name}</p>
        <p>{`${props.product.price} ${props.product.currency}`}</p>
        <p>{props.product.description}</p>
        <button>Add to shopping cart</button>
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
