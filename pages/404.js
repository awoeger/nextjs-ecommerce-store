import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const thankyouContainer = css`
  background-image: url(/404page.JPG);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: center;
  align-items: center;

  div {
    text-align: center;
    z-index: 1;
  }

  p {
    margin: 20px 0 0 0;
    color: white;
    font-size: 2.5em;
    font-weight: bold;
  }

  button {
    background: none;
    font-size: 2em;
    border: white 1px solid;
    padding: 15px 25px;
    margin-top: 20px;
  }

  button:hover {
    border: 1px #f39200 solid;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
`;

const blueOverlay = css`
  background: #182b4f;
  width: 100vw;
  height: 100vh;
  position: absolute;
  opacity: 81%;
`;

export default function Thankyou() {
  return (
    <div css={thankyouContainer}>
      <div css={blueOverlay} />
      <Head>
        <title>404 - page not found</title>
      </Head>
      <div>
        <p>404 - page not found</p>
        <button>
          <Link href="/products">
            <a data-cy="thank-you-page-shop-more-link"> Go back to safety</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
