/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormActions from '../../actions/Form/FormActions.js';

export class ProductForm extends Component {

    handleChange = (e)=> {
        const name = e.target.name,
            value = e.target.value,
            {editFormField} = this.props;
        editFormField(name,value);
    };

    handleSubmit = (e) => {
        e.preventDefault();
            const {onSubmit,formReset} = this.props;
        // console.log(formReset);
            onSubmit(this.props.form);
        formReset();
    };

    render() {
        console.log('d форме',this.props.form);
        const {title} = this.props.form;
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h2 className="form__title">List of products</h2>
                   <div className="form__container">
                       <input type="text"
                              name="title"
                              value={title}
                              onChange={this.handleChange}
                              placeholder="Product name"
                              className="form__input"
                       />
                       <input
                           type="submit"
                           value="Add"
                           disabled={title === ''}
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
    const {editFormField,formReset,updateDoneRow,handleEdit} = FormActions;
    return {
        editFormField: (name,value) => {
            dispatch(editFormField(name,value));
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
