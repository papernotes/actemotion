import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Button, ControlLabel, FormGroup, FormControl} from 'react-bootstrap';
import DivStyles from '../styles/DivStyles';
import DateTime from 'react-datetime';
require('react-datetime/css/react-datetime.css');

class EditEvent extends Component {

  cancelEdit() {
    this.props.setEditModal(false);
    this.props.setEventModal(true);
  }

  saveEdit() {
    this.getFormData();
  }

  preventDefault(e) {
    e.preventDefault();
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
    var newEvent = data;
    console.log(newEvent);
    // this.props.addEvent(this.formatEvent(newEvent));
    // this.setModalOpen(false);
  }

  render() {
    var event = this.props.activeEvent;
    return(
      <div>
        <div style={DivStyles.addEventContent}>
          <form onSubmit={this.preventDefault.bind(this)}>
            <FormGroup
              controlId='formBasicText'
            >
              <div style={DivStyles.twoColumnAdd}>
                <ControlLabel>Event Name</ControlLabel>
                <FormControl
                  type='text'
                  placeholder={event.title}
                  ref='eventName'
                />

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
                  placeholder={event.text}
                  ref='eventText'
                />
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
  deleteEvent: PropTypes.func.isRequired
}

export default EditEvent;
