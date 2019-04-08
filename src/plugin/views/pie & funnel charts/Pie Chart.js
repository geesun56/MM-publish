import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class PieChart extends Component {
	render() {
		console.log(this.props.data)
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			animationDuration: 800,
			title: {
				text: "Monthly Expenditure Ratio",
				margin: 20,
				fontFamily: "Verdana",	
				horizontalAlign: "center",
				fontWeight: "bold",
				fontSize: 25
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: this.props.data.Apparel , label: "Apparel" },
					{ y: this.props.data.Entertainment , label: "Entertainment" },
					{ y: this.props.data.Food , label: "Food" },
					{ y: this.props.data.HealthCare , label: "HealthCare" },
					{ y: this.props.data.Education , label: "Education" },
					{ y: this.props.data.Groceries , label: "Groceries" },
					
					{ y: this.props.data.Housing , label: "Housing" },
					{ y: this.props.data.Insurance , label: "Insurance" },
					{ y: this.props.data.Transportation , label: "Transportation" }

				]
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

export default PieChart;