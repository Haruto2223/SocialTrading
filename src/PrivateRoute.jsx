import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from './Spiner';

const PrivateRoute = ({ component: Component, isAuthenticated, loading }) => {

  if (loading) return <Spinner />;
  if (isAuthenticated) return <Component />;

  return <Navigate to="/sociallogin" />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.trader.isAuthenticated,
  loading: state.trader.loading
});

export default connect(mapStateToProps)(PrivateRoute);
