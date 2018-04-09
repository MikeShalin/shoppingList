import {addNewProduct,
    deleteProduct,
    getProducts,
    successProducts,
    replaceProductInForm,
    updateDoneRow} from '../../actions/ProductListActions/ProductListActions.js';
import {handleAction, handleActions} from 'redux-actions';

export const Products = handleAction(
    successProducts,
    (state, action) => action.payload,
    []
);

