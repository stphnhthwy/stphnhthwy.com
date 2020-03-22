import React, { Component } from "react";
import { Link } from "gatsby";
import code from '../assets/img/code.svg';
import heart from '../assets/img/heart.svg';

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <div className="bottom-0 left-0 right-0 w-full mt-24 h-24 bg-gray-100 border-blue-600 border-t-4 flex flex-wrap items-center justify-between px-2 py-3 mt-12">
        <div className="container mx-auto flex items-center justify-center">
          <img className="h-4 w-4 inline mx-3" src={code} alt="Coded" />
          <span className="text-sm tracking-wide">with</span>
          <img className="h-4 w-4 inline mx-3" src={heart} alt="love" />
          <span className="text-sm tracking-wide">by stephen.</span>
        </div>
      </div>
    );
  }
}

export default Footer;
