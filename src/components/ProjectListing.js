import React, { Component } from 'react'

export default class ProjectListing extends Component {
  render() {
    const { projects } = this.props

    return (
      <section>
        {projects.map(project => (

                <a href="#" className="mt-4 xs:mt-8 px-5 w-full flex-wrap max-w-full lg:w-1/3 xl:w-1/3">
                <div className="shadow-line-gray hover:hidden">
                  <div className="text-purple-600 font-sans font-semibold">Test</div>
                  <div className="transition duration-200 ease-in-out bg-white border-2 border-gray-600 transform hover:-translate-x-1 hover:translate-y-1">
                    <div className="p-8 xs:p-4">
                      <h3 className="font-serif font-semibold text-black text-xl">{project.title}</h3>
                      <p className="mt-4 font-medium text-md text-gray-800 leading-snug truncate-2-lines">{project.descripton}</p>
                    </div>
                  </div>
                </div>
                </a>
        ))}
      </section>
    )
  }
}