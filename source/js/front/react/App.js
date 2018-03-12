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
    }
    handleDone=(ID)=>{
        socket.emit('handleDone',ID);
        console.log("КЛикнули по элементу",ID);
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
                              title={product.title}
                              startDate={product.startDate}
                              shelfLife={product.shelfLife}
                              done={product.done}
                              onChange={()=>{this.handleDone(product.ID)}}
                        />
                    )):db}
                </ul>
                </div>
            </div>
        );


    }
}

export default App;
