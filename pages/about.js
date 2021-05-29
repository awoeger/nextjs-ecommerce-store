import { css, Global } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

const mainContainerAbout = css`
  display: flex;
  align-items: center;
`;

export default function about() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <h2>About</h2>
        <p>
          Quidditch was founded 2005 in the USA and has grown into a popular
          sport around the world. The International Quidditch Association (IQA)
          counts more than 40 national governing bodies with hundreds of teams
          and more than thousands active players worldwide. In Austria the sport
          is organised by the national governing body Quidditch Austria (QAT).
        </p>
        <p>
          The Vienna Vanguards Quidditch Club was founded 2014, which makes it
          the oldest and most successful club in the country. The regular
          trainings take place twice a week outdoors and once a week indoors. We
          train throughout the entire year.
        </p>
      </div>
      <div>
        <Image
          src="/aboutGroupPictureDanubeCup.JPG"
          alt="Vienna Vanguards Team 2019"
          width="3823"
          height="2549"
        />
      </div>
    </Layout>
  );
}
