/* eslint-disable react/react-in-jsx-scope */
import logo from './logo.svg';
import './App.css';

function App() {
  window.addEventListener('load', async () => {
    if ('serviceWorker' in navigator) {
      try {
        const reg = await navigator.serviceWorker.register('../serviceWorker.js');
        console.log('Service worker register success', reg);
      } catch (error) {
        console.log('Service worker register fail');
        console.log(error);
      }
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
