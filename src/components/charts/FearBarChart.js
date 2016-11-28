import {Chart} from 'react-google-charts';
import React, {Component, PropTypes} from 'react';
import DataFormatter from '../../utils/DataFormatter';

class FearBarChart extends Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				hAxis: {title: 'Event Type'},
				vAxis: {title: 'Fear Events'},
				legend: 'none',
			},
		};
	}

	generateGraph(events) {
		var formatter = new DataFormatter();
		var result = formatter.generateFearGraph(events);
		return result;
	}

	render() {
		var data = this.generateGraph(this.props.events);

		return (
			<Chart
			chartType="ColumnChart"
			data={data}
			options={this.state.options}
			graph_id="FearBarChart"
			width='40vw'
			height='50vh'
			/>
		);
	}
};

FearBarChart.propTypes = {
	events: PropTypes.array.isRequired
}

export default FearBarChart;