import React, {Component, PropTypes} from 'react';
import {Nav, NavItem, Navbar, Modal, Button} from 'react-bootstrap';
import AddEvent from './AddEvent';
import AddNewType from './AddNewType';
import ConfirmAddition from './ConfirmAddition';
import Notifications from './Notifications';
import {browserHistory} from 'react-router';
require('../styles/style.css');

class Toolbar extends Component {

  constructor() {
    super();
    this.state = {
      activeKey: 1
    }
  }

  componentWillMount() {
    if (this.props.location.pathname === '/home') 
      this.setState({activeKey: 1});
    else if (this.props.location.pathname === '/analytics')
      this.setState({activeKey: 2});
    else
      this.setState({activeKey: 3});
  }

  // TODO disable NavItem or make active on click
  goToPage(route) {
    browserHistory.push(route);
    if (route !== '/home')
      this.props.setNormalEvents(true); // quick fix for resetting calendar items
  }

  setModalOpen(bool) {
    this.props.setModalOpen(bool);
  }

  setNotificationsModal(bool) {
    this.props.setNotifications(bool);
  }

  setNewTypeModal(bool) {
    this.props.setNewTypeModal(bool);
  }

  render() {
    var route = this.props.secondaryRoute || '/home';
    var analyticsRoute = this.props.analyticsRoute || '/analytics';

    return(
      <div>
      <link 
        href='https://fonts.googleapis.com/css?family=Raleway'
        rel='stylesheet'
        type='text/css'
       />
       <link 
        href='https://fonts.googleapis.com/css?family=Muli'
        rel='stylesheet'
        type='text/css'
       />
       <link 
        href='https://fonts.googleapis.com/css?family=Montserrat'
        rel='stylesheet'
        type='text/css'
       />
        <Button onClick={this.setModalOpen.bind(this, true)} style={{
          position: 'absolute',
          width: '100px',
          height: '50px',
          backgroundColor: '#F8DA5B',
          textColor: 'white',
          top: '10vh',
          right: '7vw',
          color: 'white',
          fontFamily: 'Raleway',
          fontWeight: 'bold'
        }}>
          Add Event!
        </Button>
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
              eventTypes={this.props.eventTypes}
              setNewTypeModal={this.props.setNewTypeModal}
              isNewTypeOpen={this.props.isNewTypeOpen}
              addNewType={this.props.addNewType}
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={this.props.isNewTypeOpen}
          onHide={this.setNewTypeModal.bind(this, false)}
          backdrop='static'
        >
          <Modal.Header closeButton={true}>
            <Modal.Title>Adding New Event Type</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddNewType
              setNewTypeModal={this.props.setNewTypeModal}
              setModalOpen={this.props.setModalOpen}
              addNewType={this.props.addNewType}
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
                <Nav className="logo" onClick={this.goToPage.bind(this, '/home')}>
                    actemotion
                </Nav>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav activeKey={this.state.activeKey}>
              <NavItem eventKey={1} onClick={this.goToPage.bind(this, route)}>Home</NavItem>
              <NavItem eventKey={2} onClick={this.goToPage.bind(this, analyticsRoute)}>Your Emotions</NavItem>
              <NavItem eventKey={3} onClick={this.goToPage.bind(this, '/calendar')}>Calendar of Events</NavItem>
            </Nav>

            <Nav pullRight>
              <NavItem eventKey={6.1} onClick={this.goToPage.bind(this, '/')}>Logout</NavItem>
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
  showMessage: PropTypes.bool,
  setNormalEvents: PropTypes.func.isRequired,
  eventTypes: PropTypes.array.isRequired,
  setNewTypeModal: PropTypes.func.isRequired,
  isNewTypeOpen: PropTypes.bool.isRequired,
  addNewType: PropTypes.func.isRequired
}

export default Toolbar;
