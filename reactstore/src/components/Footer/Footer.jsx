import "./Footer.css"




const Footer = ()=>{
  
  
    return(
      <footer>
        <div className="container" id="footer-1">
          <div className="row mb-5">
            <div className="col-2 me-3">
              <div className="list-head">Phones</div>
              <div className="lists">
                <ul>
                  <li><a href="">OnePlus 11 5G</a></li>
                  <li><a href="">OnePlus 11R 5G </a></li>
                  <li><a href="">OnePlus Nord 3 5G</a></li>
                  <li><a href="">OnePlus Nord CE3 5G</a></li>
                  <li><a href="">OnePlus Nord CE 3 Lite 5G</a></li>
                  <li><a href="">OnePlus 10R 5G</a></li>
                  <li><a href="">OnePlus 10 Pro 5G</a></li>
                  <li><a href="">OnePlus Nord 2T 5G</a></li>
                  <li><a href="">OnePlus 10T 5G</a></li>
                  <li><a href="">OnePlus 9 5G</a></li>
                  <li><a href="">OnePlus 9R 5G</a></li>
                  <li><a href="">OnePlus 9R 4G</a></li>
                </ul>
              </div>
            </div>
            <div className="col-2 me-3">
              <div className="list-head">Store</div>
              <div className="lists">
                <ul>
                  <li><a href="">Tablet</a></li>
                  <li><a href="">TV & Display</a></li>
                  <li><a href="">Audio</a></li>
                  <li><a href="">Wearables</a></li>
                  <li><a href="">Cases & Protection</a></li>
                  <li><a href="">Power & Cables</a></li>
                  <li><a href="">Bundles</a></li>
                  <li><a href="">Gear</a></li>
                </ul>
              </div>
            </div>
            <div className="col-2 me-3">
              <div className="list-head">Support</div>
              <div className="lists">
                <ul>
                  <li><a href="">Protection Plan</a></li>
                  <li><a href="">Shopping FAQs</a></li>
                  <li><a href="">User Manuals</a></li>
                  <li><a href="">Service Centers</a></li>
                  <li><a href="">Affiliate Program</a></li>
                  <li><a href="">Repair Service</a></li>
                  <li><a href="">Repair Pricing</a></li>
                  <li><a href="">TV Spare Part Price</a></li>
                  <li><a href="">Software Update</a></li>
                </ul>
              </div>
            </div>
            <div className="col-2 me-3">
              <div className="list-head">Explore</div>
              <div className="lists">
                <ul>
                  <li><a href="">About OnePlus</a></li>
                  <li><a href="">Community</a></li>
                  <li><a href="">Find a store</a></li>
                  <li><a href="">OnePlus Store app</a></li>
                  <li><a href="">OxygenOS</a></li>
                  <li><a href="">Press</a></li>
                  <li><a href="">Blog</a></li>
                  <li><a href="">Careers</a></li>
                  <li><a href="">Campus Oppurtunities</a></li>
                </ul>
              </div>
            </div>
            <div className="col-2 me-3">
              <div className="list-head">Programs</div>
              <div className="lists">
                <ul>
                  <li><a href="">Exchange Program</a></li>
                  <li><a href="">Red Cable Club</a></li>
                </ul>
              </div>
            </div>
          </div>


          <div className="row" style={{display: "flex", justifyContent: "spaceBetween"}}>
            <div className="col-3">
              <div className="row">
                <div className="col-12 support"><a href="">Get Support From OnePlus</a></div>
                <div className="col-12"></div>
              </div>
            </div>
            <div className="col-3">
              <p>India(English)</p>
            </div>
          </div>
        </div>

        {/* <!---------------------------------------> */}

        <div className="container" id="footer-2">
          <button className="accordion">Phones</button>
          <div className="panel">
            <ul>
              <li><a href="">OnePlus 11 5G</a></li>
              <li><a href="">OnePlus 11R 5G </a></li>
              <li><a href="">OnePlus Nord 3 5G</a></li>
              <li><a href="">OnePlus Nord CE3 5G</a></li>
              <li><a href="">OnePlus Nord CE 3 Lite 5G</a></li>
              <li><a href="">OnePlus 10R 5G</a></li>
              <li><a href="">OnePlus 10 Pro 5G</a></li>
              <li><a href="">OnePlus Nord 2T 5G</a></li>
              <li><a href="">OnePlus 10T 5G</a></li>
              <li><a href="">OnePlus 9 5G</a></li>
              <li><a href="">OnePlus 9R 5G</a></li>
              <li><a href="">OnePlus 9R 4G</a></li>
            </ul>
          </div>

          <button className="accordion">Store</button>
          <div className="panel">
            <ul>
              <li><a href="">Tablet</a></li>
              <li><a href="">TV & Display</a></li>
              <li><a href="">Audio</a></li>
              <li><a href="">Wearables</a></li>
              <li><a href="">Cases & Protection</a></li>
              <li><a href="">Power & Cables</a></li>
              <li><a href="">Bundles</a></li>
              <li><a href="">Gear</a></li>
            </ul>
          </div>

          <button className="accordion">Support</button>
          <div className="panel">
            <ul>
              <li><a href="">Protection Plan</a></li>
              <li><a href="">Shopping FAQs</a></li>
              <li><a href="">User Manuals</a></li>
              <li><a href="">Service Centers</a></li>
              <li><a href="">Affiliate Program</a></li>
              <li><a href="">Repair Service</a></li>
              <li><a href="">Repair Pricing</a></li>
              <li><a href="">TV Spare Part Price</a></li>
              <li><a href="">Software Update</a></li>
            </ul>
          </div>
          <button className="accordion">Explore</button>
          <div className="panel">
            <ul>
              <li><a href="">About OnePlus</a></li>
              <li><a href="">Community</a></li>
              <li><a href="">Find a store</a></li>
              <li><a href="">OnePlus Store app</a></li>
              <li><a href="">OxygenOS</a></li>
              <li><a href="">Press</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Campus Oppurtunities</a></li>
            </ul>
          </div>
          <button className="accordion">Programs</button>
          <div className="panel">
            <ul>
              <li><a href="">Exchange Program</a></li>
              <li><a href="">Red Cable Club</a></li>
            </ul>
          </div>
        </div>
    </footer>
    
    )
}




export default Footer;