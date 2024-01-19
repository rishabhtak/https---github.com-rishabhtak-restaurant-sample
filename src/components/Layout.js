import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/images/Millennium_logo.png";
import subscribe from "../assets/images/subscribe.png";
import ScrollToTop from "react-scroll-to-top";

function Layout() {
  let navigate = useNavigate();

  const changeLocation = () => {
    window.scrollTo(0, 0);
  };

  const reload = (placeToGo) => {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  };

  {
    /* window.onscroll = function () { myFunction() };
    let navbar = document.getElementsByTagName('nav');

    function myFunction() {
        let sticky = navbar[0].offsetTop;
        console.log(navbar[0].offsetTop)
        if (window.pageYOffset >= sticky) {
            navbar[0].classList.add("p-sticky")
        } else {
            navbar[0].classList.remove("p-sticky");
        }

    }*/
  }

  return (
    <>
      {/* ----Navbar With Icons-----*/}
      <div className="row flex-row mt-2 icon-width">
        <div className="col-md-6">
          <ul className="d-flex list-unstyled">
            <li>
              <Link
                className="d-flex text-decoration-none nav-link"
                href="mailto:demo@gmail.com"
              >
                <i className="fa-regular fa-envelope me-2 mt-1"></i>
                <span>demo@gmail.com</span>
              </Link>
            </li>

            <li>
              <Link
                className="d-flex text-decoration-none nav-link"
                href="tel:9876543210"
              >
                <i className="fa fa-phone me-2 mt-1 ms-2"></i>
                <span>+91-9876543210</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="d-flex list-unstyled float-end">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="m-3 text-white"
              >
                <i className="fa-brands fa-facebook-f icon-transition"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="m-3 text-white"
              >
                <i className="fa-brands fa-instagram icon-transition"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="m-3 text-white"
              >
                <i className="fa-brands fa-twitter icon-transition"></i>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                className="m-3 text-white"
              >
                <i className="fa-brands fa-youtube icon-transition"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-width ms-5 p-3">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" href="/">
            Restaurant
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="ms-auto navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={() => reload("/")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/menu"
                  onClick={() => reload("/menu")}
                >
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/aboutus"
                  onClick={() => reload("/aboutus")}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contactus"
                  onClick={() => reload("/contactus")}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <button className="btn btn-outline-success" type="submit">
              <Link
                className="nav-link"
                to="/bookingtable"
                onClick={() => reload("/bookingtable")}
              >
                <span>Book Table</span>
              </Link>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
      {/* ----Footer-----*/}
      <div className="row section">
        <div className="col-lg-3 col-md-6">
          <div className="logo-content">
            {/*  <div className='logo-content-img'>
                            <img src={logo} alt="logo"></img>
                        </div>
    */}
            <p className="logo-content-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eget rhoncus consectetur enim.
            </p>
            <div className="logo-content-icon">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="text-white"
              >
                <i className="fa-brands fa-facebook-f icon-transition"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="text-white"
              >
                <i className="fa-brands fa-instagram icon-transition"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="text-white"
              >
                <i className="fa-brands fa-twitter icon-transition"></i>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                className="text-white"
              >
                <i className="fa-brands fa-youtube icon-transition"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 col-md-6">
          <div className="usefull-link-section">
            <h3 className="usefull-link-title">Use Full Link</h3>
            <ul className="usefull-link-url">
              <li>
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => changeLocation("/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/menu"
                  onClick={() => changeLocation("/menu")}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/aboutus"
                  onClick={() => changeLocation("/aboutus")}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/contactus"
                  onClick={() => changeLocation("/contactus")}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/bookingtable"
                  onClick={() => changeLocation("/bookingtable")}
                >
                  BookingTable
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 col-md-6">
          <div className="contact-section">
            <h3 className="contact-section-title">Contact Us</h3>
            <ul className="contact-section-url">
              <li>
                <Link className="nav-link" href="mailto:demo@gmail.com">
                  <i className="fa-regular fa-envelope"></i>
                  <span>demo@gmail.com</span>
                </Link>
              </li>

              <li>
                <Link className="nav-link" href="tel:9876543210">
                  <i className="fa fa-phone"></i>
                  <span>+91-9876543210</span>
                </Link>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>Jaipur</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="opening-hours-section">
            <h3 className="opening-hours-title">Opening Hours</h3>
            <div className="row">
              <div className="col-sm-12">
                <ul className="opening-hours-time">
                  <li>
                    <span>Mon - Sun</span>
                    <span>09:00 am - 10:00 pm</span>
                  </li>
                  <div className="horizontal-line mt-1"></div>
                </ul>
              </div>
              <div className="col-sm-12">
                <ul className="opening-hours-time">
                  <li>
                    <span>Mon - Sun</span>
                    <span>09:00 am - 10:00 pm</span>
                  </li>
                  <div className="horizontal-line mt-1"></div>
                </ul>
              </div>
              <div className="col-sm-12">
                <ul className="opening-hours-time">
                  <li>
                    <span>Mon - Sun</span>
                    <span>09:00 am - 10:00 pm</span>
                  </li>
                  <div className="horizontal-line mt-1"></div>
                </ul>
              </div>
              <div className="col-sm-12">
                <ul className="opening-hours-time">
                  <li>
                    <span>Mon - Sun</span>
                    <span>09:00 am - 10:00 pm</span>
                  </li>
                  <div className="horizontal-line mt-1"></div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row subscribe-container">
        <div className="col-lg-5">
          <div className="subscribe-block">
            <img src={subscribe} alt="subscribe-logo"></img>
            <h4 className="subscribe-block-text">Subscribe Our Newsletter</h4>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="subscribe-form">
            <input type="email" placeholder="Your Email Address " id="email" />
            <button>
              <a>Subscribe</a>
            </button>
          </div>
        </div>
      </div>

      <div className="py-3">
        <p className="fs-5 text-white text-center">
          Copyright &copy; Rishabh. All Rights Reserved.
        </p>
      </div>

      <ScrollToTop
        smooth
        viewBox="0 0 330 330"
        svgPath="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
      />
    </>
  );
}

export default Layout;
