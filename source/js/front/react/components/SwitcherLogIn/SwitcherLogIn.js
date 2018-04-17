import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from 'js/front/react/actions/Auth/AuthActions.js';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';
import ProductList from "js/front/react/components/ProductList";

export class Switcher extends Component{
    handleExit =(e)=> {
        const {logout} = this.props;
        e.preventDefault();
        logout();
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
        logout:()=>{
            dispatch(logout())
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Switcher));
