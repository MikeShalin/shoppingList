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
        const{title,startDate,shelfLife,done}=this.props;
        console.log("Я нахожусь в компоненте item чекнут ли",done)
        return (
            <li>
                <input onChange={this.handleDone} type="checkbox" checked={done}/>
                    <span>
                        <strong>{title}</strong>
                    </span>
                <div>{startDate}</div>
                <div>{shelfLife}</div>
            </li>
        )
    }
}

export default Item;

