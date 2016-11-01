import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, ControlLabel, FormGroup, FormControl} from 'react-bootstrap';
import DivStyles from '../styles/DivStyles';
import DateTime from 'react-datetime';
require('react-datetime/css/react-datetime.css')

// TODO add form validation
class EditEvent extends Component {

  preventDefault(e) {
    e.preventDefault();
  }

  setModalOpen(bool) {
    this.props.actions.setModalOpen(bool);
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
    var newEvent = data;
    this.props.actions.addEvent(this.formatEvent(newEvent));
    this.setModalOpen(false);
  }

  render() {
    return(
      <div>
        <div style={DivStyles.editEventContent}>
          <form onSubmit={this.preventDefault.bind(this)}>
            <FormGroup
              controlId='formBasicText'
            >
              <div style={DivStyles.twoColumn}>
                <ControlLabel>Event Name</ControlLabel>
                <FormControl
                  type='text'
                  placeholder='Event Name'
                  ref='eventName'
                />

                <ControlLabel>Event Type</ControlLabel>
                <FormControl
                  componentClass='select'
                  placeholder='Event Type'
                  ref='eventType'
                >
                  <option value='school'>school</option>
                  <option value='work'>work</option>
                </FormControl>

                <ControlLabel>Start Time</ControlLabel>
                <DateTime
                  defaultValue={new Date()}
                  ref='eventStart'
                />

                <ControlLabel>End Time</ControlLabel>
                <DateTime
                  defaultValue={new Date()}
                  ref='eventEnd'
                />

                <ControlLabel>Emotion</ControlLabel>
                <FormControl
                  componentClass='select'
                  placeholder='Emotion'
                  ref='eventEmotion'
                >
                  <option value='happy'>happy</option>
                  <option value='sad'>sad</option>
                </FormControl>

                <ControlLabel>Energy Level</ControlLabel>
                <FormControl
                  type='text'
                  placeholder='Energy Level (1-10)'
                  ref='eventEnergy'
                />
              </div>

              <div style={DivStyles.twoColumn}>
                <ControlLabel>Description</ControlLabel>
                <FormControl
                  style={{resize: 'none', height: '275px'}}
                  componentClass='textarea'
                  placeholder='Add Description'
                  ref='eventText'
                />
                <div style={DivStyles.eventButtons}>
                  <Button onClick={this.setModalOpen.bind(this, false)}>Cancel</Button>
                  <Button bsStyle='primary' onClick={this.getFormData.bind(this)}>Submit</Button>
                </div>
              </div>

            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

export default EditEvent;
