import React, { Component } from "react";
import git from "../assets/img/git-merge.png";
import cpiCover from "../assets/img/cpi-cover.png";
import cpiReport from "../assets/img/cpi-report.png";
import machinelearning from "../assets/img/machinelearning.png";
import aerialimagery from "../assets/img/aerialimagery.png";

class PropertyInsights extends Component {
  render() {
    return (
      <div>
        <div className="container mx-auto">
          <img
            src={cpiCover}
            alt="Aerial image of a hurricane disaster zone."
          />
          <div className="px-6 md:px-10 lg:px-16 pt-2">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/5 pt-8">
                <h1 className="leading-tight text-4xl md:text-6xl font-semibold font-serif text-blue-600 hover:text-blue-400 transform duration-300">
                  Cognizant <br></br> Property Insights
                </h1>
                <p className="mt-2 text-xl text-gray-700 sm:mt-4 md:text-3xl">
                  Estimate property damage within a week of a catastrophe that
                  closes claims faster.
                </p>
                <h2 className="pt-16 text-2xl leading-6 font-semibold text-gray-900">
                  Overview
                </h2>
                <p className="pt-4 leading-loose">
                  Cognizant Property Insights is a new approach to covering
                  large-scale disasters. It provides claims adjusters and
                  managers with image insights within a week for properties that
                  have been impacted by a catastrophe.
                </p>
                <h2 className="pt-12 text-2xl leading-6 font-semibold text-gray-900">
                  Role
                </h2>
                <p className="pt-4 leading-loose">
                  As the Lead Product Designer I lead design efforts through
                  Beta and GA launches. Worked closely with Product Owners,
                  Product Managers, Engineering Managers and UX Research to
                  gather business requirements and rational. As a team we built
                  out Roadmaps, Release Plans, and Process Improvements.
                </p>

                <h2 className="pt-12 text-2xl leading-6 font-semibold text-gray-900">
                  Problem
                </h2>
                <p className="pt-4 leading-loose">
                  Currently, claims can take up to three weeks to start,
                  depending on when an adjuster or claims manager can visit a
                  damaged property. Through user research, we identified
                  different users and high-level pain points for all parties
                  involved.
                </p>
                <h3 className="pt-12 text-xl leading-6 font-semibold text-gray-900">
                  Pain points
                </h3>
                <div className="mt-8">
                  <ul className="grid grid-cols-1 gap-4 row-gap-10">
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 bg-red-200">
                            <svg
                              className="fill-current text-red-700 h-4  w-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.485,3.511A12.01,12.01,0,1,0,24,12,12.009,12.009,0,0,0,20.485,3.511Zm-1.767,15.21A9.51,9.51,0,1,1,21.5,12,9.508,9.508,0,0,1,18.718,18.721Z" />
                              <path d="M16.987,7.01a1.275,1.275,0,0,0-1.8,0l-3.177,3.177L8.829,7.01A1.277,1.277,0,0,0,7.024,8.816L10.2,11.993,7.024,15.171a1.277,1.277,0,0,0,1.805,1.806L12.005,13.8l3.177,3.178a1.277,1.277,0,0,0,1.8-1.806l-3.176-3.178,3.176-3.177A1.278,1.278,0,0,0,16.987,7.01Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium text-gray-900">
                            Conduct remote assessments and inspections
                          </h5>
                          <p className="mt-2 text-base leading-6 text-gray-700">
                            Adjusters are not able to begin assessments on
                            properties that are inaccessible or deemed unsafe to
                            travel visit.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 bg-red-200">
                            <svg
                              className="fill-current text-red-700 h-4  w-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.485,3.511A12.01,12.01,0,1,0,24,12,12.009,12.009,0,0,0,20.485,3.511Zm-1.767,15.21A9.51,9.51,0,1,1,21.5,12,9.508,9.508,0,0,1,18.718,18.721Z" />
                              <path d="M16.987,7.01a1.275,1.275,0,0,0-1.8,0l-3.177,3.177L8.829,7.01A1.277,1.277,0,0,0,7.024,8.816L10.2,11.993,7.024,15.171a1.277,1.277,0,0,0,1.805,1.806L12.005,13.8l3.177,3.178a1.277,1.277,0,0,0,1.8-1.806l-3.176-3.178,3.176-3.177A1.278,1.278,0,0,0,16.987,7.01Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium text-gray-900">
                            Safely respond to properties affected by the
                            catastrophe
                          </h5>
                          <p className="mt-2 text-base leading-6 text-gray-700">
                            Catastrophe planning can be challenging when you
                            don't know where the high areas of impact are in a
                            geographical area.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 bg-red-200">
                            <svg
                              className="fill-current text-red-700 h-4  w-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.485,3.511A12.01,12.01,0,1,0,24,12,12.009,12.009,0,0,0,20.485,3.511Zm-1.767,15.21A9.51,9.51,0,1,1,21.5,12,9.508,9.508,0,0,1,18.718,18.721Z" />
                              <path d="M16.987,7.01a1.275,1.275,0,0,0-1.8,0l-3.177,3.177L8.829,7.01A1.277,1.277,0,0,0,7.024,8.816L10.2,11.993,7.024,15.171a1.277,1.277,0,0,0,1.805,1.806L12.005,13.8l3.177,3.178a1.277,1.277,0,0,0,1.8-1.806l-3.176-3.178,3.176-3.177A1.278,1.278,0,0,0,16.987,7.01Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium text-gray-900">
                            Leakage costs and overpayments
                          </h5>
                          <p className="mt-2 text-base leading-6 text-gray-700">
                            Remote desktop adjusters have to wait for field
                            adjusters or customers to provide images of the
                            damaged property.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 bg-red-200">
                            <svg
                              className="fill-current text-red-700 h-4  w-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.485,3.511A12.01,12.01,0,1,0,24,12,12.009,12.009,0,0,0,20.485,3.511Zm-1.767,15.21A9.51,9.51,0,1,1,21.5,12,9.508,9.508,0,0,1,18.718,18.721Z" />
                              <path d="M16.987,7.01a1.275,1.275,0,0,0-1.8,0l-3.177,3.177L8.829,7.01A1.277,1.277,0,0,0,7.024,8.816L10.2,11.993,7.024,15.171a1.277,1.277,0,0,0,1.805,1.806L12.005,13.8l3.177,3.178a1.277,1.277,0,0,0,1.8-1.806l-3.176-3.178,3.176-3.177A1.278,1.278,0,0,0,16.987,7.01Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium text-gray-900">
                            Property estimates and loss payments
                          </h5>
                          <p className="mt-2 text-base leading-6 text-gray-700">
                            Roof Damage that isn't addressed can lead to more
                            structural damage to property.{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 bg-red-200">
                            <svg
                              className="fill-current text-red-700 h-4  w-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.485,3.511A12.01,12.01,0,1,0,24,12,12.009,12.009,0,0,0,20.485,3.511Zm-1.767,15.21A9.51,9.51,0,1,1,21.5,12,9.508,9.508,0,0,1,18.718,18.721Z" />
                              <path d="M16.987,7.01a1.275,1.275,0,0,0-1.8,0l-3.177,3.177L8.829,7.01A1.277,1.277,0,0,0,7.024,8.816L10.2,11.993,7.024,15.171a1.277,1.277,0,0,0,1.805,1.806L12.005,13.8l3.177,3.178a1.277,1.277,0,0,0,1.8-1.806l-3.176-3.178,3.176-3.177A1.278,1.278,0,0,0,16.987,7.01Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium text-gray-900">
                            Closing claims in a timely manner
                          </h5>
                          <p className="mt-2 text-base leading-6 text-gray-700">
                            Catastrophe planning can be challenging when you
                            don't know where the high areas of impact are in a
                            geographical area.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 bg-red-200">
                            <svg
                              className="fill-current text-red-700 h-4  w-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.485,3.511A12.01,12.01,0,1,0,24,12,12.009,12.009,0,0,0,20.485,3.511Zm-1.767,15.21A9.51,9.51,0,1,1,21.5,12,9.508,9.508,0,0,1,18.718,18.721Z" />
                              <path d="M16.987,7.01a1.275,1.275,0,0,0-1.8,0l-3.177,3.177L8.829,7.01A1.277,1.277,0,0,0,7.024,8.816L10.2,11.993,7.024,15.171a1.277,1.277,0,0,0,1.805,1.806L12.005,13.8l3.177,3.178a1.277,1.277,0,0,0,1.8-1.806l-3.176-3.178,3.176-3.177A1.278,1.278,0,0,0,16.987,7.01Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium text-gray-900">
                            Catastrophe planning and team deployment
                          </h5>
                          <p className="mt-2 text-base leading-6 text-gray-700">
                            Catastrophe planning can be challenging when you
                            don't know where the high areas of impact are in a
                            geographical area.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 bg-red-200">
                            <svg
                              className="fill-current text-red-700 h-4  w-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.485,3.511A12.01,12.01,0,1,0,24,12,12.009,12.009,0,0,0,20.485,3.511Zm-1.767,15.21A9.51,9.51,0,1,1,21.5,12,9.508,9.508,0,0,1,18.718,18.721Z" />
                              <path d="M16.987,7.01a1.275,1.275,0,0,0-1.8,0l-3.177,3.177L8.829,7.01A1.277,1.277,0,0,0,7.024,8.816L10.2,11.993,7.024,15.171a1.277,1.277,0,0,0,1.805,1.806L12.005,13.8l3.177,3.178a1.277,1.277,0,0,0,1.8-1.806l-3.176-3.178,3.176-3.177A1.278,1.278,0,0,0,16.987,7.01Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium text-gray-900">
                            Customer experience
                          </h5>
                          <p className="mt-2 text-base leading-6 text-gray-700">
                            Catastrophe planning can be challenging when you
                            don't know where the high areas of impact are in a
                            geographical area.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <h3 className="pt-12 text-xl leading-6 font-semibold text-gray-900">
                  Users
                </h3>
                <div className="mt-6">
                  <ul className="grid grid-cols-1 gap-4 row-gap-10">
                    <li>
                      <div className="flex">
                        <div>
                          <h5 className="text-lg leading-6 font-medium text-gray-900">
                            Claims Adjuster
                          </h5>
                          <ul className="list-disc">
                            <li className="mt-2 ml-6 text-base leading-6 text-gray-700">
                              Manages a team of Field and Remote Adjusters.
                            </li>
                            <li className="mt-2 ml-6 text-base leading-6 text-gray-700">
                              Assigns properties to Field and Remote Adjusters.
                            </li>
                            <li className="mt-2 ml-6 text-base leading-6 text-gray-700">
                              Provides strategy on high priority areas and
                              properties.
                            </li>
                          </ul>
                          <h5 className="mt-8 text-lg leading-6 font-medium text-gray-900">
                            Adjusters
                          </h5>
                          <ul className="list-disc">
                            <li className="mt-2 ml-6 text-base leading-6 text-gray-700">
                              Work with homeowners to start and process claims.
                            </li>
                            <li className="mt-2 ml-6 text-base leading-6 text-gray-700">
                              Asses the severity of a property's damage.
                            </li>
                            <li className="mt-2 ml-6 text-base leading-6 text-gray-700">
                              Provide accurate cost estimates to property
                              owners.
                            </li>
                          </ul>
                          <h5 className="mt-8 text-lg leading-6 font-medium text-gray-900">
                            Property Owners
                          </h5>
                          <ul className="list-disc">
                            <li className="mt-2 ml-6 text-base leading-6 text-gray-700">
                              Their lives have been disrupted and may not have
                              access to their homes.
                            </li>
                            <li className="mt-2 ml-6 text-base leading-6 text-gray-700">
                              Left in the dark, and may not know the current
                              state of their property.{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <h2 className="pt-12 text-2xl leading-6 font-semibold text-gray-900">
                  Solution
                </h2>
                <p className="pt-4 leading-loose">
                  Cognizant Property Insights uses aerial imagery, property data
                  from multiple sources and machine learning to zero in on
                  property damage cause by catastrophes.
                </p>

                <h3 className="pt-12 text-xl leading-6 font-semibold text-gray-900">
                  Technology
                </h3>
                <div className="mt-8">
                  <ul className="grid grid-cols-1 row-gap-12 md:grid-cols-2 md:gap-8">
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 bg-blue-900 shadow-line-blue">
                            <svg
                              className="fill-current text-white h-4 w-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21.345,9.25H6.759A.5.5,0,0,1,6.406,9.1L4.845,7.543a1,1,0,0,0-.707-.293H1.154A1,1,0,0,0,.26,8.7l2.5,5a.994.994,0,0,0,.894.553h5.88a.25.25,0,0,1,.177.427L5.846,18.542a1,1,0,0,0,.706,1.708h3.586a1,1,0,0,0,.707-.293L16.406,14.4a.5.5,0,0,1,.353-.146h4.586a2.5,2.5,0,0,0,0-5Z" />
                              <path d="M10.492,8.1a.5.5,0,0,0,.353.146h4.6a.25.25,0,0,0,.176-.427l-3.78-3.78a1,1,0,0,0-.707-.293H8.552a1,1,0,0,0-.707,1.707Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium text-gray-900">
                            Areial imagery
                          </h5>
                          <p className="mt-2 text-base leading-6 text-gray-600">
                            Sifting through multiple photos is a cumbersome task
                            - but a perfect use case for machine learning to do
                            image analysis on.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 bg-blue-900 shadow-line-blue">
                            <svg
                              className="fill-current text-white h-4  w-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M2.435,11H1a1,1,0,0,0,0,2H2.435a1,1,0,1,0,0-2Z" />
                              <path d="M2.435,16H1a1,1,0,0,0,0,2H2.435a1,1,0,0,0,0-2Z" />
                              <path d="M2.435,6.5H1a1,1,0,1,0,0,2H2.435a1,1,0,1,0,0-2Z" />
                              <path d="M23,11H21.565a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" />
                              <path d="M21.565,8.5H23a1,1,0,0,0,0-2H21.565a1,1,0,0,0,0,2Z" />
                              <path d="M23,16H21.565a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" />
                              <path d="M12,3.435a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V2.435A1,1,0,0,0,12,3.435Z" />
                              <path d="M7.5,3.435a1,1,0,0,0,1-1V1a1,1,0,1,0-2,0V2.435A1,1,0,0,0,7.5,3.435Z" />
                              <path d="M16.5,3.435a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V2.435A1,1,0,0,0,16.5,3.435Z" />
                              <path d="M12,20.566a1,1,0,0,0-1,1V23a1,1,0,1,0,2,0V21.566A1,1,0,0,0,12,20.566Z" />
                              <path d="M16.5,20.566a1,1,0,0,0-1,1V23a1,1,0,1,0,2,0V21.566A1,1,0,0,0,16.5,20.566Z" />
                              <path d="M7.5,20.566a1,1,0,0,0-1,1V23a1,1,0,0,0,2,0V21.566A1,1,0,0,0,7.5,20.566Z" />
                              <path d="M18.067,4.5H5.933A1.435,1.435,0,0,0,4.5,5.934V18.067A1.436,1.436,0,0,0,5.933,19.5H18.067A1.436,1.436,0,0,0,19.5,18.067V5.934A1.435,1.435,0,0,0,18.067,4.5ZM16.5,15.5a1,1,0,0,1-1,1H13a1,1,0,0,1,0-2h2.5A1,1,0,0,1,16.5,15.5Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium text-gray-900">
                            Machine learning
                          </h5>
                          <p className="mt-2 text-base leading-6 text-gray-600">
                            Image recognition from aerial imagery and property
                            data determines the extent of damage after a
                            catastrophe occurs.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <h3 className="pt-12 text-xl leading-6 font-semibold text-gray-900">
                  Results
                </h3>
                <div className="mt-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Dashboard
                  </h5>
                  <img
                    className="mt-4 shadow border border-gray-400"
                    src={cpiReport}
                    alt="Aerial image of a hurricane disaster zone."
                  />
                  <div className="mt-8">
                    <ul className="grid grid-cols-1 gap-4 row-gap-10">
                      <li>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-8 w-8 bg-green-200">
                              <svg
                                className="fill-current text-green-700 h-4  w-4"
                                viewBox="0 0 24 24"
                              >
                                <path d="M18.48,6.449a1.249,1.249,0,0,0-1.747.265l-5.924,8.04L7.042,11.74a1.251,1.251,0,0,0-1.563,1.953l4.783,3.826a1.263,1.263,0,0,0,1.787-.235l6.7-9.087A1.25,1.25,0,0,0,18.48,6.449Z" />
                                <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h5 className="text-lg leading-6 font-medium text-gray-900">
                              Conduct remote assessments and inspections
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-700">
                              Adjusters are not able to begin assessments on
                              properties that are inaccessible or deemed unsafe
                              to travel visit.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-8 w-8 bg-green-200">
                              <svg
                                className="fill-current text-green-700 h-4  w-4"
                                viewBox="0 0 24 24"
                              >
                                <path d="M18.48,6.449a1.249,1.249,0,0,0-1.747.265l-5.924,8.04L7.042,11.74a1.251,1.251,0,0,0-1.563,1.953l4.783,3.826a1.263,1.263,0,0,0,1.787-.235l6.7-9.087A1.25,1.25,0,0,0,18.48,6.449Z" />
                                <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h5 className="text-lg leading-6 font-medium text-gray-900">
                              Conduct remote assessments and inspections
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-700">
                              Adjusters are not able to begin assessments on
                              properties that are inaccessible or deemed unsafe
                              to travel visit.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-12">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Map
                  </h5>
                  <h3 className="mt-6 text-sm font-medium uppercase text-gray-700 tracking-wide">Zip Code</h3>
                  <img
                    className="mt-2 shadow border border-gray-400"
                    src={cpiReport}
                    alt="Aerial image of a hurricane disaster zone."
                  />
                </div>
                <h3 className="mt-6 text-sm font-medium uppercase text-gray-700 tracking-wide">Pin-Level</h3>
                <img
                    className="mt-2 shadow border border-gray-400"
                    src={cpiReport}
                    alt="Aerial image of a hurricane disaster zone."
                  />
                <div className="mt-12">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Property Reports
                  </h5>
                  <img
                    className="mt-4 shadow border border-gray-400"
                    src={cpiReport}
                    alt="Aerial image of a hurricane disaster zone."
                  />
                </div>
                <div className="mt-3">
                  <a href="#">
                    View Report
                    <svg
                      className="ml-2 fill-current text-blue-600 h-6  w-auto inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8,9.623H7.377a.252.252,0,0,0-.252.252v1.246a.252.252,0,0,0,.252.252H8a.875.875,0,0,0,0-1.75Z" />
                      <path d="M12.451,9.822c-.105-.046-.326-.048-.326.164v3.978a.238.238,0,0,0,.327.21,2.375,2.375,0,0,0,0-4.352Z" />
                      <path d="M22.5,4.5H1.5A1.5,1.5,0,0,0,0,6V18a1.5,1.5,0,0,0,1.5,1.5h21A1.5,1.5,0,0,0,24,18V6A1.5,1.5,0,0,0,22.5,4.5ZM8,12.623H7.377a.252.252,0,0,0-.252.252V15a.625.625,0,0,1-1.25,0V9A.625.625,0,0,1,6.5,8.373H8a2.125,2.125,0,0,1,0,4.25Zm3.5,3A.625.625,0,0,1,10.875,15V9a.625.625,0,0,1,.625-.625,3.625,3.625,0,0,1,0,7.25Zm8-6h-2a.375.375,0,0,0-.375.375v1.123a.252.252,0,0,0,.252.252H18.5a.625.625,0,0,1,0,1.25H17.377a.252.252,0,0,0-.252.252V15a.625.625,0,0,1-1.25,0V10A1.627,1.627,0,0,1,17.5,8.373h2a.625.625,0,0,1,0,1.25Z" />
                    </svg>
                  </a>
                </div>

                <p className="mt-8">
                  The result is property level damage reports within days of a
                  catastrophe.
                </p>
                <ul className="list-disc">
                  <li className="mt-2 ml-6 text-base leading-6 text-gray-700">
                    Work with homeowners to start and process claims.
                  </li>
                  <li className="mt-2 ml-6 text-base leading-6 text-gray-700">
                    Asses the severity of a property's damage.
                  </li>
                  <li className="mt-2 ml-6 text-base leading-6 text-gray-700">
                    Provide accurate cost estimates to property owners.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyInsights;
