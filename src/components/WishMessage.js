import React from 'react';

class WishMessage extends React.Component{
    constructor(porps){
        super();
    }
    render(){
        return(
            <div>
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}
export default WishMessage;