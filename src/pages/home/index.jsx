import React from 'react';
import Heading from '../../container/Head';
import Body from '../../container/Body';
import Footer from '../../container/Footer';
import Container from '../../components/Container';
import Checkboxes from '../../components/Forms/CheckBoxes';
import Inputs from '../../components/Forms/Inputs';
import style from './style.module.scss';

function Home() {
  const handleOnChange = (e) => {
    console.log(e.target.checked);
  };

  return (
    <>
      <Heading title="Online shopping" />
      <Body>
        <div className={style.box}>
          <Checkboxes size="small" label="Hello World!" onChange={handleOnChange} />
          <Checkboxes size="medium" label="Hello World!" onChange={handleOnChange} />
          <Checkboxes size="large" label="Hello World!" onChange={handleOnChange} />
          <Inputs size="small" label="Hello" placeholder="World" />
          <Inputs size="medium" label="Hello" placeholder="World" />
          <Inputs size="large" label="Hello" placeholder="World" />
        </div>
        <Container height={300} width={300} bgcolor="#cfe8fc">
          Home
        </Container>
      </Body>
      <Footer />
    </>
  );
}

export default Home;
