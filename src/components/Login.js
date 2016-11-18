import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import DivStyles from '../styles/DivStyles';
require('../styles/style.css');

class Login extends Component {

  preventDefault(e) {
    e.preventDefault();
  }

  goToPage(route) {
    browserHistory.push(route);
  }

  render() {
    return(
      <div className="login">
        <h1>actemotion</h1>
        <form onSubmit={this.preventDefault.bind(this)}>
          <FormGroup
            controlId='formBasicText'
          >
          <FormControl
            type='text'
            placeholder='Username'
          />
          <FormControl
            type='password'
            placeholder='Password'
          />

          </FormGroup>
        </form>
        <Button onClick={this.goToPage.bind(this, '/create')}>Create Account</Button>
        <Button bsStyle='primary' onClick={this.goToPage.bind(this, '/home')}>Login</Button>  
      </div>
    );
  }
}

export default Login;
