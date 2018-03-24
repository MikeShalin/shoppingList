/**
 * Created by mike on 24.03.18.
 */
export const Form = {
    editFormField: (name,value)=> {
        return {
            type: 'EDIT_FORM_FIELD',
            payload: {
                field_name: name,
                field_value: value
            }
        }
    },
    formReset: ()=> {
        return {
            type: 'FORM_RESET'
        }
    }
};
export default Form;