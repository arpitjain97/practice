import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Options from './Options';
import Action from './Action';
import AddOption from './AddOption';
import Counter from './Counter';


export default class MyComponent extends Component{
    constructor(props){
        super(props);
        this.hanDeleteOptions = this.hanDeleteOptions.bind(this);
        this.handelAdd = this.handelAdd.bind(this);
        this.handleone = this.handleone.bind(this);
        this.state = {
             options : []
        }
    }
    hanDeleteOptions(){
        this.setState(() =>{
            return {
            options: [],
        }
        })
    }
    handleone(data){
        this.setState((prevState) =>{
            return {options: prevState.options.filter((option) => option!==data)}
            
        })
        
    }
    handelAdd(option){
        if(!option){
            
            return 'enter valid data'
        }
        else if(this.state.options.indexOf(option)>-1){
            
            return 'already added'
        }
        this.setState((prevState) =>{
            return {
                options: prevState.options.concat(option),
            }
        });
    }
    render(){
        
                return(
            <div className="App">
            <Header data = "or bhai kese ho?"/>
                <p>Child</p>
                
                <Options optionData = {this.state.options} hdo = {this.hanDeleteOptions} ho ={this.handleone}/>
                {/* <Counter/> */}
                <Action hasOption = {this.state.options.length > 0}/>
                <AddOption had = {this.handelAdd}/>
            <Footer/>
            </div>
            
        );
    }
}