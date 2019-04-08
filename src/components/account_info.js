import React, { Component } from 'react';
import './account_info.css';
import Table from './table'
import Info_box from "./Info_box"
import ColumnLineAreaChart from '../plugin/views/combination charts/Column Line Area Chart';

const base_addr = 'http://localhost:5000/'
const user = '1/'
const WHOLE_API = base_addr+user+'transactions'
const RATIO_API =base_addr+user+'categoryRatio'

const column_account = [{   //for Table component
  Header: 'Date',
  accessor: d => d.date, 
  id: 'date'
}, {
  Header: 'Time',
  accessor: 'time',
}, {
  Header: 'Amount',
  accessor: 'amount',
},{
  Header: 'Company',
  accessor: 'company',
},{
  Header: 'Category',
  accessor: 'category',
},{
  Header: 'Type',
  accessor: 'type',
}]

class Account_info extends Component {
    state = {}

  componentWillMount(){
    this._getData()
  }
  
   _getData = async() =>{
    const Whole_Data_api = await this._callApi(WHOLE_API)  // will wait until the callApi function is finished
    const Ratio_Data = await this._callApi(RATIO_API)  // will wait until the callApi function is finished
    
    const Whole_Data = Whole_Data_api.data.transactions
    const DataArray = Object.keys(Whole_Data).reverse().map(i => Whole_Data[i])
    
    this.setState({
      Graph_data: DataArray,
      Pie_data : Ratio_Data
    })
  }
  
  _callApi = (API) => {
    return fetch(API)
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.log(err))
  }

  
  __renderPages= () => {
    
    console.log(this.state.Pie_data)
    return(
        <div className="content">
        <div className="_content_title">
            <h1>Account Information</h1>
            <p>23:14, Thursday, Jan 26, 2019</p>
        </div>
        <div className="_content_display2">
            <div class="_info"><Info_box/></div>
            <div class="_line_area"><ColumnLineAreaChart data = {this.state.Pie_data}/></div>
        </div>
            <h3>Transactions</h3>
            <div className="big_table">
            <Table data = {this.state.Graph_data} columns={column_account} type='account'/>
           </div>
    </div>
    );
  }

  render() {
    //<Pie data = {this.state.Pie_data}/>
    return (
      <div className="_content">
      {(this.state.Graph_data && this.state.Pie_data) ? this.__renderPages() : 'Loading'}
      </div>
    );
  }

  }

  
  
  export default Account_info;