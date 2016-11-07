import {Chart} from 'react-google-charts';
import React from 'react';

class EmotionBarChart extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				hAxis: {title: 'Event'},
				vAxis: {title: '% Time Happy'},
				legend: 'none',
			},
			data:[
				['Activity','Happiness Level'],
				['School',75],
				['Work',50],
				['Club',100],
			]
		};
	}
	render() {
		return (
			<Chart
			chartType="ColumnChart"
			//eventName="onmouseover"
			data={this.state.data}
			options={this.state.options}
			graph_id="EmotionBarChart"
			width={2*window.innerWidth/3}
			height={2*window.innerWidth/3}
			/>
		);
	}
};

export default EmotionBarChart;