import React, { Component } from 'react';
import PushToPageButton from '../components/pushToPageButton';

class Menu extends Component {
  render() {
    return (
      <div align="center">
        <h1>
          Menu
        </h1>
        <PushToPageButton {...this.props} pageName= "factorial" btnName= "Factorial" />
        <br/>
        <PushToPageButton {...this.props} pageName= "history" btnName= "History"/>
        <br/>
        <PushToPageButton {...this.props} pageName= "" btnName= "Back"/>
      </div>
    );
  }
}

export default Menu;