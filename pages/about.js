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
    font-size: 3em;
    margin-top: 0;
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

const eachSlide = css`
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 520px;
  }
`;

// Todo: create photo slideshow

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div css={aboutContainer}>
        <div css={aboutSubContainerLeft}>
          <div>
            <h2>About</h2>
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
