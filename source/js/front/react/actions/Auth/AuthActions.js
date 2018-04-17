/**
 * Created by mike on 24.03.18.
 */
import {createActions} from 'redux-actions';

export const {
    authRequest: authRequest,
    logout: logout,
    authSuccess: authSuccess,
    authFailure: authFailure,
} = createActions({

    AUTH_REQUEST: logIn =>logIn,

    LOGOUT: undefined,

    AUTH_SUCCESS: bool => bool,

    AUTH_FAILURE: bool => bool,

    PASSWORD_ENTER: password => password,

    LOGIN_ENTER: login => login,

});
