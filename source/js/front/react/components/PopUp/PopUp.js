/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';

class PopUp extends Component{
    render(){
        return (
            <h2 >
                {this.props.children}
            </h2>
        );
    }

}

export default PopUp;