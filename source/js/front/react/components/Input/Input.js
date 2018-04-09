/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';

class Input extends Component {

    render(){
        const{type,name,value,onChange,placeholder}=this.props;
        return (
            <input type={type}
                   name={name}
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder}
                   className="form__input"
            />
        )
    }
}

export default Input;

