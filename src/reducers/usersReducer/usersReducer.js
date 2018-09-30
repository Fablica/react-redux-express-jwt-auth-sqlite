import { userConstants } from '../../constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    case userConstants.DETAILED_REQUEST:
      return {
        loading: true,
        userId: action.userId
      };
    case userConstants.DETAILED_SUCCESS:
      return {
        userId: action.userId
      };
    case userConstants.DETAILED_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
