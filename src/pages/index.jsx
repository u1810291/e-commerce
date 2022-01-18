import React from 'react';
import { withRouter } from 'next/router';
import Heading from '../container/Head';
import Body from '../container/Body';
import Footer from '../container/Footer';
import products from '../services/products';

function Home({ data }) {
  return (
    <>
      <Heading title="Online shopping" />
      <Body data={data} />
      <Footer />
    </>
  );
}
export const getServerSideProps = async () => {
  const { data } = await products.getProducts();
  return { props: { data } };
};

export default withRouter(Home);
