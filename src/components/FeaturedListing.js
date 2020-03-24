import React, { Component } from "react";

export default class FeaturedListing extends Component {
  render() {
    const { featured } = this.props;

    return (
      <div className="flex xs:flex-col sm:flex-col md:flex-col">
        {featured.map(featured => (
          <a
            className="mb-5 xs:mb-8 sm:mb-8 md:mb-8 px-4 w-full lg:w-1/2 xl:w-1/2"
            href={featured.path}
          >
            <div className="shadow-line-blue">
              <div className="transition duration-200 ease-in-out bg-white border-2 border-blue-700 transform hover:-translate-x-1 hover:translate-y-1">
                <div className="p-8 xs:p-4">
                  <h3 className="font-serif font-semibold text-black text-xl">
                    {featured.title}
                  </h3>
                  <p className="mt-4 font-medium text-gray-800 leading-snug truncate-2-lines">
                    {featured.descripton}
                  </p>
                  <div className="mt-8 inline-block text-md font-semibold text-blue-600 tracking-wide">
                    Learn more
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }
}
