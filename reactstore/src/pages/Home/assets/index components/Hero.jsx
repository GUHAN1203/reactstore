


import React from 'react'

function Hero() {
  return (

    <>
      <div className="container d-lg-none">
        <div className="row">
          <div className="col">
            <h1 className="pt-1" style={{ color: 'black', fontFamily: 'Oxygen, sans-serif' }}>OnePlus 11 5G</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img className="w-100" src="https://oasis.opstatics.com/content/dam/oasis/page/2023/in/large-card/oneplus-11/Large_product_card_3model_PC.jpg.thumb.webp" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="pt-3" style={{ color: 'black', fontFamily: 'Oxygen, sans-serif', fontSize: 'medium', wordBreak: 'break-all', marginTop: 'auto' }}>
              Link your OnePlus device & Get ₹2000 off on select variants.
            </p>
            <p className="" style={{ color: 'black', fontFamily: 'Oxygen, sans-serif', fontSize: 'larger' }}>
              From ₹54,999* Incl. bank discount
            </p>
            <button className="bg-dark text-white px-5 py-1" type="button">Buy now</button>
            <a href="#" className="btn">Learn More</a>
          </div>
        </div>
      </div>

      <div className="container d-none d-lg-block">
        <a href="http://localhost:3000/mobile-details/prod001">
        <div className="grid-parent">
          <div className="grid-item-1"><h1 className="pt-1" style={{ color: 'black', fontFamily: 'Oxygen, sans-serif' }}>OnePlus 11 5G</h1></div>
          <div className="grid-item-img"><img className="w-100" src="https://oasis.opstatics.com/content/dam/oasis/page/2023/in/large-card/oneplus-11/Large_product_card_3model_PC.jpg.thumb.webp" alt="" /></div>
          <div className="grid-item-3">
            <div>
              <p className="pt-3" style={{ color: 'black', fontFamily: 'Oxygen, sans-serif', fontSize: 'medium', wordBreak: 'break-all', marginTop: 'auto' }}>
                Link your OnePlus device & Get ₹2000 off on select variants.
              </p>
              <p className="" style={{ color: 'black', fontFamily: 'Oxygen, sans-serif', fontSize: 'larger' }}>
                From ₹54,999* Incl. bank discount
              </p>
              <button className="bg-dark text-white px-5 py-1" type="button">Buy now</button>
              <a href="#" className="btn">Learn More</a>
            </div>
          </div>
        </div>
        </a>
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2  row-cols-md-2 row-cols-lg-2 ">
            <div className="col">
          <a href="http://localhost:3000/display-details/prod003">
              <div className="card rounded-0 border-white h-100">
                <img height="100%" src="https://image01-in.oneplus.net/india-oneplus-statics-file/epb/202212/05/kVRt1oJTEl6DZnOb.png?x-amz-process=image/format,webp/quality,Q_80" style={{ minHeight: '250px' }} alt="" />

                <div className="card-body bg-white">
                  <p className="card-header bg-white"><b>ONEPLUS TV</b></p>
                  <p> <b>U series </b>32| 43 | 55 </p>
                  <div className="d-grid gap-2 col-12 mx-auto">
                    <button className="btn btn-dark rounded-0" type="button">Buy</button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="btn-group"></div>
                    <small className="text-decoration-line-through text-secondary">₹20,000</small>
                    <small className="text-black text-primary">₹12,499</small>
                  </div>
                </div>
              </div>
          </a>
            </div>
            <div className="col">
              <div className="card rounded-0 border-white h-100">
                <img height="100%" src="https://image01-in.oneplus.net/india-oneplus-statics-file/epb/202307/07/9lxLVmzYXnH0JRr8.png?x-amz-process=image/format,webp/quality,Q_80" style={{ minHeight: '250px' }} alt="" />

                <div className="card-body bg-white">
                  <p className="card-header bg-white"><b>Oneplus Nord Buds 2</b></p>
                  <p>GEN-2</p>
                  <div className="d-grid gap-2 col-12 mx-auto">
                    <button className="btn btn-dark rounded-0" type="button">Buy</button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="btn-group"></div>
                    <small className="text-decoration-line-through text-secondary">₹2999</small>
                    <small className="text-black text-primary">₹2699</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Hero
