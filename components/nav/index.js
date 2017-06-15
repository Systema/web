// @flow

import Link from 'next/link';

export default () =>
  <header>
    <Link href="/"><a>Home</a></Link>
    <Link href="/general"><a>General</a></Link>
    <Link href="/color"><a>Color</a></Link>
    <Link href="/typography"><a>Typography</a></Link>
    <Link href="/layout"><a>Layout</a></Link>
    <Link href="/components"><a>Components</a></Link>
  </header>;
