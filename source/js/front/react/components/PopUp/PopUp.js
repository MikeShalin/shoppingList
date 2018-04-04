/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';

import {connect} from 'react-redux';

import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';

import {
    authRequest,
    authSuccess,
    authFailure,
    loginEnter,
    passwordEnter
} from '../../actions/Auth/AuthActions.js';


export class PopUp extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         login:"",
    //         password:""
    //     }
    // }
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const {authRequest} = this.props;
    //     authRequest(this.state);
    // };
    // handleChange = (e) => {
    //     console.log("Компонент Auth ввожу данные",e.target.name);
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     });
    // };
    render(){
        console.log(this.props);
        // const {login,password} = this.state,
        //       {LogIn} = this.props;
        return (
            <div>
                <h2 >
                    {this.props.children}
                </h2>
            </div>
        );
    }

}

const mapStateToProps = (state) =>{
    return{
        LogIn:state.LogIn
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        loginEnter: (login) => {
            dispatch(loginEnter(login));
        },
        passwordEnter: (password) => {
            dispatch(passwordEnter(password));
        },

        authRequest: (logIn) => {
            dispatch(authRequest(logIn))
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PopUp));
