/**
 * Created by mike on 24.03.18.
 */

import {createActions} from 'redux-actions';

export const {
    requestProducts:requestProducts,
    failureProducts:failureProducts,
    successProducts:successProducts,
    addNewProduct: addNewProduct,
    deleteProduct: deleteProduct,
    deleteProductSocket: deleteProductSocket,
    getProducts: getProducts,
    replaceProductInForm: replaceProductInForm,
    updateDoneRow: updateDoneRow,
} = createActions({

    REQUEST_PRODUCTS: undefined,

    FAILURE_PRODUCTS: bool => bool,

    SUCCESS_PRODUCTS: products => products,

    ADD_NEW_PRODUCT: product => product,

    DELETE_PRODUCT: ID => ID,

    DELETE_PRODUCT_SOCKET: ID => ID,

    GET_PRODUCTS: products => products,

    REPLACE_PRODUCT_IN_FORM: change => change,

    UPDATE_DONE_ROW: ID => ID,

});
