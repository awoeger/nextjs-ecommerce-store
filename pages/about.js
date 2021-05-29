import Head from 'next/head';
import Layout from '../components/Layout';

export default function about() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <h2>About</h2>
      </div>
    </Layout>
  );
}
