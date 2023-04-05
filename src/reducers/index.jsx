import { combineReducers } from 'redux';
import alert from './alertReducer';
import auth from './authReducer';
import copy from './copyReducer'
import client from './clientReducer'

export default combineReducers({
  alert,
  auth,
  client,
  copy
});
