import {
    registrationRequest,
    registrationSuccess,
    registrationFailure
} from '../../actions/Registration/RegistrationActions';
import socket from '../../../../connect/socket-connect/socket-connect';


const RegistrationMiddleware = store => next => action => {
    if (
        action.type === registrationRequest.toString()
    ) {
        console.log('Попал в прослойку регистрации');
        socket.emit('onReg',action.payload);
        socket.on("userIsReg",(res) => {
            console.log('Пользователь зарегистрирован', res);
            if (res.reg)
                store.dispatch(registrationSuccess(true));
            if(!res.reg)
                store.dispatch(registrationFailure(true));
        });
    }
    return next(action);
};

export default RegistrationMiddleware;