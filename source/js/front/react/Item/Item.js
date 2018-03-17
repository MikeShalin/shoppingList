/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';

class Item extends Component {
    handleDone=()=>{
        const {onChange} = this.props;
        onChange();
    };
    render(){
        const{title,startDate,shelfLife,done,ID}=this.props;
        return (
            <li>
                <input id={ID} onChange={this.handleDone} type="checkbox" checked={done}/>
                <label htmlFor={ID}>{title}</label>
                <div>{startDate}</div>
                <div>{shelfLife}</div>
            </li>
        )
    }
}

export default Item;

