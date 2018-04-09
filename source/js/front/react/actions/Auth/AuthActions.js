/**
 * Created by mike on 24.03.18.
 */
import {createActions} from 'redux-actions';

export const {
    authRequest: authRequest,
    authExitRequest: authExitRequest,
    authSuccess: authSuccess,
    authFailure: authFailure,
} = createActions({

    AUTH_REQUEST: logIn =>logIn,

    AUTH_EXIT_REQUEST: undefined,

    AUTH_SUCCESS: bool => bool,

    AUTH_FAILURE: bool => bool,

    PASSWORD_ENTER: password => password,

    LOGIN_ENTER: login => login,

});
