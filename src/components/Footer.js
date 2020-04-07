import React, { Component } from "react";
import code from "../assets/img/code.svg";
import heart from "../assets/img/heart.svg";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import twitter from "../assets/img/twitter.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="inset-x-0 bottom-0 w-full h-24 bg-gray-100 border-blue-600 border-t-4 flex flex-wrap px-2 py-3 mt-12">
        <div className="container mx-auto flex">
          <div className="flex w-1/2 items-center justify-start">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/stphnhthwy"
            >
              <img
                className="h-4 mx-2 inline-block"
                src={github}
                alt="Github"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/stphnhthwy"
            >
              <img
                className="h-4 mx-2 transition duration-300 ease-in-out transform hover:scale-110 inline-block"
                src={twitter}
                alt="Twitter"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/stphnhthwy/"
            >
              <img
                className="h-4 ml-2 inline-block"
                src={linkedin}
                alt="LinkedIn"
              />
            </a>
          </div>
          <div className="flex w-1/2 items-center justify-end">
            <img className="h-4 w-4 inline mx-3" src={code} alt="Coded" />
            <span className="text-sm tracking-wide">with</span>
            <img className="h-4 w-4 inline mx-3" src={heart} alt="love" />
            <span className="text-sm tracking-wide">by stephen.</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
