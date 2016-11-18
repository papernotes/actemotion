import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import {Button} from 'react-bootstrap';
import Calendar from '../components/Calendar';
import Toolbar from '../components/Toolbar';

class Home2 extends Component {
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
        color: 'black'
      }
    }
    else {
      messageStyles = {
        color: 'white',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
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
          activeEvent={this.props.event.activeEvent}
          setActiveEvent={this.props.actions.setActiveEvent}
          showMessage={this.state.showMessage}
          setNormalEvents={this.props.actions.setNormalEvents}
          location={this.props.location}
          analyticsTitle={'Your Emotions'}
          secondaryRoute={'/home2'}
          analyticsRoute={'/analytics2'}
        />
        <div style={{textAlign: 'center'}}>
          <p style={messageStyles}>Note! If you want to edit or add events, go back to event view!</p>
          <Button disabled={normalActive} onClick={this.showNormalEvents.bind(this)}>Event View</Button>
          <Button disabled={emotionActive} onClick={this.showEmotionEvents.bind(this)}>Emotion View</Button>
          <p><b>Today is {new Date().toDateString()}</b></p>
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
          setConfirmEdit={this.props.actions.setConfirmEdit}
          confirmedEdit={this.props.event.confirmedEdit}
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

Home2.propTypes = {
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

export default connect(mapStateToProps,mapDispatchToProps)(Home2);
