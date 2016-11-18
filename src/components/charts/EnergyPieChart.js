import {Chart} from 'react-google-charts';
import React, {Component, PropTypes} from 'react';
import DataFormatter from '../../utils/DataFormatter';

class EnergyPieChart extends Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				hAxis: {title: 'Energy'},
				vAxis: {title: 'Level'},
				'legend': {'position': 'bottom'},
				chartArea:{left:10,top:20,width:"80%",height:"80%"}
			},
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
			chartType="PieChart"
			data={data}
			options={this.state.options}
			graph_id="EnergyPieChart"
			width='40vw'
			height='50vh'
			legend_toggle
			/>
		);
	}
};

EnergyPieChart.propTypes = {
	events: PropTypes.array.isRequired
}

export default EnergyPieChart;