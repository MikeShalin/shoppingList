/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editFormField,formReset} from '../../actions/Form/FormActions.js';

export class ProductForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            product:''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit(this.state);
        this.setState({
            product:''
        });
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    };

    render() {
        const {form} = this.props,
              {product} = this.state;
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h2 className="form__title">List of products</h2>
                   <div className="form__container">
                       <input type="text"
                              name="product"
                              value={product}
                              onChange={this.handleChange}
                              placeholder="Product name"
                              className="form__input"
                       />
                       <input
                           type="submit"
                           value="Add"
                           disabled={product === ''}
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
