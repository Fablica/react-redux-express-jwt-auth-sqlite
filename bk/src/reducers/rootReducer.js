import { combineReducers } from 'redux';

import authenticationReducer from './authenticationReducer';
import userReducer from './userReducer';
import alertReducer from './alertReducer';

const rootReducer = combineReducers({
  authenticationReducer,
  userReducer,
  alertReducer
});

export default rootReducer;
