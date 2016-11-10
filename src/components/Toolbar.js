import React, {Component, PropTypes} from 'react';
import {MenuItem, Nav, NavItem, Navbar, NavDropdown, Modal} from 'react-bootstrap';
import AddEvent from './AddEvent';
import ConfirmAddition from './ConfirmAddition';
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
          <Modal.Header closeButton={true}>
            <Modal.Title>Add Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddEvent 
              setModalOpen={this.props.setModalOpen}
              addEvent={this.props.addEvent}
              setConfirmAddition={this.props.setConfirmAddition}
              setActiveEvent={this.props.setActiveEvent}
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={this.props.confirmedAddition}
          onHide={this.setModalOpen.bind(this, false)}
          backdrop='static'
        >
          <Modal.Header closeButton={true}>
            <Modal.Title>Event Added!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ConfirmAddition
              setConfirmAddition={this.props.setConfirmAddition}
              activeEvent={this.props.activeEvent}
            />
          </Modal.Body>
        </Modal>


        <Modal
          show={this.props.notificationsOn}
          onHide={this.setNotificationsModal.bind(this, false)}
        >
          <Modal.Header closeButton={true}>
            <Modal.Title>Notifications</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Notifications/>
          </Modal.Body>
        </Modal>

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
                <Nav eventKey={7} onClick={this.goToPage.bind(this, '/home')}>
                    Actemotion
                </Nav>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} onClick={this.goToPage.bind(this, '/home')}>Home</NavItem>
              <NavItem eventKey={2} onClick={this.goToPage.bind(this, '/analytics')}>Your Emotions</NavItem>
            </Nav>

            <Nav pullRight>
              <NavItem disabled={this.props.showMessage} eventKey={4} onClick={this.setModalOpen.bind(this, true)}>Add Event</NavItem>
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
  notificationsOn: PropTypes.bool.isRequired,
  setConfirmAddition: PropTypes.func.isRequired,
  activeEvent: PropTypes.object.isRequired,
  showMessage: PropTypes.bool.isRequired
}

export default Toolbar;
