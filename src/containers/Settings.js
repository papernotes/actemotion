import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Toolbar from '../components/Toolbar';
import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class Settings extends Component {

  preventDefault(e) {
    e.preventDefault();
  }

    render() {
        return(
            <div>
                <Toolbar {...this.props}/>
                <h2 style={{textAlign: 'center'}}>Settings</h2>
                <p></p>
                <div style={{paddingLeft: '15px', paddingRight: '15px'}}> 
                <label>Your Username: </label> <p></p>
                <label>Your Password: </label> <p></p>

                <ControlLabel>Change your password: </ControlLabel>
                <form>
                  <FormGroup controlId='passForm'>
                    <FormControl style={{width: '200px'}} type='text' placeholder='New Password'/>
                  </FormGroup>
                </form> 
                <Button onClick={this.preventDefault.bind(this)}>Set New Password</Button>

                <p></p><p></p>
                <ControlLabel>Reminder Email Frequency</ControlLabel>
                <FormControl
                  componentClass='select'
                  placeholder='1 Email per'
                  ref='emailFreq'>
                  <option value='1'>1 reminder per 4 hours</option>
                  <option value='2'>1 reminder per day</option>
                  <option value='3'>1 reminder per week</option>
                  <option value='4'>1 reminder per month</option>
                </FormControl>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    home: state.default.home,
    event: state.default.event
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Settings);
