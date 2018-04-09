import {
    authExitRequest,
    authSuccess,
    authFailure,
} from '../../actions/Auth/AuthActions.js';

const AuthMiddleware = store => next => action => {
    if (
        action.type === authExitRequest.toString()
    ) {

        localStorage.removeItem('userID');
        store.dispatch(authSuccess(false));
        store.dispatch(authFailure(false));
    }
    return next(action);
};

export default AuthMiddleware;