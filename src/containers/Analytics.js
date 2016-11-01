import React, {Component} from 'react';
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
                <Toolbar {...this.props}/>
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


export default connect(mapStateToProps,mapDispatchToProps)(Analytics);
