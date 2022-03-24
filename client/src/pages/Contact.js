import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ContactMap from "../components/contact-maps/ContactMap";

const Contact = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Coinaro  | Contact</title>
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="CONTACT" />
        {/* contact page content */}
        <section className="conact__area pt--140">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact__title">
                  <img
                    src={process.env.PUBLIC_URL + "/images/about/contact.png"}
                    alt="conatct images"
                  />
                  <h2>Get HOWARD where you need !</h2>
                  <p>
                    contact #Baha-TN
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="google__map">
                  {/* contact map */}
                  <ContactMap latitude="47.444" longitude="-122.176" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12 sm__mt--40 md__mt--40">
                <div className="dg__contact__wrapper">
                  <form className="contact-form">
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutTwo>
    </Fragment>
  );
};

export default Contact;
