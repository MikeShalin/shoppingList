/**
 * Created by mike on 24.03.18.
 */
const initialState =
{
    app:{
        productList:[],
        change:{}
    },
    form:{
        title: '',
        
    }
};

function reducers(state = initialState, action) {
    switch (action.type){
        case "FORM_RESET":
            return Object.assign({}, state, {
                app:state.app,
                form:{
                    title: ''
                }
            });
            break;
        case "EDIT_FORM_FIELD":
            return Object.assign({}, state, {
                app:state.app,
                form:Object.assign({}, state.form, {
                    [action.payload.field_name]:action.payload.field_value
                })
            });
            break;
        case "GET_PRODUCT_LIST":
            return Object.assign({}, state, {
                app:{
                    productList: action.payload.productList,
                    change:state.app.change
                },
                form:state.form
            });
            break;
        case "DELETE_PRODUCT":
            return Object.assign({}, state, {
                app:{
                    productList: state.app.productList.filter(product => (
                        (product.ID !== action.payload.product_ID)?product:false
                    )),
                    change:state.app.change
                },
                form:state.form
            });
            break;
        case "ADD_NEW_PRODUCT":
            return Object.assign({}, state, {
                app:{
                    productList: [...state.app.productList,action.payload.product],
                    change:state.app.change
                },
                form:state.form
            });
            break;
        case "REPLACE_PRODUCT_IN_FORM":
            return Object.assign({}, state, {
                app:{
                    productList: state.app.productList,
                    change:action.payload.change
                },
                form:state.form
            });
            break;
        case "UPDATE_DONE_ROW":
            let newState = {},
                newProduct = {};
            console.log("UPDATE_DONE_ROW",action.payload.product_ID);
            newProduct = state.app.productList.filter(product => (
                    (product.ID === action.payload.product_ID)?product:false
                ));
            newProduct = newProduct[0];
            newProduct.done = !newProduct.done;
            newState = state.app.productList.filter(product => ((product.ID !== action.payload.product_ID)?product:false));
            return Object.assign({}, state, {
                app:{
                    productList: state.app.productList,
                    change:action.payload.change
                },
                form:state.form
            });
            break;
        default : return state;
    }
}

export default reducers;
