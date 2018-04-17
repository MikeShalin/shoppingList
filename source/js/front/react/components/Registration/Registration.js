/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {registrationRequest} from 'js/front/react/actions/Registration/RegistrationActions';
import PopUp from 'js/front/react/components/PopUp/';
import Form from 'js/front/react/components/Form/';

export class Registration extends Component{
    render(){
        const {RegistrationSuccess,RegistrationFailure,registrationRequest} = this.props;
        return (
            <div>
                <Form
                    title = "Registration"
                    submitValue="Sign Up"
                    handleSubmit={registrationRequest}
                />
            <PopUp isError={RegistrationFailure}> {RegistrationSuccess?'You have successfully registered':RegistrationFailure?'You are already registered':''} </PopUp>
        </div>
    );
    }
}

const mapStateToProps = (state) =>{
    return{
        RegistrationSuccess:state.RegistrationSuccess,
        RegistrationFailure:state.RegistrationFailure
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        registrationRequest: (reg) => {
            dispatch(registrationRequest(reg));
        }
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Registration));
