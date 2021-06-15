/* eslint-disable react/no-array-index-key */
import 'react-slideshow-image/dist/styles.css';
import { css } from '@emotion/react';
import Head from 'next/head';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import Layout from '../components/Layout';

const aboutContainer = css`
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const aboutSubContainerLeft = css`
  width: 40%;

  div {
    width: 85%;
  }

  h2 {
    font-size: 1.5em;
    margin-top: 0;
    margin-bottom: 10px;
  }

  p {
    font-weight: 400;
    color: #182b4f;
    text-align: justify;
  }
`;

const aboutSubContainerRight = css`
  width: 60%;

  img {
    max-width: 100%;
  }
`;

const images = [
  '/liebentrittTackle.jpg',
  '/aboutGroupPictureDanubeCup.JPG',
  '/anitabeater.jpg',
  '/hugline.jpg',
  '/intergalaktik.jpg',
];

type Props = {
  shoppingCart: {
    id: number;
    quantity: number;
  };
  setShoppingCart: {
    id: number;
    quantity: number;
  };
};

export default function About(props: Props) {
  return (
    <Layout
      shoppingCart={props.shoppingCart}
      setShoppingCart={props.setShoppingCart}
    >
      <Head>
        <title>About</title>
      </Head>
      <div css={aboutContainer}>
        <div css={aboutSubContainerLeft}>
          <div>
            <h2>History</h2>
            <p>
              Quidditch was founded 2005 in the USA and has grown into a popular
              sport around the world. The International Quidditch Association
              (IQA) counts more than 40 national governing bodies with hundreds
              of teams and more than thousands active players worldwide. In
              Austria the sport is organised by the national governing body
              Quidditch Austria (QAT).
            </p>
            <p>
              The Vienna Vanguards Quidditch Club was founded 2014, which makes
              it the oldest and most successful club in the country. The regular
              trainings take place twice a week outdoors and once a week
              indoors. We train throughout the entire year.
            </p>
            <h2>Full Contact</h2>
            <p>
              Quidditch is a full contact sport in which opponent players in
              possession of a ball can be tackled as a means of disrupting their
              play. Tackling in quidditch is a little bit different from
              tackling in other full contact sports. It is only allowed to
              tackle with one hand and the tackle must be initiated from the
              front, with contact in-between shoulders and knees of the
              opponent.
            </p>
            <h2>Mixed Gender</h2>
            <p>
              What sets our sport further apart is its inclusive attitude.
              Quidditch is one of the only sports that welcomes all genders on
              pitch, explicitly including athletes that identify outside the
              gender binary. Especially important in this regard is the gender
              rule which ensures that no more than four players of the same
              gender are fielded at the same time.
            </p>
          </div>
        </div>
        <div css={aboutSubContainerRight}>
          <Slide>
            {images.map((each, index) => (
              <img
                alt="Group pictures"
                key={index}
                style={{ width: '100%' }}
                src={each}
              />
            ))}
          </Slide>
        </div>
      </div>
    </Layout>
  );
}
