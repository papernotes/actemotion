import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Toolbar from '../components/Toolbar';
import FeelingsPieChart from '../components/charts/FeelingsPieChart';
import AnalyticsStyles from '../styles/AnalyticsStyles';
import EnergyPieChart from '../components/charts/EnergyPieChart';
import EmotionBarChart from '../components/charts/EmotionBarChart';
import EnergyLineChart from '../components/charts/EnergyLineChart';

class Analytics extends Component {
    render() {
        return(
            <div>
                <Toolbar
                  setModalOpen={this.props.actions.setModalOpen}
                  isAddOpen={this.props.event.isAddOpen}
                  addEvent={this.props.actions.addEvent}
                  notificationsOn={this.props.home.notificationsOn}
                  setNotifications={this.props.actions.setNotifications}
                />
                <h2 style={{textAlign: 'center', fontSize: '30px'}}>Your Emotions</h2>
                <br></br>
                <p></p><p></p>
                <div style={AnalyticsStyles.pieChart}>
                  <h4 style={{textAlign: 'center', fontSize: '20px'}}>Overall Emotions Week of 10/30</h4>
                  <FeelingsPieChart events={this.props.event.events}></FeelingsPieChart>
                  <hr />
                  <h4 style={{textAlign: 'center', fontSize: '20px'}}>Energy Level Week of 10/30</h4>
                  <EnergyPieChart events={this.props.event.events}></EnergyPieChart>
                  <hr />
                  <h4 style={{textAlign: 'center', fontSize: '20px'}}>This Needs work</h4>
                  <EnergyLineChart events={this.props.event.events}></EnergyLineChart>
                </div>
                <hr />
                <h4 style={{textAlign: 'center', fontSize: '20px'}}>Happy Events During the Week 10/30</h4>
                <div style={AnalyticsStyles.barChart}>
                  <EmotionBarChart events={this.props.event.events}></EmotionBarChart>
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
  actions: PropTypes.shape({
    setModalOpen: PropTypes.func.isRequired,
    addEvent: PropTypes.func.isRequired
  }),
  event: PropTypes.shape({
    isAddOpen: PropTypes.bool.isRequired
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(Analytics);
