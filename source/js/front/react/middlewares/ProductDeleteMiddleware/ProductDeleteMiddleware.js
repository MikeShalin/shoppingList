import {deleteProduct,successProducts,deleteProductSocket} from '../../actions/ProductListActions/ProductListActions.js';
import socket from "../../../../connect/socket-connect/socket-connect";

const ProductDeleteMiddleware = store => next => action => {
    if (
        action.type === deleteProduct.toString()
    ) {
        const {Products} = store.getState(),
            ID = action.payload;
        socket.emit('handleDelete',ID);
        store.dispatch(successProducts(Products.filter(product=>(product.ID!==ID))));
    }
    return next(action);
};

export default ProductDeleteMiddleware;