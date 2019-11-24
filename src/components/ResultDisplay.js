import React, { Component } from 'react'

class ResultDisplay extends Component {

//Calculator display component

    render() {
        let { result,} = this.props;
        return (
            <div id="result">
                <p id="displayDigits" >{result}</p>
            </div>
        )
    };
}

export default ResultDisplay;
