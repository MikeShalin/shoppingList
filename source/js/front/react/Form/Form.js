/**
 * Created by mike on 12.03.18.
 */
import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            startDate: '',
            shelfLife: ''
        };

    }

    handleChange = (e)=> {
        const name = e.target.name,
            value = e.target.value;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
            const {onSubmit} = this.props;
            onSubmit(this.state);
            this.setState({
                title: '',
                startDate: '',
                shelfLife: ''
            });
    };

    render() {
        const {title, startDate, shelfLife} = this.state;
        
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <p>
                    <label className="label">
                        Название продукта:
                        <input type="text"
                               name="title"
                               value={title}
                               onChange={this.handleChange}/>
                    </label>
                </p>
                <p>
                    <label className="label">
                        Дата покупки:
                        <input type="text"
                               name="startDate"
                               value={startDate}
                               onChange={this.handleChange}
                               placeholder="дд-мм"
                        />
                    </label>
                </p>
                <p>
                    <label className="label">
                        Примерный срок употребление (через сколько суток нужно
                        оповестить о том что нужно купить снова):
                        <input type="text"
                               name="shelfLife"
                               value={shelfLife}
                               onChange={this.handleChange}/>
                    </label>
                </p>
                <input type="submit" value="Submit" disabled={(this.state.title === '') || (this.state.startDate === '') || (this.state.shelfLife === '')}/>
            </form>
        );
    }

}

export default Form;

