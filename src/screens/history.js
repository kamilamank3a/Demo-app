import React, { Component } from 'react';
import PushToPageButton from '../components/pushToPageButton';
import { connect } from 'react-redux'

const styles = {
  buttonStyle : {
      color: 'red',
      height: "50px",
      width: "250px"
  }
}

class History extends Component {
  render() {
    return (
      <div align= 'center'>
        <h1>
          History
        </h1>
        <div
        style= {{ overflow: 'auto',  height: '400px' }}
        >
          {this.props.log.map((item,i) => {
            return (
              <div>{'Input: '+item[0]+' -> Response'}</div>
            )
          })}
        </div>
        <PushToPageButton {...this.props} pageName= "menu" btnName= "Back" />
        <button
        style = {styles.buttonStyle}
        >
        Clear
        </button>
      </div>
    );
  }
}

export default connect(state => state.factorial) (History);