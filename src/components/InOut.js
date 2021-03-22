import React from 'react';

class InOut extends React.Component{
    constructor(props){
        super();

    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header text-white bg-dark ">
                                Event Example
                            </div>
                            <div className="row">
                                <div className="col">
                                <div className="card-body">
                                <div>
                                    <button className="btn btn-success btn-sm">Good Morning</button>
                                </div>
                                </div>
                                </div>

                                <div className="col">
                                <div className="card-body">
                                <div>
                                    
                                      
                                </div>
                                </div>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InOut;