import React, {Component} from 'react';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

class EditEvent extends Component {

  // TODO
  handleChange(e) {
    console.log(e);
  }

  preventDefault(e) {
    e.preventDefault();
  }

  setModalOpen(bool) {
    this.props.actions.setModalOpen(bool);
  }


  render() {
    return(
      <div>
        <div style={{height: '50vh', width: '300px', margin:'0 auto', marginTop: '20px'}}>
          <form onSubmit={this.preventDefault.bind(this)}>
            <FormGroup
              controlId="formBasicText"
            >

            <FormControl
              type="text"
              placeholder="Event Name"
              onChange={this.handleChange.bind(this)}
            />

            <FormControl
              componentClass="select"
              placeholder="Event Type"
              onChange={this.handleChange.bind(this)}
            >
              <option value="school">school</option>
              <option value="work">work</option>
            </FormControl>

            <DatePicker onChange={this.handleChange.bind(this)}/>

            <FormControl
              type="text"
              placeholder="Event Time"
              onChange={this.handleChange.bind(this)}
            />

            <FormControl
              componentClass="select"
              placeholder="Emotion"
              onChange={this.handleChange.bind(this)}
            >
              <option value="happy">happy</option>
              <option value="sad">sad</option>
            </FormControl>

            <FormControl
              type="text"
              placeholder="Energy Level (1-10)"
              onChange={this.handleChange.bind(this)}
            />

            <FormControl
              style={{resize: 'none'}}
              componentClass="textarea"
              placeholder="Add Description"
              onChange={this.handleChange.bind(this)}
            />

            </FormGroup>
          </form>

          <Button onClick={this.setModalOpen.bind(this, false)}>Cancel</Button>
          <Button onClick={this.setModalOpen.bind(this, false)}>Submit</Button>
        </div>
      </div>
    );
  }
}

export default EditEvent;