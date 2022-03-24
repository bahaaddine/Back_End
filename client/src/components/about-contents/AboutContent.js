import React from "react";
import SectionTitleFour from "../ui/section-titles/SectionTitleFour";

const AboutContent = () => {
  return (
    <div className="about__dgtaka about--2 section-padding--xl">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-12 col-sm-12 col-md-12">
            <div className="dg__secure__inner">
              {/* section title */}
              <SectionTitleFour title="About Coinaro " />

              <p>
                
              </p>
              <p>
              Ada cryptocurrency. Basketball. Cryptocurrencies. Actors. Stellar cryptocurrency. Video games. Cryptocurrency exchanges. COINARO. @COINARO1.
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-12 col-sm-12 col-md-12 sm__mt--40 md__mt--40">
            <div className="dg__secure__thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/about/6.png"}
                alt="secure images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
