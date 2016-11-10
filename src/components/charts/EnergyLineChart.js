import {Chart} from 'react-google-charts';
import React, {Component, PropTypes} from 'react';
import DataFormatter from '../../utils/DataFormatter';

class EnergyLineChart extends Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				hAxis: {title: 'Last Week of Events'},
				vAxis: {title: 'Energy Levels'},
				legend: 'none',
			}
		};
	}

	generateGraph(events) {
		var formatter = new DataFormatter();
		var result = formatter.generateEnergyGraph(events);
		return result;
	}

	render() {
		var data = this.generateGraph(this.props.events);

		return (
			<Chart
			chartType="LineChart"
			data={data}
			options={this.state.options}
			graph_id="EnergyLineChart"
			width={2*window.innerWidth/3}
			height={2*window.innerWidth/3}
			/>
		);
	}
};

EnergyLineChart.propTypes = {
	events: PropTypes.array.isRequired
}

export default EnergyLineChart;