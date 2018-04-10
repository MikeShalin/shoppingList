import {
    registrationRequest,
    registrationSuccess,
    registrationFailure
} from '../../actions/Registration/RegistrationActions';
import socket from '../../../../connect/socket-connect/socket-connect';
import {authFailure, authSuccess} from "../../actions/Auth/AuthActions";

const RegistrationMiddleware = store => next => action => {
    if (
        action.type === registrationRequest.toString()
    ) {
        socket.emit('onReg',action.payload);
        socket.on("userIsReg",(res) => {
            if (res.regID){
                store.dispatch(registrationSuccess(true));
                localStorage.setItem('userID',res.regID.toString());
                store.dispatch(authSuccess({ID:res.regID}));
                store.dispatch(authFailure(false));
            }
            else if(!res.reg)
                store.dispatch(registrationFailure(true));
        });
    }
    return next(action);
};

export default RegistrationMiddleware;