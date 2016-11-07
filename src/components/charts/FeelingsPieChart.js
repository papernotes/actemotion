import {Chart} from 'react-google-charts';
import React, {Component, PropTypes} from 'react';
import DataFormatter from '../../utils/DataFormatter';

class FeelingsPieChart extends Component {
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

	generateFeelingsGraph(events) {
		var formatter = new DataFormatter();
		var result = formatter.generateFeelingsGraph(events);
		return result;
	}


	render() {
		var data = this.generateFeelingsGraph(this.props.events);

		return (
			<Chart
			chartType="PieChart"
			data={data}
			options={this.state.options}
			graph_id="FeelingsPieChart"
			width={2*window.innerWidth/3}
			height={2*window.innerWidth/3}
			legend_toggle
			/>
		);
	}
};

FeelingsPieChart.propTypes = {
	events: PropTypes.array.isRequired
}

export default FeelingsPieChart;