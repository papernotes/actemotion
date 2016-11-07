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
        <br/>
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
  setConfirmAddition: PropTypes.func.isRequired
}

export default ConfirmAddition;
