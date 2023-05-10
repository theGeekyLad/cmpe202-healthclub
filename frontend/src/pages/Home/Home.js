import { useContext, useEffect } from 'react'; 

import AppContext from 'context';

import logo from 'assets/logo.svg';
import './Home.css';

function Home() {
  const { context, setContext } = useContext(AppContext);

  useEffect(() => {
    setContext({
      ...context,
      path: ['Home']
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default Home;
