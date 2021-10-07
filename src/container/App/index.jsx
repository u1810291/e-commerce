/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Container() {
  const [state, setState] = useState();

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://animechan.vercel.app/api/random'
    }).then((response) => {
      console.log(response);
      setState(response);
    }).catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {console.log(state)}
    </div>
  );
}
