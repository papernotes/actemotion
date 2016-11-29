import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {DropdownButton, MenuItem} from 'react-bootstrap';
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

import EventNamesChart from '../components/charts/EventNamesChart';
import HappyEventNamesChart from '../components/charts/HappyEventNamesChart'
import SadEventNamesChart from '../components/charts/SadEventNamesChart'
import AnxiousEventNamesChart from '../components/charts/AnxiousEventNamesChart'
import DisgustEventNamesChart from '../components/charts/DisgustEventNamesChart'
import EnvyEventNamesChart from '../components/charts/EnvyEventNamesChart'
import ExcitedEventNamesChart from '../components/charts/ExcitedEventNamesChart'
import FearEventNamesChart from '../components/charts/FearEventNamesChart'
import HopeEventNamesChart from '../components/charts/HopeEventNamesChart'
import JoyEventNamesChart from '../components/charts/JoyEventNamesChart'
import AngryEventNamesChart from '../components/charts/AngryEventNamesChart'
import SurpriseEventNamesChart from '../components/charts/SurpriseEventNamesChart'

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
            <h3>Emotions for All Events</h3>
            <FeelingsPieChart events={this.props.event.events}></FeelingsPieChart>
            <p>The percentage of time that you have felt each emotion</p>
          </div>
        );

      case 'EnergyPieChart':
        this.setState({activeKey: 2});
        return (
          <div style={AnalyticsStyles.pieChart}>
            <h3>Energy Levels for All Events</h3>
            <EnergyPieChart events={this.props.event.events}></EnergyPieChart>
            <p>The percentage of time you have felt each energy level where 1 is least energetic and 5 is most energetic.</p>
          </div>
        );

      case 'EmotionBarChart':
        this.setState({activeKey: 3});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h3>All "Happy" Type Events</h3>
            <EmotionBarChart events={this.props.event.events}></EmotionBarChart>
            <p>These types of events made you happy !</p>
          </div>
        );

      case 'SadBarChart':
        this.setState({activeKey: 4});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h3>All "Sad" Type Events</h3>
            <SadBarChart events={this.props.event.events}></SadBarChart>
            <p>These types of events made you sad </p>
          </div>
        );

      case 'AngryBarChart':
        this.setState({activeKey: 5});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h3>All "Angry" Type Events</h3>
            <AngryBarChart events={this.props.event.events}></AngryBarChart>
            <p>These types of events made you angry </p>
          </div>
        );

      case 'AnxiousBarChart':
        this.setState({activeKey: 6});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h3>All "Anxious" Type Events</h3>
            <AnxiousBarChart events={this.props.event.events}></AnxiousBarChart>
            <p>These types of events made you anxious </p>
          </div>
        );

      case 'DisgustBarChart':
        this.setState({activeKey: 7});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h3>All "Disgust" Type Events</h3>
            <DisgustBarChart events={this.props.event.events}></DisgustBarChart>
            <p>These types of events made you disgusted </p>
          </div>
        );

      case 'EnvyBarChart':
        this.setState({activeKey: 8});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h3>All "Envy" Type Events</h3>
            <EnvyBarChart events={this.props.event.events}></EnvyBarChart>
            <p>These types of events made you envious </p>
          </div>
        );

      case 'ExcitedBarChart':
        this.setState({activeKey: 9});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h3>All "Excited" Type Events</h3>
            <ExcitedBarChart events={this.props.event.events}></ExcitedBarChart>
            <p>These types of events made you excited </p>
          </div>
        );

      case 'FearBarChart':
        this.setState({activeKey: 10});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h3>All "Fear" Type Events</h3>
            <FearBarChart events={this.props.event.events}></FearBarChart>
            <p>These types of events made you fear </p>
          </div>
        );

      case 'HopeBarChart':
        this.setState({activeKey: 11});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h3>All "Hope" Type Events</h3>
            <HopeBarChart events={this.props.event.events}></HopeBarChart>
            <p>These types of events made you hopeful </p>
          </div>
        );

      case 'JoyBarChart':
        this.setState({activeKey: 12});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h3>All "Joy" Type Events</h3>
            <JoyBarChart events={this.props.event.events}></JoyBarChart>
            <p>These types of events made you joyful </p>
          </div>
        );

      case 'SurpriseBarChart':
        this.setState({activeKey: 13});
        return (
          <div style={AnalyticsStyles.barChart}>
            <h3>All "Surprise" Type Events</h3>
            <SurpriseBarChart events={this.props.event.events}></SurpriseBarChart>
            <p>These types of events made you surprised </p>
          </div>
        );
      
      
      case 'CSPBarChart':
        this.setState({activeKey: 14});
        return (
          <div style={AnalyticsStyles.barChart}>
          <h3>Average levels of Confidence, Satisfaction, and Productivity</h3>
            <CSPBarChart events={this.props.event.events}></CSPBarChart>
            <p>Your average confidence, satisfaction, and productivity.</p>
          </div>
        );

      case 'EventNamesChart':
        this.setState({activeKey: 15});
        return (
          <div style={AnalyticsStyles.pieChart}>
          <h3>All Event Names</h3>
            <EventNamesChart events={this.props.event.events}></EventNamesChart>
            <p>The number of different events based on their titles</p>
          </div>
        );

      case 'HappyEventNamesChart':
        this.setState({activeKey: 15});
        return (
          <div style={AnalyticsStyles.pieChart}>
          <h3>All Happy Event Names</h3>
            <HappyEventNamesChart events={this.props.event.events}></HappyEventNamesChart>
            <p>The number of different happy events based on their titles</p>
          </div>
        );

      case 'SadEventNamesChart':
        this.setState({activeKey: 15});
        return (
          <div style={AnalyticsStyles.pieChart}>
          <h3>All Sad Event Names</h3>
            <SadEventNamesChart events={this.props.event.events}></SadEventNamesChart>
            <p>The number of different sad events based on their titles</p>
          </div>
        );

      case 'AnxiousEventNamesChart':
        this.setState({activeKey: 15});
        return (
          <div style={AnalyticsStyles.pieChart}>
          <h3>All Anxious Event Names</h3>
            <AnxiousEventNamesChart events={this.props.event.events}></AnxiousEventNamesChart>
            <p>The number of different anxious events based on their titles</p>
          </div>
        );

      case 'DisgustEventNamesChart':
        this.setState({activeKey: 15});
        return (
          <div style={AnalyticsStyles.pieChart}>
          <h3>All Disgust Event Names</h3>
            <DisgustEventNamesChart events={this.props.event.events}></DisgustEventNamesChart>
            <p>The number of different disgust events based on their titles</p>
          </div>
        );

      case 'EnvyEventNamesChart':
        this.setState({activeKey: 15});
        return (
          <div style={AnalyticsStyles.pieChart}>
          <h3>All Envy Event Names</h3>
            <EnvyEventNamesChart events={this.props.event.events}></EnvyEventNamesChart>
            <p>The number of different envy events based on their titles</p>
          </div>
        );

      case 'ExcitedEventNamesChart':
        this.setState({activeKey: 15});
        return (
          <div style={AnalyticsStyles.pieChart}>
          <h3>All Excited Event Names</h3>
            <ExcitedEventNamesChart events={this.props.event.events}></ExcitedEventNamesChart>
            <p>The number of different excited events based on their titles</p>
          </div>
        );

      case 'FearEventNamesChart':
        this.setState({activeKey: 15});
        return (
          <div style={AnalyticsStyles.pieChart}>
          <h3>All Fear Event Names</h3>
            <FearEventNamesChart events={this.props.event.events}></FearEventNamesChart>
            <p>The number of different fear events based on their titles</p>
          </div>
        );

      case 'HopeEventNamesChart':
        this.setState({activeKey: 15});
        return (
          <div style={AnalyticsStyles.pieChart}>
          <h3>All Hope Event Names</h3>
            <HopeEventNamesChart events={this.props.event.events}></HopeEventNamesChart>
            <p>The number of different hope events based on their titles</p>
          </div>
        );

      case 'JoyEventNamesChart':
        this.setState({activeKey: 15});
        return (
          <div style={AnalyticsStyles.pieChart}>
          <h3>All Joy Event Names</h3>
            <JoyEventNamesChart events={this.props.event.events}></JoyEventNamesChart>
            <p>The number of different joy events based on their titles</p>
          </div>
        );

      case 'AngryEventNamesChart':
        this.setState({activeKey: 15});
        return (
          <div style={AnalyticsStyles.pieChart}>
          <h3>All Angry Event Names</h3>
            <AngryEventNamesChart events={this.props.event.events}></AngryEventNamesChart>
            <p>The number of different angry events based on their titles</p>
          </div>
        );

      case 'SurpriseEventNamesChart':
        this.setState({activeKey: 15});
        return (
          <div style={AnalyticsStyles.pieChart}>
          <h3>All Surprise Event Names</h3>
            <SurpriseEventNamesChart events={this.props.event.events}></SurpriseEventNamesChart>
            <p>The number of different surprise events based on their titles</p>
          </div>
        );

      default:
        this.setState({activeKey: 1});
        return (
          <div>
            <div style={AnalyticsStyles.pieChart}>
            <h3>All Event Emotions</h3>
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
        <h2 style={{textAlign: 'center'}}>Your Emotions</h2>
        <br></br><br></br>

        <div style={DivStyles.twoColumnSettings}>
          <h3>Available Graphs</h3>
          <br></br>
          <DropdownButton title="General Graphs" id="bg-vertical-dropdown-1" className="dropDown">
              <MenuItem className="dropItem" eventKey="1" onClick={this.handleClick.bind(this, 'FeelingsPieChart')}>All Emotions</MenuItem>
              <MenuItem className="dropItem" eventKey="4" onClick={this.handleClick.bind(this, 'EventNamesChart')}>All Events</MenuItem>
              <MenuItem className="dropItem" eventKey="3" onClick={this.handleClick.bind(this, 'CSPBarChart')}>Average Confidence, Satisfaction, & Productivity Levels</MenuItem>
              <MenuItem className="dropItem" eventKey="2" onClick={this.handleClick.bind(this, 'EnergyPieChart')}>Energy Levels</MenuItem> 
          </DropdownButton>   
          <br></br>
          <DropdownButton title="Event Name Graphs" id="bg-vertical-dropdown-2" className="dropDown">
              <MenuItem className="dropItem" eventKey="16" onClick={this.handleClick.bind(this, 'AngryEventNamesChart')}>Angry</MenuItem>
              <MenuItem className="dropItem" eventKey="16" onClick={this.handleClick.bind(this, 'AnxiousEventNamesChart')}>Anxious</MenuItem>
              <MenuItem className="dropItem" eventKey="16" onClick={this.handleClick.bind(this, 'DisgustEventNamesChart')}>Disgust</MenuItem>
              <MenuItem className="dropItem" eventKey="16" onClick={this.handleClick.bind(this, 'EnvyEventNamesChart')}>Envy</MenuItem>
              <MenuItem className="dropItem" eventKey="16" onClick={this.handleClick.bind(this, 'ExcitedEventNamesChart')}>Excited</MenuItem>
              <MenuItem className="dropItem" eventKey="16" onClick={this.handleClick.bind(this, 'FearEventNamesChart')}>Fear</MenuItem>
              <MenuItem className="dropItem" eventKey="16" onClick={this.handleClick.bind(this, 'HappyEventNamesChart')}>Happy</MenuItem>
              <MenuItem className="dropItem" eventKey="16" onClick={this.handleClick.bind(this, 'HopeEventNamesChart')}>Hope</MenuItem>
              <MenuItem className="dropItem" eventKey="16" onClick={this.handleClick.bind(this, 'JoyEventNamesChart')}>Joy</MenuItem>
              <MenuItem className="dropItem" eventKey="16" onClick={this.handleClick.bind(this, 'SadEventNamesChart')}>Sad</MenuItem>
              <MenuItem className="dropItem" eventKey="16" onClick={this.handleClick.bind(this, 'SurpriseEventNamesChart')}>Surprised</MenuItem>
          </DropdownButton> 
          <DropdownButton title="Event Type Graphs" id="bg-vertical-dropdown-3" className="dropDown">
              <MenuItem className="dropItem" eventKey="7" onClick={this.handleClick.bind(this, 'AnxiousBarChart')}>Anxious</MenuItem>
              <MenuItem className="dropItem" eventKey="14" onClick={this.handleClick.bind(this, 'AngryBarChart')}>Angry</MenuItem>
              <MenuItem className="dropItem" eventKey="8" onClick={this.handleClick.bind(this, 'DisgustBarChart')}>Disgust</MenuItem>
              <MenuItem className="dropItem" eventKey="9" onClick={this.handleClick.bind(this, 'EnvyBarChart')}>Envy</MenuItem>
              <MenuItem className="dropItem" eventKey="10" onClick={this.handleClick.bind(this, 'ExcitedBarChart')}>Excited</MenuItem>
              <MenuItem className="dropItem" eventKey="11" onClick={this.handleClick.bind(this, 'FearBarChart')}>Fear</MenuItem>
              <MenuItem className="dropItem" eventKey="5" onClick={this.handleClick.bind(this, 'EmotionBarChart')}>Happy</MenuItem>
              <MenuItem className="dropItem" eventKey="12" onClick={this.handleClick.bind(this, 'HopeBarChart')}>Hope</MenuItem>
              <MenuItem className="dropItem" eventKey="13" onClick={this.handleClick.bind(this, 'JoyBarChart')}>Joy</MenuItem>
              <MenuItem className="dropItem" eventKey="6" onClick={this.handleClick.bind(this, 'SadBarChart')}>Sad</MenuItem>
              <MenuItem className="dropItem" eventKey="15" onClick={this.handleClick.bind(this, 'SurpriseBarChart')}>Surprise</MenuItem>
          </DropdownButton> 
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
