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
import AngryBarChart from '../components/charts/AngryBarChart';
import AnxiousBarChart from '../components/charts/AnxiousBarChart';
import DisgustBarChart from '../components/charts/DisgustBarChart';
import EnvyBarChart from '../components/charts/EnvyBarChart';
import ExcitedBarChart from '../components/charts/ExcitedBarChart';
import FearBarChart from '../components/charts/FearBarChart';
import HopeBarChart from '../components/charts/HopeBarChart';
import JoyBarChart from '../components/charts/JoyBarChart';
import SurpriseBarChart from '../components/charts/SurpriseBarChart';
import CSPBarChart from '../components/charts/CSPBarChart';
require('../styles/style.css');

class Analytics extends Component {

  constructor() {
    super();
    this.state = {
      activeKey: 1,
      displayedGraph: null,
      size: 0
    }
  }

  componentWillMount() {
    var graph = this.createGraph('');
    this.setState({displayedGraph: graph});
    this.setState({activeKey: 1});
    this.setState({size: this.props.event.events.length})
  }

  // workaround to refresh graphs
  componentWillReceiveProps() {
    if (this.props.event.events.length > this.state.size) {
      this.handleClick('FeelingsPieChart');
    }
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
            <p>The percentage of time you have felt each energy level where 1 is least energetic and 5 is most energetic.</p>
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

      case 'AngryBarChart':
        this.setState({activeKey: 5});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h4 style={{textAlign: 'center', fontSize: '20px'}}>All "Angry" Events</h4>
            <AngryBarChart events={this.props.event.events}></AngryBarChart>
            <p>These events made you angry for the week</p>
          </div>
        );

