import {
    authRequest,
    authSuccess,
    authFailure,
} from '../../actions/Auth/AuthActions.js';
import socket from '../../../../connect/socket-connect/socket-connect';


const AuthMiddleware = store => next => action => {
    if (
        action.type === authRequest.toString()
    ) {
        socket.emit('getAuth',action.payload);
        socket.on("userIsAuth",(res) => {
            console.log('Данные о наличие пользователя ',res);
            if(res[0].ID){
                localStorage.setItem('userID',res[0].ID.toString());
                store.dispatch(authSuccess(res[0]));
                store.dispatch(authFailure(false));
            }
            if(!res[0].ID){
                store.dispatch(authSuccess(false));
                store.dispatch(authFailure(true));
            }
        });
    }
    return next(action);
};

export default AuthMiddleware;