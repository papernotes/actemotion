import React, {Component, PropTypes} from 'react';
import DivStyles from '../styles/DivStyles';
import ListStyles from '../styles/ListStyles';

class ListEvent extends Component {

  render() {
    return(
      <div style={ListStyles.card}>
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
