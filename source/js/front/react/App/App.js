/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import ProductList from '../ProductList';
import Registration from '../Registration';
import Auth from '../Auth';

class App extends Component {

    render() {
        // const {auth} = this.props;
        return (
            <div>
                <ul>
                    {/*<li><Link to="/" component="ProductList">Product list</Link></li>*/}
                    <li><Link to="/" component="ProductList">Product list</Link></li>
                    <li><Link to="/auth" component="Auth">Auth</Link></li>
                    <li><Link to="/reg" component="Registration">Registration</Link></li>
                </ul>
                <Switch>
                    {/*<Route path="/" component={ProductList}/>*/}
                    <Route path="/" component={ProductList}/>
                    <Route path="/auth" exact component={Auth}/>
                    <Route path="/reg" component={Registration}/>
                </Switch>
            </div>
        )
    }
}

// const mapStateToProps = (state) =>{
//     return{
//         // auth:state.auth
//     }
// };
//
// const mapDispatchToProps = (dispatch) =>{
//     return {
//         // getProductList: (productList) => {
//         //     dispatch(getProductList(productList));
//         // },
//         // addNewProduct: (product) => {
//         //     dispatch(addNewProduct(product));
//         // },
//         // handleEdit: (product) => {
//         //     dispatch(handleEdit(product));
//         // },
//         // updateDoneRow: (ID) => {
//         //     dispatch(updateDoneRow(ID));
//         // },
//         // deleteProduct: (ID) => {
//         //     dispatch(deleteProduct(ID));
//         // }
//     }
// };

export default withRouter(connect((state) =>{state})(App))
