import React, { Component } from 'react';
import './table.css';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import {NavLink} from "react-router-dom";
  

  class Table extends Component { 
    render(){
      console.log('tables')
      console.log(this.props.data)
      console.log(this.props.type)
      console.log(this.props.columns)
      if(this.props.type == 'overview')
        return (<div>
              <h3 id='table_head'>Recent Transactions</h3>
              <div class='overview_table'>
                  <ReactTable
                    data={this.props.data}
                    columns={this.props.columns}
                    minRows= {10}
                  /></div>
                  <NavLink to="/ACC_INFO">more...</NavLink>
                  </div>);
    else
        return (<div>
          <div class='account_table'>
              <ReactTable
                data={this.props.data}
                columns={this.props.columns}
                minRows= {15}
              /></div>
              </div>);
  }
}


export default Table;








