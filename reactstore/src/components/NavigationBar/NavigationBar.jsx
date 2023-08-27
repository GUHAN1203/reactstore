import React from "react";
import { Link } from "react-router-dom";
import"./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="d-grid">
      <div className="row-cols-1">
        <div className="col-12">
          <nav
            className="navbar navbar-expand-lg p-0 bg-body-tertiary"
            style={{ margin:0 }}
          >
            <div className="container-fluid my-0" style={{ fontSize: "80%" }}>
              

              <button
                style={{ boxShadow: "none", border: "none" }}
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* logo */}
              <a className="py-2 ps-5 navbar-brand " href="/">
                <img
                  src="https://seeklogo.com/images/O/oneplus-logo-70A6B4FAEA-seeklogo.com.png"
                  style={{ width: "100px" }}
                  alt=""
                />
              </a>
              {/* person */}
              <div className="d-flex  ">
                      <div className="dropdown text-end  "style={{marginRight:"80px" }}>
                        <a href="#"className="display-1 link-body-emphasis text-decoration-none dropdown-header dropdown"
                          data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <span
                            alt="login"
                            style={{ width: "10px" }}
                            className="material-symbols-outlined rounded-circle  my-0 drop-btn"
                          >
                          
                          </span>
                        </a>
                        
                      </div>
                    </div>
                    {/* navbar */}
              <div
                className="collapse navbar-collapse pe-5 pt-2 "
                id="navbarSupportedContent"
              >
                <ul
                  className="navbar-nav mb-2 mb-lg-0 text-nowrap pe-5"
                  style={{ fontWeight: "600" }}
                >
                  <li className="nav-item ">
                    <a class="nav-link " href="/mobile">
                      Mobile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/display">
                      TV/Display
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="tv-display.html">
                      Audio & Watch
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="tv-display.html">
                      Tablet
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="tv-display.html">
                      Accessories
                    </a>
                  </li>
                </ul>

                <div className="d-flex ms-auto">
                  <div className="d-flex  ms-auto">
                    <div className="d-flex me-2 ">
                      <div className="dropdown text-end dropdown"  >
                        <a href="#" className="display-1 link-body-emphasis text-decoration-none dropdown-header" data-bs-toggle="dropdown"aria-expanded="false" >
                      
                          <span
                            alt="login"
                            style={{ width: "10px" }}
                            className="material-symbols-outlined rounded-circle  my-0"
                          >
                            search
                          </span>
                        </a>
                        <ul className="dropdown-menu text-small">
                          <li>
                            <a className="dropdown-item" href="#">
                              <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a href="/cart" className=" d-block link-body-emphasis text-decoration-none mx-2"
                      aria-expanded="false">
                      <span class="material-symbols-outlined">
                        shopping_cart
                      </span>
                    </a>
                    <div className="d-flex me-3 ">
                      <div className="dropdown text-end  dropdown "style={{marginRight:"80px" }}>
                        
                      <a href="#" className="display-1 link-body-emphasis text-decoration-none dropdown-header dropdown" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <span
                            alt="login"
                            style={{ width: "10px" }}
                            className="material-symbols-outlined rounded-circle  my-0 drop-btn"
                          >
                            person
                          </span>
                        </a>
                        <ul className="dropdown-menu text-small ">

                          <li className="drop">
                             <a className="dropdown-item" href="/login">
                                Sign up or Sign in
                              </a>
                             <a className="dropdown-item" href="/orders">
                                Orders
                              </a>
                             <a className="dropdown-item" href="/login">
                                Account
                              </a>
                            

                          </li>
                        </ul>
                      </div>
                    </div>
                   
                   
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
