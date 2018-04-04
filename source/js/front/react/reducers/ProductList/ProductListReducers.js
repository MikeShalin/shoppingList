import {addNewProduct,
    deleteProduct,
    getProducts,
    replaceProductInForm,
    updateDoneRow} from '../../actions/ProductListActions/ProductListActions.js';
import {handleAction, handleActions} from 'redux-actions';

export const Products = handleAction(
    getProducts,
    (state, action) => action.payload,
    []
);

