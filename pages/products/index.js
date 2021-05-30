import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Products(props) {
  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>
      <h2>Get your merchandise now and become a real Fanguard</h2>
      {props.productList.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`/products/${props.productList.id}`}>
              <a>
                <img alt={product.name} src={product.img} />
                <p>{product.name}</p>
                <p>{`${product.price} ${product.currency}`}</p>
              </a>
            </Link>
          </div>
        );
      })}
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
