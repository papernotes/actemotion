import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Calendar from '../components/Calendar';
import Toolbar from '../components/Toolbar';

class Home extends Component {

  // render the home page and pass the 'settings' as a prop in Box
  render() {
    return(
      <div>
        <Toolbar
          setModalOpen={this.props.actions.setModalOpen}
          isEditOpen={this.props.event.isEditOpen}
          addEvent={this.props.actions.addEvent}
          notificationsOn={this.props.home.notificationsOn}
          setNotifications={this.props.actions.setNotifications}
        />
        <Calendar
          isInfoOpen={this.props.event.isInfoOpen}
          events={this.props.event.events}
          setEventModal={this.props.actions.setEventModal}
          activeEvent={this.props.event.activeEvent}
          setActiveEvent={this.props.actions.setActiveEvent}
          deleteEvent={this.props.actions.deleteEvent}
          editEvent={this.props.actions.editEvent}
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
    editEvent: PropTypes.func.isRequired,
    setNotifications: PropTypes.func.isRequired
  }),
  home: PropTypes.shape({
    notificationsOn: PropTypes.bool.isRequired
  }),
  event: PropTypes.shape({
    isInfoOpen: PropTypes.bool.isRequired,
    isEditOpen: PropTypes.bool.isRequired,
    events: PropTypes.array.isRequired,
    activeEvent: PropTypes.object.isRequired
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
