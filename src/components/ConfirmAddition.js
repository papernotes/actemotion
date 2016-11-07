import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';

class ConfirmAddition extends Component {

  close() {
    this.props.setConfirmAddition(false);
  }

  render() {
    return(
      <div>
        <h3>You've successfully added an event!</h3>
        <p> It starts on <b>{this.props.activeEvent.start.toLocaleString()}</b> and ends on
          <b>{this.props.activeEvent.start.toLocaleString()}</b>
        </p>
        <p> You were feeling <b>{this.props.activeEvent.emotion}</b> for this event</p>
        <Button
          bsStyle='primary'
          style={{float:'right'}}
          onClick={this.close.bind(this)}
        >
          Close
        </Button>
        <br/><br/>
      </div>
    );
  }
}

ConfirmAddition.propTypes = {
  setConfirmAddition: PropTypes.func.isRequired,
  activeEvent: PropTypes.object.isRequired
}

export default ConfirmAddition;
