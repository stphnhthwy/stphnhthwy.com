import React, { Component } from "react";
import git from "../assets/img/git-merge.png";
import machinelearning from "../assets/img/machinelearning.png";
import aerialimagery from "../assets/img/aerialimagery.png";

class PropertyInsights extends Component {
  render() {
    return (
      <div className="px-8 mt-32">
        <img src={git} alt="Stephen Hathaway speaking at Git-Merge 2018." />
        <div>
          <h1 className="pt-12 leading-tight text-3xl font-semibold font-serif text-blue-600 hover:text-blue-400 transform duration-300">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.cognizant.com/property-insights-ai-catastrophic-claims"
            >
              Cognizant Property Insights
            </a>
          </h1>
          <p className="pt-2 text-gray-800 uppercase tracking-normal font-medium">
            Lead Product Designer
          </p>
          <p className="pt-12 leading-loose">
            A hurricane can be a traumatic and life-changing event for
            individuals, some recent catastrophes like Hurricane Michael, Irma
            or Katrina highlight just how destructive a force they are for
            communites and families. With machine learning, and artificial
            intelligence More like Property Insights leveraged machine learning and aerial imagery to help carriers provide quicker property triage, analytics, and claims processing.
          </p>
        </div>
        <h2 className="leading-tight text-xl font-semibold pt-8 pb-2">Role</h2>
        <p className="leading-loose">
          Lead design efforts through Beta and GA launches, worked closely with
          Product Owners, Managers and Engineering Managers to build out
          Roadmaps, Release Planning, and process improvements.
        </p>
        <h2 className="leading-tight text-xl font-semibold pt-8 pb-2">Technology</h2>
        {/* <div className="pt-12">
          <div className="flex block justify-center">
            <img className="h-24 block" src={machinelearning} alt="Stephen Hathaway speaking at Git-Merge 2018." />
            <p className="pt-12 block font-medium text-lg text-center">Machine Learning</p>
          </div>
          <div className="flex">
            <img className="h-24" src={aerialimagery} alt="Stephen Hathaway speaking at Git-Merge 2018." />
            <p className="pt-12 font-medium text-lg text-center">Aerial Imagery</p>
          </div>
        </div> */}

        <div className="mt-16">
          <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-">
            <li>
              <div className="flex">
                <div className=" flex-1">
                  <div className="flex items-center justify-center">
                    <img className="h-24" src={machinelearning} alt="Stephen Hathaway speaking at Git-Merge 2018." />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h5 class="text-lg text-center leading-6 font-medium text-black">Machine Learning</h5>
              </div>
            </li>
            <li>
              <div className="flex">
                <div className="flex-1">
                  <div className="flex items-center justify-center">
                    <img className="h-24" src={aerialimagery} alt="Stephen Hathaway speaking at Git-Merge 2018." />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h5 class="text-lg text-center items-baseline leading-6 font-medium text-black">Aerial Imagery</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>

      
    );
  }
}

export default PropertyInsights;
