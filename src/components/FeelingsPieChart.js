import {Chart} from 'react-google-charts';
import React from 'react';

class FeelingsPieChart extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				//title: 'Feelings from the previous week',
				hAxis: {title: 'Feeling'},
				vAxis: {title: 'Intensity'},
				'legend': {'position': 'bottom'},
				chartArea:{left:10,top:20,width:"60%",height:"60%"}
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
			width={2*window.innerWidth/3}
			height={2*window.innerWidth/3}
			legend_toggle
			/>
		);
	}
};

export default FeelingsPieChart;