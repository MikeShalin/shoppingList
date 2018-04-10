/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';

class PopUp extends Component{
    render(){
        const {isError} = this.props;
        return (
            <h2 className={isError?"Popup--error":""}>
                {this.props.children}
            </h2>
        );
    }

}

export default PopUp;