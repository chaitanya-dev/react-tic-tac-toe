import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from './Clock';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <h2>Hello</h2>,
  document.getElementById('test')
);

function tick(){
  ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('clock')
  );
}

setInterval(tick, 1000);
