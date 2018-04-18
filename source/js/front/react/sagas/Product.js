import {takeLatest,call,put,select} from 'redux-saga/effects';
import {addNewProduct,deleteProduct,deleteProductSocket,requestProducts} from 'js/front/react/actions/ProductListActions/ProductListActions';
import {socketAction} from 'js/front/react/api/socketRequest/socketRequest';
import "regenerator-runtime/runtime";
import socket from "js/connect/socket-connect/socket-connect";
import {successProducts} from "js/front/react/actions/ProductListActions/ProductListActions";
import {getAuthSuccess} from "js/front/react/reducers/Auth/AuthReducers";
import {getProductState} from "js/front/react/reducers/ProductList/ProductListReducers";

function* addProductSaga(action){
    const {product} = action.payload,
        {ID} = yield select(getAuthSuccess),
        {Products} = yield select(getProductState);
    socket.emit('addNewProduct',{userId:ID,product});
    const res = yield call(socketAction,'addNewProduct');
    if (res.status)
        yield put(successProducts([...Products,{
            ID:res.productID,
            title:product
        }]));
}

function* deleteProductSaga(action) {
    const {Products} = yield select(getProductState),
        ID = action.payload;
    socket.emit('handleDelete',ID);
    yield put(successProducts(Products.filter(product=>(product.ID!==ID))));
}

function* deleteProductSocketSaga(action) {
    const {Products} = yield select(getProductState),
        ID = action.payload;
    yield put(successProducts(Products.filter(product=>(product.ID!==ID))));
}

function* productListSaga() {
    const {ID} = yield select(getAuthSuccess);
    socket.emit('getProductList',ID);
    const productList = yield call(socketAction,'db');
    yield put(successProducts(productList));
}

export const Product = function*() {
    yield takeLatest(addNewProduct, addProductSaga);
    yield takeLatest(deleteProduct, deleteProductSaga);
    yield takeLatest(deleteProductSocket, deleteProductSocketSaga);
    yield takeLatest(deleteProductSocket, deleteProductSocketSaga);
    yield takeLatest(requestProducts, productListSaga);
};
