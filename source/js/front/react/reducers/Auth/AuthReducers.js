import {
    authSuccess,
    authFailure,
} from 'js/front/react/actions/Auth/AuthActions.js';
import {handleAction, handleActions} from 'redux-actions';

export const AuthSuccess = handleAction(
    authSuccess,
    (state, action) => action.payload,
    false
);

export const AuthFailure = handleAction(
    authFailure,
    (state, action) => action.payload,
    false
);

export const getAuthSuccess = state => state.AuthSuccess;


