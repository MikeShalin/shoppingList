import {combineReducers} from 'redux';
import Form from 'js/front/react/reducers/Form/';
import {Products} from 'js/front/react/reducers/ProductList/ProductListReducers.js';
import {AuthSuccess,AuthFailure} from 'js/front/react/reducers/Auth/AuthReducers';
import {RegistrationFailure,RegistrationSuccess} from 'js/front/react/reducers/Registration/RegistrationReducers';

export default combineReducers({
    Form,
    Products,
    AuthSuccess,
    AuthFailure,
    RegistrationFailure,
    RegistrationSuccess
});
