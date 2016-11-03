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
                  isAddOpen={this.props.event.isAddOpen}
                  addEvent={this.props.actions.addEvent}
                />
                <h2 style={{textAlign: 'center', fontSize: '30px'}}>Analytics</h2>
                <p></p><p></p>
                <div style={AnalyticsStyles.pieChart}>
                  <FeelingsPieChart></FeelingsPieChart>
                  <EnergyPieChart></EnergyPieChart>
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
    isAddOpen: PropTypes.bool.isRequired
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(Analytics);
