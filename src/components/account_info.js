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

const acc_var1 = [{"UID":1,"date":"2018-12-31","time":"21:00","company":"NotFunAtAll","category":"Entertainment","amount":188.15,"type":"Chip"},{"UID":1,"date":"2018-12-31","time":"18:00","company":"Supremarket","category":"Groceries","amount":1.51,"type":"Chip"},{"UID":1,"date":"2018-12-31","time":"17:00","company":"Resturant C","category":"Food","amount":20.99,"type":"Chip"},{"UID":1,"date":"2018-12-31","time":"12:00","company":"Restuarnt A","category":"Food","amount":6.1,"type":"Chip"},{"UID":1,"date":"2018-12-31","time":"8:00","company":"Restuarnt A","category":"Food","amount":4.23,"type":"Chip"},{"UID":1,"date":"2018-12-30","time":"17:00","company":"Resturant B","category":"Food","amount":12.03,"type":"Chip"},{"UID":1,"date":"2018-12-30","time":"12:00","company":"Restuarnt A","category":"Food","amount":7.74,"type":"Chip"},{"UID":1,"date":"2018-12-30","time":"8:00","company":"Restuarnt A","category":"Food","amount":2.17,"type":"Chip"},{"UID":1,"date":"2018-12-29","time":"17:00","company":"Resturant B","category":"Food","amount":14.68,"type":"Chip"},{"UID":1,"date":"2018-12-29","time":"12:00","company":"Restuarnt A","category":"Food","amount":9.83,"type":"Chip"},{"UID":1,"date":"2018-12-29","time":"8:00","company":"Restuarnt A","category":"Food","amount":3.34,"type":"Chip"},{"UID":1,"date":"2018-12-28","time":"18:00","company":"Supremarket","category":"Groceries","amount":3.93,"type":"Chip"},{"UID":1,"date":"2018-12-28","time":"17:00","company":"Resturant B","category":"Food","amount":12.12,"type":"Chip"},{"UID":1,"date":"2018-12-28","time":"12:00","company":"Restuarnt A","category":"Food","amount":5.08,"type":"Chip"},{"UID":1,"date":"2018-12-28","time":"8:00","company":"Restuarnt A","category":"Food","amount":4.51,"type":"Chip"},{"UID":1,"date":"2018-12-27","time":"19:00","company":"NotUniform","category":"Apparel","amount":84.96,"type":"Chip"},{"UID":1,"date":"2018-12-27","time":"17:00","company":"Restuarnt A","category":"Food","amount":7.79,"type":"Chip"},{"UID":1,"date":"2018-12-27","time":"12:00","company":"Restuarnt A","category":"Food","amount":5.96,"type":"Chip"},{"UID":1,"date":"2018-12-27","time":"8:00","company":"Restuarnt A","category":"Food","amount":3.55,"type":"Chip"},{"UID":1,"date":"2018-12-26","time":"21:00","company":"NotFunAtAll","category":"Entertainment","amount":198.39,"type":"Chip"},{"UID":1,"date":"2018-12-26","time":"17:00","company":"Resturant B","category":"Food","amount":18.15,"type":"Chip"},{"UID":1,"date":"2018-12-26","time":"12:00","company":"Restuarnt A","category":"Food","amount":6.76,"type":"Chip"},{"UID":1,"date":"2018-12-26","time":"8:00","company":"Restuarnt A","category":"Food","amount":2.75,"type":"Chip"},{"UID":1,"date":"2018-12-25","time":"18:00","company":"Supremarket","category":"Groceries","amount":4.68,"type":"Chip"},{"UID":1,"date":"2018-12-25","time":"17:00","company":"Restuarnt A","category":"Food","amount":8.17,"type":"Chip"},{"UID":1,"date":"2018-12-25","time":"12:00","company":"Restuarnt A","category":"Food","amount":6.87,"type":"Chip"},{"UID":1,"date":"2018-12-25","time":"8:00","company":"Restuarnt A","category":"Food","amount":5.48,"type":"Chip"},{"UID":1,"date":"2018-12-24","time":"17:00","company":"Resturant B","category":"Food","amount":16.4,"type":"Chip"},{"UID":1,"date":"2018-12-24","time":"12:00","company":"Restuarnt A","category":"Food","amount":6.63,"type":"Chip"},{"UID":1,"date":"2018-12-24","time":"8:00","company":"Restuarnt A","category":"Food","amount":2.58,"type":"Chip"},{"UID":1,"date":"2018-12-23","time":"17:00","company":"Resturant C","category":"Food","amount":21.53,"type":"Chip"},{"UID":1,"date":"2018-12-23","time":"12:00","company":"Restuarnt A","category":"Food","amount":4.27,"type":"Chip"},{"UID":1,"date":"2018-12-23","time":"8:00","company":"Restuarnt A","category":"Food","amount":5.19,"type":"Chip"},{"UID":1,"date":"2018-12-22","time":"18:00","company":"Supremarket","category":"Groceries","amount":1.77,"type":"Chip"},{"UID":1,"date":"2018-12-22","time":"17:00","company":"Resturant B","category":"Food","amount":10.07,"type":"Chip"},{"UID":1,"date":"2018-12-22","time":"12:00","company":"Restuarnt A","category":"Food","amount":6.17,"type":"Chip"},{"UID":1,"date":"2018-12-22","time":"8:00","company":"Restuarnt A","category":"Food","amount":3.11,"type":"Chip"},{"UID":1,"date":"2018-12-21","time":"21:00","company":"NotFunAtAll","category":"Entertainment","amount":127.41,"type":"Chip"},{"UID":1,"date":"2018-12-21","time":"17:00","company":"Resturant B","category":"Food","amount":17.4,"type":"Chip"},{"UID":1,"date":"2018-12-21","time":"12:00","company":"Restuarnt A","category":"Food","amount":9.69,"type":"Chip"},{"UID":1,"date":"2018-12-21","time":"8:00","company":"Restuarnt A","category":"Food","amount":4.04,"type":"Chip"},{"UID":1,"date":"2018-12-21","time":"0:00","company":"NotSellingJets","category":"Transportation","amount":92.88,"type":"Online"},{"UID":1,"date":"2018-12-20","time":"17:00","company":"Resturant B","category":"Food","amount":12.52,"type":"Chip"},{"UID":1,"date":"2018-12-20","time":"12:00","company":"Restuarnt A","category":"Food","amount":7.55,"type":"Chip"},{"UID":1,"date":"2018-12-20","time":"8:00","company":"Restuarnt A","category":"Food","amount":2.67,"type":"Chip"},{"UID":1,"date":"2018-12-19","time":"18:00","company":"Supremarket","category":"Groceries","amount":0.6,"type":"Chip"},{"UID":1,"date":"2018-12-19","time":"17:00","company":"Resturant B","category":"Food","amount":15.65,"type":"Chip"},{"UID":1,"date":"2018-12-19","time":"12:00","company":"Restuarnt A","category":"Food","amount":5.5,"type":"Chip"},{"UID":1,"date":"2018-12-19","time":"8:00","company":"Restuarnt A","category":"Food","amount":3.63,"type":"Chip"},{"UID":1,"date":"2018-12-18","time":"17:00","company":"Resturant B","category":"Food","amount":15.45,"type":"Chip"},{"UID":1,"date":"2018-12-18","time":"12:00","company":"Restuarnt A","category":"Food","amount":8.59,"type":"Chip"},{"UID":1,"date":"2018-12-18","time":"8:00","company":"Restuarnt A","category":"Food","amount":3.94,"type":"Chip"},{"UID":1,"date":"2018-12-17","time":"17:00","company":"Restuarnt A","category":"Food","amount":7.4,"type":"Chip"},{"UID":1,"date":"2018-12-17","time":"12:00","company":"Restuarnt A","category":"Food","amount":9.31,"type":"Chip"},{"UID":1,"date":"2018-12-17","time":"8:00","company":"Restuarnt A","category":"Food","amount":2.5,"type":"Chip"},{"UID":1,"date":"2018-12-16","time":"21:00","company":"NotFunAtAll","category":"Entertainment","amount":144.71,"type":"Chip"},{"UID":1,"date":"2018-12-16","time":"18:00","company":"Supremarket","category":"Groceries","amount":1.57,"type":"Chip"},{"UID":1,"date":"2018-12-16","time":"17:00","company":"Resturant B","category":"Food","amount":18.36,"type":"Chip"},{"UID":1,"date":"2018-12-16","time":"12:00","company":"Restuarnt A","category":"Food","amount":6.41,"type":"Chip"},{"UID":1,"date":"2018-12-16","time":"8:00","company":"Restuarnt A","category":"Food","amount":3.97,"type":"Chip"},{"UID":1,"date":"2018-12-15","time":"17:00","company":"Restuarnt A","category":"Food","amount":5.31,"type":"Chip"},{"UID":1,"date":"2018-12-15","time":"12:00","company":"Restuarnt A","category":"Food","amount":9.88,"type":"Chip"},{"UID":1,"date":"2018-12-15","time":"8:00","company":"Restuarnt A","category":"Food","amount":3.94,"type":"Chip"},{"UID":1,"date":"2018-12-14","time":"17:00","company":"Resturant B","category":"Food","amount":14.64,"type":"Chip"},{"UID":1,"date":"2018-12-14","time":"12:00","company":"Restuarnt A","category":"Food","amount":4.04,"type":"Chip"},{"UID":1,"date":"2018-12-14","time":"8:00","company":"Restuarnt A","category":"Food","amount":3.49,"type":"Chip"},{"UID":1,"date":"2018-12-13","time":"18:00","company":"Supremarket","category":"Groceries","amount":1.22,"type":"Chip"},{"UID":1,"date":"2018-12-13","time":"17:00","company":"Resturant B","category":"Food","amount":19.97,"type":"Chip"},{"UID":1,"date":"2018-12-13","time":"12:00","company":"Restuarnt A","category":"Food","amount":7.93,"type":"Chip"},{"UID":1,"date":"2018-12-13","time":"8:00","company":"Restuarnt A","category":"Food","amount":2.42,"type":"Chip"},{"UID":1,"date":"2018-12-12","time":"17:00","company":"Resturant B","category":"Food","amount":14.46,"type":"Chip"},{"UID":1,"date":"2018-12-12","time":"12:00","company":"Restuarnt A","category":"Food","amount":4.38,"type":"Chip"},{"UID":1,"date":"2018-12-12","time":"8:00","company":"Restuarnt A","category":"Food","amount":4.06,"type":"Chip"},{"UID":1,"date":"2018-12-11","time":"21:00","company":"NotFunAtAll","category":"Entertainment","amount":185.28,"type":"Chip"},{"UID":1,"date":"2018-12-11","time":"17:00","company":"Restuarnt A","category":"Food","amount":6.66,"type":"Chip"},{"UID":1,"date":"2018-12-11","time":"12:00","company":"Restuarnt A","category":"Food","amount":6.51,"type":"Chip"},{"UID":1,"date":"2018-12-11","time":"8:00","company":"Restuarnt A","category":"Food","amount":2.58,"type":"Chip"},{"UID":1,"date":"2018-12-10","time":"18:00","company":"Supremarket","category":"Groceries","amount":3.52,"type":"Chip"},{"UID":1,"date":"2018-12-10","time":"17:00","company":"Resturant B","category":"Food","amount":10.53,"type":"Chip"},{"UID":1,"date":"2018-12-10","time":"12:00","company":"Restuarnt A","category":"Food","amount":5.29,"type":"Chip"},{"UID":1,"date":"2018-12-10","time":"8:00","company":"Restuarnt A","category":"Food","amount":1.65,"type":"Chip"},{"UID":1,"date":"2018-12-9","time":"17:00","company":"Resturant B","category":"Food","amount":19.6,"type":"Chip"},{"UID":1,"date":"2018-12-9","time":"12:00","company":"Restuarnt A","category":"Food","amount":2.75,"type":"Chip"},{"UID":1,"date":"2018-12-9","time":"8:00","company":"Restuarnt A","category":"Food","amount":5.08,"type":"Chip"},{"UID":1,"date":"2018-12-8","time":"17:00","company":"Resturant B","category":"Food","amount":18.26,"type":"Chip"},{"UID":1,"date":"2018-12-8","time":"12:00","company":"Restuarnt A","category":"Food","amount":4.41,"type":"Chip"},{"UID":1,"date":"2018-12-8","time":"8:00","company":"Restuarnt A","category":"Food","amount":3.45,"type":"Chip"},{"UID":1,"date":"2018-12-8","time":"0:00","company":"HopeYouAreFine.INC","category":"Insurance","amount":264.93,"type":"Online"},{"UID":1,"date":"2018-12-7","time":"18:00","company":"Supremarket","category":"Groceries","amount":6.55,"type":"Chip"},{"UID":1,"date":"2018-12-7","time":"17:00","company":"Resturant B","category":"Food","amount":12.34,"type":"Chip"},{"UID":1,"date":"2018-12-7","time":"12:00","company":"Resturant B","category":"Food","amount":10.65,"type":"Chip"},{"UID":1,"date":"2018-12-7","time":"8:00","company":"Restuarnt A","category":"Food","amount":3.62,"type":"Chip"},{"UID":1,"date":"2018-12-7","time":"0:00","company":"ParadiseIsland.INC","category":"Housing","amount":414.52,"type":"Online"},{"UID":1,"date":"2018-12-6","time":"21:00","company":"NotFunAtAll","category":"Entertainment","amount":179.65,"type":"Chip"},{"UID":1,"date":"2018-12-6","time":"17:00","company":"Resturant B","category":"Food","amount":16.41,"type":"Chip"},{"UID":1,"date":"2018-12-6","time":"12:00","company":"Restuarnt A","category":"Food","amount":6.37,"type":"Chip"},{"UID":1,"date":"2018-12-6","time":"8:00","company":"Restuarnt A","category":"Food","amount":3.12,"type":"Chip"},{"UID":1,"date":"2018-12-5","time":"17:00","company":"Restuarnt A","category":"Food","amount":8.17,"type":"Chip"},{"UID":1,"date":"2018-12-5","time":"12:00","company":"Restuarnt A","category":"Food","amount":4.28,"type":"Chip"},{"UID":1,"date":"2018-12-5","time":"8:00","company":"Restuarnt A","category":"Food","amount":4.52,"type":"Chip"},{"UID":1,"date":"2018-12-4","time":"18:00","company":"Supremarket","category":"Groceries","amount":9.49,"type":"Chip"},{"UID":1,"date":"2018-12-4","time":"17:00","company":"Restuarnt A","category":"Food","amount":8.13,"type":"Chip"},{"UID":1,"date":"2018-12-4","time":"12:00","company":"Restuarnt A","category":"Food","amount":6.05,"type":"Chip"},{"UID":1,"date":"2018-12-4","time":"8:00","company":"Restuarnt A","category":"Food","amount":3.55,"type":"Chip"},{"UID":1,"date":"2018-12-3","time":"17:00","company":"Resturant B","category":"Food","amount":13.9,"type":"Chip"},{"UID":1,"date":"2018-12-3","time":"12:00","company":"Restuarnt A","category":"Food","amount":8.62,"type":"Chip"},{"UID":1,"date":"2018-12-3","time":"8:00","company":"Restuarnt A","category":"Food","amount":3.55,"type":"Chip"},{"UID":1,"date":"2018-12-2","time":"17:00","company":"Restuarnt A","category":"Food","amount":6.04,"type":"Chip"},{"UID":1,"date":"2018-12-2","time":"12:00","company":"Restuarnt A","category":"Food","amount":6.9,"type":"Chip"},{"UID":1,"date":"2018-12-2","time":"8:00","company":"Restuarnt A","category":"Food","amount":1.71,"type":"Chip"},{"UID":1,"date":"2018-12-1","time":"21:00","company":"NotFunAtAll","category":"Entertainment","amount":162.23,"type":"Chip"},{"UID":1,"date":"2018-12-1","time":"18:00","company":"Supremarket","category":"Groceries","amount":3.19,"type":"Chip"},{"UID":1,"date":"2018-12-1","time":"17:00","company":"Resturant B","category":"Food","amount":11.2,"type":"Chip"},{"UID":1,"date":"2018-12-1","time":"12:00","company":"Restuarnt A","category":"Food","amount":8.2,"type":"Chip"},{"UID":1,"date":"2018-12-1","time":"8:00","company":"Restuarnt A","category":"Food","amount":1.84,"type":"Chip"}]

