import {takeLatest,call,put} from 'redux-saga/effects';
import {authRequest,logout,authFailure, authSuccess} from 'js/front/react/actions/Auth/AuthActions.js';
import {getUserFromLocalStorage,setUserToLocalStorage,removeUserFromLocalStorage} from 'js/front/react/api/localStorage/localStorage';
import "regenerator-runtime/runtime";
import socket from "js/connect/socket-connect/socket-connect";
import {socketAction} from 'js/front/react/api/socketRequest/socketRequest';

function* authSaga(action){
    let user = getUserFromLocalStorage();
    if(user) {
        yield put(authSuccess(user));
        yield put(authFailure(false));
    }
    if (!user && action.payload) {
        socket.emit('getAuth', action.payload);
        user = yield call(socketAction,'userIsAuth');
        if (user) {
            setUserToLocalStorage(user);
            yield put(authSuccess(user));
            yield put(authFailure(false));
        } else {
            yield put(authSuccess(false));
            yield put(authFailure(true));
        }
    }
}

function* logoutSaga(){
    yield removeUserFromLocalStorage();
    yield put(authSuccess(false));
    yield put(authFailure(false));
}

export const Auth = function*() {
    yield takeLatest(authRequest, authSaga);
    yield takeLatest(logout, logoutSaga);
};
