import {Chart} from 'react-google-charts';
import React from 'react';

class FeelingsPieChart extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				hAxis: {title: 'Feeling'},
				vAxis: {title: 'Intensity'},
				'legend': {'position': 'right'},
				chartArea:{left:10,top:20,width:"95%",height:"95%"}
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
			width={2*window.innerWidth/3}
			height={2*window.innerWidth/3}
			legend_toggle
			/>
		);
	}
};

export default FeelingsPieChart;