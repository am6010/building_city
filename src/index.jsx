import React from 'react';
import ReactDom from 'react-dom';
import BasicRouter from './BasicRouter';
import css from './index.css';


const App = () => {
  return (
  <div>
    <div>
      <h1>Cities Buldings Statistcs</h1>
    </div>
    <div>
      <BasicRouter />
    </div>
  </div>
  );
}

ReactDom.render(
  <App />,
  document.getElementById('root')
)