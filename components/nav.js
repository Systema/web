// @flow

import Link from 'next/link';

export default () =>
  <header>
    <Link href="/"><a>Home</a></Link>
    <Link href="/grids"><a>Grids</a></Link>
    <Link href="/color"><a>Color</a></Link>
    <Link href="/typography"><a>Typography</a></Link>
    <Link href="/visuals"><a>Visuals</a></Link>
    <Link href="/motion"><a>Motion</a></Link>
    <Link href="/components"><a>Components</a></Link>
  </header>;
