import React, { Component } from 'react'

export default class Action extends Component {
    callMe(){
        
        alert("yahoo");
    }
    render(){
        
        return(
            <div>
            <button disabled = {!this.props.hasOption} onClick={this.callMe}>Call Me</button>
            </div>
        );
    }
}