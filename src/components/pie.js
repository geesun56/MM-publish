import React, { Component } from 'react';
import './pie.css';
import PieChart from "../plugin/views/pie & funnel charts/Pie Chart"


class Pie extends Component {
  //<PieChart data = {this.props.Pie_data}/>
  
    render(){
      
        return(
          <div className="_PieChart"><PieChart data = {this.props.data}/></div>  
        )
    }
}

/*Apparel: 9
Education: 0
Entertainment: 11
Food: 20
Groceries: 10
HealthCare: 0
Housing: 21
Insurance: 15
Transportation: 10*/ 

export default Pie