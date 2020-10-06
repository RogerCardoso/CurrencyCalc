import React from 'react';

import './converter.styles.scss';
import Calculator from '../calculator/calculator.component.jsx'

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isLoaded: false,
            amount: 0,
            currency: "USD",
            currencyRate: 1,
            convertTo: "USD"
        };
    }
    componentDidMount() {
        fetch('https://api.exchangerate-api.com/v4/latest/USD')
        .then( response => response.json())
        .then(obj => this.setState({rates: obj.rates, isLoaded: true}));
        
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({formReady: true});
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }
    render() {
        if(this.state.isLoaded) {
            return(
                <div className="component-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-div">
                            <input
                                name="amount"
                                value={this.state.amount}
                                type="number"
                                min="0.01"
                                step="0.01"
                                placeholder="1000"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="input-div">
                            <select
                                name="currency"
                                type="select"                            
                                value={this.state.currency}
                                onChange={this.handleChange}>
                                {Object.keys(this.state.rates).map((key) => {
                                    return <option currency={key}>{key}</option>;
                                })}
                            </select>                            
                        </div>
                        <div className="input-div">
                            <p>convert to</p>
                        </div>
                        <div className="input-div">
                            <select
                                name="convertTo"
                                type="select"                            
                                value={this.state.convertTo}
                                onChange={this.handleChange}>
                                <option value="EUR">EUR</option>
                                <option value="USD">USD</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </div>
                        <button className="button" type="submit">Convert</button>
                    </form>
                    <Calculator calc={this.state}/>
                    
                </div>
            )
        } else {
            return(<div><h1>Loading...</h1></div>)
        }
    }
}

export default Converter;