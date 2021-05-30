import { css } from '@emotion/react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    font-weight: bold;
  }

  a:hover {
    color: #f39200;
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
        <Link href="/shoppingcart">
          <a>
            <FontAwesomeIcon size="1x" icon={faShoppingCart} />
          </a>
        </Link>
      </div>
    </div>
  );
}
