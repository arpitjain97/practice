import React, { Component } from 'react'
import Option from './Option';
export default class Options extends Component {
    render(){
        return(
            <div>
            <button onClick = {this.props.hdo}>delete all</button>
            {this.props.optionData.map((option) => <Option key ={option} data = {option} hd = {this.props.ho}/>)}
            </div>
            
        );
    }
}