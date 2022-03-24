import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ServiceList from "../containers/service-contents/ServiceList";

const Service = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Coinaro  | Service</title>
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="SERVICES WE PROVIDE" />
        {/* service content */}
        
        {/* service list */}
        <ServiceList />
      </LayoutTwo>
    </Fragment>
  );
};

export default Service;
