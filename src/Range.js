import React, { Component } from 'react';
import './App.css';
import './range.css';
import propTypes from 'prop-types';

class Range extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:160
    }
  }

  static defaultProps ={
    min:0,
    max:300,
    step:1
  }
  onChange(e){
    e.preventDefault();
    this.props.onChange(this.state.value);
    this.setState({
      value:e.target.value
    },function(){
      console.log("onchange: range");
      console.log(this.state);
    });
  }
  render() {
    return (
      <div className="App">
        <input type="range"
            min = {this.props.min}
            max = {this.props.max}
            step = {this.props.step}
            onChange = {this.onChange.bind(this)}
        />
        <br/>
      </div>
    );
  }
}

/*Range.propTypes ={
  min :React.propTypes.number.isRequired,
  max :React.propTypes.number.isRequired,
  step :React.propTypes.number.isRequired
}*/
export default Range;
