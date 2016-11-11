import React, {Component, PropTypes} from 'react';
import DataFormatter from '../../utils/DataFormatter';
import {Pie} from 'react-chartjs-2';

//const formatter = new DataFormatter();
//const data2 = formatter.generateFeelingsGraph(props.events);
const options = {
	labels: [
		'Happy',
		'Sad',
		'Angry'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};


export default React.createClass({
	
	displayName: 'TestPieChart',

	render() {

		return (
			<div>
				<h2 style={{textAlign: 'center'}}>Will be changed...</h2>
				<Pie 
					data={options}/>
			</div>
		);
	}
})
