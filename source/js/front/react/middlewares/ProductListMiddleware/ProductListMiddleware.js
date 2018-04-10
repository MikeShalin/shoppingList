import {getProducts,requestProducts,successProducts} from '../../actions/ProductListActions/ProductListActions.js';
import socket from "../../../../connect/socket-connect/socket-connect";

const ProductListMiddleware = store => next => action => {
    if (
        action.type === requestProducts.toString()
    ) {
        const {ID} = store.getState().AuthSuccess;
        socket.emit('getProductList',ID);

        socket.on("db",(res) => {
            store.dispatch(successProducts(res));
        });
    }
    return next(action);
};

export default ProductListMiddleware;