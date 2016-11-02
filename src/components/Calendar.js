import React, {Component} from 'react';
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

  render(){
    console.log(this.props)
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
            />
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

export default Calendar;
