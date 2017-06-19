// @flow

import ButtonsPage from 'wercker-component-button/demo/index.js';
import buttonStyles from 'wercker-component-button/styles.css';
import Layout from '../../../components/layout';

export default () =>
  <Layout>
    <h1>Buttons</h1>
    <ButtonsPage />
    <style jsx global>{buttonStyles}</style>
  </Layout>;
