import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authExitRequest} from '../../actions/Auth/AuthActions.js';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';
import Registration from "../Registration";
import ProductList from "../ProductList";
import Auth from "../Auth";

export class Switcher extends Component{
    handleExit =(e)=> {
        const {authExitRequest} = this.props;
        e.preventDefault();
        authExitRequest();
    };
    render(){
        const {AuthSuccess} = this.props;
        console.log(AuthSuccess);
        return(
            <div>
                <div className="link-box">
                    <Link to="/exit" component="exit" onClick={this.handleExit}>Log Out</Link>
                </div>
                <Route path="/" exact component={ProductList}/>
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return{
        AuthSuccess:state.AuthSuccess
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        authExitRequest:()=>{
            dispatch(authExitRequest())
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Switcher));
