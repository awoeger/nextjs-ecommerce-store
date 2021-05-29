import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

// import vanguardsBlue from '../pages/_app.js';
// import vanguardsOrange from '../pages/_app.js';

const headerContainer = css`
  background: #182b4f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

const headerLeftContainer = css`
  margin-left: 20px;
`;
const headerRightContainer = css`
  margin-right: 20px;

  a {
    color: white;
    text-decoration: none;
    margin-left: 30px;
    font-size: 1.4em;
  }

  a:hover {
    color: #f39200;
    font-weight: bold;
  }
`;

const logo = css`
  max-width: 200px;
`;

export default function Header() {
  return (
    <div css={headerContainer}>
      <div css={headerLeftContainer}>
        <Link href="/">
          <a>
            <Image
              css={logo}
              src="/logo.png"
              alt="logo"
              width="70"
              height="70"
            />
          </a>
        </Link>
      </div>
      <div css={headerRightContainer}>
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
    </div>
  );
}
