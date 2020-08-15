import React, { Component } from 'react'

export default class Option extends Component {
    render(){
        return(
            <div>{this.props.data}
            <button onClick = {(e) =>{
                {this.props.hd(this.props.data)}
                console.log(this.props.data);
            }}>delete</button></div>
            
        );
    }
}