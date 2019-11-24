import React, { Component } from 'react'

class ResultDisplay extends Component {

//Calculator display component

    render() {
        let { result,} = this.props;
        return (
            <div id="result">
                <p>{result}</p>
            </div>
        )
    };
}

export default ResultDisplay;
