import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const products = (
//   <>
//     <h4>Имя товара</h4>
//     <img src="https://www.google.com.ua/logos/doodles/2020/december-holidays-days-2-30-6753651837108830.3-law.gif" />
//     <a href="https://google.com.ua/">Жмакни меня!</a>
//   </>
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);
