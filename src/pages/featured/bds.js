import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import Bonsai from "../../components/Bonsai";
import config from "../../../data/SiteConfig";

class BonsaiPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container mx-auto mt-32">
          <Helmet title={`Bonsai Design System | ${config.siteTitle}`} />
          <Bonsai />
        </div>
      </Layout>
    );
  }
}

export default BonsaiPage;
