import { css } from '@emotion/react';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <p>Logo</p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/products">
        <a>Shop</a>
      </Link>
      <Link href="/about">
        <a>Cart Icon</a>
      </Link>
    </div>
  );
}