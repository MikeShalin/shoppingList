/**
 * Created by mike on 24.03.18.
 */
export const App = {
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
    getProductList:(productList)=>{
        return {
            type: 'GET_PRODUCT_LIST',
            payload: {
                productList:productList
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
export default App;