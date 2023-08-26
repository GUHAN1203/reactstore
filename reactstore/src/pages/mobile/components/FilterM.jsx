import React from 'react'
<link rel="stylesheet" href="Mobile.css" />

function Filter() {
  return (
    <div  style ={{alignItems:'flex-start'}}  class="album py-5 px-3">
    <div  class="row">
      <div   class=" ps-4">
        <div style={{position: "sticky",top: "0"}}class="filter mt-5 ">
        
        <h3>Series</h3>
        
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="check1" name="Flagship Series" value="something" checked/>
            <label class="form-check-label" htmlFor="check1"><h5>Flagship series</h5></label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="check2" name="Nord Series" value="something"/>
            <label class="form-check-label" htmlFor="check2"><h5>Nord series</h5></label>
          </div>
          <span style={{padding:"8px"}} className='space '></span>
          <h3>Offers</h3>
        
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="check1" name="Flagship Series" value="something" checked/>
              <label class="form-check-label" htmlFor="check1"><h5>On Sale</h5></label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="check2" name="Nord Series" value="something"/>
              <label class="form-check-label" htmlFor="check2"><h5>With Gifts</h5></label>
            </div>
            <span style={{padding:"8px"}} className='space '></span>

            <h3>RAM/Storage</h3>
        
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check1" name="Flagship Series" value="something" checked/>
                <label class="form-check-label" htmlFor="check1"><h5>8 + 128 GB</h5></label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check2" name="Nord Series" value="something"/>
                <label class="form-check-label" htmlFor="check2"><h5>12 + 256 GB</h5></label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check2" name="Nord Series" value="something"/>
                <label class="form-check-label" htmlFor="check2"><h5>16 + 512 GB</h5></label>
              </div>
              <span style={{padding:"8px"}} className='space '></span>

              <h3>Price Range</h3>
                <div><input type="range"/></div>
                <span style={{padding:"8px"}} className='space '></span>

                <h3>Availability</h3>
                  
        
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="check1" name="Flagship Series" value="something" checked/>
                    <label class="form-check-label" htmlFor="check1"><h5>Flagship series</h5></label>
                  </div>
        
      </div>
    </div>
    </div>
    </div>
  )
}

export default Filter

              