import React, { Component } from 'react';
import './App.css';
import Range from './Range';
import Output from './Output';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      height : 170,
      weight : 65,
      bmi : 22.49,
      bmiClass : 'Normal'
    }
  }
  heightChange(height){
    this.setState({
      height:height
    },this.setBmi);
  }
  weightChange(weight){
    this.setState({
      weight:weight
    },this.setBmi);
  }
  setBmi(){
    let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);
    this.setState({
      bmi:bmi,
      bmiClass:this.getBmiClass(bmi)},
      function(){
        console.log(this.state);
      });
  }
  /*

BMI Categories:
Underweight = <18.5
Normal weight = 18.5–24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater*/
  getBmiClass(bmi){
    if(bmi<= 18.5){
      return 'Underweight';
    }
    else if(bmi > 18.5 && bmi <=24.9){
        return 'Normal';
    }
    else if(bmi>24.9 && bmi <=29.9){
          return 'Overweight';
        }
    else{
          return 'Obese';
    }
  }
  render() {
    return (
      <div className="App">
        <div className="box">
        <h1>BMI Calcular</h1>
        <form>
        Height : <br/>
        <Range onChange ={this.heightChange.bind(this)}/>
        Weight :<br/>
        <Range onChange ={this.weightChange.bind(this)}/>
      </form>
            <Output data = {this.state}/>
      </div>
      </div>
    );
  }
}

export default App;
