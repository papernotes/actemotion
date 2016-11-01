import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class EventInfo extends Component {

  formatInfo(eventData) {
    return(
      <div>
        <p>Type: <b>{eventData.type}</b></p>        
        <p>Emotion: <b>{eventData.emotion}</b></p>
        <p>Energy Level: <b>{eventData.energy}</b></p>
        <p>Description: <b>{eventData.text}</b></p>
      </div>
    );
  }

  hideEventInfo() {
    this.props.setEventModal(false);
  }

  render() {
    return(
      <div>
        {this.formatInfo(this.props.activeEvent)}
        <Button onClick={this.hideEventInfo.bind(this)} bsStyle='danger'>Delete</Button>
        <Button>Edit</Button>
        <Button onClick={this.hideEventInfo.bind(this)} bsStyle='primary'>Close</Button>
      </div>
    );
  }
}

export default EventInfo;
