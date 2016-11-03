import {Chart} from 'react-google-charts';
import React from 'react';

class EmotionBarChart extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				title: 'Percent Frequency of Happiness During Various Events',
				hAxis: {title: 'Event'},
				vAxis: {title: '% Time Happy'},
				legend: 'none',
			},
			data:[
				['Element','Happiness'],
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
			width={window.innerWidth/2}
			height={window.innerWidth/2}
			/>
		);
	}
};

export default EmotionBarChart;