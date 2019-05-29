import React, { Component } from 'react';
import './overview.css';
import PieChart from "../plugin/views/pie & funnel charts/Pie Chart"
import LineChart from "../plugin/views/line charts/Line Chart"
import Table from "./table"
import Advice from "./advice"
import Loading from "./loading"
import Status_card_list from "./status_card"
/* ---- API request address ---- */

const base_addr = 'http://localhost:5000/'
const user = '2/'
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

const var1 = [{"UID":2,"date":"2018-12-31","time":"21:00","company":"NotFunAtAll","category":"Entertainment","amount":102.44,"type":"Chip"},{"UID":2,"date":"2018-12-31","time":"18:00","company":"Supremarket","category":"Groceries","amount":8.76,"type":"Chip"},{"UID":2,"date":"2018-12-31","time":"17:00","company":"Resturant B","category":"Food","amount":13.38,"type":"Chip"},{"UID":2,"date":"2018-12-31","time":"12:00","company":"Restuarnt A","category":"Food","amount":4.54,"type":"Chip"},{"UID":2,"date":"2018-12-31","time":"8:00","company":"Restuarnt A","category":"Food","amount":5.27,"type":"Chip"},{"UID":2,"date":"2018-12-30","time":"17:00","company":"Restuarnt A","category":"Food","amount":9.03,"type":"Chip"},{"UID":2,"date":"2018-12-30","time":"12:00","company":"Resturant B","category":"Food","amount":11.94,"type":"Chip"},{"UID":2,"date":"2018-12-30","time":"8:00","company":"Restuarnt A","category":"Food","amount":2.82,"type":"Chip"},{"UID":2,"date":"2018-12-29","time":"17:00","company":"Resturant B","category":"Food","amount":16.09,"type":"Chip"},{"UID":2,"date":"2018-12-29","time":"8:00","company":"Restuarnt A","category":"Food","amount":4.52,"type":"Chip"}]

const var2 = [{"x":new Date("2018-11-30T15:00:00.000Z"),"y":149.51},
              {"x":new Date("2018-12-01T15:00:00.000Z"),"y":113.59},
              {"x":new Date("2018-12-02T15:00:00.000Z"),"y":28.990000000000002},
              {"x":new Date("2018-12-03T15:00:00.000Z"),"y":25.5},
              {"x":new Date("2018-12-04T15:00:00.000Z"),"y":18.34},
              {"x":new Date("2018-12-05T15:00:00.000Z"),"y":470.5799999999999},
              {"x":new Date("2018-12-06T15:00:00.000Z"),"y":27.6},
              {"x":new Date("2018-12-07T15:00:00.000Z"),"y":22.520000000000003},
              {"x":new Date("2018-12-08T15:00:00.000Z"),"y":20.93},
              {"x":new Date("2018-12-09T15:00:00.000Z"),"y":20.34},
              {"x":new Date("2018-12-10T15:00:00.000Z"),"y":156.37},
              {"x":new Date("2018-12-11T15:00:00.000Z"),"y":31.550000000000004},
              {"x":new Date("2018-12-12T15:00:00.000Z"),"y":29.279999999999998},
              {"x":new Date("2018-12-13T15:00:00.000Z"),"y":19.27},
              {"x":new Date("2018-12-14T15:00:00.000Z"),"y":21.119999999999997},
              {"x":new Date("2018-12-15T15:00:00.000Z"),"y":186.26000000000002},
              {"x":new Date("2018-12-16T15:00:00.000Z"),"y":20.28},
              {"x":new Date("2018-12-17T15:00:00.000Z"),"y":16.54},
              {"x":new Date("2018-12-18T15:00:00.000Z"),"y":508.62},
              {"x":new Date("2018-12-19T15:00:00.000Z"),"y":26.58},
              {"x":new Date("2018-12-20T15:00:00.000Z"),"y":120.33999999999999},
              {"x":new Date("2018-12-21T15:00:00.000Z"),"y":26.91},
              {"x":new Date("2018-12-22T15:00:00.000Z"),"y":19.380000000000003},
              {"x":new Date("2018-12-23T15:00:00.000Z"),"y":20.16},
              {"x":new Date("2018-12-24T15:00:00.000Z"),"y":27.11},
              {"x":new Date("2018-12-25T15:00:00.000Z"),"y":137},
              {"x":new Date("2018-12-26T15:00:00.000Z"),"y":24.41},
              {"x":new Date("2018-12-27T15:00:00.000Z"),"y":35.29},
              {"x":new Date("2018-12-28T15:00:00.000Z"),"y":30.729999999999997},
              {"x":new Date("2018-12-29T15:00:00.000Z"),"y":23.79},
              {"x":new Date("2018-12-30T15:00:00.000Z"),"y":134.39}]
                        
const var3 = {"Education":0,"HealthCare":0,"Apparel":2,"Transportation":3,"Entertainment":35,"Insurance":10,"Housing":16,"Groceries":1,"Food":28}
                        
const var4 = "Wed, 1 May 2019 21:38:20 GMT"
                        
const var5 = {"Account_Bal":2513.3,"predict_exp":2578.9,"Remain_bud":65.6,"Finance_stat":"GOOD"}

                        
class Overview extends Component {

  state = {}

  componentWillMount(){
    this._getData()
  }
  
   _getData = async() =>{
    /*const Recent_Data_api = await this._callApi(RECENT_API)  // will wait until the callApi function is finished
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
   
    const status_data = {Account_Bal: Math.round(Box_Data.data.current_balance*10)/10, predict_exp: Math.round(Box_Data.data.predicted_val*10)/10, Remain_bud: Math.round((Box_Data.data.predicted_val-Box_Data.data.current_balance)*10)/10, Finance_stat: ""}
    if(status_data.Remain_bud>=0) status_data.Finance_stat ='GOOD'
    else status_data.Finance_stat ='BAD'
    const _Graph_data = this.gen_graphdata(DataArray2)

    console.log(_Graph_data)
    console.log(var2)*/
  
    
  

    this.setState({
      Recent_trans : var1,
      Graph_data: var2,
      Pie_data : var3,
      Time : var4,
      Box_data: var5
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
                console.log(this.state.Graph_data)
                
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
                  <Advice msg = {finance_message} status = {this.state.Box_data.Finance_stat}/>
                  </div>
                </div>
              
      </div>
    );
  }

  __loadingPages= () =>{
    return (<div class='load'><Loading/></div>
      
      );
  }

  render() {
    console.log('rendering now')
    return (
      <div className="_content">
       {this.__renderPages()}
      </div>
    );
  }
}














export default Overview;
