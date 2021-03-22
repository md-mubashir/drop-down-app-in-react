import React from 'react';

class Binding extends React.Component{
    constructor(props){
        super();
        this.state={
            username : ''
        }
    }
    updateChange = (event)=>{
        this.setState({
            username : event.target.value
        })
    }
    render(){
        return(
            <div style={{ 'textAlign' : 'center' }}>
                <div>
                    <input type="text" value={this.state.username} onChange={this.updateChange} placeholder="Enter user name" />
                </div>
                <div>
                    <span>{ this.state.username }</span>
                </div>
            </div>
        )
    }
}
export default Binding;