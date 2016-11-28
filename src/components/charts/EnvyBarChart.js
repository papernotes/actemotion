import {Chart} from 'react-google-charts';
import React, {Component, PropTypes} from 'react';
import DataFormatter from '../../utils/DataFormatter';

class EnvyBarChart extends Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				hAxis: {title: 'Event Type'},
				vAxis: {title: 'Envy Events'},
				legend: 'none',
			},
		};
	}

	generateGraph(events) {
		var formatter = new DataFormatter();
		var result = formatter.generateEnvyGraph(events);
		return result;
	}

	render() {
		var data = this.generateGraph(this.props.events);

		return (
			<Chart
			chartType="ColumnChart"
			data={data}
			options={this.state.options}
			graph_id="EnvyBarChart"
			width='40vw'
			height='50vh'
			/>
		);
	}
};

EnvyBarChart.propTypes = {
	events: PropTypes.array.isRequired
}

export default EnvyBarChart;