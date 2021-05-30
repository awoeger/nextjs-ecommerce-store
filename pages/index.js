import { css, Global } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h1>Vienna Vanguards Online Store</h1>
        <button>
          <Link href="/products">
            <a>Shop Now</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
