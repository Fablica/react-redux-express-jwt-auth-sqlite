import { userConstants } from '../../constants';
import { userService } from '../../services';
import { alertActions } from '../';
import { history } from '../../helpers';

export const userActions = {
    login,
    logout,
    getAll,
    getUserDetailed
};

function login(username, password) {
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

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getUserDetailed(userId) {
    return dispatch => {
        dispatch(request({ userId }));

        userService.getUserDetailed(userId)
            .then(
                userDetailed =>
                    dispatch(success(userDetailed)),
                    error => dispatch(failure(error))
            );
    };

    function request(userId) { return { type: userConstants.DETAILED_REQUEST, userId } }
    function success(userId) { return { type: userConstants.DETAILED_SUCCESS, userId } }
    function failure(error) { return { type: userConstants.DETAILED_FAILURE, error } }
}
