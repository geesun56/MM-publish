import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
 
class ColumnLineAreaChart extends Component {
		constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
		this.addSymbols = this.addSymbols.bind(this);
	}
	addSymbols(e) {
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if (order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	render() {
		console.log()
		const options = {
			animationEnabled: true,
			colorSet: "colorSet2",
			title: {
				text: "Annual Expenditure Statistics"
			},
			axisX: {
				valueFormatString: "MMMM"
			},
			axisY: {
				prefix: "$",
				labelFormatter: this.addSymbols
			},
			toolTip: {
				shared: true
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries,
				verticalAlign: "top"
			},
			data: [{
				type: "column",
				name: "Monthly expenditure",
				showInLegend: true,
				xValueFormatString: "MMMM YYYY",
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2018, 0), y: this.props.pred[1].current_balance },
					{ x: new Date(2018, 1), y: this.props.pred[2].current_balance },
					{ x: new Date(2018, 2), y: this.props.pred[3].current_balance },
					{ x: new Date(2018, 3), y: this.props.pred[4].current_balance },
					{ x: new Date(2018, 4), y: this.props.pred[5].current_balance },
					{ x: new Date(2018, 5), y: this.props.pred[6].current_balance },
					{ x: new Date(2018, 6), y: this.props.pred[7].current_balance },
					{ x: new Date(2018, 7), y: this.props.pred[8].current_balance },
					{ x: new Date(2018, 8), y: this.props.pred[9].current_balance },
					{ x: new Date(2018, 9), y: this.props.pred[10].current_balance },
					{ x: new Date(2018, 10), y: this.props.pred[11].current_balance },
					{ x: new Date(2018, 11), y: this.props.pred[12].current_balance }
				]
			},{
				type: "line",
				name: "Suggested expenditure",
				showInLegend: true,
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2018, 0), y: this.props.pred[1].predicted_val },
					{ x: new Date(2018, 1), y: this.props.pred[2].predicted_val },
					{ x: new Date(2018, 2), y: this.props.pred[3].predicted_val },
					{ x: new Date(2018, 3), y: this.props.pred[4].predicted_val },
					{ x: new Date(2018, 4), y: this.props.pred[5].predicted_val },
					{ x: new Date(2018, 5), y: this.props.pred[6].predicted_val },
					{ x: new Date(2018, 6), y: this.props.pred[7].predicted_val },
					{ x: new Date(2018, 7), y: this.props.pred[8].predicted_val },
					{ x: new Date(2018, 8), y: this.props.pred[9].predicted_val },
					{ x: new Date(2018, 9), y: this.props.pred[10].predicted_val },
					{ x: new Date(2018, 10), y: this.props.pred[11].predicted_val },
					{ x: new Date(2018, 11), y: this.props.pred[12].predicted_val }
				]
			},{
				type: "area",
				name: "Remaining budget",
				markerBorderColor: "white",
				markerBorderThickness: 2,
				showInLegend: true,
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2018, 0), y: this.props.pred[1].predicted_val- this.props.pred[1].current_balance+1000 },
					{ x: new Date(2018, 1), y: this.props.pred[2].predicted_val- this.props.pred[2].current_balance+100 },
					{ x: new Date(2018, 2), y: this.props.pred[3].predicted_val- this.props.pred[3].current_balance+1000 },
					{ x: new Date(2018, 3), y: this.props.pred[4].predicted_val- this.props.pred[4].current_balance+500 },
					{ x: new Date(2018, 4), y: this.props.pred[5].predicted_val- this.props.pred[5].current_balance+300 },
					{ x: new Date(2018, 5), y: this.props.pred[6].predicted_val- this.props.pred[6].current_balance+1000 },
					{ x: new Date(2018, 6), y: this.props.pred[7].predicted_val- this.props.pred[7].current_balance+1000 },
					{ x: new Date(2018, 7), y: this.props.pred[8].predicted_val- this.props.pred[8].current_balance+200 },
					{ x: new Date(2018, 8), y: this.props.pred[9].predicted_val- this.props.pred[9].current_balance+100 },
					{ x: new Date(2018, 9), y: this.props.pred[10].predicted_val-this.props.pred[10].current_balance+1000 },
					{ x: new Date(2018, 10), y: this.props.pred[11].predicted_val-this.props.pred[11].current_balance+1000 },
					{ x: new Date(2018, 11), y: this.props.pred[12].predicted_val-this.props.pred[12].current_balance+1000 }
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default ColumnLineAreaChart;