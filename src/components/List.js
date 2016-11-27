import React, {Component, PropTypes} from 'react';
import ListEvent from './ListEvent';

class List extends Component {

  createListItems() {
    return this.props.events.map((event, index) => {
      return (<ListEvent 
        showingNormalEvents={true}
        setActiveEvent={this.props.setActiveEvent}
        setEventModal={this.props.setEventModal}
        setEditModal={this.props.setEditModal}
        setConfirmEdit={this.props.setConfirmEdit}
        event={event}
        key={index}
        title={event.title}
        emotion={event.emotion}
      />);
    })
  }

  render() {
    var listItems = this.createListItems();

    return(
      <div className="list">
        {listItems}
      </div>
    );
  }
}

List.propTypes = {
  events: PropTypes.array.isRequired
}

export default List;
