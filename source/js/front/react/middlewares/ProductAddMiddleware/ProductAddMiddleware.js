import {addNewProduct,successProducts,failureProducts} from '../../actions/ProductListActions/ProductListActions.js';
import socket from "../../../../connect/socket-connect/socket-connect";

const ProductAddMiddleware = store => next => action => {
    if (
        action.type === addNewProduct.toString()
    ) {
        const {product} = action.payload,
              {ID} = store.getState().AuthSuccess,
              {Products} = store.getState();
        socket.emit('addNewProduct',{userId:ID,product});
        socket.on("addNewProduct",(res) => {
            if (res.status)
                store.dispatch(successProducts([...Products,{
                    ID:res.productID,
                    title:product
                }]));
            if (!res.status)
                store.dispatch(failureProducts());
        });
    }
    return next(action);
};

export default ProductAddMiddleware;