import {takeLatest,call,put,select} from 'redux-saga/effects';
import {registrationRequest,registrationSuccess,registrationFailure} from 'js/front/react/actions/Registration/RegistrationActions';
import {socketAction} from 'js/front/react/api/socketRequest/socketRequest';
import "regenerator-runtime/runtime";
import socket from "js/connect/socket-connect/socket-connect";
import {authFailure, authSuccess} from "js/front/react/actions/Auth/AuthActions";

function* registrationSaga(action){
    socket.emit('onReg',action.payload);
    const res = yield call(socketAction,'userIsReg');
    if (res.regID){
        yield put(registrationSuccess(true));
        localStorage.setItem('userID',res.regID.toString());
        yield put(authSuccess({ID:res.regID}));
        yield put(authFailure(false));
    }
    else if(!res.reg)
        yield put(registrationFailure(true));
}

export const Registration = function*() {
    yield takeLatest(registrationRequest, registrationSaga);
};
