import React, { Component } from 'react'

export default class Header extends Component {
    render(){
        return(
            <div>Welcome to Header
            {this.props.data}
            </div>
            
        );
    }
}