import {Chart} from 'react-google-charts';
import React from 'react';

class FeelingsPieChart extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				title: 'Feelings from the previous week',
				hAxis: {title: 'Feeling'},
				vAxis: {title: 'Intensity'},
				legend: 'true'
			},
			data:[
				['Feeling', 'Intensity'],
				['happy', 5],
				['sad', 4],
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
			width="45%"
			height="300px"
			legend_toggle
			/>
		);
	}
};

export default FeelingsPieChart;