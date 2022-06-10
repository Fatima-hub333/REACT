/* eslint-disable react/no-unescaped-entities */
/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src={require('./react-logo.png')} width="40px" alt="Logo" />
        </nav>
      </header>
      <h1>Reasons I'm Excited to Learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be
          able to fit in with the cool kids!
        </li>
        <li>
          I'm more likely to get a job as a developer
          if I know React
        </li>
      </ol>
      <footer>
        <small>@ 2022 Fatima Development. All rights reserved.</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById('root'));
