import React, { Component } from "react";

export default class FeaturedListing extends Component {
  render() {
    const { featured } = this.props;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {featured.map(featured => (
          <a href={featured.path}>
            <div className="shadow-line-blue">
              <div className="transition duration-200 ease-in-out bg-white border-2 border-blue-700 transform hover:-translate-x-1 hover:translate-y-1">
                <div className="p-4 md:p-6 lg:p-8">
                  <h3 className="font-serif font-semibold text-black text-xl">
                    {featured.title}
                  </h3>
                  <p className="mt-2 md:mt-4 lg:mt-6 font-medium text-gray-800 leading-snug truncate">
                    {featured.descripton}
                  </p>
                  <div className="mt-4 md:mt-6 lg:mt-8 inline-block text-md font-semibold text-blue-600 tracking-wide">
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
