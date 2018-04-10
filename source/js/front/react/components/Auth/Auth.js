/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';
import PopUp from '../PopUp/';
import Form from '../Form/';
import {authRequest} from '../../actions/Auth/AuthActions.js';

export class Auth extends Component{
    render(){
        const {AuthSuccess,AuthFailure,authRequest} = this.props;
        return (
            <div>

                <Form
                    title="Authorization"
                    submitValue="Log In"
                    handleSubmit={authRequest}
                />
                <PopUp isError={AuthFailure}> {AuthSuccess?'You have been successfully authorized':AuthFailure?'Incorrect login or password':''} </PopUp>
            </div>
        );
    }

}

const mapStateToProps = (state) =>{
    return{
        AuthSuccess:state.AuthSuccess,
        AuthFailure:state.AuthFailure
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        authRequest: (logIn) => {
            dispatch(authRequest(logIn))
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Auth));