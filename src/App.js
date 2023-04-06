// import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import { LOGOUT } from './actions/types';
import setAuthToken from './APIService/setAuthToken';

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/Dashboard'
import Statistics from './pages/Statistics';
import Widget from './pages/Widget';
import LiveAccount from './pages/auth/LiveAccount';
import CopyConfirm from './pages/CopyConfirm';

function App() {
  useEffect(() => {
    if (localStorage.token) setAuthToken(localStorage.token);

    store.dispatch(loadUser());
    
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT })
    })
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='statistics' element={<Statistics />} />
          <Route path='widget/:id' element={<Widget />} />
          <Route path='liveaccount' element={<LiveAccount />} />
          <Route path='copyconfirm' element={<CopyConfirm />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
