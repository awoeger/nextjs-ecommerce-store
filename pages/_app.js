import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          *,
          *::before *::after {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
          }
        `}
      />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
