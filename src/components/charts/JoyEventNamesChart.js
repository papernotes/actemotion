import {Chart} from 'react-google-charts';
import React, {Component, PropTypes} from 'react';
import DataFormatter from '../../utils/DataFormatter';

class JoyEventNamesChart extends Component {
  constructor(props) {
    super(props);
    this.state={
      options:{
        hAxis: {title: 'Joy Event Name'},
        vAxis: {title: 'Counts'},
        'legend': {'position': 'bottom'},
        chartArea:{left:10,top:20,width:"80%",height:"80%"}
      }
    };
  }

  generateGraph(events) {
    var formatter = new DataFormatter();
    var result = formatter.generateJoyEventNamesGraph(events);
    return result;
  }

  render() {
    var data = this.generateGraph(this.props.events);

    return (
      <Chart
      chartType="PieChart"
      data={data}
      options={this.state.options}
      graph_id="JoyEventNamesChart"
      width='40vw'
      height='50vh'
      legend_toggle
      />
    );
  }
};

JoyEventNamesChart.propTypes = {
  events: PropTypes.array.isRequired
}

export default JoyEventNamesChart;