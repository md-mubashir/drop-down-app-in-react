import React from 'react';

class Selection extends React.Component{
    constructor(){
        super();
        this.state={
            option : ''
        }
        this.state={
            options : ''
        }
        
    }

    updateChange = (event) =>{
        this.setState({
            option : event.target.value
        })
    }
    crateInput = (e)=>{
        var number = e.target.value
        var box = document.getElementById('box');

        for( var i=0; i<number; i++){
            box.appendChild(document.createElement("input"));
           
        }
        this.setState({
            options : this.crateInput
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    Selection Example
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <select className="form-control" onChange={this.updateChange}>
                                                    <option>Select Option</option>
                                                    <option value="angular">Anguar</option>
                                                    <option value="react">React JS</option>
                                                    <option value="vue">Vue Js</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {
                                            this.state.option === 'angular' ? 
                                            <React.Fragment>
                                                <input type="text" value={this.state.option} />
                                            </React.Fragment> : this.state.option === 'react' ?
                                            <React.Fragment>
                                                <input type="text" value={this.state.option} />
                                            </React.Fragment>: this.state.option === 'vue' ?
                                            <React.Fragment>
                                                <input type="text" value={this.state.option} />
                                            </React.Fragment>: null
                                            
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    Generate Numbers
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <select className="form-control" onChange={this.crateInput}>
                                                    <option>Select Number</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="col">
                                           {this.state.options}
                                           <div className="box" id="box">

                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                    
                </div>

            </React.Fragment>
        )
    }


}
export default Selection;

