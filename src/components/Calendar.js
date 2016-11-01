import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import EventInfo from './EventInfo';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);


class Calendar extends Component{

  showEventInfo(event, bool) {
    console.log(event);
    this.props.setActiveEvent(event);
    this.props.setEventModal(bool);
  }

  hideEventInfo() {
    this.props.setEventModal(false);
  }

  render(){
    return (
      <div>
        <Modal show={this.props.isInfoOpen} onHide={this.hideEventInfo.bind(this)}>
          <Modal.Header>
            <Modal.Title>{this.props.activeEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EventInfo
              setEventModal={this.props.setEventModal}
              activeEvent={this.props.activeEvent}
            />
          </Modal.Body>
        </Modal>

        <div style={{height: '80vh', width: '90vw', margin:'0 auto', marginTop: '20px'}}>
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
