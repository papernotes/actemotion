import {Chart} from 'react-google-charts';
import React, {Component, PropTypes} from 'react';
import DataFormatter from '../../utils/DataFormatter';

class CSPBarChart extends Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				hAxis: {title: 'Feeling'},
				vAxis: {title: 'Average Level'},
				legend: 'none',
			}
		};
	}

	generateGraph(events) {
		var formatter = new DataFormatter();
		var result = formatter.generateCSPGraph(events);
		return result;
	}

	render() {
		var data = this.generateGraph(this.props.events);

		return (
			<Chart
			chartType="ColumnChart"
			data={data}
			options={this.state.options}
			graph_id="CSPBarChart"
			width='40vw'
			height='50vh'
			/>
		);
	}
};

CSPBarChart.propTypes = {
	events: PropTypes.array.isRequired
}

export default CSPBarChart;