import React, { Component } from 'react';

const styles = {
	buttonStyle : {
    	color: 'blue',
    	height: "50px",
    	width: "250px"
	}
}
class PushToPageButton extends Component {
  pushToPage ()
  {
    this.props.history.push('/'+this.props.pageName)
  }
  render() {
    return (
      <button style={styles.buttonStyle} onClick={() => this.pushToPage()}> {this.props.btnName} </button>
    );
  }
}

export default (PushToPageButton);