import {Chart} from 'react-google-charts';
import React from 'react';

class EnergyPieChart extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				title: 'Frequency of Energy Levels from the Previous Week',
				hAxis: {title: 'Energy'},
				vAxis: {title: 'Level'},
				legend: 'true'
			},
			data:[
				['Energy', 'Level'],
				['Energy Level 1', 5],
				['Energy Level 2', 4],
				['Energy Level 3', 2],
				['Energy Level 4', 3],
				['Energy Level 5', 3],
			]
		};
	}
	render() {
		return (
			<Chart
			chartType="PieChart"
			data={this.state.data}
			options={this.state.options}
			graph_id="EnergyPieChart"
			width={window.innerWidth}
			height={window.innerWidth}
			legend_toggle
			/>
		);
	}
};

export default EnergyPieChart;