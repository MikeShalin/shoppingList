import {successProducts} from 'js/front/react/actions/ProductListActions/ProductListActions.js';
import {handleAction, handleActions} from 'redux-actions';

export const Products = handleAction(
    successProducts,
    (state, action) => action.payload,
    []
);

export const getProductState = state => state;
