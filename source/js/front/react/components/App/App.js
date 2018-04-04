/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';
import ProductList from '../ProductList/index';
import Registration from '../Registration/index';
import Auth from '../Auth/index';

export class App extends Component {

    render() {
        const {auth} = this.props;
        console.log("Компонента app auth:",auth);

        return (
            <div>
                <ul>
                    <li><Link to="/" component="Auth">Auth</Link></li>
                    <li><Link to="/ProductList" component="ProductList">Product list</Link></li>
                    <li><Link to="/reg" component="Registration">Registration</Link></li>
                </ul>
                <Switch>
                    <Route path="/" exact component={Auth}/>
                    <Route path="/ProductList"  component={ProductList}/>
                    <Route path="/reg" component={Registration}/>
                    {/*<Redirect from={auth?"/":"*"} to="/auth"/>*/}
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        auth:state.auth
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        // getProductList: (productList) => {
        //     dispatch(getProductList(productList));
        // },
        // addNewProduct: (product) => {
        //     dispatch(addNewProduct(product));
        // },
        // handleEdit: (product) => {
        //     dispatch(handleEdit(product));
        // },
        // updateDoneRow: (ID) => {
        //     dispatch(updateDoneRow(ID));
        // },
        // deleteProduct: (ID) => {
        //     dispatch(deleteProduct(ID));
        // }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
