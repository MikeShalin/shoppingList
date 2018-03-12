/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';
import socket from '../socket-connect/socket-connect';

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
        const list = this.state.db;
        console.log("render ",list);
        return (typeof list !== "string")?<ul>
            {
                list.map((product, i)=> {
                    <li>
                    <span>
                        <strong>{product.title}</strong>
                    </span>
                        <div>{product.startDate}</div>
                        <div>{product.shelfLife}</div>
                    </li>
                })
            }
        </ul>:list;
    }
}

export default App;
