import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../assets/img/logo.svg";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import twitter from "../assets/img/twitter.svg";

class Nav extends Component {
  render() {
    return (
      <nav className="fixed z-50 top-0 left-0 right-0 items-center bg-white border-b border-gray-300">
        <div className="container mx-auto">
          <div className="flex items-center px-8 h-16">
            <div className="flex justify-center mx-auto">
              <a href="/">
                <img
                  className="h-6 transition duration-300 ease-in-out transform hover:scale-110"
                  src={logo}
                  alt="Twitter"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
