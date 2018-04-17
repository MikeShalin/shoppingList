import {takeLatest,select,call, take, put,cps,takeEvery} from 'redux-saga/effects';
import {authRequest} from '../actions/Auth/AuthActions.js';
import "regenerator-runtime/runtime";
import {authFailure, authSuccess} from "../actions/Auth/AuthActions";
import socket from "../../../connect/socket-connect/socket-connect";

function isAuth() {
    return isUser(socket).then(result=>{return result})

}

function isUser(socket) {
    return new Promise(resolve => {
        socket.on("userIsAuth", (res) =>{resolve(res)});
    });
}

function* getAuth(action) {
    socket.emit('getAuth',action.payload);
    const user = yield call(isAuth);
    console.log('isAuth ok',user);
    if(user){
        localStorage.setItem('userID',user.toString());
        yield put(authSuccess(user));
        yield put(authFailure(false));
    } else {
        yield put(authSuccess(false));
        yield put(authFailure(true));
    }
}

export const authFlow = function*() {
    yield takeLatest(authRequest, getAuth);
};
