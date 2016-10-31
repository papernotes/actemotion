import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

// TODO take in events as props
let Calendar = React.createClass({
  render(){
    return (
      <div style={{height: '80vh', width: '90vw', margin:'0 auto', marginTop: '20px'}}>
        <BigCalendar
          events={this.props.events}
          timeslots={2}
          views={['month', 'day', 'week']}
          onSelectEvent={event => alert(event.title)}
          defaultDate={new Date()}
        />
      </div>
    )
  }
})

export default Calendar;