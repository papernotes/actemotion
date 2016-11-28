import {Chart} from 'react-google-charts';
import React, {Component, PropTypes} from 'react';
import DataFormatter from '../../utils/DataFormatter';

class AnxiousBarChart extends Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				hAxis: {title: 'Event Type'},
				vAxis: {title: 'Anxious Events'},
				legend: 'none',
			},
		};
	}

	generateGraph(events) {
		var formatter = new DataFormatter();
		var result = formatter.generateAnxiousGraph(events);
		return result;
	}

	render() {
		var data = this.generateGraph(this.props.events);

		return (
			<Chart
			chartType="ColumnChart"
			data={data}
			options={this.state.options}
			graph_id="AnxiousBarChart"
			width='40vw'
			height='50vh'
			/>
		);
	}
};

AnxiousBarChart.propTypes = {
	events: PropTypes.array.isRequired
}

export default AnxiousBarChart;