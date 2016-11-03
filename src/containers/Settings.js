import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Toolbar from '../components/Toolbar';
import {Button, FormGroup, FormControl, ControlLabel, Well} from 'react-bootstrap';
import DivStyles from '../styles/DivStyles';

class Settings extends Component {

  preventDefault(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <Toolbar
          setModalOpen={this.props.actions.setModalOpen}
          isEditOpen={this.props.event.isEditOpen}
          addEvent={this.props.actions.addEvent}
        />
        <h2 style={{textAlign: 'center'}}>Settings</h2>

        <div style={DivStyles.twoColumnSettings}>
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
              ref='emailFreq'
              style={{width: '100%'}}>
              <option value='1'>1 reminder per 4 hours</option>
              <option value='2'>1 reminder per day</option>
              <option value='3'>1 reminder per week</option>
              <option value='4'>1 reminder per month</option>
            </FormControl>
          </div>
        </div>

        <div style={DivStyles.twoColumnSettings}>
          <Well>
            Put some information here
          </Well>
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

Settings.propTypes = {
  actions: PropTypes.shape({
    setModalOpen: PropTypes.func.isRequired,
    addEvent: PropTypes.func.isRequired
  }),
  event: PropTypes.shape({
    isEditOpen: PropTypes.bool.isRequired
  })
}


export default connect(mapStateToProps,mapDispatchToProps)(Settings);
