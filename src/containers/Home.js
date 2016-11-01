import React, {Component} from 'react';
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
        <Toolbar {...this.props}/>
        <Calendar
          isInfoOpen={this.props.event.isInfoOpen}
          events={this.props.event.events}
          setEventModal={this.props.actions.setEventModal}
          activeEvent={this.props.event.activeEvent}
          setActiveEvent={this.props.actions.setActiveEvent}
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


export default connect(mapStateToProps,mapDispatchToProps)(Home);
