import {takeLatest,select,call, take, put,cps,takeEvery} from 'redux-saga/effects';
import {authRequest,logout,authFailure, authSuccess} from 'js/front/react/actions/Auth/AuthActions.js';
import "regenerator-runtime/runtime";
import socket from "js/connect/socket-connect/socket-connect";

function isAuth() {
    return isUser(socket).then(result=>{return result})
}

function isUser(socket) {
    return new Promise(resolve => {
        socket.on("userIsAuth", (res) =>{resolve(res)});
    });
}

function* getAuth(action){
    socket.emit('getAuth',action.payload);
    const user = yield call(isAuth);
    console.log('user ',user );
    if(user){
        localStorage.setItem('userID',user.toString());
        yield put(authSuccess(user));
        yield put(authFailure(false));
    } else {
        yield put(authSuccess(false));
        yield put(authFailure(true));
    }
}

function* getLogout(){
    yield localStorage.removeItem('userID');
    yield put(authSuccess(false));
    yield put(authFailure(false));
}

export const authFlow = function*() {
    yield takeLatest(authRequest, getAuth);
    yield takeLatest(logout, getLogout);
};
