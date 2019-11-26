import React, { Component } from 'react'

class Keypad extends Component {


    render() {

        return (
            <div id="keypadButtons" >
                <button id="C" onClick={(e) => this.props.onClick(e.target.id)}>C</button>
                <button id="/" className="op" onClick={(e) => this.props.onClick(e.target.id)}>÷</button>
                <button id="-" className="op" onClick={(e) => this.props.onClick(e.target.id)}>-</button>
                <button id="x" className="op" onClick={(e) => this.props.onClick(e.target.id)}>x</button>
                <button id="7" onClick={(e) => this.props.onClick(e.target.id)}>7</button>
                <button id="8" onClick={(e) => this.props.onClick(e.target.id)}>8</button>
                <button id="9" onClick={(e) => this.props.onClick(e.target.id)}>9</button>
                <button id="4" onClick={(e) => this.props.onClick(e.target.id)}>4</button>                
                <button id="5" onClick={(e) => this.props.onClick(e.target.id)}>5</button>
                <button id="6" onClick={(e) => this.props.onClick(e.target.id)}>6</button>
                <button id="+" className="op" onClick={(e) => this.props.onClick(e.target.id)}>+</button>
                <button id="1" onClick={(e) => this.props.onClick(e.target.id)}>1</button>
                <button id="2" onClick={(e) => this.props.onClick(e.target.id)}>2</button>
                <button id="3" onClick={(e) => this.props.onClick(e.target.id)}>3</button>
                <button id="equals" className="op" onClick={(e) => this.props.onClick(e.target.id)}>=</button>
                <button id="." onClick={(e) => this.props.onClick(e.target.id)}>.</button>
                <button id="0" onClick={(e) => this.props.onClick(e.target.id)}>0</button>
            </div>
        )
    };
}

export default Keypad