import {Chart} from 'react-google-charts';
import React, {Component, PropTypes} from 'react';
import DataFormatter from '../../utils/DataFormatter';

class AngryEventNamesChart extends Component {
  constructor(props) {
    super(props);
    this.state={
      options:{
        hAxis: {title: 'Angry Event Name'},
        vAxis: {title: 'Counts'},
        'legend': {'position': 'bottom'},
        chartArea:{left:10,top:20,width:"80%",height:"80%"}
      }
    };
  }

  generateGraph(events) {
    var formatter = new DataFormatter();
    var result = formatter.generateAngryEventNamesGraph(events);
    return result;
  }

  render() {
    var data = this.generateGraph(this.props.events);

    return (
      <Chart
      chartType="PieChart"
      data={data}
      options={this.state.options}
      graph_id="AngryEventNamesChart"
      width='40vw'
      height='50vh'
      legend_toggle
      />
    );
  }
};

AngryEventNamesChart.propTypes = {
  events: PropTypes.array.isRequired
}

export default AngryEventNamesChart;