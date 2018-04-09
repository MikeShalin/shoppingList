/**
 * Created by mike on 24.03.18.
 */
import {createActions} from 'redux-actions';

export const {
    registrationRequest: registrationRequest,
    registrationSuccess: registrationSuccess,
    registrationFailure: registrationFailure,
} = createActions({

    REGISTRATION_REQUEST: reg => reg,

    REGISTRATION_SUCCESS: bool => bool,

    REGISTRATION_FAILURE: bool => bool,


});
