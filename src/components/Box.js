import React, {Component} from 'react';
import BoxStyles from '../styles/BoxStyles';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';

class Box extends Component {

  // go to the page that's passed as a prop
  goToPage() {
    browserHistory.push('/'+this.props.page);
  }

  render() {
    return(
      <div style={BoxStyles}>
        <p>Box</p>
        <Button onClick={this.goToPage.bind(this)}>Go to {this.props.page}</Button>
      </div>
    );
  }
}

export default Box;
