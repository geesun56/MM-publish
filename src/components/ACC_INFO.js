import React, { Component } from 'react';
import './ACC_INFO.css';
import Trans_table from './tr_table'
import Pie_spending from "./pie"
import Info_box from "./Info_box"

const base_addr = 'http://localhost:5000/'
const user = '1/'


const WHOLE_API = base_addr+user+'transactions'
const RATIO_API =base_addr+user+'categoryRatio'

class Acc_info extends Component {
    state = {}

  componentWillMount(){
    this._getData()
  }
  
   _getData = async() =>{
    const Whole_Data = await this._callApi(WHOLE_API)  // will wait until the callApi function is finished
    const Ratio_Data = await this._callApi(RATIO_API)  // will wait until the callApi function is finished
    
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
    return(
        <div className="_content">
        <div className="_content_title">
            <h2>Account Information</h2>
            <p>23:14, Thursday, Jan 26, 2019</p>
        </div>
        <div className="_acc_display2">
            <Info_box/>
            <Pie_spending data = {this.state.Pie_data}/>
        </div>
            <h3>Transactions</h3>
            <div className="big_table">
            <Trans_table Row_count={115} Transaction_data = {this.state.Graph_data} />
           </div>
    </div>
    );
  }

  render() {
    console.log('rendering now')
    return (
      <div className="_content">
      {this.state.Graph_data ? this.__renderPages() : 'Loading'}
      </div>
    );
  }

  }

  
  
  export default Acc_info;