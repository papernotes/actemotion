import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';

class DeleteEvent extends Component {

  confirmDelete() {
    this.props.deleteEvent(this.props.activeEvent);
    this.props.setConfirmModal(false);
  }

  cancelDelete() {
    this.props.setConfirmModal(false);
    this.props.setEventModal(true);
  }

  render() {
    return(
      <div>
        <h3>Are you sure you want to delete this event?</h3>
        <br/>
        <Button 
          bsStyle='danger'
          onClick={this.confirmDelete.bind(this)}
        >
          Delete
        </Button>
        <Button
          bsStyle='primary'
          style={{float:'right'}}
          onClick={this.cancelDelete.bind(this)}
        >
          Cancel
        </Button>
      </div>
    );
  }
}

DeleteEvent.propTypes = {
  setConfirmModal: PropTypes.func.isRequired,
  setEventModal: PropTypes.func.isRequired,
  activeEvent: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired
}

export default DeleteEvent;
