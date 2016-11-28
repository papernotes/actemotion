import React, {Component, PropTypes} from 'react';
import {Nav, NavItem, Navbar, Modal, Button} from 'react-bootstrap';
import AddEvent from './AddEvent';
import ConfirmAddition from './ConfirmAddition';
import Notifications from './Notifications';
import {browserHistory} from 'react-router';
require('../styles/style.css');
import ReactGA from 'react-ga';

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
    this.setState({activeKey: 0});  // TODO remove
  }

  // TODO disable NavItem or make active on click
  goToPage(route) {
    if (route === '/analytics') {
      ReactGA.ga('send', 'pageview', '/home');
      ReactGA.event({
        category: 'Navigation',
        action: 'Went to Analytics 1'
      });
    }
    else if (route === '/analytics2') {
      ReactGA.ga('send', 'pageview', '/home2');
      ReactGA.event({
        category: 'Navigation',
        action: 'Went to Analytics 2'
      });
    }

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

  render() {
    var route = this.props.secondaryRoute || '/home';
    var analyticsRoute = this.props.analyticsRoute || '/analytics';

    return(
      <div>
        <Button onClick={this.setModalOpen.bind(this, true)} style={{
          position: 'absolute',
          width: '100px',
          height: '75px',
          backgroundColor: 'rgb(40, 126, 255)',
          textColor: 'white',
          top: '10vh',
          right: '5vw',
          color: 'white'
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
                    Actemotion
                </Nav>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav activeKey={this.state.activeKey}>
              <NavItem eventKey={1} onClick={this.goToPage.bind(this, route)}>Home</NavItem>
              <NavItem eventKey={2} onClick={this.goToPage.bind(this, analyticsRoute)}>{this.props.analyticsTitle}</NavItem>
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
  eventTypes: PropTypes.array.isRequired
}

export default Toolbar;
