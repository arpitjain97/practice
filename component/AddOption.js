import React, { Component } from 'react'

export default class AddOption extends Component {
    constructor(props){
        super(props);
        this.callme = this.callme.bind(this);
    }
    callme(e){
        e.preventDefault();
        const data = e.target.elements.uname.value;
        const newdata =this.props.had(data);
        e.target.elements.uname.value = '';
    }
    render(){
        return(
            <div>
                <form onSubmit={this.callme}>
                Name: <input type="text" name = "uname" />
                    <button>add</button>
                </form>
            </div>
        );
    }
}