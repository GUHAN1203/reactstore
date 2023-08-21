
import React from 'react'

function Filter() {
  return (
    <div  style ={{alignItems:'flex-start'}}  class="album py-5 px-3">
    <div class="row">
      <div   class="col- d-none d-lg-block ps-5">
        <div style={{position: "sticky",top: "0"}}class="filter mt-5 ">
        
        <h3>Screen Type</h3>
        
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="check1" name="Flagship Series" value="something" checked/>
            <label class="form-check-label" htmlFor="check1"><h5>LED</h5></label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="check2" name="Nord Series" value="something"/>
            <label class="form-check-label" htmlFor="check2"><h5>QLED</h5></label>
          </div>
          <h3>Categories</h3>
        
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="check1" name="Flagship Series" value="something" checked/>
              <label class="form-check-label" htmlFor="check1"><h5>TV</h5></label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="check2" name="Nord Series" value="something"/>
              <label class="form-check-label" htmlFor="check2"><h5>Monitors</h5></label>
            </div>
            <h3>Resolution</h3>
        
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check1" name="Flagship Series" value="something" checked/>
                <label class="form-check-label" htmlFor="check1"><h5>Full HD, 1920 x 1080</h5></label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check2" name="Nord Series" value="something"/>
                <label class="form-check-label" htmlFor="check2"><h5>HD Ready, 1366 x 768</h5></label>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="check2" name="Nord Series" value="something"/>
                <label class="form-check-label" htmlFor="check2"><h5>Ultra HD (4K), 3840 x 2160</h5></label>
              </div>

              <h3>Number of HDMI ports</h3>
              <div class="form-check">
              <input type="checkbox" class="form-check-input" id="check1" name="Flagship Series" value="something" checked/>
              <label class="form-check-label" htmlFor="check1"><h5>2</h5></label>
              </div>
              <div class="form-check">
              <input type="checkbox" class="form-check-input" id="check2" name="Nord Series" value="something"/>
              <label class="form-check-label" htmlFor="check2"><h5>3</h5></label>
              </div>
              <div class="form-check">
              <input type="checkbox" class="form-check-input" id="check2" name="Nord Series" value="something"/>
              <label class="form-check-label" htmlFor="check2"><h5>4</h5></label>
              </div>
              <h3>Price Range</h3>
                <div>₹0<input type="range"/>₹99,999</div>
                <h3>Availability</h3>
                  
        
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="check1" name="Flagship Series" value="something" checked/>
                    <label class="form-check-label" htmlFor="check1"><h5>In Stock</h5></label>
                  </div>
        
      </div>
    </div>
    </div>
    </div>
  )
}

export default Filter
