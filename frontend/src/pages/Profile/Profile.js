import React, { useEffect, useContext } from 'react';
import AppContext from 'context';

import logo from 'assets/logo.svg';
import './Profile.css';

function Profile() {
  const { context, setContext } = useContext(AppContext);

  const handleClick = () => setContext({
    ...context,
    vegetable: 'lauda'
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={handleClick}>
          I'm Profile.
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

export default Profile;
