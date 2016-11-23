import React, {Component, PropTypes} from 'react';
import ListStyles from '../styles/ListStyles';

class ListEvent extends Component {

  render() {
    return(
      <div className="listObject">
          <h3>{this.props.title}</h3>
          <h4>Feeling: {this.props.emotion}</h4>
      </div>
    );
  }
}

ListEvent.propTypes = {
  title: PropTypes.string.isRequired,
  emotion: PropTypes.string.isRequired
}

export default ListEvent;
