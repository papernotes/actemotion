import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import DivStyles from '../styles/DivStyles';

class Login extends Component {

  preventDefault(e) {
    e.preventDefault();
  }

  goToPage(route) {
    browserHistory.push(route);
  }

  render() {
    return(
      <div style={DivStyles.centerPage}>
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
            type='text'
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
