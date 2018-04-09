import {combineReducers} from 'redux';
import Form from './Form/';
import {Products} from './ProductList/ProductListReducers.js';
import {AuthSuccess,AuthFailure} from './Auth/AuthReducers';
import {RegistrationFailure,RegistrationSuccess} from './Registration/RegistrationReducers';

export default combineReducers({
    Form,
    Products,
    AuthSuccess,
    AuthFailure,
    RegistrationFailure,
    RegistrationSuccess
});
