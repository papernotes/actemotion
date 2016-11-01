import {Chart} from 'react-google-charts';
import React from 'react';

class EnergyPieChart extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				title: 'Energy Levels from the previous week',
				hAxis: {title: 'Energy'},
				vAxis: {title: 'Level'},
				legend: 'true'
			},
			data:[
				['Energy', 'Level'],
				['1', 5],
				['2', 4],
				['3', 2],
				['4', 3],
				['5', 3],
				['6', 4],
				['7', 7],
				['8', 6],
				['9', 8],
				['10', 2],
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
			width="45%"
			height="300px"
			legend_toggle
			/>
		);
	}
};

export default EnergyPieChart;