import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Nav, NavItem} from 'react-bootstrap';
import * as Actions from '../actions';
import Toolbar from '../components/Toolbar';
import DivStyles from '../styles/DivStyles';

import FeelingsPieChart from '../components/charts/FeelingsPieChart';
import AnalyticsStyles from '../styles/AnalyticsStyles';
import EnergyPieChart from '../components/charts/EnergyPieChart';
import EmotionBarChart from '../components/charts/EmotionBarChart';
import SadBarChart from '../components/charts/SadBarChart';
import CSPBarChart from '../components/charts/CSPBarChart';
require('../styles/style.css');

class Analytics extends Component {

  constructor() {
    super();
    this.state = {
      activeKey: 1,
      displayedGraph: null
    }
  }

  componentWillMount() {
    var graph = this.createGraph('');
    this.setState({displayedGraph: graph});
    this.setState({activeKey: 1});
  }

  handleClick(type) {
    var graph = this.createGraph(type);
    this.setState({displayedGraph: graph})
  }

  createGraph(type) {
    switch(type){
      case 'FeelingsPieChart':
        this.setState({activeKey: 1});
        return (
          <div style={AnalyticsStyles.pieChart}>
            <h4 style={{textAlign: 'center', fontSize: '20px'}}>Emotions for All Events</h4>
            <FeelingsPieChart events={this.props.event.events}></FeelingsPieChart>
            <p>The percentage of time that you have felt each emotion</p>
          </div>
        );

      case 'EnergyPieChart':
        this.setState({activeKey: 2});
        return (
          <div style={AnalyticsStyles.pieChart}>
            <h4 style={{textAlign: 'center', fontSize: '20px'}}>Energy Levels for All Events</h4>
            <EnergyPieChart events={this.props.event.events}></EnergyPieChart>
            <p>The percentage of time you have felt each energy level </p>
          </div>
        );

      case 'EmotionBarChart':
        this.setState({activeKey: 3});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h4 style={{textAlign: 'center', fontSize: '20px'}}>All "Happy" Events</h4>
            <EmotionBarChart events={this.props.event.events}></EmotionBarChart>
            <p>These events made you happy for the week!</p>
          </div>
        );

      case 'SadBarChart':
        this.setState({activeKey: 4});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h4 style={{textAlign: 'center', fontSize: '20px'}}>All "Sad" Events</h4>
            <SadBarChart events={this.props.event.events}></SadBarChart>
            <p>These events made you sad for the week</p>
          </div>
        );

      case 'CSPBarChart':
        this.setState({activeKey: 5});
        return (
          <div style={AnalyticsStyles.barChart}>
          <h4 style={{textAlign: 'center', fontSize: '20px'}}>Average levels of Confidence, Satisfaciton, and Productivity</h4>
            <CSPBarChart events={this.props.event.events}></CSPBarChart>
            <p>Your average confidence, satisfaction, and productivity.</p>
          </div>
        );

      default:
        this.setState({activeKey: 1});
        return (
          <div>
            <div style={AnalyticsStyles.pieChart}>
            <h4 style={{textAlign: 'center', fontSize: '20px'}}>All Event Emotions</h4>
            <FeelingsPieChart events={this.props.event.events}></FeelingsPieChart>
            <p>The percentage of time that you have felt each emotion</p>
          </div>
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
          analyticsTitle={'Emotion Data Analytics'}
        />
        <h2 style={{textAlign: 'center', fontSize: '30px'}}>Your Emotions</h2>
        <br></br>
        <p></p><p></p>

        <div style={DivStyles.twoColumnSettings}>
          <h2>Available Graphs</h2>
          <Nav activeKey={this.state.activeKey}>
            <NavItem eventKey={1} onClick={this.handleClick.bind(this, 'FeelingsPieChart')}>All Emotions Pie Chart</NavItem>
            <NavItem eventKey={2} onClick={this.handleClick.bind(this, 'EnergyPieChart')}>Energy Levels Pie Chart</NavItem>
            <NavItem eventKey={3} onClick={this.handleClick.bind(this, 'EmotionBarChart')}>Happy Events Bar Chart</NavItem>
            <NavItem eventKey={4} onClick={this.handleClick.bind(this, 'SadBarChart')}>Sad Events Bar Chart</NavItem>
            <NavItem eventKey={5} onClick={this.handleClick.bind(this, 'CSPBarChart')}>Average Confidence, Satisfaction, Productivity Levels</NavItem>
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

export default connect(mapStateToProps,mapDispatchToProps)(Analytics);
