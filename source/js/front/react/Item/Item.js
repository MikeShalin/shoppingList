/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';
import Hammer from '../../touch/hammer.min.js';

class Item extends Component {

    componentDidMount() {
        const{ID,onDelete}=this.props;
        let element = document.getElementById("item_list_" + ID);
            const mc = new Hammer(element);
            mc.on("swipeleft", function(ev) {
                onDelete(ID);
            });
    }
    handleDone =()=>{
        const {onChange} = this.props;
        onChange();
    };


    render(){
        const{title,done,ID,onDelete,onEdit}=this.props;
        return (
            <li className="Item" onClick={()=>{onEdit(title,done,ID)}} id={"item_list_" + ID}>
                {/* <input id={ID} onChange={this.handleDone} type="checkbox" checked={done}/>*/}
                <label htmlFor={ID}>{title}</label>
                <span onClick={onDelete} className="Item__close">×</span>
            </li>
        )
    }
}

export default Item;

