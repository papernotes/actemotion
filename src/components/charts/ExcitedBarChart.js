import {Chart} from 'react-google-charts';
import React, {Component, PropTypes} from 'react';
import DataFormatter from '../../utils/DataFormatter';

class ExcitedBarChart extends Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				hAxis: {title: 'Event Type'},
				vAxis: {title: 'Excited Events'},
				legend: 'none',
			},
		};
	}

	generateGraph(events) {
		var formatter = new DataFormatter();
		var result = formatter.generateExcitedGraph(events);
		return result;
	}

	render() {
		var data = this.generateGraph(this.props.events);

		return (
			<Chart
			chartType="ColumnChart"
			data={data}
			options={this.state.options}
			graph_id="ExcitedBarChart"
			width='40vw'
			height='50vh'
			/>
		);
	}
};

ExcitedBarChart.propTypes = {
	events: PropTypes.array.isRequired
}

export default ExcitedBarChart;