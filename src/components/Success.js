import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class Success extends Component {

  continue = e => {
    const { nextStep } = this.props;
    e.preventDefault();
    nextStep();
  };

  back = e => {
    const {prevStep} = this.props;
    e.preventDefault();
    prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
