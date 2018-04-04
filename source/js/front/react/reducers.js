// /**
//  * Created by mike on 24.03.18.
//  */
// const initialState =
// {
//     productList:{
//         products:[],
//         change:{}
//     },
//     form:"",
//     auth: false,
//     formReg:{
//         email:'',
//         password:''
//     },
//     formAuth:{
//         email:'',
//         password:''
//     }
// };
//
// function reducers(state = initialState, action) {
//     switch (action.type){
//         case "FORM_RESET":
//             return Object.assign({}, state, {
//                 productList:state.productList,
//                 form:{
//                     title: ''
//                 },
//                 formReg:state.formReg,
//                 formAuth:state.formAuth
//             });
//             break;
//         case "EDIT_FORM_FIELD":
//             console.log("reducers EDIT_FORM_FIELD",action.payload);
//
//             return Object.assign({}, state, {
//                 productList:state.productList,
//                 form:action.payload,
//                 formReg:state.formReg,
//                 formAuth:state.formAuth
//             });
//             break;
//         case "GET_PRODUCT_LIST":
//             console.log("reducers GET_PRODUCT_LIST",action.payload);
//             return Object.assign({}, state, {
//                 productList:{
//                     products: action.payload,
//                     change:state.productList.change
//                 },
//                 form:state.form,
//                 formReg:state.formReg,
//                 formAuth:state.formAuth
//             });
//             console.log("state в редюьюсерах GET_PRODUCT_LIST",state);
//
//             break;
//         case "DELETE_PRODUCT":
//             console.log("state в редюьюсерах DELETE_PRODUCT",state);
//             return Object.assign({}, state, {
//                 productList:{
//                     products: state.productList.products.filter(product => (
//                         (product.ID !== action.payload)?product:false
//                     )),
//                     change:state.productList.change
//                 },
//                 form:state.form,
//                 formReg:state.formReg,
//                 formAuth:state.formAuth
//             });
//             break;
//         case "ADD_NEW_PRODUCT":
//             return Object.assign({}, state, {
//                 productList:{
//                     products: [...state.productList.products,action.payload],
//                     change:state.productList.change
//                 },
//                 form:state.form,
//                 formReg:state.formReg,
//                 formAuth:state.formAuth
//             });
//             break;
//         case "REPLACE_PRODUCT_IN_FORM":
//             return Object.assign({}, state, {
//                 productList:{
//                     products: state.productList.products,
//                     change:action.payload
//                 },
//                 form:state.form,
//                 formReg:state.formReg,
//                 formAuth:state.formAuth
//             });
//             break;
//         case "UPDATE_DONE_ROW":
//             let newState = {},
//                 newProduct = {};
//             console.log("UPDATE_DONE_ROW",action.payload);
//             newProduct = state.productList.products.filter(product => (
//                     (product.ID === action.payload)?product:false
//                 ));
//             newProduct = newProduct[0];
//             newProduct.done = !newProduct.done;
//             newState = state.productList.products.filter(product => ((product.ID !== action.payload)?product:false));
//             return Object.assign({}, state, {
//                 productList:{
//                     productList: state.productList.products,
//                     change:action.payload
//                 },
//                 form:state.form,
//                 formReg:state.formReg,
//                 formAuth:state.formAuth
//             });
//             break;
//         default : return state;
//     }
// }
//
// export default reducers;
