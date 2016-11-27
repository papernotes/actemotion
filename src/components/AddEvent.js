import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Button, ControlLabel, FormGroup, FormControl} from 'react-bootstrap';
import DivStyles from '../styles/DivStyles';
import DateTime from 'react-datetime';
import moment from 'moment';
require('react-datetime/css/react-datetime.css');

class AddEvent extends Component {

  constructor() {
    super();
    this.state = {
      eventName: ''
    }
  }

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
      'confidence': data[6],
      'satisfaction': data[7],
      'productivity': data[8],
      'text': data[9]
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
    if (this.state.eventName.length >= 1) {
      this.props.addEvent(this.formatEvent(newEvent));
      this.props.setConfirmAddition(true);
      this.props.setActiveEvent(this.formatEvent(newEvent));
      this.setModalOpen(false);
    }
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

    var later = moment();
    var validStart = function(current) {
      return current.isBefore(later);
    }
    var yesterday = moment().subtract(1, 'day');
    var validEnd = function(current) {
      return current.isAfter(yesterday);
    }

    var endHour = new Date();
    endHour.setHours(endHour.getHours()+1);

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
                    placeholder='Event Name'
                    ref='eventName'
                    onChange={this.handleChange.bind(this)}
                  />
                </FormGroup>

                <ControlLabel>Event Type</ControlLabel>
                <FormControl
                  componentClass='select'
                  placeholder='Event Type'
                  ref='eventType'
                >
                  <option value='school'>school</option>
                  <option value='work'>work</option>
                  <option value='leisure'>leisure</option>
                  <option value='exercise'>exercise</option>
                </FormControl>

                <ControlLabel>Start Time</ControlLabel>
                <DateTime
                  defaultValue={new Date()}
                  ref='eventStart'
                  isValidDate={validStart}
                />

                <ControlLabel>End Time</ControlLabel>
                <DateTime
                  defaultValue={endHour}
                  ref='eventEnd'
                  isValidDate={validEnd}
                />

                <ControlLabel>Emotion</ControlLabel>
                <FormControl
                  componentClass='select'
                  placeholder='Emotion'
                  ref='eventEmotion'
                >
                  <option value='happy'>happy</option>
                  <option value='excited'>excited</option>
                  <option value='sad'>sad</option>
                  <option value='joy'>joy</option>
                  <option value='hope'>hope</option>
                  <option value='surprise'>surprise</option>
                  <option value='anxious'>anxious</option>
                  <option value='angry'>angry</option>
                  <option value='fear'>fear</option>
                  <option value='disgust'>disgust</option>
                  <option value='envy'>envy</option>
                </FormControl>

                <ControlLabel>Energy Level</ControlLabel>
                <FormControl
                  componentClass='select'
                  placeholder='Event Type'
                  ref='eventEnergy'
                >
                  <option value='1'>1 (Least Energetic)</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5 (Most Energetic)</option>
                </FormControl>
              </div>

              <div style={DivStyles.twoColumnAdd}>

                <ControlLabel>Confidence Level</ControlLabel>
                <FormControl
                  componentClass='select'
                  placeholder={event.confidence}
                  ref='eventConfidence'
                >
                  <option value='1'>1 (Least Confident)</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5 (Most Confident)</option>
                </FormControl>

                <ControlLabel>Satisfaction Level</ControlLabel>
                <FormControl
                  componentClass='select'
                  placeholder={event.satisfaction}
                  ref='eventSatisfaction'
                >
                  <option value='1'>1 (Least Satisfied)</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5 (Most Satisfied)</option>
                </FormControl>

                <ControlLabel>Productivity Level</ControlLabel>
                <FormControl
                  componentClass='select'
                  placeholder={event.productivity}
                  ref='eventProductivity'
                >
                  <option value='1'>1 (Least Productive)</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5 (Most Productive)</option>
                </FormControl>

                <ControlLabel>Description</ControlLabel>
                <FormControl
                  style={{resize: 'none', height: '15vw'}}
                  componentClass='textarea'
                  placeholder='Add Description'
                  ref='eventText'
                />
                <p style={warningStyles}>Please input an event name</p>
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
  addEvent: PropTypes.func.isRequired,
  setConfirmAddition: PropTypes.func.isRequired,
  setActiveEvent: PropTypes.func.isRequired
}

export default AddEvent;
