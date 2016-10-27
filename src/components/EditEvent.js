import React, {Component} from 'react';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import Toolbar from './Toolbar';

class EditEvent extends Component {

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  // TODO
  handleChange(e) {

  }

  preventDefault(e) {
    e.preventDefault();
  }


  // TODO take in props
  render() {
    return(
      <div>
        <Toolbar/>
        <h1> Edit/Add Event Page </h1>
          <div style={{height: '80vh', width: '50vw', margin:'0 auto', marginTop: '20px'}}>
            <form onSubmit={this.preventDefault.bind(this)}>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState.bind(this)}
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
                componentClass="textarea"
                placeholder="Add Description"
                onChange={this.handleChange.bind(this)}
              />

              </FormGroup>
            </form>

            <Button>Cancel</Button>
            <Button>Submit</Button>
          </div>


      </div>
    );
  }
}

export default EditEvent;