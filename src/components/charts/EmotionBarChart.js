import {Chart} from 'react-google-charts';
import React, {Component, PropTypes} from 'react';
import DataFormatter from '../../utils/DataFormatter';

class EmotionBarChart extends Component {
	constructor(props) {
		super(props);
		this.state={
			options:{
				hAxis: {title: 'Event'},
				vAxis: {title: 'Happy Events'},
				legend: 'none',
			},
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
			width='40vw'
			height='50vh'
			/>
		);
	}
};

EmotionBarChart.propTypes = {
	events: PropTypes.array.isRequired
}

export default EmotionBarChart;