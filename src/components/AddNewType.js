import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import DivStyles from '../styles/DivStyles';
import {Button, ControlLabel, FormGroup, FormControl} from 'react-bootstrap';

class AddNewType extends Component {

  close() {
    this.props.setModalOpen(true);
    this.props.setNewTypeModal(false);
  }

  getFormData() {
    var newType = ReactDOM.findDOMNode(this.refs['eventType']).value;
    this.props.addNewType(newType);
    this.close();
  }

  render() {
    return(
      <div>
        <FormGroup
          controlId='formBasicText'
        >
          <div style={DivStyles.twoColumnAdd}>

            <FormGroup
              controlId='eventFormGroup'
            >
              <ControlLabel>New Event Type</ControlLabel>
              <FormControl
                type='text'
                placeholder='New Event Type'
                ref='eventType'
              />
            </FormGroup>
          </div>
        </FormGroup>
        <br/><br/>

          <div style={DivStyles.eventButtons}>
            <Button onClick={this.close.bind(this, false)}>Cancel</Button>
            <Button bsStyle='primary' onClick={this.getFormData.bind(this)}>Submit</Button>
          </div>
        <br/><br/>
      </div>
    );
  }
}

AddNewType.propTypes = {
  setNewTypeModal: PropTypes.func.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  addNewType: PropTypes.func.isRequired
}

export default AddNewType;
