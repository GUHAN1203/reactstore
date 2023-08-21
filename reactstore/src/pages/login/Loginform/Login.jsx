import React from "react";

function Login() {
  return (
    <section className="vh-100" style={{ backgroundColor: 'gray' }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-5 text-center">

              <h3 className="mb-5">Sign in</h3>

              <div className="form-outline mb-4">
                <input type="email" id="typeEmailX-2" className="form-control form-control-lg"placeholder="Email " />
           
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Password "/>
         
              </div>

              {/* Checkbox */}
              <div className="d-flex justify-content-start mb-2">

                <a href="/forgot" className="">Forgot password ?</a>
              </div>

              <button className="btn btn-primary btn-lg btn-block mx-2" type="submit">Login</button>
              <a href="/signup"><button className="btn btn-primary btn-lg btn-block mx-2" type="submit" >SIgnup</button></a>
              

              <hr className="my-4" />

              <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: '#dd4b39' }}
                type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
              <button className="btn btn-lg btn-block btn-primary mb-2" style={{ backgroundColor: '#3b5998' }}
                type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
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
