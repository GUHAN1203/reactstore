import React from 'react'

function Orders() {
  return (
    <div>
  
    <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">My Orders</h1>
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQXzgLfMwWU_DYgTlz4xkMVQG6fT8U_wGDZ1L6aylzTI1-UrEff" alt="" />
        <p class="lead text-muted">You doesn't have any orders.</p>
        
          <a href="/" class="btn btn-primary my-2" style={{backgroundColor:"red",borderColor:"red",color:"white",borderRadius:"none"}}>Go Shopping</a>
          
       
      </div>
    </div>
  </section>


    </div>
  )
}

export default Orders
