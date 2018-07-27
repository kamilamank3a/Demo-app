import React, { Component } from 'react';
import PushToPageButton from '../components/pushToPageButton';

class RootPage extends Component {
  render() {
    return (
      <div align="center">
        <h1>
          Welcome!
        </h1>
        <p>
        	This app is for demonstration purposes only.
        </p>
        <p>
        	It contains 2 pages, one to calculate factorial of a given number 
        </p>
        <p>
        	and the other page displays the history of the Inputs/Outputs stored when computing the factorials.
        </p>
        <p>
        	click on the "Continue" button below to proceed.
        </p>
        <PushToPageButton {...this.props} pageName= "menu" btnName= "Continue"/>
      </div>
    );
  }
}

export default RootPage;