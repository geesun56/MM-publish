import React, { Component } from 'react';
import './account_info.css';
import Table from './table'
import Info_box from "./Info_box"
import ColumnLineAreaChart from '../plugin/views/combination charts/Column Line Area Chart';
import Loading from './loading'
const base_addr = 'http://localhost:5000/'
const user = '1/'
const WHOLE_API = base_addr+user+'transactions'
const ML_API = base_addr+user+'prediction'
const MONTH_TRANS_API = base_addr+user+'trans'

const column_account = [{   //for Table component
  Header: 'Date',
  accessor: d => d.date, 
  id: 'date'
}, {
  Header: 'Time',
  accessor: 'time',
}, {
  Header: 'Amount ($)',
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
    const ML_Data_api = await this._callApi(ML_API)  // will wait until the callApi function is finished
    
    const Whole_Data = Whole_Data_api.data.transactions
    const DataArray = Object.keys(Whole_Data).reverse().map(i => Whole_Data[i])
    console.log(ML_Data_api.data)
    const balance = Math.round(ML_Data_api.data[12].current_balance*10)/10
    
    this.setState({
      Graph_data: DataArray,
      ML_data : ML_Data_api.data,
      bal : balance
    })
  }
  
  _callApi = (API) => {
    return fetch(API)
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.log(err))
  }

  
  __renderPages= () => {
    console.log("MM_data test")
    console.log(this.state.bal)
    return(
        <div className="content">
        <div className="_content_title">
            <h1>Account Information</h1>
            <p>23:14, Thursday, Dec 31, 2018</p>
        </div>
        <div className="_content_display2">
            <div class="_info"><Info_box balance ={this.state.bal}/></div>
            <div class="_line_area"><ColumnLineAreaChart pred={this.state.ML_data}/></div>
        </div>
            <h3>Transactions of this Month</h3>
            <div className="big_table">
            <Table data = {this.state.Graph_data} columns={column_account} type='account'/>
           </div>
    </div>
    );
  }
  __loadingPages= () =>{
    return (<div class='load'><Loading/></div>
      
      );
  }
  render() {
    
    return (
      <div className="_content">
      {(this.state.Graph_data && this.state.ML_data && this.state.bal) ? this.__renderPages() : this.__loadingPages()}
      </div>
    );
  }

  }

  
  
  export default Account_info;