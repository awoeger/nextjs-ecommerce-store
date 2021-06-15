// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one
import '@fortawesome/fontawesome-svg-core/styles.css';
import { css } from '@emotion/react';
// Prevent fontawesome from adding its CSS since we did it manually above
import { config } from '@fortawesome/fontawesome-svg-core';
import { Dispatch, SetStateAction } from 'react';
import Footer from './Footer';
import Header from './Header';

config.autoAddCss = false; /* eslint-disable import/first */

const mainContainer = css`
  margin-left: 30px;
  margin-right: 30px;
`;

export default function Layout(props) {
  return (
    <>
      {/* Pass props from _app.js */}
      <Header
        shoppingCart={props.shoppingCart}
        setShoppingCart={props.setShoppingCart}
      />
      <div css={mainContainer}>{props.children}</div>
      <Footer />
    </>
  );
}
