import React from 'react';
import Head from 'next/head';

export default function Heading({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
        <link rel="styles" type="stylesheet" href="../../static/assets/style/index.scss" />
      </Head>
    </>
  );
}
