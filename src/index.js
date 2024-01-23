import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './component/Home';
import Calculator from './component/Calculator';
import CountApp from './component/CountApp';
import QuizApp from './component/QuizApp';
import List from './component/TodoApp';
import Card2 from './component/Card2';
import SearchFilter from './component/Search';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchFilter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