const acc_var2 = {"1":{"predicted_val":13791.28447535766,"current_balance":13855.580386698246,"alert":"You are fucked up!!"},"2":{"predicted_val":2415.6336348414734,"current_balance":2380.4399785995483,"alert":"You are in great financial condition!"},"3":{"predicted_val":3853.951319853615,"current_balance":3881.8999185562134,"alert":"You are in great financial condition!"},"4":{"predicted_val":2520.4335731977135,"current_balance":2473.129994034767,"alert":"You are in great financial condition!"},"5":{"predicted_val":2617.2615376620597,"current_balance":2563.789978802204,"alert":"You are in great financial condition!"},"6":{"predicted_val":2496.7784299372997,"current_balance":2420.7999936938286,"alert":"You are in great financial condition!"},"7":{"predicted_val":2673.3900280845883,"current_balance":2695.1399822235107,"alert":"You are in great financial condition!"},"8":{"predicted_val":2668.7675161866555,"current_balance":2636.209985256195,"alert":"You are in great financial condition!"},"9":{"predicted_val":13606.671051332381,"current_balance":13637.600386470556,"alert":"You are fucked up!!"},"10":{"predicted_val":2730.6172900079127,"current_balance":2657.6199885606766,"alert":"You are in great financial condition!"},"11":{"predicted_val":2489.6234025480007,"current_balance":2486.819981753826,"alert":"You are in great financial condition!"},"12":{"predicted_val":2705.8150083271594,"current_balance":2810.4299688339233,"alert":"You are in great financial condition!","msg1_0":"You spend 42% on entertainment which is $1270.5. It is the same as last month and the same as last year.","msg1_1":"You spend 25% on food which is $765.25. It is the same as last month and the same as last year.","msg1_2":"You spend 14% on housing which is $428.54. It is the same as last month and the same as last year."}}

const acc_var3 = 2810.4

class Account_info extends Component {
    state = {}

  componentWillMount(){
    this._getData()
  }
  
   _getData = async() =>{
   /* const Whole_Data_api = await this._callApi(WHOLE_API)  // will wait until the callApi function is finished
    const ML_Data_api = await this._callApi(ML_API)  // will wait until the callApi function is finished
    
    const Whole_Data = Whole_Data_api.data.transactions
    const DataArray = Object.keys(Whole_Data).reverse().map(i => Whole_Data[i])
    const balance = Math.round(ML_Data_api.data[12].current_balance*10)/10
    
    console.log(JSON.stringify(DataArray))
    console.log(JSON.stringify(ML_Data_api.data))
    console.log(JSON.stringify(balance))
*/

setTimeout(function(){
  this.setState({Loading:true});
  }.bind(this),2500);

    this.setState({
      Graph_data: acc_var1,
      ML_data : acc_var2,
      bal : acc_var3
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
            <p>Wed, 1 May 2019 21:38:20 GMT</p>
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
      {(this.state.Graph_data && this.state.ML_data && this.state.bal && this.state.Loading) ? this.__renderPages() : this.__loadingPages()}
      </div>
    );
  }

  }

  
  
  export default Account_info;