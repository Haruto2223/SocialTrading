import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/Dashboard'
import Statistics from './pages/Statistics';
import Widget from './pages/Widget';
import LiveAccount from './pages/auth/LiveAccount';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='register' element={<Register/>} />
      <Route path='login' element={<Login/>} />
      <Route path='dashboard' element={<Dashboard/>} />
      <Route path='statistics' element={<Statistics/>} />
      <Route path='widget' element={<Widget/>} />
      <Route path='liveaccount' element={<LiveAccount/>} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
