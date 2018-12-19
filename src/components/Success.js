import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export default class Success extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Success" style={ divStyle } />
          <h1 style={ h1Style }>Thank You For Your Submission</h1>
          <p style={ pStyle }>You will get an email with further instructions</p>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

var divStyle = {
  marginBottom: "15rem"
};

var h1Style = {
  fontSize: "4.5rem"
}

var pStyle = {
  color: "#00bcd4",
  fontSize: "2.5rem"
};