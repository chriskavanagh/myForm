import React, { Component, Fragment } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export default class UserForm extends Component {
    
    state = {
        step:1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
        {/*or  [e.target.name]: e.target.value */}
    }

  render() {
      const { step } = this.state;
      const { firstName, lastName, email, occupation, city, bio } = this.state;
      const values = { firstName, lastName, email, occupation, city, bio };
    return (

        <Fragment>

        {
            step === 1 &&    
                <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
        }

        {
            step === 2 &&
                <FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
        }

        {
            step === 3 &&
                <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
        }

        {
            step === 4 &&
                <Success />
        }            
        
        </Fragment>
    )
  } //end render
} // end class


