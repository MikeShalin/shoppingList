/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';
import socket from '../socket-connect/socket-connect';
import Form from './Form';
import Item from './Item';

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
            console.log("В реакте поменяли стейт",this.state.db);
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
    }
    handleDone=(ID,done)=>{
        socket.emit('handleDone',ID,done);
        console.log("КЛикнули по элементу",!done);
    };
    render() {
        const {db} = this.state;
        console.log("render ",db);
        return (
            <div>
                <Form/>
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
