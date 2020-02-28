import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);

function tick() {
  const elem = (
    <div>
      <p>it&apos;s clock</p>
      <h3>{new Date().toLocaleTimeString()}</h3>
    </div>
  );

  ReactDOM.render(
    elem,
    document.querySelector('#clock'),
  );
}

setInterval(tick, 1000);
