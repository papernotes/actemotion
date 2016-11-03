import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';
import Toolbar from '../components/Toolbar';
import FeelingsPieChart from '../components/FeelingsPieChart';
import AnalyticsStyles from '../styles/AnalyticsStyles';
import EnergyPieChart from '../components/EnergyPieChart';
import EmotionBarChart from '../components/EmotionBarChart';


class Analytics extends Component {
    render() {
        return(
            <div>
                <Toolbar
                  setModalOpen={this.props.actions.setModalOpen}
                  isEditOpen={this.props.event.isEditOpen}
                  addEvent={this.props.actions.addEvent}
                />
                <h2 style={{textAlign: 'center', fontSize: '30px'}}>Analytics</h2>
                <br></br>
                <p></p><p></p>
                <div style={AnalyticsStyles.pieChart}>
                  <h4 style={{textAlign: 'center', fontSize: '20px'}}>Overall Emotions Week of 10/30</h4>
                  <FeelingsPieChart></FeelingsPieChart>
                  <hr />
                  <h4 style={{textAlign: 'center', fontSize: '20px'}}>Energy Level Week of 10/30</h4>
                  <EnergyPieChart></EnergyPieChart>
                </div>
                <hr />
                <h4 style={{textAlign: 'center', fontSize: '20px'}}>Time Feeling Happy During Activities Week 10/30</h4>
                <div style={AnalyticsStyles.barChart}>
                  <EmotionBarChart></EmotionBarChart>
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
    isEditOpen: PropTypes.bool.isRequired
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(Analytics);
