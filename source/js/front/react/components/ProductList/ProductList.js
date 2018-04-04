/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import socket from '../../../../connect/socket-connect/socket-connect';
import ProductForm from '../ProductForm/ProductForm';
import Item from '../Item/Item';
import {
    getProducts,addNewProduct,updateDoneRow,deleteProduct,replaceProductInForm
} from '../../actions/ProductListActions/ProductListActions.js';
import Hammer from '../../../touch/hammer.min.js';
import {Switch,Route,Link,Redirect,withRouter} from 'react-router-dom';


export class ProductList extends Component {
    componentWillMount() {
        const {getProducts} = this.props;
        socket.on("db",(res) => {
            getProducts(res);
        });
       
        socket.on("updateDoneRow",(res) => {
            const {updateDoneRow} = this.props;
            updateDoneRow(res.ID);
        });

        socket.on("addNewProduct",(res) => {
            const {ID,title,startDate,shelfLife} = res.data,
                 {addNewProduct} = this.props;
            addNewProduct({ID:ID,title: title, startDate: startDate, shelfLife: shelfLife});
        });

        socket.on("deleteProduct",(res)=>{
            console.log("deleteProduct",res.ID);
            const {deleteProduct} = this.props;
            deleteProduct(res.ID);
        });
        let main = document.getElementById("root");
        const mc = new Hammer(main);
        mc.on("pandown", function(ev) {
            console.log('wow');
            location.reload();
        });

    }
    handleSubmit=(data)=>{
        console.log("Находимся в компоненте ProductList :", data);
        socket.emit('addNewProduct',data);
    };
    handleDone=(ID,done)=>{
        socket.emit('handleDone',ID,done);
    };
    handleDelete =(ID)=>{
        socket.emit('handleDelete',ID);
        console.log("Я удаляю id:",ID);
    };
    handleEdit =(product)=>{
        const {replaceProductInForm} = this.props;
        replaceProductInForm(product);
    };
    render() {
        const {products,change} = this.props;
        console.log(products);
        return (
            <div>
                <ProductForm
                    onSubmit={this.handleSubmit}
                    changeProductParams={change}
                />
                <div>
                    <ul className="product-list">
                        {products?products.map((product, i)=> (
                        <Item key={product.ID}
                              ID={product.ID}
                              title={product.title}
                              startDate={product.startDate}
                              shelfLife={product.shelfLife}
                              done={product.done}
                              onDelete={()=>this.handleDelete(product.ID)}
                              onChange={()=>{this.handleDone(product.ID,product.done)}}
                              onEdit={()=>{this.handleEdit(product)}}
                        />
                    )):products}
                </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log("mapStateToProps",state);
    return{
        products:state.products,
        // change:state.productList.change
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
        updateDoneRow: (ID) => {
            dispatch(updateDoneRow(ID));
        },
        deleteProduct: (ID) => {
            dispatch(deleteProduct(ID));
        }
    }
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProductList));
