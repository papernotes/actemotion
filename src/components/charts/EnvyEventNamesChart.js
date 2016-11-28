import {Chart} from 'react-google-charts';
import React, {Component, PropTypes} from 'react';
import DataFormatter from '../../utils/DataFormatter';

class EnvyEventNamesChart extends Component {
  constructor(props) {
    super(props);
    this.state={
      options:{
        hAxis: {title: 'Envy Event Name'},
        vAxis: {title: 'Counts'},
        'legend': {'position': 'bottom'},
        chartArea:{left:10,top:20,width:"80%",height:"80%"}
      }
    };
  }

  generateGraph(events) {
    var formatter = new DataFormatter();
    var result = formatter.generateEnvyEventNamesGraph(events);
    return result;
  }

  render() {
    var data = this.generateGraph(this.props.events);

    return (
      <Chart
      chartType="PieChart"
      data={data}
      options={this.state.options}
      graph_id="EnvyEventNamesChart"
      width='40vw'
      height='50vh'
      legend_toggle
      />
    );
  }
};

EnvyEventNamesChart.propTypes = {
  events: PropTypes.array.isRequired
}

export default EnvyEventNamesChart;