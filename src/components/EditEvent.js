import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

class EditEvent extends Component {

  constructor() {
    super();
    this.state = {
      eventName: '',
      eventType: '',
      eventDate: null,
      eventTime: null,
      eventEmotion: '',
      eventEnergy: 0,
      eventText: ''
    }
  }

  // TODO
  handleChange(e) {
    console.log(e.target.value);
  }

  preventDefault(e) {
    e.preventDefault();
  }

  setModalOpen(bool) {
    this.props.actions.setModalOpen(bool);
  }

  getFormData() {
    var data = [];
    console.log(this.refs);
    for (var key in this.refs) {
      data.push(ReactDOM.findDOMNode(this.refs[key]).value);
    }
    console.log(data);
  }

  // TODO fix the time value for date picker
  render() {
    return(
      <div>
        <div style={{height: '50vh', width: '400px', margin:'0 auto', marginTop: '20px'}}>
          <form onSubmit={this.preventDefault.bind(this)}>
            <FormGroup
              controlId="formBasicText"
            >

            <FormControl
              type="text"
              placeholder="Event Name"
              onChange={this.handleChange.bind(this)}
              ref="eventName"
            />

            <FormControl
              componentClass="select"
              placeholder="Event Type"
              onChange={this.handleChange.bind(this, 'eventType')}
              ref="eventType"
            >
              <option value="school">school</option>
              <option value="work">work</option>
            </FormControl>

            <DatePicker
              onChange={this.handleChange.bind(this, 'eventDate')}
              showClearButton={false}
              value={new Date().toISOString()}
              ref="eventDate"
            />

            <FormControl
              type="text"
              placeholder="Event Time"
              onChange={this.handleChange.bind(this, 'eventTime')}
              ref="eventTime"
            />

            <FormControl
              componentClass="select"
              placeholder="Emotion"
              onChange={this.handleChange.bind(this, 'eventEmotion')}
              ref="eventEmotion"
            >
              <option value="happy">happy</option>
              <option value="sad">sad</option>
            </FormControl>

            <FormControl
              type="text"
              placeholder="Energy Level (1-10)"
              onChange={this.handleChange.bind(this, 'eventEnergy')}
              ref="eventEnergy"
            />

            <FormControl
              style={{resize: 'none'}}
              componentClass="textarea"
              placeholder="Add Description"
              onChange={this.handleChange.bind(this, 'eventText')}
              ref="eventText"
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