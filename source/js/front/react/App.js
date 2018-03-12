/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';
import socket from '../socket-connect/socket-connect';

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
            console.log("В реакте поменяли стейт",res);
        });
    }
    render() {
        const {db} = this.state;
        console.log("render ",db);
        return (typeof db !== "string")?<ul>
            {
                db.map(product=> (
                    <li key={product.ID}>
                        <span>
                            <strong>{product.title}</strong>
                        </span>
                            <div>{product.startDate}</div>
                            <div>{product.shelfLife}</div>
                    </li>
                ))
            }
        </ul>:db;
    }
}

export default App;
