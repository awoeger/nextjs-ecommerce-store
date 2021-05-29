// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
import { css, Global } from '@emotion/react';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
import Footer from './Footer';
import Header from './Header';

config.autoAddCss = false; /* eslint-disable import/first */

const mainContainer = css`
  margin-left: 20px;
  margin-right: 20px;
`;

export default function Layout(props) {
  return (
    <>
      <Header />
      <div css={mainContainer}>{props.children}</div>
      <Footer />
    </>
  );
}
