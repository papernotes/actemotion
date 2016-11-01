import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class EventInfo extends Component {

  formatInfo(eventData) {
    return(
      <div>
        <h3>{eventData.title}</h3>
        <p>Type: <b>{eventData.type}</b></p>        
        <p>Emotion: <b>{eventData.emotion}</b></p>
        <p>Energy Level: <b>{eventData.energy}</b></p>
      </div>
    );
  }

  render() {
    this.formatInfo(this.props.activeEvent);
    return(
      <div>
        {this.formatInfo(this.props.activeEvent)}
        <Button>Edit</Button>
        <Button bsStyle='primary'>Close</Button>
      </div>
    );
  }
}

export default EventInfo;
