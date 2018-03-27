/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import socket from '../../socket-connect/socket-connect';
import Form from '../Form/Form';
import Item from '../Item/Item';
import AppActions from '../actions/App/AppActions.js';
import Hammer from '../../touch/hammer.min.js';


export class App extends Component {
    componentWillMount() {
        const {getProductList} = this.props;
        socket.on("db",(res) => {
            getProductList(res);
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
        let element = document.getElementById("root");
        const mc = new Hammer(element);
        mc.on("swipedown", function(ev) {
            location.reload();
        });

    }
    handleSubmit=(data)=>{
        console.log("Находимся в компоненте app:", data);
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
        const {handleEdit} = this.props;
        handleEdit(product);
    };
    render() {
        const {productList,change} = this.props;


        return (
            <div>
                <Form
                    onSubmit={this.handleSubmit}
                    changeProductParams={change}
                />
                <div>
                    <ul className="product-list">
                        {(typeof productList !== "string")?productList.map((product, i)=> (
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
                    )):productList}
                </ul>
                </div>
            </div>
        );


    }
}

const mapStateToProps = (state) =>{
    return{
        productList:state.app.productList,
        change:state.app.change
    }
};

const mapDispatchToProps = (dispatch) =>{
    const {getProductList,addNewProduct,updateDoneRow,handleEdit,deleteProduct} = AppActions;
    return {
        getProductList: (productList) => {
            dispatch(getProductList(productList));
        },
        addNewProduct: (product) => {
            dispatch(addNewProduct(product));
        },
        handleEdit: (product) => {
            dispatch(handleEdit(product));
        },
        updateDoneRow: (ID) => {
            dispatch(updateDoneRow(ID));
        },
        deleteProduct: (ID) => {
            dispatch(deleteProduct(ID));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);