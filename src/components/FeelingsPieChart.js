import {Chart} from 'react-google-charts';
import React from 'react';

class FeelingsPieChart extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				title: 'Frequency of Feelings from the Previous Week',
				hAxis: {title: 'Feeling'},
				vAxis: {title: 'Intensity'},
				legend: 'true'
			},
			data:[
				['Feeling', 'Intensity'],
				['Happy', 5],
				['Sad', 4],
			]
		};
	}
	render() {
		return (
			<Chart
			chartType="PieChart"
			data={this.state.data}
			options={this.state.options}
			graph_id="FeelingsPieChart"
			width={window.innerWidth}
			height={window.innerWidth}
			legend_toggle
			/>
		);
	}
};

export default FeelingsPieChart;