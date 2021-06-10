import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';

// Todo: Loop through year options in Exp Year input

const inputContainer = css`
  display: flex;
  margin: 50px 0 50px 50px;
`;

const billingSection = css`
  width: 70%;

  h2 {
    margin-bottom: 25px;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 50%;
    flex-wrap: wrap;
  }

  label {
    font-weight: bold;
    color: #182b4f;
    font-size: 1.1em;
  }

  input {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 5px 0px;
    border-top: none;
    border-left: none;
    border-right: none;
    color: #182b4f;
    font-size: 1.1em;
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

  h2 {
    margin-bottom: 25px;
  }

  label {
    font-weight: bold;
    color: #182b4f;
    font-size: 1.1em;
  }

  input {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 5px 0px;
    border-top: none;
    border-left: none;
    border-right: none;
    color: #182b4f;
    font-size: 1.1em;
  }

  select {
    margin: 10px 10px;
    padding: 5px 0px;
    border-top: none;
    border-left: none;
    border-right: none;
    color: #182b4f;
    font-size: 1.1em;
  }
`;

const button = css`
  padding: 13px 30px;
  color: white;
  background: #182b4f;
  border: none;
  font-size: 1.2em;
  border-radius: 2px;
  margin-top: 30px;

  :hover {
    color: #f39200;
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
              <h2>Shipping Details</h2>
              <label htmlFor="firstName">First name, last name</label>
              <input id="lastName" />
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" />
              <label htmlFor="adress">Address</label>
              <input id="adress" />
              <label htmlFor="city">City</label>
              <input id="city" />
              <label htmlFor="postcode">Postal Code</label>
              <input id="postcode" />
              <label htmlFor="country">Country</label>
              <input id="country" />
            </div>
          </section>
          <section css={paymentSection}>
            <div>
              <h2>Credit Card Info</h2>
              <label htmlFor="creditname">Name on Card</label>
              <input id="creditname" />
              <label htmlFor="cardnumber">Card Number</label>
              <input id="cardnumber" type="number" />
              <label htmlFor="cvvNumber">CVV Number</label>
              <input id="cvvNumber" type="number" />
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
              <Link href="/thankyou">
                <a>
                  <button css={button} type="submit">
                    Buy now
                  </button>
                </a>
              </Link>
            </div>
          </section>
        </div>
      </form>
    </Layout>
  );
}
