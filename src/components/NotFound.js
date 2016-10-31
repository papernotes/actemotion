import React, {Component} from 'react';
import {Link} from 'react-router';

class NotFound extends Component {
  render() {
    return(
      <div>
        <h1>404 Not Found!</h1>
        <li ><Link to={'/'}>Go back home!</Link></li>
      </div>
    );
  }
}

export default NotFound;
