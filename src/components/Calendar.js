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
    this.props.showEventInfo(bool);
  }

  render(){

    return (
      <div>
        <Modal show={this.props.isInfoOpen} onHide={this.showEventInfo.bind(this, false)}>
          <Modal.Header>
            <Modal.Title>Event Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EventInfo/>
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
