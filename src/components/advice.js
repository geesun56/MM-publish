import React, { Component } from 'react';
import './advice.css';

class Advice extends Component{
    render(){
      console.log('advice status')
      console.log(this.props.status)
      return(
        <div>
          <h3 id='advice_head'>Financial Status Messages</h3>
          <ul id='msg-box'>
            <li>{this.props.msg.rk1}</li>
            <li>{this.props.msg.rk2}</li>
            <li>{this.props.msg.rk3}</li>
            <li>{this.props.msg.msg1}</li>
            <li>{this.props.msg.msg2}</li>
            <li>{this.props.msg.msg3}</li>
            <li>Your Finance Status is "{this.props.status}"</li>
          </ul>
          
          </div>
      )
    }
  }

export default Advice;

                      