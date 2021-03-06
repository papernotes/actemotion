import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import EventInfo from './EventInfo';
import DeleteEvent from './DeleteEvent';
import EditEvent from './EditEvent';
import ConfirmEdit from './ConfirmEdit';
import DivStyles from '../styles/DivStyles';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);


class Calendar extends Component{

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

  hideConfirmModal() {
    this.props.setConfirmModal(false);
  }

  hideConfirmEdit() {
    this.props.setConfirmEdit(false);
  }

  render(){
    return (
      <div>
        <Modal
          show={this.props.isInfoOpen}
          onHide={this.hideEventInfo.bind(this)}
          backdrop='static'
        >
          <Modal.Header closeButton={true}>
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
          backdrop='static'
        >
          <Modal.Header closeButton={true}>
            <Modal.Title>Editting: {this.props.activeEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditEvent
              setEventModal={this.props.setEventModal}
              activeEvent={this.props.activeEvent}
              deleteEvent={this.props.deleteEvent}
              setEditModal={this.props.setEditModal}
              saveEdit={this.props.saveEdit}
              setConfirmEdit={this.props.setConfirmEdit}
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={this.props.confirmedEdit}
          onHide={this.hideConfirmEdit.bind(this)}
          backdrop='static'
        >
          <Modal.Header closeButton={true}>
            <Modal.Title>Confirmed the edit!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ConfirmEdit
              setConfirmEdit={this.props.setConfirmEdit}
              activeEvent={this.props.activeEvent}
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={this.props.isConfirmOpen}
          onHide={this.hideConfirmModal.bind(this)}
          backdrop='static'
        >
          <Modal.Header closeButton={true}>
            <Modal.Title>DELETING: {this.props.activeEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DeleteEvent
              deleteEvent={this.props.deleteEvent}
              setConfirmModal={this.props.setConfirmModal}
              setEventModal={this.props.setEventModal}
              activeEvent={this.props.activeEvent}
            />
          </Modal.Body>
        </Modal>

        <div style={DivStyles.calendar}>
          <BigCalendar
            events={this.props.events}
            timeslots={2}
            views={['month', 'week', 'day']}
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
  setEditModal: PropTypes.func.isRequired,
  saveEdit: PropTypes.func.isRequired,
  showingNormalEvents: PropTypes.bool.isRequired,
  confirmedEdit: PropTypes.bool.isRequired,
  setConfirmEdit: PropTypes.func.isRequired,
}

export default Calendar;
