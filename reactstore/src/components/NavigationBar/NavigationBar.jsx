
import React from 'react';
import { Link } from 'react-router-dom';
import Display from '../../pages/Display';

const NavigationBar = () => {
  return (
    <div className="d-grid">
      <div className="row-cols-1">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg p-0 bg-body-tertiary" style={{ margin: '0%' }}>
            <div className="container-fluid my-0" style={{ fontSize: '80%' }}>
              <a className="ps-5 navbar-brand me-3" href="index.html">
                <img src="src/OnePlus-Logo-new.png" style={{ width: '100px' }} alt="" />
              </a>

              <button
                style={{ boxShadow: 'none', border: 'none' }}
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
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 text-nowrap">
                  <li className="nav-item">
                    <Link to = "/mobile">Phone</Link>
                    
                    
                  </li>
                  <li className="nav-item">
                    <Link to="/display">
                    <a className="nav-link" href="tv-display.html">
                      TV/Display
                    </a>
                    </Link>
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
                  <div className="d-flex ms-auto">
                    <div className="d-flex me-5">
                      <div className="dropdown text-end">
                        <a href="#"
                          className="display-1 link-body-emphasis text-decoration-none dropdown-header"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span alt="login" style={{ width: '10px' }} className="material-symbols-outlined rounded-circle mx-3 my-0">
                            search
                          </span>
                        </a>
                        <ul className="dropdown-menu text-small">
                          <li>
                            <a className="dropdown-item" href="#">
                              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            </a>
                          </li>
                        </ul>
                      </div>

                      <a
                        href="#"
                        className="d-block link-body-emphasis text-decoration-none mx-2"
                        aria-expanded="false"
                      >
                        <img src="src/shopping-cart.png" alt="cart" width="25" height="25" className="rounded-circle" />
                      </a>
                      <ul className="dropdown-menu text-small">
                        <li>
                          <a className="dropdown-item" href="#">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                          </a>
                        </li>
                      </ul>
                    </div>

                    <a
                      href="#"
                      className="d-block link-body-emphasis text-decoration-none mx-2"
                      aria-expanded="false"
                    >
                      <img src="src/shopping-cart.png" alt="cart" width="25" height="25" className="rounded-circle" />
                    </a>
                    <div className="dropdown text-end">
                      <a
                        href="#"
                        className="display-1 link-body-emphasis text-decoration-none dropdown-header"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span alt="login" style={{ width: '10px' }} className="material-symbols-outlined rounded-circle mx-1">
                          person
                        </span>
                      </a>
                      <ul className="dropdown-menu text-small">
                        <li>
                          <a className="dropdown-item" href="#"></a>
                          <ul className="dropdown-menu text-small">
                            <li>
                              <a className="dropdown-item" href="#"></a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Sign up or Sign in
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Orders
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Account
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Sign out
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
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
