import React, { Component } from 'react';
import './status_card.css';


class Status_card_list extends Component{
    render(){
        console.log('stat_card')
        console.log(this.props.data)
      return(
        <div className="card_list">
                <div className="card">
                    <div className="card_content_low">
                        <ul>
                        <li>$ {this.props.data.Account_Bal}</li>
                        <li>Account Balance</li>
                        </ul>
                        <div class='icons'><img src="https://image.flaticon.com/icons/svg/743/743131.svg" alt="Monthly Expenditure"></img></div>
                        
                        </div>
                </div>
                <div className="card">
                <div className="card_content_high">
                <ul>
                <li>$ {this.props.data.predict_exp}</li>
                <li>Recommended  Expenditure</li>
                </ul>
                <div class='icons'><img src="https://image.flaticon.com/icons/svg/741/741744.svg" alt="Remaining Monthly Budget"></img></div>
                </div>
                </div>
                <div className="card">
                <div className="card_content_high">
                    <ul>
                    <li>$ {this.props.data.Remain_bud}</li>
                    <li>Remaining Monthly Budget</li>
                    </ul>
                    <div class='icons'><img src="https://image.flaticon.com/icons/svg/259/259473.svg" alt="Account Balance"></img></div>
                </div>
                </div>
                <Finance status={this.props.data.Finance_stat}/>
        </div>
      )
    }
}

class Finance extends Component {
    render(){
        if(this.props.status=='BAD')
            return(<div className="card">
            <div className="card_content_low">
                <ul>
                <li id="stat_bad">{this.props.status}</li>
                <li>Financial Status</li>
                </ul>
                <div class='icons'><img src="https://image.flaticon.com/icons/svg/910/910129.svg" alt="Financial Status"></img></div>
                </div>
            </div>);
        else
            return(<div className="card">
            <div className="card_content_low">
                <ul>
                <li id="stat_good">{this.props.status}</li>
                <li>Financial Status</li>
                </ul>
                <div class='icons'><img src="https://image.flaticon.com/icons/svg/910/910129.svg" alt="Financial Status"></img></div>
                </div>
            </div>);
    }
}


export default Status_card_list;

                      