import React, { Component } from 'react';
import './graph.css';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'; /* chart library from http://recharts.org/en-US/guide/getting-started */



class Graph extends Component {
    render(){
        return(
            <div>
              <h3>Monthly spending</h3>
              {console.log(this.props.data)}
                  <LineChart width={480} height={250} data={this.props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <XAxis dataKey="date"  />
                      <YAxis dataKey="amount" />
                      <Tooltip />
                </LineChart>
          </div>
        )
    }
}


export default Graph