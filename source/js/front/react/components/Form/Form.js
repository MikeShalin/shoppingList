/**
 * Created by mike on 28.03.18.
 */
import React, {Component} from 'react';
import Input from 'js/front/react/components/Input/';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            login:"",
            password:""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {handleSubmit} = this.props;
        handleSubmit(this.state);
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    };

    render(){
        const {login,password} = this.state,
              {submitValue,title} = this.props;
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h2 className="form__title">{title}</h2>
                <div className="form__container">
                    <Input
                        type="email"
                        name="login"
                        value={login}
                        onChange={this.handleChange}
                        placeholder="email"
                    />

                    <Input type="password"
                           name="password"
                           value={password}
                           onChange={this.handleChange}
                           placeholder="password"
                           className="form__input"
                    />
                    <input
                        type="submit"
                        value={submitValue}
                        className="form__submit"
                    />
                </div>
            </form>
    );
    }
}

export default Form;