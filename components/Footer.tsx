import { css } from '@emotion/react';
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
// import { } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const footerContainer = css`
  background: #182b4f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  width: 100%;
  /* position: absolute;
  bottom: 0; */
`;

const footerLeftContainer = css`
  margin-left: 20px;

  p {
    color: white;
    font-size: 1.1em;
  }

  span {
    font-size: 0.7em;
    margin-left: 2em;
  }

  @media (min-width: 2560px) {
    margin-top: 20px;
    font-size: 1.8em;
    padding: 10px 0px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 0.7em;
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

  a:hover {
    color: #f39200;
    font-weight: bold;
  }

  @media (min-width: 7680px) {
    font-size: 0.7em;
  }

  a {
    font-size: 1em;
  }
`;

export default function Footer() {
  return (
    <div css={footerContainer}>
      <div css={footerLeftContainer}>
        <p>
          {' '}
          © Vienna Vanguards Quidditch Club
          <span>
            This is a project created for educational purposes during the
            Upleveled Bootcamp{' '}
          </span>
        </p>
      </div>
      <div css={footerRightContainer}>
        <Link href="https://www.facebook.com/ViennaVanguards">
          <a>
            {' '}
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </Link>
        <Link href="https://www.instagram.com/viennavanguards/?hl=de">
          <a>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </Link>
        <Link href="https://www.tiktok.com/@viennavanguards?lang=de-DE">
          <a>
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </Link>
      </div>
    </div>
  );
}
