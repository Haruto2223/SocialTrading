// import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './APIService/setAuthToken';

import SocialLogin from './pages/auth/SocialLogin';
import FollowerRegister from './pages/auth/FollowerRegister';
import ProviderRegister from './pages/auth/ProviderRegister';
import Dashboard from './pages/Dashboard'
import Statistics from './pages/Statistics';
import Widget from './pages/Widget';
import Navbar from './components/dashboard/Navbar';
import MyPage from './pages/MyPage';
import PrivateRoute from './PrivateRoute';

import { traderLoad } from './actions/trader';

function App() {
  useEffect(() => {
    if (localStorage.token) setAuthToken(localStorage.token);

    store.dispatch(traderLoad());

    // window.addEventListener('storage', () => {
    //   if (!localStorage.token) store.dispatch({ type: LOGOUT })
    // })
  }, [])

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
          <Route path='/mypage' element={<PrivateRoute component={MyPage} />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
