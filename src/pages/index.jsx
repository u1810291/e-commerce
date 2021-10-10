import React from 'react';
import { withRouter } from 'next/router';
import Heading from '../container/Head';
import products from '../services/products';

function Home({ data }) {
  return (
    <>
      <Heading title="Online shopping" />
      <div>
        {console.log(data)}
        <h1>Hello world</h1>
        {data.map((el) => (
          <div key={el.id}>
            <span>
              {el.id}
            </span>
            <span>
              {el.category}
            </span>
            <span>
              {el.image}
            </span>
            <span>
              {el.price}
            </span>
            <span>
              {el.rating.count}
            </span>
            <span>
              {el.rating.rate}
            </span>
            <span>
              {el.title}
            </span>
            <span>
              {el.description}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
export const getServerSideProps = async () => {
  const { data } = await products.getProducts();
  return { props: { data } };
};

export default withRouter(Home);
