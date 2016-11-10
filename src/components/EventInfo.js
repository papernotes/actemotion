import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';

class EventInfo extends Component {

  goToPage(route) {
    browserHistory.push(route);
  }

  formatInfo(eventData) {
    return(
      <div>
        <Button style={{float: 'right'}} 
                onClick={this.goToPage.bind(this, '/analytics')}>
          Go To Emotion Data 
        </Button>
        <p>Type: <b>{eventData.type}</b></p>  
        <p>Emotion: <b>{eventData.emotion}</b></p>
        <p>Energy Level: <b>{eventData.energy}</b></p>
        <p>Description: <b>{eventData.text}</b></p>
        <p>Start Time: <b>{eventData.start.toLocaleString()}</b></p>
        <p>End Time: <b>{eventData.end.toLocaleString()}</b></p>
      </div>
    );
  }

  hideEventInfo() {
    this.props.setEventModal(false);
  }

  deleteEvent(event) {
    this.props.setEventModal(false);
    this.props.setConfirmModal(true);
  }

  editEvent() {
    this.props.setEventModal(false);
    this.props.setEditModal(true);
  }

  render() {
    return(
      <div>
        {this.formatInfo(this.props.activeEvent)}
        <Button
          onClick={this.deleteEvent.bind(this, this.props.activeEvent)}
          bsStyle='danger'
        >
          Delete
        </Button>
        <div style={{float: 'right'}}>
          <Button onClick={this.editEvent.bind(this)}>
            Edit
          </Button>
          <Button
            onClick={this.hideEventInfo.bind(this)}
            bsStyle='primary'
          >
            Close
          </Button>
        </div>

      </div>
    );
  }
}

EventInfo.propTypes = {
  setEventModal: PropTypes.func.isRequired,
  activeEvent: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired
}

export default EventInfo;
