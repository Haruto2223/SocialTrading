// import logo from './logo.svg';
import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// import setAuthToken from './APIService/setAuthToken';

import SocialLogin from './pages/auth/SocialLogin';
import FollowerRegister from './pages/auth/FollowerRegister';
import ProviderRegister from './pages/auth/ProviderRegister';
import Dashboard from './pages/Dashboard'
import Statistics from './pages/Statistics';
import Widget from './pages/Widget';
import Navbar from './components/dashboard/Navbar';
import PrivateRoute from './PrivateRoute';

function App() {
  // useEffect(() => {
  //   if (localStorage.token) setAuthToken(localStorage.token);

  //   store.dispatch(loadUser());

  //   window.addEventListener('storage', () => {
  //     if (!localStorage.token) store.dispatch({ type: LOGOUT })
  //   })
  // }, [])

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/statistics' element={<Statistics/>} />
          <Route path='/sociallogin' element={<SocialLogin/>} />
          <Route path='/register/follower' element={<FollowerRegister/>} />
          <Route path='/register/provider' element={<ProviderRegister/>} />
          <Route path='/widget/:id' element={<Widget/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
