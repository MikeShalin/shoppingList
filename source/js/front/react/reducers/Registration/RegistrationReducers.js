import {
    registrationSuccess,
    registrationFailure
} from '../../actions/Registration/RegistrationActions';
import {handleAction, handleActions} from 'redux-actions';

// export const AuthLogin = handleAction(
//     loginEnter,
//     (state, action) => action.payload,
//     ""
// );
//
// export const AuthPassword = handleAction(
//     passwordEnter,
//     (state, action) => action.payload,
//     ""
// );

export const RegistrationSuccess = handleAction(
    registrationSuccess,
    (state, action) => action.payload,
    false
);

export const RegistrationFailure = handleAction(
    registrationFailure,
    (state, action) => action.payload,
    false
);


