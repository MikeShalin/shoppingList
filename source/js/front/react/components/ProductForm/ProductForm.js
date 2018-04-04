/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editFormField,formReset} from '../../actions/Form/FormActions.js';

export class ProductForm extends Component {

    handleChange = (e)=> {
        const value = e.target.value,
            {editFormField} = this.props;
        editFormField(value);
    };

    handleSubmit = (e) => {
        e.preventDefault();
            const {onSubmit,formReset,form} = this.props;
        console.log('Перед отправкой формы ',form);
        onSubmit(form);
        formReset();
    };

    render() {
        console.log('d форме',this.props.form);
        const {form} = this.props;
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h2 className="form__title">List of products</h2>
                   <div className="form__container">
                       <input type="text"
                              name="title"
                              value={form}
                              onChange={this.handleChange}
                              placeholder="Product name"
                              className="form__input"
                       />
                       <input
                           type="submit"
                           value="Add"
                           disabled={form === ''}
                           className="form__submit"
                       />
                   </div>
            </form>
        );
    }

}

const mapStateToProps = (state) =>{
    return{
        form:state.form
    }
};


const mapDispatchToProps = (dispatch) =>{
    return {
        editFormField: (value) => {
            dispatch(editFormField(value));
        },
        formReset: () => {
            dispatch(formReset());
        }
        // handleEdit: (product) => {
        //     dispatch(handleEdit(product));
        // },
        // updateDoneRow: (product) => {
        //     dispatch(updateDoneRow(product));
        // }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductForm);
