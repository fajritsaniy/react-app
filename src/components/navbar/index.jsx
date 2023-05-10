import { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <header id="header">
        <div className="container align-items-center">
          <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Belajar Saham Bersama
              </a>
              <button
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active text-success"
                      aria-current="page"
                      href="#cta"
                    >
                      Academy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-success" href="#services">
                      Pro Tools
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link text-success dropdown-toggle"
                      href="#why-us"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Investing
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item text-success" href="#cta">
                          Saham
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-success" href="#cta">
                          Cryptocurrency
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item text-success" href="#cta">
                          Investasi Lainnya
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-success" href="#about">
                      About Us
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
