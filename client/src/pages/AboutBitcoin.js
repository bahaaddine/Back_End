import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import CurrencyTicker from "../containers/currency-tickers/CurrencyTicker";
import MarketTable from "../containers/market-tables/MarketTable";

const AboutBitcoin = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Coinaro</title>
        
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="About Bitcoin" />
        {/* about content */}
        {/* currency ticker */}
        <CurrencyTicker theme="dark" />
        {/* market table */}
        <MarketTable />
        {/* video popup */}
        
        {/* about content two */}
        
      </LayoutTwo>
    </Fragment>
  );
};

export default AboutBitcoin;
