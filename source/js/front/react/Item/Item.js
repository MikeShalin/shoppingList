/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';

class Item extends Component {
    handleDone =()=>{
        const {onChange} = this.props;
        onChange();
    };

    render(){
        const{title,startDate,shelfLife,done,ID,onDelete,onEdit}=this.props;
        return (
            <li className="Item" onClick={onEdit}>
                <input id={ID} onChange={this.handleDone} type="checkbox" checked={done}/>
                <label htmlFor={ID}>{title}</label>
                <span onClick={onDelete} className="Item__close">X</span>
                <div>{startDate}</div>
                <div>{shelfLife}</div>
            </li>
        )
    }
}

export default Item;

