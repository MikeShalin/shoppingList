import {formReset,editFormField} from '../../actions/Form/FormActions.js';


const FormMiddleware = store => next => action => {
    if (
        action.type === formReset.toString()
    ) {

        store.dispatch(editFormField(undefined));
    }
    return next(action);
};

export default FormMiddleware;