import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import DivStyles from '../styles/DivStyles';

class CreateAccount extends Component {

  preventDefault(e) {
    e.preventDefault();
  }

  goToPage(route) {
    browserHistory.push(route);
  }

  render() {
    return(
      <div style={DivStyles.centerPage}>
        <h1>Create an Account</h1>
        <form onSubmit={this.preventDefault.bind(this)}>
          <FormGroup
            controlId='formBasicText'
          >
          <FormControl
            type='text'
            placeholder='Username'
          />
          <FormControl
            type='text'
            placeholder='Password'
          />
          <FormControl
            type='text'
            placeholder='Email'
          />

          </FormGroup>
        </form>
        <Button onClick={this.goToPage.bind(this, '/')}>Cancel</Button>
        <Button bsStyle='primary' onClick={this.goToPage.bind(this, '/home')}>Sign Up</Button>  
      </div>
    );
  }
}

export default CreateAccount;
