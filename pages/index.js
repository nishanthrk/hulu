import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utility/requests';

export default function Home({ genre }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results genre={genre} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query?.genre ?? null;
  return {
    props: {
      genre,
    },
  };
}
