import { combineReducers } from 'redux';

import { authentication } from './authenticationReducer/authenticationReducer';
import { users } from './usersReducer/usersReducer';
import { alert } from './alertReducer/alertReducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert
});

export default rootReducer;
