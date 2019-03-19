import React, { Component } from 'react';
import './OVERVIEW.css';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'; /* chart library from http://recharts.org/en-US/guide/getting-started */
import Trans_table from "./tr_table"
import {NavLink} from "react-router-dom";
import Pie_spending from "./pie"

const base_addr = 'http://localhost:5000/'
const user = '1/'

const RECENT_API = base_addr+user+'transactions?recent_transactions=true'
const WHOLE_API = base_addr+user+'transactions'
const RATIO_API =base_addr+user+'categoryRatio'
const Status_data = {Account_Bal: 578, Monthly_exp: 732.3, Remain_bud: 81, Finance_stat: "BAD"}


class Overview extends Component {

  state = {}

  componentWillMount(){
    this._getData()
  }
  
   _getData = async() =>{
    const Recent_Data = await this._callApi(RECENT_API)  // will wait until the callApi function is finished
    const Whole_Data = await this._callApi(WHOLE_API)  // will wait until the callApi function is finished
    const Ratio_Data = await this._callApi(RATIO_API)  // will wait until the callApi function is finished
    
    const DataArray1 = Object.keys(Recent_Data).reverse().map(i => Recent_Data[i])
    const DataArray2 = Object.keys(Whole_Data).map(i => Whole_Data[i])
    
    console.log(Recent_Data)
    console.log(Whole_Data)
    console.log(Ratio_Data)
    
    this.setState({
      Recent_trans : DataArray1,
      Graph_data: DataArray2,
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
      <div>
        <div className="_content_title">
        <h2>Financial Analysis</h2>
        <p>23:14, Thursday, Jan 26, 2019</p>
      </div>
      <div className="_content_display">
      {console.log(this.state)}
          <Graph_spending data={this.state.Graph_data}/>
          <Pie_spending data = {this.state.Pie_data}/>
      </div>
        <Status_card_list />
        <Detail_contents data={this.state.Recent_trans}/>
        </div>
    );
  }

  render() {
    console.log('rendering now')
    return (
      <div className="_content">
      {this.state.Recent_trans ? this.__renderPages() : 'Loading'}
      </div>
    );
  }
}



class Graph_spending extends Component {
    render(){
        return(
            <div>
              <h3>Daily spending</h3>
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



class Status_card_list extends Component{
    render(){
      return(
        <div className="card_list">
          <_Account_Bal />
          <_Monthly_exp />
          <_Remain_bud />
          <_Finance_stat />
        </div>
      )
    }
}

//Account_Bal: 578, Monthly_exp: 732.3, Remain_bud: 81, Financial_stat: "BAD"
class _Account_Bal extends Component{
  render(){
    return(
      <div className="card">
      <div className="card_content">
        <ul>
          <li>$ {Status_data.Account_Bal}</li>
          <li>Account Balance</li>
        </ul>
        <img src="https://image.flaticon.com/icons/svg/259/259473.svg" alt="Account Balance"></img>
        </div>
      </div>
    )  
  }
}

class _Monthly_exp extends Component{
  render(){
    return(
      <div className="card">
        <ul>
          <li>$ {Status_data.Monthly_exp}</li>
          <li>Monthly Expenditure</li>
        </ul>
        <img src="https://image.flaticon.com/icons/svg/743/743131.svg" alt="Monthly Expenditure"></img>
      </div>
    )  
  }
}

class _Remain_bud extends Component{
  render(){
    return(
      <div className="card">
      <div className="card_content">
        <ul>
          <li>$ {Status_data.Remain_bud}</li>
          <li>Monthly Budget</li>
        </ul>
        <img src="https://image.flaticon.com/icons/svg/741/741744.svg" alt="Remaining Monthly Budget"></img>
      </div>
        
      </div>
    )  
  }
}

class _Finance_stat extends Component{
  render(){
    return(
      <div className="card">
      <div className="card_content">
        <ul>
          <li>{Status_data.Finance_stat}</li>
          <li>Financial Status</li>
        </ul>
        <img src="https://image.flaticon.com/icons/svg/910/910129.svg" alt="Financial Status"></img>
        </div>
      </div>
    )  
  }
}

class Detail_contents extends Component{
  render(){
    return(
      <div className="Detail_box">
        <div className="Detail_info">
          <h3>Recent Transactions</h3>
          <div className="Trans_info"><Trans_table Row_count={10} Transaction_data = {this.props.data} /></div>
          <NavLink to="/ACC_INFO">more...</NavLink>
          </div>
          
        <div className="Detail_info">
        <h3>Financial Status Report</h3>
          <Advice_info/>
        </div>
      </div>
    )
  }
}



class Advice_info extends Component{
  render(){
    return(
      <div>
        
        <ul>
          <li>Monthly budget alert</li>
          <li>Too much expenditure on cloting</li>
          <li>Account Management setting required</li>
        </ul>
        
        </div>
    )
  }
}


export default Overview;
