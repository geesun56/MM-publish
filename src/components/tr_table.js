import React, { Component } from 'react';
import  { useState } from "react";
import './tr_table.css';
import ReactDataGrid from 'react-data-grid'

const defaultColumnProperties = {
    sortable: false,
    width: 125,
    frozen: true
  };

const columns = [
    
    { key: 'date', name: 'DATE' },
    { key: 'company', name: 'VENDOR' },
    { key: 'category', name: 'CATEGORY' },
    { key: 'amount', name: 'AMOUNT' } ].map(c => ({ ...c, ...defaultColumnProperties }));
  
  const rows = [{id: 0, title: 'row1', count: 20}, {id: 1, title: 'row1', count: 40}, {id: 2, title: 'row1', count: 60}];
  

  


    const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
        const comparer = (a, b) => {
          if (sortDirection === "ASC") {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
          } else if (sortDirection === "DESC") {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
          }
        };
        return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
      };
      

  class Trans_table extends Component {
    
    render(){
      {console.log(this.props.Transaction_data.Trans_data[0])}
      return (<ReactDataGrid
      columns={columns}
      rowGetter={i => this.props.Transaction_data.Trans_data[i]}
      resizeable = {true}
      rowsCount= {this.props.Row_count}
      minHeight={250} />);
  }
}


export default Trans_table;





