import React from 'react';

import './calculator.styles.scss';

class Calculator extends React.Component {
    getResults() {
        const entries = Object.entries(this.props.calc.rates);
        let result = 0;
        let eur = 0;
        let gbp = 0;
        for (const [rate, value] of entries) {
            if(rate === 'EUR') {
                eur = value;
            }
            if(rate === 'GBP') {
                gbp = value;
            }
            if(rate === this.props.calc.currency) {
                result = (this.props.calc.amount / value);
            }            
        }
        switch(this.props.calc.convertTo) {
            case 'USD':
                return result;
            case 'EUR':
                return (result * eur);
            case 'GBP':
                return (result * gbp);
            default:
                return result;
        }

    }
    render() {
        if(this.props.calc.formReady) {
            return (
                <div className="calculator">
                    <p>{this.props.calc.amount} {this.props.calc.currency} = {this.getResults()} {this.props.calc.convertTo}</p>
                </div>
            )
        } else {
            return(
                <div className="calculator">
                    <p></p>
                </div>
            )
        }
    }
}

export default Calculator