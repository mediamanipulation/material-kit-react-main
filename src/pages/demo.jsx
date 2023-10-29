import { Helmet } from 'react-helmet-async';

import { DemoView } from 'src/sections/demo';

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title> Demo Page</title>
      </Helmet>

      <DemoView />
    </>
  );
}
