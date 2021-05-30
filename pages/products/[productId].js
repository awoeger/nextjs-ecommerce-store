import Head from 'next/head';
// import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function singleProduct() {
  // const router = useRouter();
  // const { productId } = router.query;
  return (
    <Layout>
      <Head>
        <title>One</title>
      </Head>
      <h2>One</h2>
    </Layout>
  );
}
