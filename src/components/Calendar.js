import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import EventInfo from './EventInfo';
import DivStyles from '../styles/DivStyles';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);


class Calendar extends Component{

  showEventInfo(event, bool) {
    this.props.setActiveEvent(event);
    this.props.setEventModal(bool);
  }

  hideEventInfo() {
    this.props.setEventModal(false);
  }

  hideEditModal() {
    this.props.setEditModal(false);
  }

  hideConfirmModal() {
    this.props.setConfirmModal(false);
  }

  render(){
    return (
      <div>
        <Modal
          show={this.props.isInfoOpen}
          onHide={this.hideEventInfo.bind(this)}
          backdrop='static'
        >
          <Modal.Header>
            <Modal.Title>{this.props.activeEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EventInfo
              setEventModal={this.props.setEventModal}
              activeEvent={this.props.activeEvent}
              deleteEvent={this.props.deleteEvent}
              setEditModal={this.props.setEditModal}
              setConfirmModal={this.props.setConfirmModal}
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={this.props.isEditOpen}
          onHide={this.hideEditModal.bind(this)}
        >
          <Modal.Header>
            <Modal.Title>EDITTING: {this.props.activeEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            EDITTING
          </Modal.Body>
        </Modal>

        <Modal
          show={this.props.isConfirmOpen}
          onHide={this.hideConfirmModal.bind(this)}
        >
          <Modal.Header>
            <Modal.Title>DELETING: {this.props.activeEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            CONFIRM DELETE
          </Modal.Body>
        </Modal>   

        <div style={DivStyles.calendar}>
          <BigCalendar
            events={this.props.events}
            timeslots={2}
            views={['month', 'day', 'week']}
            onSelectEvent={event => this.showEventInfo(event, true)}
            defaultDate={new Date()}
          />
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  setActiveEvent: PropTypes.func.isRequired,
  setEventModal: PropTypes.func.isRequired,
  isInfoOpen: PropTypes.bool.isRequired,
  activeEvent: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  setEditModal: PropTypes.func.isRequired
}

export default Calendar;
