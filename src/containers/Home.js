import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Toolbar from '../components/Toolbar';
import DivStyles from '../styles/DivStyles';
import List from '../components/List';
import {Well, Modal} from 'react-bootstrap';
require('../styles/style.css');
import EventInfo from '../components/EventInfo';
import EditEvent from '../components/EditEvent';
import DeleteEvent from '../components/DeleteEvent';
import ConfirmEdit from '../components/ConfirmEdit';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showMessage: false
    }
  }

  setModalOpen(bool) {
    this.props.setModalOpen(bool);
  }

  showNormalEvents() {
    this.props.actions.setNormalEvents(true);
    this.setState({showMessage: false});
  }

  showEmotionEvents() {
    this.props.actions.setNormalEvents(false);
    this.setState({showMessage: true});
  }

  showEventInfo(event, bool) {
    if (this.props.showingNormalEvents) {
      this.props.actions.setActiveEvent(event);
      this.props.actions.setEventModal(bool);
    }
  }

  hideEventInfo() {
    this.props.actions.setEventModal(false);
  }

  hideEditModal() {
    this.props.actions.setEditModal(false);
  }

  hideConfirmModal() {
    this.props.actions.setConfirmModal(false);
  }

  hideConfirmEdit() {
    this.props.actions.setConfirmEdit(false);
  }

  render() {
    return(
      <div>
        <Toolbar
          setModalOpen={this.props.actions.setModalOpen}
          isAddOpen={this.props.event.isAddOpen}
          addEvent={this.props.actions.addEvent}
          notificationsOn={this.props.home.notificationsOn}
          setNotifications={this.props.actions.setNotifications}
          confirmedAddition={this.props.event.confirmedAddition}
          setConfirmAddition={this.props.actions.setConfirmAddition}
          activeEvent={this.props.event.activeEvent}
          setActiveEvent={this.props.actions.setActiveEvent}
          showMessage={this.state.showMessage}
          setNormalEvents={this.props.actions.setNormalEvents}
          location={this.props.location}
          analyticsTitle={'Emotion Data Analytics'}
        />

        <Modal
          show={this.props.event.isInfoOpen}
          onHide={this.hideEventInfo.bind(this)}
          backdrop='static'
        >
          <Modal.Header closeButton={true}>
            <Modal.Title>{this.props.event.activeEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EventInfo
              setEventModal={this.props.actions.setEventModal}
              activeEvent={this.props.event.activeEvent}
              deleteEvent={this.props.actions.deleteEvent}
              setEditModal={this.props.actions.setEditModal}
              setConfirmModal={this.props.actions.setConfirmModal}
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={this.props.event.isEditOpen}
          onHide={this.hideEditModal.bind(this)}
          backdrop='static'
        >
          <Modal.Header closeButton={true}>
            <Modal.Title>Editting: {this.props.event.activeEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditEvent
              setEventModal={this.props.actions.setEventModal}
              activeEvent={this.props.event.activeEvent}
              deleteEvent={this.props.actions.deleteEvent}
              setEditModal={this.props.actions.setEditModal}
              saveEdit={this.props.actions.saveEdit}
              setConfirmEdit={this.props.actions.setConfirmEdit}
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={this.props.actions.confirmedEdit}
          onHide={this.hideConfirmEdit.bind(this)}
          backdrop='static'
        >
          <Modal.Header closeButton={true}>
            <Modal.Title>Confirmed the edit!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ConfirmEdit
              setConfirmEdit={this.props.actions.setConfirmEdit}
              activeEvent={this.props.event.activeEvent}
            />
          </Modal.Body>
        </Modal>


        <Modal
          show={this.props.event.isConfirmOpen}
          onHide={this.hideConfirmModal.bind(this)}
          backdrop='static'
        >
          <Modal.Header closeButton={true}>
            <Modal.Title>DELETING: {this.props.event.activeEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DeleteEvent
              deleteEvent={this.props.actions.deleteEvent}
              setConfirmModal={this.props.actions.setConfirmModal}
              setEventModal={this.props.actions.setEventModal}
              activeEvent={this.props.event.activeEvent}
            />
          </Modal.Body>
        </Modal>


        <h2 style={{textAlign: 'center', fontSize: '30px'}}>Home</h2>
        <div style={{width: '100%'}}>
          <div style={DivStyles.twoColumnSettings}>
            <h2>Past Events</h2>
            <p>Scroll through to see your events!</p>
            <List 
              events={this.props.event.events}
              setActiveEvent={this.props.actions.setActiveEvent}
              setEventModal={this.props.actions.setEventModal}
              setEditModal={this.props.actions.setEditModal}
              setConfirmEdit={this.props.actions.setConfirmEdit}
            />
          </div>
          <div style={DivStyles.twoColumnSettings}>
            <h2 className="wellTitle">How to use this site</h2>
            <Well> <p>This application allows users to track their emotions in respect to each event that they attend.</p> <p>Add Events from the Toolbar.</p>
            <p>Look at and edit your events in the Calendar of Events view. </p> <p>View analytics about all of your emotions in the Emotion Data Analytics tab.</p>
            </Well>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    home: state.default.home,
    event: state.default.event
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

Home.propTypes = {
  analyticsTitle: PropTypes.string,
  location: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    setModalOpen: PropTypes.func.isRequired,
    addEvent: PropTypes.func.isRequired,
    setEventModal: PropTypes.func.isRequired,
    setActiveEvent: PropTypes.func.isRequired,
    deleteEvent: PropTypes.func.isRequired,
    setEditModal: PropTypes.func.isRequired,
    setNotifications: PropTypes.func.isRequired,
    setConfirmModal: PropTypes.func.isRequired,
    saveEdit: PropTypes.func.isRequired,
    setConfirmAddition: PropTypes.func.isRequired,
    setConfirmEdit: PropTypes.func.isRequired,
    setNormalEvents: PropTypes.func.isRequired
  }),
  home: PropTypes.shape({
    notificationsOn: PropTypes.bool
  }),
  event: PropTypes.shape({
    isInfoOpen: PropTypes.bool.isRequired,
    isAddOpen: PropTypes.bool.isRequired,
    events: PropTypes.array.isRequired,
    renderEvents: PropTypes.array.isRequired,
    activeEvent: PropTypes.object.isRequired,
    isEditOpen: PropTypes.bool.isRequired,
    isConfirmOpen: PropTypes.bool.isRequired,
    showingNormalEvents: PropTypes.bool.isRequired,
    confirmedAddition: PropTypes.bool.isRequired,
    confirmedEdit: PropTypes.bool.isRequired
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
