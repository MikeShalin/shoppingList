/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';
import socket from '../socket-connect/socket-connect';

var db = {};

// let promise = new Promise((resolve, reject) => {
//     socket.on("db",(res) => {
//         console.log(res);
//         resolve(res);
//     });
// });
//
// promise
//     .then(
//         result => {
//             console.log("все хорошо ",result);
//             db = result;
//         },
//         error => {
//             console.log("все плохо ",error);
//             db = error;
//         }
//     );

class App extends Component {
    state = {
        db:"Нет продуктов в списке"
    };
    constructor(props) {
        super(props);
        socket.on("db",(res) => {
            console.log("В реакте",res);
            this.setState({
                db: res
            });
        });
    }


    render() {
        const list = this.state.db;
        return <ul>
            {
                (typeof list !== "string")?list.map((product,i)=>{
                <li>
                    <span>
                        <strong>{console.log(product.title)}</strong>
                    </span>
                    <div>{product.startDate}</div>
                    <div>{product.shelfLife}</div>
                </li>
            }):list}
        </ul>;
    }
}

export default App;
