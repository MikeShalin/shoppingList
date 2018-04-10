import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authExitRequest} from '../../actions/Auth/AuthActions.js';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';
import ProductList from "../ProductList";

export class Switcher extends Component{
    handleExit =(e)=> {
        const {authExitRequest} = this.props;
        e.preventDefault();
        authExitRequest();
    };
    render(){
        return(
            <div>
                <div className="link-box">
                    <Link to="/exit" component="exit" onClick={this.handleExit}>Log Out</Link>
                </div>
                <Switch>
                    <Route path="/" exact component={ProductList}/>
                    <Redirect from="*" to="/"/>
                </Switch>
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
