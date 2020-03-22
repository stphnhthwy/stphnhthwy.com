import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "../tailwind.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="antialiased text-black">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        {children}
      </div>
    );
  }
}
