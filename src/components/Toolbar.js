import React, {Component} from 'react';
import {MenuItem, Nav, NavItem, Navbar, NavDropdown, Modal} from 'react-bootstrap';
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

    return(
      <div>
        <Modal
          show={this.props.event.isEditOpen}
          onHide={this.setModalOpen.bind(this, false)}
          backdrop='static'
        >
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
              <a href='/home'>Actemotion</a>
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
              <NavItem eventKey={5} onClick={this.setModalOpen.bind(this, true)}>
                Notifications
              </NavItem>
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

export default Toolbar;
