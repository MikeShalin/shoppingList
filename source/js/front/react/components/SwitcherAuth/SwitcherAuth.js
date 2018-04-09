import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';
import Registration from "../Registration";
import Auth from "../Auth";

export class Switcher extends Component{
    render(){
        const {pathname} = this.props.location,
              location = {
                  link:pathname==="/"?"/reg":"/",
                  component: pathname==="/"?"Registration":"Auth",
                  name: pathname==="/"?"go to Registration":"go to Auth"
              };
        return(
            <div>
                <div className="link-box">
                    <Link to={location.link} component={location.component}>{location.component}</Link>
                </div>
                <Switch>
                    <Route path="/" exact component={Auth}/>
                    <Route path="/reg" component={Registration}/>
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return{}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Switcher));
