import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';
require('../styles/style.css');

class ListEvent extends Component {

  showEventInfo(event, bool) {
    if (this.props.showingNormalEvents) {
      this.props.setActiveEvent(event);
      this.props.setEventModal(bool);
    }
  }

  hideEventInfo() {
    this.props.setEventModal(false);
  }

  hideEditModal() {
    this.props.setEditModal(false);
  }

  hideConfirmEdit() {
    this.props.setConfirmEdit(false);
  }

  render() {
    return(
      <div className="listObject">
          <h3 className="eventTitle">{this.props.title}</h3>
          <h4 className="eventFeeling">{this.props.emotion}</h4>
          <Button className="eventIn" onClick={this.showEventInfo.bind(this, this.props.event, true)}bsSize='xsmall'>Event Info</Button>
      </div>
    );
  }
}

ListEvent.propTypes = {
  event: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  emotion: PropTypes.string.isRequired
}

export default ListEvent;
