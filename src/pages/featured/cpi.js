import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import PropertyInsights from "../../components/PropertyInsights";
import config from "../../../data/SiteConfig";

class CPIPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container mx-auto mt-32">
          <Helmet title={`Cognizant Property Insights | ${config.siteTitle}`} />
          <PropertyInsights />
        </div>
      </Layout>
    );
  }
}

export default CPIPage;
