import React, {Component, PropTypes} from 'react';
import {MenuItem, Nav, NavItem, Navbar, NavDropdown, Modal} from 'react-bootstrap';
import AddEvent from './AddEvent';
import Notifications from './Notifications';
import {browserHistory} from 'react-router';

class Toolbar extends Component {

  // TODO disable NavItem or make active on click
  goToPage(route) {
    browserHistory.push(route);
  }

  setModalOpen(bool) {
    this.props.setModalOpen(bool);
  }

  setNotificationsModal(bool) {
    this.props.setNotifications(bool);
  }

  // TODO add Notifications later
  render() {
    return(
      <div>
        <Modal
          show={this.props.isAddOpen}
          onHide={this.setModalOpen.bind(this, false)}
          backdrop='static'
        >
          <Modal.Header>
            <Modal.Title>Add Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddEvent 
              setModalOpen={this.props.setModalOpen}
              addEvent={this.props.addEvent}
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={this.props.notificationsOn}
          onHide={this.setNotificationsModal.bind(this, false)}
        >
          <Modal.Header>
            <Modal.Title>Notifications</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Notifications/>
          </Modal.Body>
        </Modal>

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='/'>Actemotion</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} onClick={this.goToPage.bind(this, '/home')}>Home</NavItem>
              <NavItem eventKey={2} onClick={this.goToPage.bind(this, '/analytics')}>Analytics</NavItem>
            </Nav>

            <Nav pullRight>
              <NavItem eventKey={4} onClick={this.setModalOpen.bind(this, true)}>Add Event</NavItem>
              <NavDropdown eventKey={6} title='User' id='userDropdown'>
                <MenuItem eventKey={6.1} onClick={this.goToPage.bind(this, '/settings')}>Settings</MenuItem>
                <MenuItem eventKey={6.2} onClick={this.goToPage.bind(this, '/')}>Logout</MenuItem>
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }
}

Toolbar.propTypes = {
  isAddOpen: PropTypes.bool.isRequired,
  addEvent: PropTypes.func.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  setNotifications: PropTypes.func.isRequired,
  notificationsOn: PropTypes.bool.isRequired
}

export default Toolbar;
