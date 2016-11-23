import React, {Component, PropTypes} from 'react';
import ListEvent from './ListEvent';

class List extends Component {

  createListItems() {
    return this.props.events.map((event, index) => {
      return (<ListEvent key={index} title={event.title} emotion={event.emotion}/>);
    })
  }

  render() {
    var listItems = this.createListItems();
    console.log(listItems);

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
