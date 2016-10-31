import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import DateTime from 'react-datetime';
require('react-datetime/css/react-datetime.css')

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
  }

  render() {
    return(
      <div>
        <div style={{height: '50vh', width: '400px', margin:'0 auto', marginTop: '20px'}}>
          <form onSubmit={this.preventDefault.bind(this)}>
            <FormGroup
              controlId='formBasicText'
            >

            <FormControl
              type='text'
              placeholder='Event Name'
              ref='eventName'
            />

            <FormControl
              componentClass='select'
              placeholder='Event Type'
              ref='eventType'
            >
              <option value='school'>school</option>
              <option value='work'>work</option>
            </FormControl>

            <DateTime
              defaultValue={new Date()}
              ref='eventStart'
            />

            <DateTime
              defaultValue={new Date()}
              ref='eventEnd'
            />

            <FormControl
              componentClass='select'
              placeholder='Emotion'
              ref='eventEmotion'
            >
              <option value='happy'>happy</option>
              <option value='sad'>sad</option>
            </FormControl>

            <FormControl
              type='text'
              placeholder='Energy Level (1-10)'
              ref='eventEnergy'
            />

            <FormControl
              style={{resize: 'none'}}
              componentClass='textarea'
              placeholder='Add Description'
              ref='eventText'
            />

            </FormGroup>
          </form>

          <Button onClick={this.setModalOpen.bind(this, false)}>Cancel</Button>
          <Button onClick={this.setModalOpen.bind(this, false)}>Submit</Button>
          <Button onClick={this.getFormData.bind(this)}>Test Data</Button>
        </div>
      </div>
    );
  }
}

export default EditEvent;
