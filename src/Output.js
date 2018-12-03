import React, { Component } from 'react';
import './App.css';

class Output extends Component {
  toFeet(n){
    let realFeet = ((n*0.393700)/ 12);
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet - feet) * 12);
    return feet + "'"+inches;
  }
  toLbs(kg){
    var nearExact = kg/0.45359237;
    var lbs = Math.floor(nearExact);
    return lbs;
  }
  render() {
    let height = this.toFeet(this.props.data.height);
    let weight = this.toLbs(this.props.data.weight);
    let bmi = this.props.data.bmi;
    let bmiClass = this.props.data.bmiClass;
    return (
      <div className="output">
        <h3>Height: {height}</h3>
        <h3>Weight : {weight} lbs</h3>
        <h3>BMI : {bmi}</h3>
        <h3 className ={(this.props.data.bmiClass === "Obese")?"danger":""}>{bmiClass} {(this.props.data.bmiClass === "Obese") ? <a href='http://someproductsite.com'>Need guidance?</a> : ""}</h3>
      </div>
    );
  }
}

export default Output;
