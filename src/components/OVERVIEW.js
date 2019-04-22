import React, { Component } from 'react';
import './overview.css';



import PieChart from "../plugin/views/pie & funnel charts/Pie Chart"
import LineChart from "../plugin/views/line charts/Line Chart"
import Table from "./table"
import Advice from "./advice"
import Status_card_list from "./status_card"
/* ---- API request address ---- */
const base_addr = 'http://localhost:5000/'
const user = '1/'
const RECENT_API = base_addr+user+'transactions?recent_transactions=true'
const WHOLE_API = base_addr+user+'transactions'
const RATIO_API =base_addr+user+'categoryRatio'
const TIME_API = base_addr+'currentTime'
const BOX_API = base_addr+user+'prediction?month=12'


const column_overview = [{   //for Table component
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
}]

const finance_message = {rk1: "TOP1 expenditure : Entertainment",
                        rk2: "TOP2 expenditure : Food",
                        rk3: "TOP3 expenditure : Housing",
                        msg1 :"You spend 42% on Entertainment which is $1270.5. It is the same as last month and the same month of last year.",
                        msg2: "You spend 25% on food which is $765.25. It is the same as last month and the same month of last year.",
                        msg3: "You spend 14% on housing which is $428.54. It is the same as last month and the same month of last year.",
                        
                        msg4: "Does this result make sense to you?" }


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
    const Box_api = await this._callApi(BOX_API)

    const Recent_Data =Recent_Data_api.data.transactions
    const Whole_Data = Whole_Data_api.data.transactions
    const Ratio_Data = Ratio_Data_api.data.ratio
    const Current_Time = Current_Time_api
    const Box_Data = Box_api
    const DataArray1 = Object.keys(Recent_Data).reverse().map(i => Recent_Data[i])
    const DataArray2 = Object.keys(Whole_Data).map(i => Whole_Data[i])
    console.log('box')
    console.log(Box_Data.data)
    const status_data = {Account_Bal: Math.round(Box_Data.data.current_balance*10)/10, predict_exp: Math.round(Box_Data.data.predicted_val*10)/10, Remain_bud: Math.round((Box_Data.data.predicted_val-Box_Data.data.current_balance)*10)/10, Finance_stat: ""}
    if(status_data.Remain_bud>=0) status_data.Finance_stat ='GOOD'
    else status_data.Finance_stat ='BAD'
    console.log(status_data)
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
      Time : Current_Time,
      Box_data: status_data
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
                console.log(this.props.type)
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
            <div class="status_box"><Status_card_list data={this.state.Box_data}/></div>
              

              <div className="Detail_box">
                  <div className="Detail_table">
                  <Table columns = {column_overview} type = 'overview' data={this.state.Recent_trans}/>          
                  </div>          
                  <div className="Detail_desc">
                  <Advice msg = {finance_message}/>
                  </div>
                </div>
              
      </div>
    );
  }

  render() {
    console.log('rendering now')
    return (
      <div className="_content">
      {this.state.Recent_trans && this.state.Graph_data && this.state.Pie_data && this.state.Time && this.state.Box_data? this.__renderPages() : 'Loading'}
      </div>
    );
  }
}














export default Overview;
