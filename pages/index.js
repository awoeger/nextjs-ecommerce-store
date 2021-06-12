import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const homepageContainer = css`
  background-image: url(/rennerHomePage.jpg);
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

  h1 {
    margin: 0;
    color: white;
    font-size: 3.5em;
  }

  button {
    background: none;
    font-size: 3em;
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

export default function Home() {
  return (
    <div css={homepageContainer}>
      <div css={blueOverlay} />
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h1>Vienna Vanguards Online Store</h1>
        <button>
          <Link href="/products">
            <a data-cy="homepage-shop-now-link">Shop now</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
