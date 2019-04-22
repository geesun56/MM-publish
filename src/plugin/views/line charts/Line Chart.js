import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class LineChart extends Component {
	render() {
		const Graph_data = (this.props.data)

		const options = {
			animationEnabled: true,
			exportEnabled: true,
			animationDuration: 1200,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Daily Expenditure Statistics",
				margin: 20,
				fontFamily: "Verdana",	
				horizontalAlign: "center",
				fontSize: 25


			},
			axisY: {
				title: "Daily Expenditure",
				includeZero: true,
				suffix: "$"
			},
			axisX: {
				title: "date",
				interval: 5,
				intervalType: "day"
				  
			},
			toolTip:{
				enabled: true,    
				content: "{x} : $ {y}",   
				animationEnabled: true 
			},
			data: [{
				type: "line",
				dataPoints: Graph_data
				
			}]
		}
		
		return (
		<div>
			
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default LineChart;                           