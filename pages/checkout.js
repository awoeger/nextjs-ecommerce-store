import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';

// Todo: Loop through year options in Exp Year input

const inputContainer = css`
  display: flex;
  margin: 50px 0 50px 50px;
`;

const billingSection = css`
  width: 70%;

  div {
    display: flex;
    flex-direction: column;
    width: 50%;
    flex-wrap: wrap;
  }

  section {
    border: 1px solid;
  }
`;

const paymentSection = css`
  width: 80%;

  > div {
    display: flex;
    flex-direction: column;
    width: 50%;
    flex-wrap: wrap;
  }
`;

export default function Checkout(props) {
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Payment</title>
      </Head>
      <form>
        <div css={inputContainer}>
          <section css={billingSection}>
            <div>
              <h2>Billing Details</h2>
              <label htmlFor="firstName">First name, last name</label>
              <input id="lastName" type="text" />
              <label htmlFor="email">Email adress</label>
              <input id="email" type="text" />
              <label htmlFor="adress">Adress</label>
              <input id="adress" type="text" />
              <label htmlFor="city">City</label>
              <input id="city" type="text" />
              <label htmlFor="postcode">Postal Code</label>
              <input id="postcode" type="text" />
              <label htmlFor="country">Country</label>
              <input id="country" type="text" />
            </div>
          </section>
          <section css={paymentSection}>
            <div>
              <h2>Credit Card Info</h2>
              <label htmlFor="creditname">Name on Card</label>
              <input id="creditname" type="text" />
              <label htmlFor="cardnumber">Card Number</label>
              <input id="cardnumber" type="number" />
              <label htmlFor="cvvNumber">CVV Number</label>
              <input id="cvvNumber" type="number" />
              <div>
                <label htmlFor="expMonth">Exp. Month</label>
                <select>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
                <label htmlFor="expYear">Exp. Year</label>
                <select id="expYear">
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                  <option>2031</option>
                </select>
              </div>
            </div>
          </section>
        </div>
        <button type="submit">Place order</button>
      </form>
    </Layout>
  );
}
