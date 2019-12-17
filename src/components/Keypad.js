import React, { Component } from 'react'

class Keypad extends Component {


    render() {

        return (
            <div id="keypadButtons" >
                <button id="clear" onClick={(e) => this.props.onClick(e.target.id)}>C</button>
                <button id="division" className="op" onClick={(e) => this.props.onClick(e.target.id)}>÷</button>
                <button id="seven" onClick={(e) => this.props.onClick(e.target.id)}>7</button>
                <button id="eight" onClick={(e) => this.props.onClick(e.target.id)}>8</button>
                <button id="nine" onClick={(e) => this.props.onClick(e.target.id)}>9</button>
                <button id="minus" className="op" onClick={(e) => this.props.onClick(e.target.id)}>-</button>
                <button id="four" onClick={(e) => this.props.onClick(e.target.id)}>4</button>                
                <button id="five" onClick={(e) => this.props.onClick(e.target.id)}>5</button>
                <button id="six" onClick={(e) => this.props.onClick(e.target.id)}>6</button>
                <button id="multiply" className="op" onClick={(e) => this.props.onClick(e.target.id)}>x</button>
                <button id="one" onClick={(e) => this.props.onClick(e.target.id)}>1</button>
                <button id="two" onClick={(e) => this.props.onClick(e.target.id)}>2</button>
                <button id="three" onClick={(e) => this.props.onClick(e.target.id)}>3</button>
                <button id="plus" className="op" onClick={(e) => this.props.onClick(e.target.id)}>+</button>
                <button id="decimal" onClick={(e) => this.props.onClick(e.target.id)}>.</button>
                <button id="zero" onClick={(e) => this.props.onClick(e.target.id)}>0</button>
                <button id="equals" className="op" onClick={(e) => this.props.onClick(e.target.id)}>=</button>
            </div>
        )
    };
}

export default Keypad