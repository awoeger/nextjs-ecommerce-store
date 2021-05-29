import { css } from '@emotion/react';
import Link from 'next/link';

const footerContainer = css`
  background: #182b4f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

const footerLeftContainer = css`
  margin-left: 20px;

  p {
    color: white;
    font-size: 1.1em;
  }
`;

const footerRightContainer = css`
  margin-right: 20px;

  a {
    color: white;
    text-decoration: none;
    margin-left: 30px;
    font-size: 1.4em;
  }
`;

export default function Footer() {
  return (
    <div css={footerContainer}>
      <div css={footerLeftContainer}>
        <p> © Vienna Vanguards Quidditch Club</p>
      </div>
      <div css={footerRightContainer}>
        <Link href="https://www.facebook.com/ViennaVanguards">
          <a>Instagram</a>
        </Link>
        <Link href="https://www.instagram.com/viennavanguards/?hl=de">
          <a>Facebook</a>
        </Link>
        <Link href="https://www.tiktok.com/@viennavanguards?lang=de-DE">
          <a>Tiktok</a>
        </Link>
      </div>
    </div>
  );
}
