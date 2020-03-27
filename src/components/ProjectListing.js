import React, { Component } from "react";

export default class ProjectListing extends Component {
  render() {
    const { projects } = this.props;

    return (
      <div className="flex xs:flex-col sm:flex-col md:flex-col">
        {projects.map(project => (
          <a
            className="mb-5 xs:mb-8 sm:mb-8 md:mb-8 px-4 w-full lg:w-1/3 xl:w-1/3"
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="shadow-line-gray hover:hidden">
              <div className="transition duration-200 ease-in-out bg-white border-2 border-gray-600 transform hover:-translate-x-1 hover:translate-y-1">
                <div className="p-8 xs:p-4">
                  <div>
                    <h3 className="font-serif font-semibold text-black text-xl">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-4 font-medium text-gray-800 leading-snug truncate">
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
