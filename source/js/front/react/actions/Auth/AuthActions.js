/**
 * Created by mike on 24.03.18.
 */
import {createActions} from 'redux-actions';

export const {
    authRequest: authRequest,
    authSuccess: authSuccess,
    authFailure: authFailure,
    loginEnter: loginEnter,
    passwordEnter: passwordEnter,
} = createActions({

    AUTH_REQUEST: logIn =>logIn,

    AUTH_SUCCESS: undefined,

    AUTH_FAILURE: undefined,

    PASSWORD_ENTER: password => password,

    LOGIN_ENTER: login => login,

});
