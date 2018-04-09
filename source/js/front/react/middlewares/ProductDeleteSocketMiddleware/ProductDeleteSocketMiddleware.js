import {deleteProduct,successProducts,deleteProductSocket} from '../../actions/ProductListActions/ProductListActions.js';
import socket from "../../../../connect/socket-connect/socket-connect";

const ProductDeleteSocketMiddleware = store => next => action => {
    if(
        action.type === deleteProductSocket.toString()
    ) {
        const {Products} = store.getState(),
            ID = action.payload;
        store.dispatch(successProducts(Products.filter(product=>(product.ID!==ID))));
    }
    return next(action);
};

export default ProductDeleteSocketMiddleware;