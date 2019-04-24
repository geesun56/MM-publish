import React, { Component } from 'react';
import './loading.css';

class Loading extends Component{
    render(){
      return(
        <div>
        <div class="_Loading">
            <div>Loading</div>
            <div class="img-dots">
            <span class="dot1"></span>
            <span class="dot2"></span>
            <span class="dot3"></span>
            <span class="dot4"></span>
            <span class="dot5"></span>
            <span class="dot6"></span>
             </div>
        </div>

        <div class= "advertise">

        <div id="_cards">
            <span id="hello">Do you need a credit card?</span>
            <span id="hello2">Consider these Featured cards or compare other cards at Capital One.</span>
            <div class="cards">
                <span>BUILDING CREDIT</span>
                <img class="creditcd" src="https://www.capitalone.com/assets/credit-cards/img/platinum-card-art.png" alt="card1"></img>
                <span class="blue-text">Platinum</span>
            </div>
            <div class="cards">
                <span>CASH BACK REWARDS</span>
                <img class="creditcd"  src="https://www.capitalone.com/assets/credit-cards/img/quicksilverone-card-art.png" alt="card2"></img>
                <span  class="blue-text">QuicksilverOne® Rewards</span>

            </div>
            <div class="cards">
                <span>CASH BACK REWARDS</span>
                <img class="creditcd"  src="https://www.capitalone.com/assets/credit-cards/img/savor-card-art.png" alt="card3"></img>
                <span  class="blue-text">Savor® Rewards</span>
            </div>
            </div>      
        </div>
</div>
      )
    }
  }

export default Loading;

                      