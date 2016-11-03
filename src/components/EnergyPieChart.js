import {Chart} from 'react-google-charts';
import React from 'react';

class EnergyPieChart extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				//title: 'Energy Levels from the previous week',
				hAxis: {title: 'Energy'},
				vAxis: {title: 'Level'},
				'legend': {'position': 'bottom'},
				chartArea:{left:10,top:20,width:"60%",height:"60%"}
			},
			data:[
				['Energy', 'Level'],
				['1', 5],
				['2', 4],
				['3', 2],
				['4', 3],
				['5', 3],
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
			width={2*window.innerWidth/3}
			height={2*window.innerWidth/3}
			legend_toggle
			/>
		);
	}
};

export default EnergyPieChart;