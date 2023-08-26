import React from 'react'
import "./Picks.css"

function Picks() {
  return (
    <section className="hot-picks container mt-3">
        <h5 style={{color: "rgb(108, 108, 108)"}}>This Weeks Hot Picks</h5>
        <hr/>
        <div className="horizontal-scroll hot-picks-head">
          <div id="highlights">Highlights</div>   
          <div id="phones">Phones</div>   
          <div id="tv">TV & Displays</div>   
          <div id="audio">Audio</div>   
          <div id="wearables">Wearables</div>     
          <div id="accessories">Accessories</div>
        </div>
        <div className="hot-picks-highlight horizontal-scroll">
            <div className="hot-picks-highlight-card" style={{width: "280px"}}>
              <div className="hot-picks-img mb-4" >
                <a href="http://localhost:3000/mobile-details/prod002">
                  <img className="zoom-in" src="https://image01-in.oneplus.net/ebp/202303/29/1-m00-50-fd-cpgm7wqj5riagurqaakzkxnnips198.png" alt="hw"/>
                </a>
              </div>
              <div>
                <h3>OnePlus Nord CE 3 Lite 5G</h3>
                <p>Get 6 months of Spotify Premium at no extra cost.</p>
              </div>
              <div>
                <a href="http://localhost:3000/mobile-details/prod002" style={{textDecoration: "none"}}>
                  <div className="highlight-button">
                      <span className="material-symbols-outlined me-1">
                        shopping_cart
                        </span>
                      <span>From ₹19,999</span>
                  </div>
                </a>
              </div>
            </div>
  
            <div className="hot-picks-highlight-card" style={{width: "280px"}}>
              
              <div className="hot-picks-img mb-4" >
                <a href="http://localhost:3000/mobile-details/prod005">
                  <img className="zoom-in" src="https://image01-in.oneplus.net/ebp/202305/31/1-m00-51-66-cpgm7wr26omaegnzaaniaca13ya555_360_360.png" alt="hw"/>
                </a>
              </div>
              <div>
                <h3>OnePlus 11R 5G</h3>
                <p>Save additional ₹1000 with bank discount.</p>
              </div>
              <div>
                <a href="http://localhost:3000/mobile-details/prod005" style={{textDecoration: "none"}}>
                  <div className="highlight-button">
                      <span className="material-symbols-outlined me-1">
                        shopping_cart
                        </span>
                      <span>From ₹39,999</span>
                  </div>
                </a>
              </div>
          
            </div>
  
            <div className="hot-picks-highlight-card" style={{width: "280px"}}>
              <div className="hot-picks-img mb-4" >
                <a href="http://localhost:3000/display-details/prod002">
                  <img className="zoom-in" src="https://image01-in.oneplus.net/ebp/202212/27/1-m00-4c-30-cpgm7moqqlgacqqqaary8omzel0913.png" alt="hw"/>
                </a>
              </div>
              <div>
                <h3>OnePlus TV Y Series 32 | 43 Y1S Edge</h3>
                <p>Up to ₹1500 instant bank discount; Save extra ₹1000 by using the RCC linked device benefit.</p>
              </div>
              <div>
                <a href="http://localhost:3000/display-details/prod002" style={{textDecoration:"none"}}>
                  <div className="highlight-button">
                      <span className="material-symbols-outlined me-1">
                        shopping_cart
                        </span>
                      <span>From ₹16,599</span>
                  </div>
                </a>
              </div>
            </div>
  
  
            <div className="hot-picks-highlight-card" style={{width: "280px"}}>
              <div className="hot-picks-img mb-4" >
                <a href="">
                  <img className="zoom-in" src="	https://image01-in.oneplus.net/ebp/202304/13/1-m00-51-1b-cpgm7wq35waawfbbaas0vraswfq234.png" alt="hw"/>
                </a>
              </div>
              <div>
                <h3>OnePlus Pad</h3>
                <p>Save ₹2000 with bank discount. No Cost EMI up to 12 months.</p>
              </div>
              <div >
                <a href="" style={{textDecoration:"none"}}>
                  <div className="highlight-button">
                      <span className="material-symbols-outlined me-1">
                        shopping_cart
                        </span>
                      <span>From ₹36,999</span>
                  </div>
                </a>
              </div>
            </div>
        </div>
      </section>
      
  )
}

export default Picks