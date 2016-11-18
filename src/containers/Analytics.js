import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Nav, NavItem, Grid, Row, Col} from 'react-bootstrap';
import * as Actions from '../actions';
import Toolbar from '../components/Toolbar';
import DivStyles from '../styles/DivStyles';

import FeelingsPieChart from '../components/charts/FeelingsPieChart';
import AnalyticsStyles from '../styles/AnalyticsStyles';
import EnergyPieChart from '../components/charts/EnergyPieChart';
import EmotionBarChart from '../components/charts/EmotionBarChart';
import SadBarChart from '../components/charts/SadBarChart';
require('../styles/style.css');

class Analytics extends Component {

  constructor() {
    super();
    this.state = {
      displayedGraph: null
    }
  }

  componentWillMount() {
    var graph = this.createGraph('FeelingsPieChart');
    this.setState({displayedGraph: graph});
  }

  handleClick(type) {
    var graph = this.createGraph(type);
    this.setState({displayedGraph: graph})
  }

  createGraph(type) {
    switch(type){
      case 'FeelingsPieChart':
        return (
          <div style={AnalyticsStyles.pieChart}>
            <h3>Overall Emotions Week of 10/30</h3>
            <FeelingsPieChart events={this.props.event.events}></FeelingsPieChart>
          </div>
        );

      case 'EnergyPieChart':
        return (
          <div style={AnalyticsStyles.pieChart}>
            <h3>Energy Level Week of 10/30</h3>
            <EnergyPieChart events={this.props.event.events}></EnergyPieChart>
          </div>
        );

      case 'EmotionBarChart':
        return (
          <div style={AnalyticsStyles.barChart}>
            <h3>Happy Events During the Week 10/30</h3>
            <EmotionBarChart events={this.props.event.events}></EmotionBarChart>
          </div>
        );

      case 'SadBarChart':
        return (
          <div style={AnalyticsStyles.barChart}>
            <h3>Sad Events During the Week 10/30</h3>
            <SadBarChart events={this.props.event.events}></SadBarChart>
          </div>
        );

      default:
        return (
          <div>
            <h3>Overall Emotions Week of 10/30</h3>
            <FeelingsPieChart events={this.props.event.events}></FeelingsPieChart>
          </div>
        );
    }
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
          setNormalEvents={this.props.actions.setNormalEvents}
          location={this.props.location}
        />
        <h2 style={{textAlign: 'center', fontSize: '30px'}}>Your Emotions</h2>
        <br></br>
        <p></p><p></p>

        <div style={DivStyles.twoColumnSettings}>
          <h3>Available Graphs</h3>
          <Nav>
            <NavItem eventKey={1} onClick={this.handleClick.bind(this, 'FeelingsPieChart')}>Feelings Pie Chart</NavItem>
            <NavItem eventKey={2} onClick={this.handleClick.bind(this, 'EnergyPieChart')}>Energy Pie Chart</NavItem>
            <NavItem eventKey={3} onClick={this.handleClick.bind(this, 'EmotionBarChart')}>Emotion Bar Chart</NavItem>
            <NavItem eventKey={4} onClick={this.handleClick.bind(this, 'SadBarChart')}>Sad Bar Chart</NavItem>
          </Nav>
        </div>

        <div style={DivStyles.twoColumnSettings}>
          <div>{this.state.displayedGraph}</div>
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

Analytics.propTypes = {
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

export default connect(mapStateToProps,mapDispatchToProps)(Analytics);
