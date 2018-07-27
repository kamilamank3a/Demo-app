import React, { Component } from 'react';
import { connect } from 'react-redux'
import PushToPageButton from '../components/pushToPageButton';

const styles = {
  buttonStyle : {
      color: 'green',
      height: "50px",
      width: "250px"
  },
  textBox : {
    height: "40px",
    fontSize: 24
  },
  textStyle : {
    fontSize: 24,
    color: "#024DA8"
  }
}

class Factorial extends Component {
	onInputChange(e) {
    const value = e.target.value; 
		this.props.dispatch({
      type: "FACT/INPUT_CHANGED",
      value: value,
    })
	}

	onSubmit() {
		this.props.dispatch({
			type: "FACT/SUBMIT",
		})
    this.props.dispatch({
      type: "FACT/LOG_ITEM",
      input: this.props.factInput,
    })
	}

  onBack() {
    this.clearOutput();
    this.props.history.push('/')
  }

  clearOutput() {
    this.props.dispatch({
      type: "FACT/CLEAR",
    })
  }

  render() {
    return (
      <div>
        <h1>
          Factorial
        </h1>
        <div style={styles.textStyle}>
        	Enter a positive whole number below and click on submit to obtain its factorial
        </div>
        <input 
        style = {styles.textBox}
        type = "number" 
        name =	"number"
        value = {this.props.factInput}
        onChange = {(e) => this.onInputChange(e)}
        />
        <button
        style = {styles.buttonStyle}
        onClick = {() => this.onSubmit()}
        >
        	Submit
        </button>
        <div  
        style = {styles.textStyle}
        >
          Answer: {this.props.factOutput}
        </div>
         <PushToPageButton {...this.props} pageName= "menu" btnName= "Back" />
      </div>
    );
  }
}

export default connect(state => state.factorial) (Factorial);