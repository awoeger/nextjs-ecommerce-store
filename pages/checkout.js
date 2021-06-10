import 'bootstrap/dist/css/bootstrap.min.css';
import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Layout from '../components/Layout';

// Todo: Loop through year options in Exp Year input

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
  // The form object will hold a key-value pair for each of our form fields, and the errors object will hold a key-value pair for each error that we come across on form submission.
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [formIsValidated, setFormIsValidated] = useState(false);

  // This will update our state to keep all the current form values, then add the newest form value to the right key location. Then add newest form value to the right key location. -> Add onChange function on every input field
  function setField(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  }

  // Using these cases, we're going to create a function that checks for them, then constructs an errors object with error messages:
  const findFormErrors = () => {
    const {
      firstName,
      lastName,
      email,
      city,
      postalCode,
      country,
      nameOnCreditCard,
      cardNumber,
      cvvNumber,
      expirationDate,
    } = form;

    const newErrors = {};

    if (!firstName || firstName === '') {
      newErrors.firstName = 'Cannot be blank';
    } else if (firstName.length > 40) {
      newErrors.firstName = 'First name is too long';
    }

    if (!lastName || lastName === '') {
      newErrors.lastName = 'Cannot be blank';
    } else if (lastName.length > 40) {
      newErrors.lastName = 'Last name is too long';
    }

    if (!email || email === '') {
      newErrors.email = 'Cannot be blank';
    }

    if (!city || city === '') {
      newErrors.city = 'Cannot be blank';
    }
    if (!postalCode || postalCode === '') {
      newErrors.postalCode = 'Cannot be blank';
    }
    if (!country || country === '') {
      newErrors.country = 'Cannot be blank';
    }

    if (!nameOnCreditCard || nameOnCreditCard === '') {
      newErrors.nameOnCreditCard = 'Cannot be blank';
    } else if (nameOnCreditCard.length > 150) {
      newErrors.nameOnCreditCard = 'Name on Credit Card is too long';
    }

    if (!cardNumber || typeof cardNumber !== 'number') {
      newErrors.cardNumber = 'Please enter numbers!';
    } else if (cardNumber.length < 16 || cardNumber.length > 20) {
      newErrors.cardNumber = 'Invalid credit card number';
    }

    if (!cvvNumber || typeof cvvNumber !== 'number') {
      newErrors.cvvNumber = 'Please enter numbers!';
    } else if (cvvNumber.length < 3 || cvvNumber.length > 3) {
      newErrors.cvvNumber = 'Invalid CVV Number';
    }

    if (!expirationDate || expirationDate === '') {
      newErrors.expirationDate = 'Please select the expiration date';
    }

    return newErrors;
  };

  // 1. Prevent default action for a form using e.preventDefault()
  // 2. Check our form for errors, using our new function
  // 3. If we receive errors, update our state accordingly, otherwise proceed with form submission!
  // now to handle submission:

  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      alert(
        'You are a genius and filled out everything correctly. Please click "Place your order"',
      );
      setFormIsValidated(true);
    }
  };

  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>Payment</title>
      </Head>
      <div>
        <Form>
          <h2>Shipping Details</h2>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              isInvalid={!!errors.firstName}
              onChange={(e) => setField('firstName', e.target.value)}
              placeholder="Karl"
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              isInvalid={!!errors.lastName}
              onChange={(e) => setField('lastName', e.target.value)}
              placeholder="Karlson"
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email adress</Form.Label>
            <Form.Control
              isInvalid={!!errors.email}
              onChange={(e) => setField('email', e.target.value)}
              type="email"
              placeholder="karl@karlson.com"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              isInvalid={!!errors.city}
              onChange={(e) => setField('city', e.target.value)}
              placeholder="Vienna"
            />
            <Form.Control.Feedback type="invalid">
              {errors.city}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              isInvalid={!!errors.postalCode}
              onChange={(e) => setField('postalCode', e.target.value)}
              placeholder="1020"
            />
            <Form.Control.Feedback type="invalid">
              {errors.postalCode}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Control
              isInvalid={!!errors.country}
              onChange={(e) => setField('country', e.target.value)}
              placeholder="Austria"
            />
            <Form.Control.Feedback type="invalid">
              {errors.country}
            </Form.Control.Feedback>
          </Form.Group>
          <h2>Shipping Details</h2>
          <Form.Group>
            <Form.Label>Name on Credit Card</Form.Label>
            <Form.Control
              isInvalid={!!errors.nameOnCreditCard}
              onChange={(e) => setField('nameOnCreditCard', e.target.value)}
              placeholder="Karl Karlson"
            />
            <Form.Control.Feedback type="invalid">
              {errors.nameOnCreditCard}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label type="number">Card Number</Form.Label>
            <Form.Control
              isInvalid={!!errors.cardNumber}
              onChange={(e) => setField('cardNumber', e.target.value)}
              placeholder="5555 4444 3333 2222"
            />
            <Form.Control.Feedback type="invalid">
              {errors.cardNumber}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label type="number">CVV Number</Form.Label>
            <Form.Control
              isInvalid={!!errors.cvvNumber}
              onChange={(e) => setField('cvvNumber', e.target.value)}
              placeholder="222"
            />
            <Form.Control.Feedback type="invalid">
              {errors.cvvNumber}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              isInvalid={!!errors.expirationDate}
              onChange={(e) => setField('expirationDate', e.target.value)}
              type="month"
            />
            <Form.Control.Feedback type="invalid">
              {errors.expirationDate}
            </Form.Control.Feedback>
          </Form.Group>
          {/* TODO: Link is not working */}
          <Link href="/thankyou">
            <a>
              <Button css={button} onClick={handleSubmit} type="submit">
                Place order
              </Button>
            </a>
          </Link>
        </Form>
      </div>
    </Layout>
  );
}
