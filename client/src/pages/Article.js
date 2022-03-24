import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import BlogcontentTwo from "../containers/blog/BlogcontentTwo";

const BlogRightSidebar = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Coinaro</title>
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="LATEST NEWS" />
        {/* blog content */}
        <BlogcontentTwo />
      </LayoutTwo>
    </Fragment>
  );
};

export default BlogRightSidebar;
