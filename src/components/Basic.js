import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

// TODO take in events as props
let Basic = React.createClass({
  render(){
    return (
      <div style={{height: '80vh', width: '90vw', margin:'0 auto', marginTop: '20px'}}>
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
          views={['month', 'week']}
          onSelectEvent={event => alert(event.title)}
          defaultDate={new Date(2015, 3, 1)}
        />
      </div>
    )
  }
})

export default Basic;