import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let Basic = React.createClass({
  render(){
    return (
      <div style={{height: '100vh'}}>
        <BigCalendar
          {...this.props}
          events={[
            {
              'title': 'All Day Event',
              'allDay': true,
              'start': new Date(2015, 3, 0),
              'end': new Date(2015, 3, 0)
            },
            {
              'title': 'Long Event',
              'start': new Date(2015, 3, 7),
              'end': new Date(2015, 3, 10)
            }
          ]}
          timeslots={8}
          onSelectEvent={event => alert(event.title)}
          defaultDate={new Date(2015, 3, 1)}
        />
      </div>
    )
  }
})

export default Basic;