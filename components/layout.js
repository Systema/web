// @flow

import Head from 'next/head';
import Nav from './nav';
import Footer from './footer';

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
  </div>;