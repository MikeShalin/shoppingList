/**
 * Created by mike on 24.03.18.
 */

import {createActions} from 'redux-actions';

export const {
    addNewProduct: addNewProduct,
    deleteProduct: deleteProduct,
    getProducts: getProducts,
    replaceProductInForm: replaceProductInForm,
    updateDoneRow: updateDoneRow,
} = createActions({

    ADD_NEW_PRODUCT: product => product,

    DELETE_PRODUCT: ID => ID,

    GET_PRODUCTS: products => products,

    REPLACE_PRODUCT_IN_FORM: change => change,

    UPDATE_DONE_ROW: ID => ID,

});
