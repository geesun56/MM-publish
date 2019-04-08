import React, { Component } from 'react';
import './overview.css';

import {NavLink} from "react-router-dom";
import Table from "./table"
import PieChart from "../plugin/views/pie & funnel charts/Pie Chart"
import LineChart from "../plugin/views/line charts/Line Chart"


/* ---- API request address ---- */
const base_addr = 'http://localhost:5000/'
const user = '1/'
const RECENT_API = base_addr+user+'transactions?recent_transactions=true'
const WHOLE_API = base_addr+user+'transactions'
const RATIO_API =base_addr+user+'categoryRatio'
const TIME_API = base_addr+'currentTime'

const Status_data = {Account_Bal: 578, Monthly_exp: 732.3, Remain_bud: 81, Finance_stat: "BAD"}

const column_overview = [{   //for Table component
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
}]



class Overview extends Component {

  state = {}

  componentWillMount(){
    this._getData()
  }
  
   _getData = async() =>{
    const Recent_Data_api = await this._callApi(RECENT_API)  // will wait until the callApi function is finished
    const Whole_Data_api = await this._callApi(WHOLE_API)  // will wait until the callApi function is finished
    const Ratio_Data_api = await this._callApi(RATIO_API)  // will wait until the callApi function is finished
    const Current_Time_api = await this._callApi(TIME_API)  // will wait until the callApi function is finished
    
    const Recent_Data =Recent_Data_api.data.transactions
    const Whole_Data = Whole_Data_api.data.transactions
    const Ratio_Data = Ratio_Data_api.data.ratio
    const Current_Time = Current_Time_api
    
    const DataArray1 = Object.keys(Recent_Data).reverse().map(i => Recent_Data[i])
    const DataArray2 = Object.keys(Whole_Data).map(i => Whole_Data[i])
    
    

    /*console.log(Recent_Data)
    console.log(Whole_Data)
    console.log(Ratio_Data)
    console.log(Current_Time)
    console.log(DataArray1)
    console.log(DataArray2)*/

    const _Graph_data = this.gen_graphdata(DataArray2)
    
    this.setState({
      Recent_trans : DataArray1,
      Graph_data: _Graph_data,
      Pie_data : Ratio_Data,
      Time : Current_Time
    })
  }
  
  _callApi = (API) => {
    return fetch(API)
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.log(err))
  }

  gen_graphdata = (input_data) => {
    const Graphdata=[];

    var buf_date = input_data[0].date
    var buf_amount = 0
    var data_len = input_data.length
    var i = 1

    input_data.map(element => {
      if(buf_date == element.date){
        buf_amount = buf_amount + element.amount
      }else{
        var a = buf_date.split("-")
        var d = new Date(Number(a[0]), Number(a[1])-1, Number(a[2]))
        const ele = {x: d, y: buf_amount}
        Graphdata.push(ele)
        buf_date = element.date
        buf_amount = element.amount
      }
      if(i==data_len){
        var a = buf_date.split("-")
        var d = new Date(Number(a[0]), Number(a[1])-1, Number(a[2]))
        console.log(d)
        const ele = {x: d, y: buf_amount}
        Graphdata.push(ele)
      }
      i++
    });
    
    return Graphdata
  }

  __renderPages= () => {
                //<div className="_LineChart"></div>
                //<div className="_PieChart"></div> 
    return(
      <div>
            <div className="_content_title">
                <h1>Financial Analysis</h1>
                <p>{this.state.Time}</p>
            </div>

            <div className="_content_display"> 
                <div class="_line"><LineChart data={this.state.Graph_data}/></div>
                <div class="_pie"><PieChart data = {this.state.Pie_data}/></div>
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
      {this.state.Recent_trans && this.state.Graph_data && this.state.Pie_data && this.state.Time? this.__renderPages() : 'Loading'}
      </div>
    );
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
          <div className="Trans_info"><Table data = {this.props.data} columns = {column_overview} type='overview'/></div>
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
