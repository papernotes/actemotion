import React, {Component} from 'react';
import ToolbarStyles from '../styles/ToolbarStyles';
import {Nav, NavItem, Navbar, Glyphicon, Popover, OverlayTrigger, Modal} from 'react-bootstrap';
import EditEvent from './EditEvent';
import {browserHistory} from 'react-router';

class Toolbar extends Component {

  // TODO disable NavItem or make active on click
  goToPage(route) {
    browserHistory.push(route);
  }

  setModalOpen(bool) {
    this.props.actions.setModalOpen(bool);
  }

  render() {

    const popoverHoverFocus = (
      <Popover id='popover-trigger-hover-focus' title='Notifications'>
        No notifications!
      </Popover>
    );

    return(
      <div>

        <Modal show={this.props.event.isModalOpen} onHide={this.setModalOpen.bind(this, false)}>
          <Modal.Header>
            <Modal.Title>Add Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditEvent {...this.props}/>
          </Modal.Body>
        </Modal>


        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <p>Actemotion</p>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} onClick={this.goToPage.bind(this, '/home')}>Home</NavItem>
            <NavItem eventKey={2} onClick={this.goToPage.bind(this, '/analytics')}>Analytics</NavItem>
            <NavItem eventKey={3} onClick={this.goToPage.bind(this, '/settings')}>Settings</NavItem>
          </Nav>

          <Nav pullRight>
            <div style={ToolbarStyles.icon}>
              <NavItem eventKey={4} onClick={this.setModalOpen.bind(this, true)}><Glyphicon glyph='plus'/></NavItem>
              <NavItem eventKey={5}>
                <OverlayTrigger trigger={['hover', 'focus']} placement='left' overlay={popoverHoverFocus}>
                  <Glyphicon glyph='bell'/>
                </OverlayTrigger>
              </NavItem>
              <NavItem eventKey={6} onClick={this.goToPage.bind(this, '/settings')}><Glyphicon glyph='user'/></NavItem>
            </div>
          </Nav>
          </Navbar.Collapse>
        </Navbar>


      </div>
    );
  }
}

export default Toolbar;