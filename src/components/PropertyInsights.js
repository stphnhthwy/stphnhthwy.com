import React, { Component } from "react";
import cpiCover from "../assets/img/cpi/cpi-cover.png";
import cpiManager from "../assets/img/cpi/cpi-manager.png";
import cpiAdjuster from "../assets/img/cpi/cpi-adjuster.png";
import cpiHomeowner from "../assets/img/cpi/cpi-homeowner.png";
import cpiDashboard from "../assets/img/cpi/cpi-dashboard.png";
import cpiCounty from "../assets/img/cpi/cpi-county.png";
import cpiNeighborhood from "../assets/img/cpi/cpi-neighborhood.png";
import cpiReport1 from "../assets/img/cpi/cpi-report-1.png";
import cpiReport2 from "../assets/img/cpi/cpi-report-2.png";
import close from "../assets/img/icons/close-icon.svg";
import check from "../assets/img/icons/check-icon.svg";
import plane from "../assets/img/icons/plane-icon.svg";
import network from "../assets/img/icons/network-icon.svg";

class PropertyInsights extends Component {
  render() {
    return (
      <div>
        <section className=" container mx-auto px-2">
          <img
            className="mx-auto"
            src={cpiCover}
            alt="Aerial image of a hurricane disaster zone."
          />
          <div className="max-w-4xl mx-auto mt-8 px-2 md:mt-12 md:px-6">
            <h1 className="text-blue-500 text-4xl md:text-6xl leading-tight font-serif font-bold">
              Cognizant<br></br>Property Insights
            </h1>
            <h2 className="mt-4 text-gray-700 text-xl md:text-3xl leading-snug">
              Estimate property damage within a week of a catastrophe and close
              claims faster.
            </h2>
          </div>
        </section>
        <section className="max-w-4xl mx-auto mt-8 px-4 md:mt-12 md:px-6">
          <h3 className="mt-10 text-gray-900 text-2xl font-serif font-semibold md:text-3xl">
            Overview
          </h3>
          <p className="mt-2 text-gray-900 leading-loose">
            Cognizant Property Insights is a new approach to covering
            large-scale disasters. It provides claims adjusters and managers
            with image insights within a week for properties that have been
            impacted by a catastrophe.
          </p>
        </section>
        <section className="max-w-4xl mx-auto mt-8 px-4 md:mt-12 md:px-6">
          <h3 className="mt-10 text-gray-900 text-2xl font-serif font-semibold md:text-3xl">
            Role
          </h3>
          <p className="mt-2 text-gray-900 leading-loose">
            As the Lead Product Designer I lead design efforts through Beta and
            GA launches. Worked closely with Product Owners, Product Managers,
            Engineering Managers and UX Research to gather business requirements
            and rational. As a team we built out Roadmaps, Release Plans, and
            Process Improvements.
          </p>
        </section>
        <section className="max-w-4xl mx-auto mt-8 px-4 md:mt-12 md:px-6">
          <h3 className="mt-10 text-gray-900 text-2xl font-serif font-semibold md:text-3xl">
            Problem
          </h3>
          <p className="mt-2 text-gray-900 leading-loose">
            Currently, claims can take up to three weeks to start, depending on
            when an adjuster or claims manager can visit a damaged property.
            Through user research, we identified different users and high-level
            pain points for all parties involved.
          </p>

          <div className="mt-6">
            <h4 className="text-gray-900 text-xl font-semibold">Pain points</h4>
          </div>
          <div className="mt-8">
            <ul className="grid grid-cols-1 gap-4 row-gap-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center rounded-full h-8 w-8 bg-red-200">
                      <img src={close} />
                    </div>
                  </div>
                  <div className="ml-4 mt-1">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Conduct remote assessments and inspections
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-700 leading-relaxed">
                      Adjusters are not able to begin to assess the roof and
                      exterior damage in a timely manner after a catastrophe. In
                      many cases, valuable pre and post-loss information are not
                      available for weeks after a catastrophe.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center rounded-full h-8 w-8 bg-red-200">
                      <img src={close} />
                    </div>
                  </div>
                  <div className="ml-4 mt-1">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Safely respond to properties affected by the catastrophe
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-700 leading-relaxed">
                      Often times a property or area can be deemed unsafe for an
                      inspection, this can lead to valuable time being lost to
                      inspect a property.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center rounded-full h-8 w-8 bg-red-200">
                      <img src={close} />
                    </div>
                  </div>
                  <div className="ml-4 mt-1">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Leakage costs and overpayments
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-700 leading-relaxed">
                      Due to inspections taking weeks post-catastrophe, this can
                      lead to properties incurring more damage, resulting in
                      leakage costs, and overpayments.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center rounded-full h-8 w-8 bg-red-200">
                      <img src={close} />
                    </div>
                  </div>
                  <div className="ml-4 mt-1">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Property estimates and loss payments
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-700 leading-relaxed">
                      Estimates and loss payments cannot be sent to homeowners
                      until an inspection has been done.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center rounded-full h-8 w-8 bg-red-200">
                      <img src={close} />
                    </div>
                  </div>
                  <div className="ml-4 mt-1">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Closing claims in a timely manner
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-700 leading-relaxed">
                      After a catastrophe there is a surge in the volume of
                      claims, resulting in claims sometimes being open for
                      months post-catastrophe.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center rounded-full h-8 w-8 bg-red-200">
                      <img src={close} />
                    </div>
                  </div>
                  <div className="ml-4 mt-1">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Catastrophe planning and team deployment
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-700 leading-relaxed">
                      Catastrophe planning can be challenging when you don't
                      know where the high areas of impact are in a geographical
                      area.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center rounded-full h-8 w-8 bg-red-200">
                      <img src={close} />
                    </div>
                  </div>
                  <div className="ml-4 mt-1">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Customer experience
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-700 leading-relaxed">
                      Delays in catastrophe-related claims processing that
                      negatively impact homeowners' lives, and not being able to
                      support homeowners in their greatest time of need.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="max-w-4xl mx-auto mt-8 px-4 md:mt-12 md:px-6">
          <h3 className="mt-10 text-gray-900 text-2xl font-serif font-semibold md:text-3xl">
            Users
          </h3>
          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex w-1/3">
                <img
                  className="h-auto"
                  src={cpiManager}
                  alt="Aerial image of a hurricane disaster zone."
                />
              </div>
              <div className="flex w-2/3">
                <div className="ml-12 mt-1">
                  <h5 className="text-gray-900 text-xl font-semibold">
                    Claims Manager
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-700 leading-relaxed">
                    Manage teams of remote and field adjusters, assign
                    properties, and provide a strategy for high damage priority
                    areas and properties.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex flex-row-reverse items-center">
              <div className="flex w-1/3">
                <img
                  src={cpiAdjuster}
                  alt="Aerial image of a hurricane disaster zone."
                />
              </div>
              <div className="flex w-2/3">
                <div className="mr-12 mt-1">
                  <h5 className="text-gray-900 text-xl font-semibold">
                    Adjusters
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-700 leading-relaxed">
                    Work with homeowners to start and process claims. Assess the
                    severity of property damage, to provide accurate cost
                    estimates to homeowners.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex items-center">
              <div className="flex w-1/3">
                <img
                  src={cpiHomeowner}
                  alt="Aerial image of a hurricane disaster zone."
                />
              </div>
              <div className="flex w-2/3">
                <div className="ml-12 mt-1">
                  <h5 className="text-gray-900 text-xl font-semibold">
                    Homeowners
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-700 leading-relaxed">
                    Lives have been disrupted commonly without access to their
                    homes and left in the dark on the current state of their
                    property.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mx-auto mt-8 px-4 md:mt-12 md:px-6">
          <h3 className="mt-10 text-gray-900 text-2xl font-serif font-semibold md:text-3xl">
            Solution
          </h3>
          <p className="mt-2 text-gray-900 leading-loose">
            Cognizant Property Insights uses aerial imagery, property data from
            multiple sources and machine learning to zero in on property damage
            cause by catastrophes.
          </p>
          <div className="mt-8">
            <h5 className="text-gray-900 text-xl font-semibold">Technology</h5>
          </div>
          <div className="mt-8">
            <ul className="grid grid-cols-1 row-gap-12 md:grid-cols-2 md:gap-8">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 bg-blue-900 shadow-line-blue">
                      <img src={plane} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="mt-1 text-lg leading-6 font-medium text-gray-900">
                      Areial imagery
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-700">
                      Sifting through multiple photos is a cumbersome task - but
                      a perfect use case for machine learning to do image
                      analysis on.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 bg-blue-900 shadow-line-blue">
                      <img src={network} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="mt-1 text-lg leading-6 font-medium text-gray-900">
                      Machine learning
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-700">
                      Image recognition from aerial imagery and property data
                      determines the extent of damage after a catastrophe
                      occurs.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="max-w-4xl mx-auto mt-8 px-4 md:mt-12 md:px-6">
          <h3 className="mt-10 text-gray-900 text-2xl font-serif font-semibold md:text-3xl">
            Results
          </h3>
          <div className="mt-4">
            <h5 className="text-gray-900 text-xl font-semibold">Dashboard</h5>
            <p className="mt-2 text-gray-900 leading-loose">
              Everyone from Claims Managers to Adjusters can get an aggregate
              view of catastrophe, this can provide insights into overall
              exposure and affected areas.
            </p>
            <img
              className="mt-6"
              src={cpiDashboard}
              alt="Aerial image of a hurricane disaster zone."
            />
            <div className="mt-6">
              <h5 className="text-gray-900 text-xl font-semibold">
                Pain points addressed
              </h5>
              <div className="mt-8">
                <ul className="grid grid-cols-1 gap-4 row-gap-10">
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center rounded-full h-8 w-8 bg-green-200">
                          <img src={check} />
                        </div>
                      </div>
                      <div className="ml-4 mt-1">
                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                          Catastrophe planning and team deployment
                        </h5>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center rounded-full h-8 w-8 bg-green-200">
                          <img src={check} />
                        </div>
                      </div>
                      <div className="ml-4 mt-1">
                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                          Leakage costs and overpayments
                        </h5>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h5 className="text-gray-900 text-xl font-semibold">Map</h5>
            <p className="mt-2 text-gray-900 leading-loose">
              At a per, catastrophe-level Claims Managers and Adjusters can get
              an overview of a catastrophe zone. Users have the ability to drill
              down on a county, city and neighborhood level providing aggregate
              data for properties affected.
            </p>
            <div className="z-0">
              <div className="ml-0 mt-6 z-40 lg:ml-32">
                <img
                  src={cpiCounty}
                  alt="Aerial image of a hurricane disaster zone."
                />
              </div>

              <div className="mr-0 mt-6 lg:mr-32">
                <img
                  className=""
                  src={cpiNeighborhood}
                  alt="Aerial image of a hurricane disaster zone."
                />
              </div>
            </div>
            <div className="mt-6">
              <h5 className="text-gray-900 text-xl font-semibold">
                Pain points addressed
              </h5>
              <div className="mt-8">
                <ul className="grid grid-cols-1 gap-4 row-gap-10">
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center rounded-full h-8 w-8 bg-green-200">
                          <img src={check} />
                        </div>
                      </div>
                      <div className="ml-4 mt-1">
                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                          Catastrophe planning and team deployment
                        </h5>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center rounded-full h-8 w-8 bg-green-200">
                          <img src={check} />
                        </div>
                      </div>
                      <div className="ml-4 mt-1">
                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                          Safely respond to properties affected by the
                          catastrophe
                        </h5>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h5 className="text-gray-900 text-xl font-semibold">Report</h5>
            <p className="mt-2 text-gray-900 leading-loose">
              Reports on an individual property provide details such as roof
              dimensions, materials, damage incurred all before an in-person
              assessment or inspection.
            </p>
            <div className="z-0">
              <div className="ml-0 mt-6 z-40 lg:ml-32">
                <img
                  src={cpiReport1}
                  alt="Aerial image of a hurricane disaster zone."
                />
              </div>

              <div className="mr-0 mt-6 lg:mr-32">
                <img
                  className=""
                  src={cpiReport2}
                  alt="Aerial image of a hurricane disaster zone."
                />
              </div>
            </div>
            <div className="mt-6">
              <h5 className="text-gray-900 text-xl font-semibold">
                Pain points addressed
              </h5>
              <div className="mt-8">
                <ul className="grid grid-cols-1 gap-4 row-gap-10">
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center rounded-full h-8 w-8 bg-green-200">
                          <img src={check} />
                        </div>
                      </div>
                      <div className="ml-4 mt-1">
                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                          Conduct remote assessments and inspections
                        </h5>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center rounded-full h-8 w-8 bg-green-200">
                          <img src={check} />
                        </div>
                      </div>
                      <div className="ml-4 mt-1">
                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                          Safely respond to properties affected by the
                          catastrophe
                        </h5>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center rounded-full h-8 w-8 bg-green-200">
                          <img src={check} />
                        </div>
                      </div>
                      <div className="ml-4 mt-1">
                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                          Property estimates and loss payments
                        </h5>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center rounded-full h-8 w-8 bg-green-200">
                          <img src={check} />
                        </div>
                      </div>
                      <div className="ml-4 mt-1">
                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                          Closing claims in a timely manner
                        </h5>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center rounded-full h-8 w-8 bg-green-200">
                          <img src={check} />
                        </div>
                      </div>
                      <div className="ml-4 mt-1">
                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                          Customer experience
                        </h5>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mx-auto mt-8 px-4 md:mt-12 md:px-6">
          <h3 className="mt-10 text-gray-900 text-2xl font-serif font-semibold md:text-3xl">
            Conclusion
          </h3>
          <p className="mt-2 text-gray-900 leading-loose">
            Property Insights provides a solution for both claims managers and
            adjusters with an interface that is able to provide a holistic
            aggregate view of damage severity in an impacted area. With
            aggregate state and county level information and additional
            information at a neighborhood level, it can provide a team with a
            sharper and more accurate response plan that helps homeowners get
            back to life.
          </p>
        </section>
        <section className="max-w-4xl mx-auto mt-8 mb-32 px-4 md:mt-12 md:px-6">
          <h3 className="mt-10 text-gray-900 text-2xl font-serif font-semibold md:text-3xl">
            Press
          </h3>
          <ul>
            <li className="mt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.prnewswire.com/news-releases/new-cognizant-ai-insurance-claims-platform-enhances-processing-accuracy-and-customer-service-following-natural-disasters-300923455.html"
                className="font-medium text-blue-600 hover:underline"
              >
                New Cognizant AI Insurance Claims Platform Enhances Processing,
                Accuracy and Customer Service Following Natural Disasters
              </a>
            </li>
            <li className="mt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.nsinsurance.com/news/cognizant/"
                className="font-medium text-blue-600 hover:underline"
              >
                Cognizant introduces AI-powered solution for property insurers
              </a>
            </li>
            <li className="mt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cognizant.com/property-insights-ai-catastrophic-claims"
                className="font-medium text-blue-600 hover:underline"
              >
                Cognizant Property Insights | Obtain damage information fast,
                using aerial imagery and AI
              </a>
            </li>
            <li className="mt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cognizant.com/Resources/property-insights-brochure.pdf"
                className="font-medium text-blue-600 hover:underline"
              >
                Cognizant Property Insights
              </a>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default PropertyInsights;
