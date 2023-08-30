import React from "react";
import { FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEnvelope, FaGoogle } from "react-icons/fa";
import "../Loginform/Login.css";


function Login() {
  return (
    <div
    className=""
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f0f0",
      height: "700px",
    }}
  >
    <div
      className="row"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      <div className="col">
        <div style={{backgroundColor:'white',width:'600px',borderRadius:'25px'}}>
        <div style={{ textAlign: "center", fontSize: "170%",paddingTop:'30px' }}>
          Sign in/Create account
        </div>

        <div style={{ textAlign: "center", paddingBottom: "20px",marginTop:'100px' }}>
          <input
            style={{
              width: "400px",
              height: "50px",
              border: "none",
              paddingLeft: "20px",
              fontSize: "15px",
              backgroundColor:'#f2f2f2',
              borderRadius:'10px'
            
            }}
            type="text"
            className="email"
            placeholder="Phone/Email"
          />{" "}
        </div>
        <div style={{ textAlign: "center", paddingBottom: "10px" }}>
          <input
            style={{
              width: "400px",
              height: "50px",
              border: "none",
              paddingLeft: "20px",
              fontSize: "15px",
              backgroundColor:'#f2f2f2',
              borderRadius:'10px'
            }}
            type="password"
            className="email"
            placeholder="Password"
          />{" "}
          
          
        </div>
        <div style={{ textAlign: "center", paddingBottom: "10px",paddingLeft:'250px' }}>
          <a href="/forgot">Forgot password ?</a>
        </div>
        
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              marginTop:'30px',
              backgroundColor: "black",
              color: "white",
              borderRadius: "120px",
              width: "300px",
              
            }}
          >
            Sign in with password
          </button>
        </div>
        <div style={{ textAlign: "center",marginTop:'80px' }}>

          Other ways to sign in
          </div>
          <div className="" style={{display:'flex', justifyContent:'center'}}>

          <div style={{display:'flex',width:'25%',gap:'40px', fontSize:'14px'}}>
            <div >

            <a href="#" style={{textDecoration:'none',color:'black',fontWeight:''}} >
              <img
                className="w-100"
                style={{ padding:'10px', }}
                src="images/email.png"
                alt=""
              />
              <p style={{textAlign:'center',textDecoration:'none',color:'black',fontWeight:'lighter'}}>Email</p>
              
            </a>
            </div>
            <div>
            <a href="#">
              <img
                className="w-100"
                style={{ padding:'10px' }}
                src="images/google.png"
                alt=""
              />
              <p style={{textAlign:'center',color:'black'}}>Google</p>
            </a>
              
            </div>
          </div>
          </div>
        

        </div>
      </div>
    </div>
  </div>

  //   <section className="vh-100" style={{ backgroundColor: 'gray' }}>
  //   <div className="container py-5 h-100">
  //     <div className="row d-flex justify-content-center align-items-center h-100">
  //       <div className="col-12 col-md-8 col-lg-6 col-xl-5">
  //         <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
  //           <div className="card-body p-5 text-center">

  //             <h3 className="mb-5">Sign in</h3>

  //             <div className="form-outline mb-4">
  //               <input type="email" id="typeEmailX-2" className="form-control form-control-lg"placeholder="Phone number " />
           
  //             </div>

  //             <div className="form-outline mb-4">
  //               <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Verification code "/>
         
  //             </div>

  //             {/* Checkbox */}
  //             <div className="d-flex justify-content-start mb-3">

  //               <a href="/forgot" className="">Forgot Password ?</a>
  //             </div>


  //             <a href="/signup">
  //               <button style={{borderRadius:"1px",backgroundColor:"red",borderColor:"red"}}  className="btn btn-primary btn-lg btn-block mx-2" type="submit" >SignUp</button></a>
              

  //             <hr className="my-4" />

  //             <a href="/google"><FaGoogle color="black"/></a>
  //             <FontAwesomeIcon  icon="fa-brands fa-google" />
  //             <span style={{padding:"20px"}} className='space '></span>

              
  //             <a href="/email"><FaEnvelope color="black"  /></a>
  //               <FontAwesomeIcon icon="fa-solid fa-envelope" />
              

  //           </div>
  //         </div>
  //       </div>=
  //     </div>
  //   </div>
  // </section>
    
    // <div className="container py-5 w-25  " style={{flexWrap:'nowrap',}}>
    //   <div className="row">

    //   </div>
    //   <div className="row ">
    //     <div className="col ">
    //       <h1>Sign in</h1>
    //     </div>
    //     <div className="col"></div>
    //     <div className="row">
    //       <form>
    //         <div class="form-outline mb-4">
    //           <input
    //             type="email"
    //             id="form2Example1"
    //             class="form-control"
    //             placeholder="Email address"
    //           />
    //         </div>

    //         <div class="form-outline mb-4">
    //           <input
    //             type="password"
    //             id="form2Example2"
    //             class="form-control"
    //             placeholder="Password"
    //           />
    //         </div>

    //         {/* <!-- 2 column grid layout for inline styling --> */}
    //         <div class="row mb-4">
    //           <div class="col d-flex justify-content-center">
    //             {/* <!-- Checkbox --> */}
    //             <div class="form-check">
    //               <input
    //                 class="form-check-input"
    //                 type="checkbox"
    //                 value=""
    //                 id="form2Example31"
    //                 checked
    //               />
    //               <label class="form-check-label" for="form2Example31">
    //                 {" "}
    //                 Remember me{" "}
    //               </label>
    //             </div>
    //           </div>

    //           <div class="col">
    //             <a href="/forgot">Forgot password?</a>
    //           </div>
    //         </div>

    //         <button type="button" class="btn btn-primary btn-block mb-4">
    //           Sign in
    //         </button>

    //         <div class="text-center">
    //           <p>
    //             Not a member? <a href="/signup">Register</a>
    //           </p>
    //           <p>or sign up with:</p>
    //           <button type="button" class="btn btn-link btn-floating mx-1">
    //             <i class="fab fa-facebook-f"></i>
    //           </button>

    //           <button type="button" class="btn btn-link btn-floating mx-1">
    //             <i class="fab fa-google"></i>
    //           </button>

    //           <button type="button" class="btn btn-link btn-floating mx-1">
    //             <i class="fab fa-twitter"></i>
    //           </button>

    //           <button type="button" class="btn btn-link btn-floating mx-1">
    //             <i class="fab fa-github"></i>
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    //   <div className="row">

    //   </div>
    // </div>
  );
}

export default Login;
