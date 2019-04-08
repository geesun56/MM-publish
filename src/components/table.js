import React, { Component } from 'react';
import './table.css';
import ReactTable from "react-table";
import 'react-table/react-table.css'

  

  class Table extends Component { 
    render(){
    if(this.props.type == 'overview')
      return (<ReactTable
        data={this.props.data}
        columns={this.props.columns}
        minRows= {10}
      />);
    else
        return (<ReactTable
            data={this.props.data}
            columns={this.props.columns}
            minRows= {15}
        />);
  }
}


export default Table;





