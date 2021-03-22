  
import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import { Fragment } from 'react';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
          <Fragment>
            <nav className="navbar navbara-nav navbar-expand-sm navbar-dark bg-dark">
              <a href="/" className="navbar-brand">Calculator Application</a>
            </nav>
            <div className="container mt-4">
                <div className="calculator-body">
                    <div className="result-output">
                    <ResultComponent result={this.state.result}/>
                    </div>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default App;