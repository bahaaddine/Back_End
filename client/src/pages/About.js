import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import AboutContent from "../components/about-contents/AboutContent";

const About = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Coinaro  | About Us</title>

      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="About Us" />
        {/* about content */}
        <AboutContent />
        {/* video popup */}
        
      </LayoutTwo>
    </Fragment>
  );
};

export default About;
