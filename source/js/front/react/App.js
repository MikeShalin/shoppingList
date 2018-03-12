/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';
import socket from '../socket-connect/socket-connect';
import Form from './Form';

var db = {};


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
    render() {
        const {db} = this.state;
        console.log("render ",list);
        return (
            <div>
                <Form/>
                <div>
                    <ul>
                        {(typeof db !== "string")?list.map((product, i)=> (
                    <li key={product.ID}>
                    <span>
                        <strong>{product.title}</strong>
                    </span>
                        <div>{product.startDate}</div>
                        <div>{product.shelfLife}</div>
                    </li>)):db}
                </ul>
                </div>
            </div>
        );


    }
}

export default App;
