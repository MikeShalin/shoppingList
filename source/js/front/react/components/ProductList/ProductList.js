/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import socket from '../../../../connect/socket-connect/socket-connect';
import ProductForm from '../ProductForm/ProductForm';
import Item from '../Item/Item';
import {
    getProducts,
    addNewProduct,
    updateDoneRow,
    deleteProduct,
    replaceProductInForm,
    requestProducts,
    deleteProductSocket
} from '../../actions/ProductListActions/ProductListActions.js';
import Hammer from '../../../touch/hammer.min.js';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';

export class ProductList extends Component {
    componentDidMount(){
        const {getProducts,requestProducts} = this.props;
        requestProducts();

    }
    componentWillMount() {
        socket.on("deleteProduct",(res)=>{
            const {deleteProductSocket} = this.props;
            deleteProductSocket(res.ID);
        });
        let main = document.getElementById("root");
        const mc = new Hammer(main);
        mc.on("pandown", function(ev) {
            location.reload();
        });
    }
    handleSubmit=(data)=>{
        const {addNewProduct} = this.props;
        addNewProduct(data);
    };
    handleDelete =(ID)=>{
        const {deleteProduct} = this.props;
        deleteProduct(ID);
    };
    handleEdit =(product)=>{
        const {replaceProductInForm} = this.props;
        replaceProductInForm(product);
    };
    render() {
        const {Products} = this.props;
        return (
            <div>
                <ProductForm
                    onSubmit={this.handleSubmit}
                />
                <div>
                    <ul className="product-list">
                        {Products.map((product, i)=> (
                            <Item key={i}
                                  ID={product.ID}
                                  title={product.title}
                                  startDate={product.startDate}
                                  shelfLife={product.shelfLife}
                                  done={product.done}
                                  onDelete={()=>this.handleDelete(product.ID)}
                                  onChange={()=>{this.handleDone(product.ID,product.done)}}
                                  onEdit={()=>{this.handleEdit(product)}}
                            />
                        ))}
                </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        Products:state.Products,
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        getProducts: (productList) => {
            dispatch(getProducts(productList));
        },
        addNewProduct: (product) => {
            dispatch(addNewProduct(product));
        },
        replaceProductInForm: (product) => {
            dispatch(replaceProductInForm(product));
        },
        deleteProductSocket: (ID) => {
            dispatch(deleteProductSocket(ID));
        },
        deleteProduct: (ID) => {
            dispatch(deleteProduct(ID));
        },
        requestProducts: () => {
            dispatch(requestProducts());
        }
    }
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProductList));
