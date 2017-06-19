// @flow

import Layout from '../../components/layout';
import Link from 'next/link';

export default () =>
  <Layout>
    <h1>Components</h1>
    <nav>
      <Link href="/components/buttons"><a>Buttons</a></Link>
    </nav>
  </Layout>;
