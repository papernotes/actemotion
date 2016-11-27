import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Toolbar from '../components/Toolbar';
import DivStyles from '../styles/DivStyles';
import List from '../components/List';
import {Well} from 'react-bootstrap';
require('../styles/style.css');

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
        <h2 style={{textAlign: 'center', fontSize: '30px'}}>Home</h2>
        <div style={{width: '100%'}}>
          <div style={DivStyles.twoColumnSettings}>
            <h2>Past Events</h2>
            <p>Scroll through to see your events!</p>
            <List events={this.props.event.events}/>
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
