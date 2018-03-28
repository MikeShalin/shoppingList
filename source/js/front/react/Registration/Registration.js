/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';


export class Registration extends Component{
    handleSubmit = () =>{
      console.log("Компонент Registration отправка формы")
    };
    render(){
        return (
            <form className="form" >
                <h2 className="form__title">лол</h2>
                <div className="form__container">
                    <input type="email"
                           name="email"
                           // value={title}
                           // onChange={this.handleChange}
                           placeholder="email"
                           className="form__input"
                    />
                    <input type="password"
                           name="password"
                        // value={title}
                        // onChange={this.handleChange}
                           placeholder="password"
                           className="form__input"
                    />
                    <input
                        type="submit"
                        value="Sign Up"
                        // disabled={title === ''}
                        className="form__submit"
                    />
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        auth:state.auth
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        // getProductList: (productList) => {
        //     dispatch(getProductList(productList));
        // },
        // addNewProduct: (product) => {
        //     dispatch(addNewProduct(product));
        // },
        // handleEdit: (product) => {
        //     dispatch(handleEdit(product));
        // },
        // updateDoneRow: (ID) => {
        //     dispatch(updateDoneRow(ID));
        // },
        // deleteProduct: (ID) => {
        //     dispatch(deleteProduct(ID));
        // }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Registration);
