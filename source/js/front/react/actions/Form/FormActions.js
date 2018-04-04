/**
 * Created by mike on 24.03.18.
 */
import {createActions} from 'redux-actions';

export const {
    editFormField: editFormField,
    formReset: formReset,
} = createActions({

    EDIT_FORM_FIELD: value => value,

    FORM_RESET: undefined,

});
