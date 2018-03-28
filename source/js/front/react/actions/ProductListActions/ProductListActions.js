/**
 * Created by mike on 24.03.18.
 */
export const productList = {
    addNewProduct:(product)=>{
        return {
            type: 'ADD_NEW_PRODUCT',
            payload: {
                product:product
            }
        }
    },
    deleteProduct:(ID)=>{
        return {
            type: 'DELETE_PRODUCT',
            payload: {
                product_ID:ID
            }
        }
    },
    getProductList:(products)=>{
        return {
            type: 'GET_PRODUCT_LIST',
            payload: {
                products:products
            }
        }
    },
    handleEdit:(change)=>{
        return {
            type: 'REPLACE_PRODUCT_IN_FORM',
            payload: {
                change:change
            }
        }
    },
    updateDoneRow:(ID)=>{
        return {
            type: 'UPDATE_DONE_ROW',
            payload: {
                product_ID:ID
            }
        }
    }
};
export default productList;