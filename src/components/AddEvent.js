import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Button, ControlLabel, FormGroup, FormControl} from 'react-bootstrap';
import DivStyles from '../styles/DivStyles';
import DateTime from 'react-datetime';
require('react-datetime/css/react-datetime.css');

// TODO add form validation
class AddEvent extends Component {

  preventDefault(e) {
    e.preventDefault();
  }

  setModalOpen(bool) {
    this.props.setModalOpen(bool);
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
    this.props.addEvent(this.formatEvent(newEvent));
    this.setModalOpen(false);
  }

  render() {
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
                  componentClass='select'
                  placeholder='Event Type'
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

AddEvent.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired
}

export default AddEvent;
