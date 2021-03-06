import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-8">
                <h2 className="footer-heading mb-4">About Me</h2>
                <p>
                  I am a continuing programmable programn and a freelancer for
                  many projects, in addition I also receive website design for
                  clients
                </p>
              </div>
              <div className="col-md-4 ml-auto">
                <h2 className="footer-heading mb-4">Features</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Press Releases</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 ml-auto">
            <div className="mb-5">
              <h2 className="footer-heading mb-4">Subscribe to Newsletter</h2>
              <form action="#" method="post" className="footer-suscribe-form">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control border-secondary text-white bg-transparent"
                    placeholder="Enter Email"
                    aria-label="Enter Email"
                    aria-describedby="button-addon2"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary text-white"
                      type="button"
                      id="button-addon2"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <h2 className="footer-heading mb-4">Follow Us</h2>
            <a href="#about-section" className="smoothscroll pl-0 pr-3">
              <span className="icon-facebook" />
            </a>
            <a href="#" className="pl-3 pr-3">
              <span className="icon-twitter" />
            </a>
            <a href="#" className="pl-3 pr-3">
              <span className="icon-instagram" />
            </a>
            <a href="#" className="pl-3 pr-3">
              <span className="icon-linkedin" />
            </a>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <p className="copyright">
                <small>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright ?? All rights reserved | This template is made with{" "}
                  <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
