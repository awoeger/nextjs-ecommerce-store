import { css } from '@emotion/react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const headerContainer = css`
  background: #182b4f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  margin-bottom: 1.5em;
`;

const headerLeftContainer = css`
  margin-left: 20px;
`;
const headerRightContainer = css`
  margin-right: 20px;

  a {
    color: white;
    text-decoration: none;
    margin-left: 60px;
    font-size: 1.4em;
    font-weight: bold;
  }

  a:hover {
    color: #f39200;
  }
`;

const shoppingCartNumber = css`
  font-size: 0.7em;
  margin-left: 5px;
`;

const logo = css`
  max-width: 200px;
`;

export default function Header(props) {
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
            <span css={shoppingCartNumber}>
              {props.shoppingCart
                .map((item) => item.quantity)
                .reduce((total, amount) => total + amount, 0)}
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}
