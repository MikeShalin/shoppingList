import {editFormField,formReset} from 'js/front/react/actions/Form/FormActions.js';
import {handleAction, handleActions} from 'redux-actions';

const Form = handleAction(
    editFormField,
    (state, action) => action.payload,
    ""
);

export default Form;

