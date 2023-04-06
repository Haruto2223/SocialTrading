import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGOUT,
    USER_LOADED,
    AUTH_ERROR
  } from '../actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
  };
  
  function authReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case AUTH_ERROR:
        return {
          ...state,
          loading: false
        }
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload
        };
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false
        };
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          loading: false,
          token: null,
          user: null
        };
      default:
        return state;
    }
  }
  
  export default authReducer;
  