import {
    authRequest,
    authSuccess,
    authFailure,
    loginEnter,
    passwordEnter,
} from '../../actions/Auth/AuthActions.js';
import {handleAction, handleActions} from 'redux-actions';

export const AuthLogin = handleAction(
    loginEnter,
    (state, action) => action.payload,
    ""
);

export const AuthPassword = handleAction(
    passwordEnter,
    (state, action) => action.payload,
    ""
);

export const LogIn = handleAction(
    authRequest,
    (state, action) => action.payload,
    false
);


