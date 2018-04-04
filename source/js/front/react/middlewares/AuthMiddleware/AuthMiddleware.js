import {
    authRequest,
    authSuccess,
    authFailure,
    loginEnter,
    passwordEnter,
} from '../../actions/Auth/AuthActions.js';
import socket from '../../../../connect/socket-connect/socket-connect';


const FormMiddleware = store => next => action => {
    if (
        action.type === authRequest.toString()
    ) {
        // const action = () => {
        //     loginEnter:loginEnster(),
        //     passwordEnter:passwordEnter()
        // };
        // socket.on("db",(res) => {
            console.log('Я нахожусь в form moddleware', action.payload);
        socket.emit('getAuth',action.payload);
        // store.dispatch(action.action.payload.name(action.payload.value));
        // store.dispatch(editFormField(undefined));
    }
    return next(action);
};

export default FormMiddleware;