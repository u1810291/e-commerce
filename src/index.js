import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './root';
import * as serviceWorker from './service-worker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
