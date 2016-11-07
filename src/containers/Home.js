import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import {Button} from 'react-bootstrap';
import Calendar from '../components/Calendar';
import Toolbar from '../components/Toolbar';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showMessage: false
    }
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
    var messageStyles = {};
    var normalActive = !this.state.showMessage;
    var emotionActive = this.state.showMessage;

    if (this.state.showMessage) {
      messageStyles = {
        color: 'rgb(169, 68, 66)'
      }
    }
    else {
      messageStyles = {
        color: 'white'
      }
    }

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
        />
        <div style={{textAlign: 'center'}}>
          <p style={messageStyles}>Events in emotion view can't be editted</p>
          <Button disabled={normalActive} onClick={this.showNormalEvents.bind(this)}>Event View</Button>
          <Button disabled={emotionActive} onClick={this.showEmotionEvents.bind(this)}>Emotion View</Button>
        </div>
        <Calendar
          isInfoOpen={this.props.event.isInfoOpen}
          events={this.props.event.renderEvents}
          setEventModal={this.props.actions.setEventModal}
          activeEvent={this.props.event.activeEvent}
          setActiveEvent={this.props.actions.setActiveEvent}
          deleteEvent={this.props.actions.deleteEvent}
          setEditModal={this.props.actions.setEditModal}
          isEditOpen={this.props.event.isEditOpen}
          setConfirmModal={this.props.actions.setConfirmModal}
          isConfirmOpen={this.props.event.isConfirmOpen}
          saveEdit={this.props.actions.saveEdit}
          showingNormalEvents={this.props.event.showingNormalEvents}
          setConfirmAddition={this.props.actions.setConfirmAddition}
        />
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
    setConfirmAddition: PropTypes.func.isRequired
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
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
