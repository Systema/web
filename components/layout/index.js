// @flow

import Head from 'next/head';
import Nav from '../nav';
import Footer from '../footer';
import base from 'wercker-base.css/dist/main.css';
import grid from 'wercker-grid.css/dist/grid.css';

type Props = {
  children?: Element<any>,
};

export default ({ children }: Props) =>
  <div>
    <Head>
      <title>Systema</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />

    {children}

    <Footer />
    <style jsx global>{base}</style>
    <style jsx global>{grid}</style>
  </div>;
