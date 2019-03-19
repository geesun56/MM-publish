import React, { Component } from 'react';
import './pie.css';
import PieChart from 'react-minimal-pie-chart'; /* piechart library from https://www.npmjs.com/package/react-minimal-pie-chart */


class Pie_spending extends Component {
    render(){
        return(
            <div className="_content_pie">
            <h3>Spending ratio</h3>
            {console.log(this.props.data.Apparel)}
                <PieChart radius={50} animate={true}
              data={[
                { title: 'Apparel', value: this.props.data.Apparel, color: '#FF3366' },
                { title: 'Education', value: this.props.data.Education, color: '#002EB8' },
                { title: 'Entertainment', value: this.props.data.Entertainment, color: '#66FF33' },
                { title: 'Food', value: this.props.data.Food, color: '#FF6633' },
                { title: 'Groceries', value: this.props.data.Groceries, color: '#6633FF' },
                { title: 'HealthCare', value: this.props.data.HealthCare, color: '#B88A00' },
                { title: 'Housing', value: this.props.data.Housing, color: '#FF33CC' },
                { title: 'Insurance', value: this.props.data.Insurance, color: '#3366FF' },
                { title: 'Transportation', value:this.props.data.Transportation, color: '#33FFCC' }
              ]}
            />
            </div>
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

export default Pie_spending