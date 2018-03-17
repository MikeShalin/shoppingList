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
        this.state ={db: "Нет списка продуктов"};

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
                  {title,startDate,shelfLife} = res.data;
            console.log('state',db);
            console.log('Новый продукт',res);
            console.log("При добавлении нового продукта с бэка пришел ответ",res.status);
            this.setState({
                db: [...db, {title: title, startDate: startDate, shelfLife: shelfLife}]
            });
        });
    }
    handleSubmit=(data)=>{
        console.log("Находимся в компоненте app:", data);
        socket.emit('addNewProduct',data);
    };
    handleDone=(ID,done)=>{
        socket.emit('handleDone',ID,done);
    };
    render() {
        const {db} = this.state;
        return (
            <div>
                <Form
                    onSubmit={this.handleSubmit}
                />
                <div>
                    <ul>
                        {(typeof db !== "string")?db.map((product, i)=> (
                        <Item key={product.ID}
                              ID={product.ID}
                              title={product.title}
                              startDate={product.startDate}
                              shelfLife={product.shelfLife}
                              done={product.done}
                              onChange={()=>{this.handleDone(product.ID,product.done)}}
                        />
                    )):db}
                </ul>
                </div>
            </div>
        );


    }
}

export default App;
