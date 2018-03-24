/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';
import socket from '../../socket-connect/socket-connect';
import Form from '../Form/Form';
import Item from '../Item/Item';

class App extends Component {

    constructor(props) {
        super(props);
        this.state ={
            db: "Нет списка продуктов",
            change:{}
        };

    }
    componentWillMount() {
        socket.on("db",(res) => {
            this.setState({
                db: res
            });
        });
        socket.on("updateDoneRow",(res) => {
            const {db} = this.state;
            let newState = {},
                newProduct = {};
            if(res.status === "ok"){
                newProduct = db.filter(product => (
                    (product.ID === res.ID)?product:false
                ));
                newProduct = newProduct[0];
                newProduct.done = !newProduct.done;
                newState = db.map(product => ((product.ID !== res.ID)?product:false));
                newState = db.map(product => (product));
                this.setState({
                    db: newState
                });
            }
        });

        socket.on("addNewProduct",(res) => {
            const {db} = this.state,
                  {ID,title,startDate,shelfLife} = res.data;
            console.log('state',db);
            console.log('Новый продукт',res);
            console.log("При добавлении нового продукта с бэка пришел ответ",res.status);
            this.setState({
                db: [...db, {ID:ID,title: title, startDate: startDate, shelfLife: shelfLife}]
            });
        });

        socket.on("deleteProduct",(res)=>{
            const {db} = this.state,
                ID = res.ID;
            let newState;
            newState = db.filter(product => (
                (product.ID !== ID)?product:false
            ));
            console.log("Все продукты",newState);

            console.log("ID",ID);
            this.setState({db:newState});
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
    handleEdit =(params)=>{
        this.setState({
            change:params
        });
    };
    render() {
        const {db,change} = this.state;
        return (
            <div>
                <Form
                    onSubmit={this.handleSubmit}
                    changeProductParams={change}
                />
                <div>
                    <ul className="product-list">
                        {(typeof db !== "string")?db.map((product, i)=> (
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
                    )):db}
                </ul>
                </div>
            </div>
        );


    }
}

export default App;
