import React, { Component } from "react";
import git from "../assets/img/git-merge.png";

export default class SpeakingListing extends Component {
  render() {
    return (
      <a
        href="https://www.youtube.com/watch?v=A-lNv6Szu3M"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="shadow-line-blue">
          <div className="transition duration-200 ease-in-out bg-white transform hover:-translate-x-1 hover:translate-y-1">
            <div className="relative block items-center bg-white">
              <div className="relative h-full overflow-hidden">
                <img
                  src={git}
                  alt="Stephen Hathaway speaking at Git-Merge 2018."
                />
                <div className="absolute inset-0 h-full flex items-center justify-center fill-current text-white">
                  <svg
                    className="h-20 w-20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4l12 6-12 6z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}
