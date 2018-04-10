/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';
import SwitcherLogIn from '../SwitcherLogIn/';
import SwitcherAuth from '../SwitcherAuth/';
import {authFailure, authSuccess} from "../../actions/Auth/AuthActions";

export class App extends Component {
    componentDidMount(){
        const {authSuccess,authFailure} = this.props,
              userID = localStorage.getItem('userID');
        if (userID){
            authSuccess({ID:userID});
            authFailure(false);
        }
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
        authSuccess: (user) => {
            dispatch(authSuccess(user));
        },
        authFailure: (bool) => {
            dispatch(authFailure(bool));
        },
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
