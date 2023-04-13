import { combineReducers } from 'redux';
import provider from './providerReducer';
import auth from './authReducer'

export default combineReducers({
  provider,
  auth
});