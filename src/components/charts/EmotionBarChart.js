import {Chart} from 'react-google-charts';
import React, {Component, PropTypes} from 'react';
import DataFormatter from '../../utils/DataFormatter';

class EmotionBarChart extends Component {
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

	generateGraph(events) {
		var formatter = new DataFormatter();
		var result = formatter.generateEmotionGraph(events);
		return result;
	}

	render() {
		var data = this.generateGraph(this.props.events);

		return (
			<Chart
			chartType="ColumnChart"
			data={data}
			options={this.state.options}
			graph_id="EmotionBarChart"
			width={2*window.innerWidth/3}
			height={2*window.innerWidth/3}
			/>
		);
	}
};

EmotionBarChart.propTypes = {
	events: PropTypes.array.isRequired
}

export default EmotionBarChart;