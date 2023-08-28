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
  )
}

export default Forgot
