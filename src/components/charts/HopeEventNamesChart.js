import {Chart} from 'react-google-charts';
import React, {Component, PropTypes} from 'react';
import DataFormatter from '../../utils/DataFormatter';

class HopeEventNamesChart extends Component {
  constructor(props) {
    super(props);
    this.state={
      options:{
        hAxis: {title: 'Hope Event Name'},
        vAxis: {title: 'Counts'},
        'legend': {'position': 'bottom'},
        chartArea:{left:10,top:20,width:"80%",height:"80%"}
      }
    };
  }

  generateGraph(events) {
    var formatter = new DataFormatter();
    var result = formatter.generateHopeEventNamesGraph(events);
    return result;
  }

  render() {
    var data = this.generateGraph(this.props.events);

    return (
      <Chart
      chartType="PieChart"
      data={data}
      options={this.state.options}
      graph_id="HopeEventNamesChart"
      width='40vw'
      height='50vh'
      legend_toggle
      />
    );
  }
};

HopeEventNamesChart.propTypes = {
  events: PropTypes.array.isRequired
}

export default HopeEventNamesChart;