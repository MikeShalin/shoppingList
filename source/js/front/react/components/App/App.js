/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';
import SwitcherLogIn from 'js/front/react/components/SwitcherLogIn/';
import SwitcherAuth from 'js/front/react/components/SwitcherAuth/';
import {authRequest} from "js/front/react/actions/Auth/AuthActions";

export class App extends Component {
    componentDidMount(){
        const {authRequest,AuthSuccess} = this.props;
        if(!AuthSuccess)
            authRequest();
    }
    render() {
        const {AuthSuccess} = this.props;
        return (
            <div>
                <div>
                    {AuthSuccess?<SwitcherLogIn/>:<SwitcherAuth/>}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        AuthSuccess:state.AuthSuccess
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        authRequest: () => {
            dispatch(authRequest());
        }
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
