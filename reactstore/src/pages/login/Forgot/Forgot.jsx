import React from 'react'

function Forgot() {
  return (
    <div className='' style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#f0f0f0',height:'700px'}}>
      <div className="row" style={{marginTop:'100px',marginBottom:'100px'}}>
        <div className="col">
        <div style={{textAlign:'center',fontSize:'130%'}}>Reset password</div>
      <div style={{textAlign:'center',fontSize:'80%',paddingTop:'8px',paddingBottom:'30px'}}>Enter phone number/email linked to your account</div>
      <div style={{textAlign:'center',paddingBottom:'50px'}}><input style={{width:'500px',height:'40px',border:'none',paddingLeft:'20px',fontSize:'15px'}} type="text" className='email' placeholder='Phone/Email' /> </div>
      <div style={{textAlign:'center'}}><button style={{backgroundColor:'black',color:'white',borderRadius:'120px',width:'300px'}}>Next</button></div>
        </div>
      </div>
      
      
    </div>


  //   <div className="container d-flex flex-column">
  //   <div className="row align-items-center justify-content-center min-vh-100">
  //     <div className="col-12 col-md-8 col-lg-4">
  //       <div className="card shadow-sm">
  //         <div className="card-body">
  //           <div className="mb-4">
  //             <h5>Forgot Password?</h5>
  //             <p className="mb-2">Enter your registered email ID to reset the password</p>
  //           </div>
  //           <form>
  //             <div className="mb-3">
  //               <label htmlFor="email" className="form-label">Email</label>
  //               <input type="email" id="email" className="form-control" name="email" placeholder="Enter Your Email" required />
  //             </div>
  //             <div className="mb-3 d-grid">
  //               <button type="submit" className="btn btn-primary">
  //                 Reset Password
  //               </button>
  //             </div>
  //             <span>Don't have an account? <a href="/login">sign in</a></span>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}

export default Forgot
