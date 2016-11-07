import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Button, ControlLabel, FormGroup, FormControl} from 'react-bootstrap';
import DivStyles from '../styles/DivStyles';
import DateTime from 'react-datetime';
require('react-datetime/css/react-datetime.css');

class EditEvent extends Component {

  constructor() {
    super();
    this.state = {
      eventName: ''
    }
  }

  cancelEdit() {
    this.props.setEditModal(false);
    this.props.setEventModal(true);
  }

  saveEdit() {
    var edits = this.formatEvent(this.getFormData());
    if (this.state.eventName.length >= 1) {
      this.props.saveEdit(this.props.activeEvent, edits);
      this.props.setEditModal(false);
      this.props.setConfirmEdit(true);
    }
  }

  preventDefault(e) {
    e.preventDefault();
  }

  formatEvent(data) {
    return {
      'title': data[0],
      'allDay':  false,
      'start': new Date(data[2]),
      'end': new Date(data[3]),
      'type': data[1],
      'emotion': data[4],
      'energy': data[5],
      'text': data[6]
    }
  }

  getFormData() {
    var data = [];
    for (var key in this.refs) {
      // fix for the date picker
      if (key === 'eventStart' || key === 'eventEnd') {
        data.push(this.refs[key].state.inputValue);
      }
      else {
        data.push(ReactDOM.findDOMNode(this.refs[key]).value);        
      }
    }
    return data;
  }

  getValidationState() {
    const length = this.state.eventName.length;
    if (length > 1) return 'success';
    else return 'error';
  }

  handleChange(e) {
    this.setState({eventName: e.target.value});
  }

  render() {
    var event = this.props.activeEvent;
    var warningStyles = {};
    if (this.state.eventName.length >= 1) {
      warningStyles = {
        color: 'white'
      }
    }
    else {
      warningStyles = {
        color: 'rgb(169, 68, 66)',
        textAlign: 'center'
      }
    }

    return(
      <div>
        <div style={DivStyles.addEventContent}>
          <form onSubmit={this.preventDefault.bind(this)}>
            <FormGroup
              controlId='formBasicText'
            >
              <div style={DivStyles.twoColumnAdd}>
                <FormGroup
                  controlId='eventFormGroup'
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>Event Name</ControlLabel>
                  <FormControl
                    type='text'
                    placeholder='Change the title!'
                    ref='eventName'
                    onChange={this.handleChange.bind(this)}
                  />
                </FormGroup>

                <ControlLabel>Reassign Event Type</ControlLabel>
                <FormControl
                  componentClass='select'
                  placeholder={event.type}
                  ref='eventType'
                >
                  <option value='school'>school</option>
                  <option value='work'>work</option>
                </FormControl>

                <ControlLabel>Start Time</ControlLabel>
                <DateTime
                  defaultValue={event.start}
                  ref='eventStart'
                />

                <ControlLabel>End Time</ControlLabel>
                <DateTime
                  defaultValue={event.end}
                  ref='eventEnd'
                />

                <ControlLabel>Reassign Emotion</ControlLabel>
                <FormControl
                  componentClass='select'
                  placeholder={event.emotion}
                  ref='eventEmotion'
                >
                  <option value='happy'>happy</option>
                  <option value='sad'>sad</option>
                </FormControl>

                <ControlLabel>Reassign Energy Level</ControlLabel>
                <FormControl
                  componentClass='select'
                  placeholder={event.energy}
                  ref='eventEnergy'
                >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </FormControl>
              </div>

              <div style={DivStyles.twoColumnAdd}>
                <ControlLabel>Description</ControlLabel>
                <FormControl
                  style={{resize: 'none', height: '275px'}}
                  componentClass='textarea'
                  placeholder='Add a new description!'
                  ref='eventText'
                />
                <p style={warningStyles}>Please input an event name</p>
                <div style={DivStyles.eventButtons}>
                  <Button onClick={this.cancelEdit.bind(this)}>Cancel</Button>
                  <Button bsStyle='success' onClick={this.saveEdit.bind(this)}>Save</Button>
                </div>
              </div>
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

EditEvent.propTypes = {
  setEventModal: PropTypes.func.isRequired,
  setEditModal: PropTypes.func.isRequired,
  activeEvent: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  saveEdit: PropTypes.func.isRequired,
  setConfirmEdit: PropTypes.func.isRequired
}

export default EditEvent;
