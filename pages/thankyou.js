import Head from 'next/head';
import Link from 'next/link';

export default function thankyou() {
  return (
    <div>
      <Head>
        <title>Thank you</title>
      </Head>
      <span>Thank you for your order</span>
      <span>You've officially been pimped</span>
      <button>
        <Link href="/products">
          <a>Home</a>
        </Link>
      </button>
    </div>
  );
}
