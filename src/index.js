import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import App from './App';
import {ContextProvider} from './context/Context'

ReactDOM.render(
  
  <React.StrictMode>
    <ContextProvider>
    {/* <div className = 'index'> */}
      <App />

    {/* </div> */}
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

