import React, { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaVimeoSquare,
  FaTumblrSquare,
  FaHeart
} from "react-icons/fa";
import { MdExpandLess } from "react-icons/md";

const Footer = ({ theme }) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer
      className={`footer-area ${theme === "white" ? "footer--2" : "footer--1"}`}
    >
      <div
        className={`dg__footer__container ${
          theme === "white" ? "bg--white" : "bg__color--2"
        }`}
      >
        <div className="container">
          <div className="row">
            {/* Start Single Widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-12">
              <div className="footer__widget">
                <h4>Resources</h4>
                <div className="footer__inner">
                  <ul className="ft__menu">
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Bitcoin Price</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Blog</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Helps Portal</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Privacy Policy</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Buy Theme</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 xs__mt--40">
              <div className="footer__widget information">
                <h4>Information</h4>
                <div className="footer__inner">
                  <ul className="ft__menu">
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>
                        Currency Exchange
                      </a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Todays Rate</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>About Howard</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Privacy Policy</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>How To Video</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 md__mt--40 sm__mt--40">
              <div className="footer__widget support">
                <h4>Support</h4>
                <div className="footer__inner">
                  <ul className="ft__menu">
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Contact us</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Support Center</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Helps</a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + "/"}>Live Chat</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 md__mt--40 sm__mt--40">
              <div className="footer__widget resources">
                <h4>Contact</h4>
                <div className="footer__inner">
                  <ul>
                    <li>bahadrem12@gmail.com</li>
                    <li>
                      Address:
                      <br /> 23 ru de houmet drouj zarzouna bizerte
                    </li>
                    <li>
                      Phone:
                      <br /> +21620971088
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
          </div>
        </div>
      </div>
      <div
        className={`copyright ${
          theme === "white" ? "bg__color--1" : "bg--black"
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="copyright__inner">
                <p className="copyright-text">
                  &copy; CRYPTOCURRENCY-Coinaro {new Date().getFullYear()} Made
    by BAHA-TN
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-12">
              <ul className="footer__right social__icon">
                <li>
                  <a
                    href="//www.facebook.com/baha.bizertino.1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="//twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitterSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="//tumblr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTumblrSquare />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <MdExpandLess />
      </button>
    </footer>
  );
};

export default Footer;
