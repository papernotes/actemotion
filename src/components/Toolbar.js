import React, {Component} from 'react';
import ToolbarStyles from '../styles/ToolbarStyles';
import {Nav, NavItem, Navbar, Glyphicon} from 'react-bootstrap';
import {browserHistory} from 'react-router';

class Toolbar extends Component {

  goToPage(route) {
    browserHistory.push(route);
  }

  render() {
    return(
      <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <p>Actemotion</p>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>

            <Nav>
              <NavItem eventKey={1} onClick={this.goToPage.bind(this, '/')}>Home</NavItem>
              <NavItem eventKey={2} onClick={this.goToPage.bind(this, '/analytics')}>Analytics</NavItem>
              <NavItem eventKey={3} onClick={this.goToPage.bind(this, '/settings')}>Settings</NavItem>
            </Nav>

            <Nav pullRight>
              <div style={ToolbarStyles.icon}>
                <NavItem eventKey={4}><Glyphicon glyph='plus'/></NavItem>
                <NavItem eventKey={5}><Glyphicon glyph='bell'/></NavItem>
                <NavItem eventKey={6}><Glyphicon glyph='user'/></NavItem>
              </div>
            </Nav>
          </Navbar>


      </div>
    );
  }
}

export default Toolbar;