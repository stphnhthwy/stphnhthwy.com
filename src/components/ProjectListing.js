import React, { Component } from "react";
import external from "../assets/img//icons/external-icon.svg";

export default class ProjectListing extends Component {
  render() {
    const { projects } = this.props;

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {projects.map(project => (
          <a href={project.source} target="_blank" rel="noopener noreferrer">
            <div className="shadow-line-gray hover:hidden">
              <div className="transition duration-200 ease-in-out bg-white border-2 border-gray-600 transform hover:-translate-x-1 hover:translate-y-1">
                <div className="p-4 md:p-6 lg:p-8">
                  <div>
                    <h3 className="font-serif font-semibold text-black text-xl inline-block">
                      {project.title}
                    </h3>
                    <img
                      className="pb-1 ml-2 inline-block"
                      src={external}
                      alt="External Link"
                    />
                  </div>
                  <p className="mt-2 lg:mt-4 font-medium text-gray-800 leading-snug truncate">
                    {project.descripton}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }
}
