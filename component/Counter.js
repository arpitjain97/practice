import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
        this.reset = this.reset.bind(this);
     
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        console.log("component is ready");
    }
    componentDidUpdate(){
        console.log("component updated");
    }
    inc(){
        this.setState((prevState) =>{
            return {
                count: prevState.count + 1
            }
        })
        
        console.log(this.state);
        // alert("Calling Increment function");
    }
    dec(){
        this.setState((prevState) =>{
            return {
                count: prevState.count - 1
            }
        })
        console.log(this.state);
        // alert("Calling Decrement function");
    }
    reset(){
        this.setState((prevState) =>{
            return {
                count: 0
            }
        })
        console.log(this.state);
        // alert("Calling Reset function");
    }
    render(){
        return(
            <div>
            Count: {this.state.count}
                <button onClick={this.inc}>Inc</button>
                <button onClick={this.dec}>Dec</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}