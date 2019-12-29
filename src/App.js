import React from 'react';
import './App.css';
import Keypad from './components/Keypad';
import ResultDisplay from './components/ResultDisplay';

// Second iteration of a react calculator with basic functionality
// programmed by Jody Richardson AKA Lex Neville

class App extends React.Component {
//set initial default state values
  state = {
    result: "0",
    n1: "",
    n2: "",
    op: "",
    inputStage: "0",
  }

//perform 
  calculate() {
//define n1 and n2 for easy use in function
    const a = this.state.n1;
    const b = this.state.n2;

    if (this.state.op === "x") {
      return this.setState({
        result: a * b,
        n1: this.state.result,
        n2: ""
      });
    }
    else if (this.state.op === "+") {
      return this.setState({
        result: parseInt(a) + parseInt(b),
        n1: this.state.result,
        n2: ""
      });
    }
    else if (this.state.op === "/") {
      return this.setState({
        result: (a / b).toFixed(2),
        n1: this.state.result,
        n2: ""
      });
    }
    else if (this.state.op === "-") {
      return this.setState({
        result: a - b,
        n1: this.state.result,
        n2: ""
      });    
    }
    console.log(this.state); 
  }
//reset state ready for new input
  reset = () => {
    this.setState({
      result: "0",
      n1: "",
      n2:"",
      op: "",
      inputStage: "0",
    })
    console.log(this.state);
  }
  
  //click event handler
  onClick = id => {
    if (id === "equals") {
      this.calculate();
      console.log(this.state);
    }

    else if (id === "C") {
      this.reset()
      console.log(this.state);
    }

    else if (id === "x") {
      this.setState({
        op: "x",
        inputStage: "n2",
        result: "x"
      });
      console.log(this.state);
    }

    else if (id === "+") {
      this.setState({
        op: "+",
        inputStage: "n2",
        result: "+"
      });
      console.log(this.state);
    }

    else if (id === "division") {
      this.setState({
        op: "/",
        inputStage: "n2",
        result: "÷"
      });
      console.log(this.state);
    }

    else if (id === "-") {
      this.setState({
        op: "-",
        inputStage: "n2",
        result: "-"
      });
      console.log(this.state);
    }
// Checks stage of operation to populate the correct state with input number 
    else {
      if (this.state.inputStage === "0") {
        this.setState({
          n1: id,
          result: id,
          inputStage: "n1"
        });
        console.log(this.state);
      }
      else if (this.state.inputStage === "n1") {
        this.setState({
          n1: this.state.result + id,
          result: this.state.result + id
        });
        console.log(this.state);
      }
      else if (this.state.inputStage === "n2") {
        this.setState({
          n2: this.state.n2 + id,
          result: this.state.n2 + id
        });
        console.log(this.state);
      }
    }
  }

//display components
  render() {
    
    console.log(this.state);

    return (
      <div id="app">
        <h1>Simple Calculator by Jody Richardson</h1>
        <div id="calc">
          <ResultDisplay result={this.state.result} />
          <Keypad onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
  
export default App;
