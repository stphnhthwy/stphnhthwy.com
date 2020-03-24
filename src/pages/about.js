import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container mx-auto">
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
