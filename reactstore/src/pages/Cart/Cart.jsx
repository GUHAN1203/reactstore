import React from 'react'

function Cart() {
  return (
    <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">Cart</h1>
        <img src="https://image01.oneplus.net/shop/202110/21/1-M00-2E-C3-rB8bwmFxeeOAX3lEAAAFrSNz1a4226.svg" alt="" />
        <h3 class="fw-light">Your shopping cart is empty</h3>
        <p class="lead text-muted">but it doesn't have to be.</p>
        
          <a href="/" class="btn btn-primary my-2" style={{backgroundColor:"red",borderColor:"red",borderRadius:"1px"}}>Go Shopping</a>
          
       
      </div>
    </div>
  </section>
  )
}

export default Cart
