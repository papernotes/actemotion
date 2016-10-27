import React, {Component} from 'react';
import ToolbarStyles from '../styles/ToolbarStyles';
import {Link} from 'react-router';
import {Glyphicon} from 'react-bootstrap';

class Toolbar extends Component {

  render() {
    return(
      <div style={ToolbarStyles.toolbar}>

          <div style={ToolbarStyles.text}>
            <span><Link to={'/'}>Home</Link></span>
            <span><Link to={'/analytics'}>Analytics</Link></span>
            <span><Link to={'/settings'}>Settings</Link></span>
          </div>

          <div style={ToolbarStyles.icon}>
            <Glyphicon glyph='plus'/>
            <Glyphicon glyph='bell'/>
            <Glyphicon glyph='user'/>
          </div>

      </div>
    );
  }
}

export default Toolbar;