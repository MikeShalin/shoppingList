/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';

import {connect} from 'react-redux';

import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';

import PopUp from '../PopUp/';

import {
    authRequest,
    authSuccess,
    authFailure,
    loginEnter,
    passwordEnter
} from '../../actions/Auth/AuthActions.js';


export class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {
            login:"",
            password:""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {authRequest} = this.props;
        authRequest(this.state);
    };
    handleChange = (e) => {
        console.log("Компонент Auth ввожу данные",e.target.name);
        this.setState({
            [e.target.name]:e.target.value
        });
    };
    render(){
        const {login,password} = this.state,
              {LogIn} = this.props;
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <h2 className="form__title">Log In</h2>
                    <div className="form__container">
                        <input type="email"
                               name="login"
                               value={login}
                               onChange={this.handleChange}
                               placeholder="email"
                               className="form__input"
                        />
                        <input type="password"
                               name="password"
                               value={password}
                               onChange={this.handleChange}
                               placeholder="password"
                               className="form__input"
                        />
                        <input
                            type="submit"
                            value="Log In"
                            // disabled={title === ''}
                            className="form__submit"
                        />
                    </div>
                </form>
                <PopUp isVisible={LogIn}> {LogIn} </PopUp>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Auth));
