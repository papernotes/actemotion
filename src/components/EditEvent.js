import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

class EditEvent extends Component {

  preventDefault(e) {
    e.preventDefault();
  }

  setModalOpen(bool) {
    this.props.actions.setModalOpen(bool);
  }

  getFormData() {
    var data = [];
    for (var key in this.refs) {
      // fix for the date picker
      if (key === 'eventDate') {
        data.push(this.refs[key].getValue());
      }
      else {
        data.push(ReactDOM.findDOMNode(this.refs[key]).value);
      }
    }
    console.log(data);
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

            <DatePicker
              showClearButton={false}
              value={new Date().toISOString()}
              ref='eventDate'
            />

            <FormControl
              type='text'
              placeholder='Event Time'
              ref='eventTime'
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