      case 'AnxiousBarChart':
        this.setState({activeKey: 5});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h4 style={{textAlign: 'center', fontSize: '20px'}}>All "Anxious" Events</h4>
            <AnxiousBarChart events={this.props.event.events}></AnxiousBarChart>
            <p>These events made you anxious for the week</p>
          </div>
        );

      case 'DisgustBarChart':
        this.setState({activeKey: 5});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h4 style={{textAlign: 'center', fontSize: '20px'}}>All "Disgust" Events</h4>
            <DisgustBarChart events={this.props.event.events}></DisgustBarChart>
            <p>These events made you disgusted for the week</p>
          </div>
        );

      case 'EnvyBarChart':
        this.setState({activeKey: 5});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h4 style={{textAlign: 'center', fontSize: '20px'}}>All "Envy" Events</h4>
            <EnvyBarChart events={this.props.event.events}></EnvyBarChart>
            <p>These events made you envious for the week</p>
          </div>
        );

      case 'ExcitedBarChart':
        this.setState({activeKey: 5});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h4 style={{textAlign: 'center', fontSize: '20px'}}>All "Excited" Events</h4>
            <ExcitedBarChart events={this.props.event.events}></ExcitedBarChart>
            <p>These events made you excited for the week</p>
          </div>
        );

      case 'FearBarChart':
        this.setState({activeKey: 5});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h4 style={{textAlign: 'center', fontSize: '20px'}}>All "Fear" Events</h4>
            <FearBarChart events={this.props.event.events}></FearBarChart>
            <p>These events made you fear for the week</p>
          </div>
        );

      case 'HopeBarChart':
        this.setState({activeKey: 5});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h4 style={{textAlign: 'center', fontSize: '20px'}}>All "Hope" Events</h4>
            <HopeBarChart events={this.props.event.events}></HopeBarChart>
            <p>These events made you hopeful for the week</p>
          </div>
        );

      case 'JoyBarChart':
        this.setState({activeKey: 5});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h4 style={{textAlign: 'center', fontSize: '20px'}}>All "Joy" Events</h4>
            <JoyBarChart events={this.props.event.events}></JoyBarChart>
            <p>These events made you joyful for the week</p>
          </div>
        );

      case 'SurpriseBarChart':
        this.setState({activeKey: 5});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h4 style={{textAlign: 'center', fontSize: '20px'}}>All "Surprise" Events</h4>
            <SurpriseBarChart events={this.props.event.events}></SurpriseBarChart>
            <p>These events made you surprised for the week</p>
          </div>
        );
      
      
      case 'CSPBarChart':
        this.setState({activeKey: 6});
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
      <link 
        href='https://fonts.googleapis.com/css?family=Raleway'
        rel='stylesheet'
        type='text/css'
       />
       <link 
        href='https://fonts.googleapis.com/css?family=Muli'
        rel='stylesheet'
        type='text/css'
       />
       <link 
        href='https://fonts.googleapis.com/css?family=Montserrat'
        rel='stylesheet'
        type='text/css'
       />
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
          eventTypes={this.props.event.eventTypes}
          addNewType={this.props.actions.addNewType}
          isNewTypeOpen={this.props.event.isNewTypeOpen}
          setNewTypeModal={this.props.actions.setNewTypeModal}
        />
        <h2 style={{textAlign: 'center', fontSize: '30px'}}>Emotion Data Analytics</h2>
        <br></br>
        <p></p><p></p>

        <div style={DivStyles.twoColumnSettings}>
          <h2>Available Graphs</h2>
          <Nav activeKey={this.state.activeKey}>
            <NavItem eventKey={1} onClick={this.handleClick.bind(this, 'FeelingsPieChart')}>All Emotions Pie Chart</NavItem>
            <NavItem eventKey={2} onClick={this.handleClick.bind(this, 'EnergyPieChart')}>Energy Levels Pie Chart</NavItem>
            <NavItem eventKey={3} onClick={this.handleClick.bind(this, 'CSPBarChart')}>Average Confidence, Satisfaction, Productivity Levels</NavItem>
            <NavItem eventKey={4} onClick={this.handleClick.bind(this, 'EmotionBarChart')}>Happy Events Bar Chart</NavItem>
            <NavItem eventKey={5} onClick={this.handleClick.bind(this, 'SadBarChart')}>Sad Events Bar Chart</NavItem>
            <NavItem eventKey={6} onClick={this.handleClick.bind(this, 'AnxiousBarChart')}>Anxious Events Bar Chart</NavItem>
            <NavItem eventKey={7} onClick={this.handleClick.bind(this, 'DisgustBarChart')}>Disgust Events Bar Chart</NavItem>
            <NavItem eventKey={8} onClick={this.handleClick.bind(this, 'EnvyBarChart')}>Envy Events Bar Chart</NavItem>
            <NavItem eventKey={9} onClick={this.handleClick.bind(this, 'ExcitedBarChart')}>Excited Events Bar Chart</NavItem>
            <NavItem eventKey={10} onClick={this.handleClick.bind(this, 'FearBarChart')}>Fear Events Bar Chart</NavItem>
            <NavItem eventKey={11} onClick={this.handleClick.bind(this, 'HopeBarChart')}>Hope Events Bar Chart</NavItem>
            <NavItem eventKey={12} onClick={this.handleClick.bind(this, 'JoyBarChart')}>Joy Events Bar Chart</NavItem>
            <NavItem eventKey={13} onClick={this.handleClick.bind(this, 'AngryBarChart')}>Angry Events Bar Chart</NavItem>
            <NavItem eventKey={14} onClick={this.handleClick.bind(this, 'SurpriseBarChart')}>Surprise Events Bar Chart</NavItem>          </Nav>

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
    setNormalEvents: PropTypes.func.isRequired,
    addNewType: PropTypes.func.isRequired,
    setNewTypeModal: PropTypes.func.isRequired
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
    confirmedEdit: PropTypes.bool.isRequired,
    eventTypes: PropTypes.array.isRequired,
    isNewTypeOpen: PropTypes.bool.isRequired
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(Analytics);
