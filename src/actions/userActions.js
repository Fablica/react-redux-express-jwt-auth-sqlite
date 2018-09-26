import userConstants from '../constants/userConstants';
import userService from '../services/userService';
import alertActions from './alertActions';
import history from '../helpers/history';

const userActions = {
    login,
    logout,
    getAll
};

const login = (username, password) => {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    const request = (user) => { return { type: userConstants.LOGIN_REQUEST, user } }
    const success = (user) => { return { type: userConstants.LOGIN_SUCCESS, user } }
    const failure = (error) => { return { type: userConstants.LOGIN_FAILURE, error } }
}

const logout = () => {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

const getAll = () => {
    return dispatch => {

      dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    const request = () => { return { type: userConstants.GETALL_REQUEST } }
    const success = (users) => { return { type: userConstants.GETALL_SUCCESS, users } }
    const failure = (error) => { return { type: userConstants.GETALL_FAILURE, error } }
}

export default userActions;
