import React, { Component } from "react";
import bonCover from "../assets/img/bon/bon-cover.png";
import bonComponents from "../assets/img/bon/bon-components.png";
import bonColor from "../assets/img/bon/bon-color.png";
import bonDesign1 from "../assets/img/bon/bon-design-1.png";
import bonDesign2 from "../assets/img/bon/bon-design-2.png";
import bonDevelopment from "../assets/img/bon/bon-development.png";
import bonType from "../assets/img/bon/bon-type.png";
import bonCreate from "../assets/img/bon/bon-create.svg";
import bonExtensible from "../assets/img/bon/bon-extensible.svg";
import bonUnify from "../assets/img/bon/bon-unify.svg";

class Bonsai extends Component {
  render() {
    return (
      <div>
        <section className=" container mx-auto px-2">
          <img
            className="mx-auto"
            src={bonCover}
            alt="Aerial image of a hurricane disaster zone."
          />
          <div className="max-w-4xl mx-auto mt-8 px-2 md:mt-12 md:px-6">
            <h1 className="text-blue-500 text-4xl md:text-6xl leading-tight font-serif font-bold">
              Bonsai<br></br>Design System
            </h1>
            <h2 className="mt-4 text-gray-700 text-xl md:text-3xl leading-snug">
              Unify and create the design and interaction language for the use
              of the entire organization.
            </h2>
          </div>
        </section>
        <section className="max-w-4xl mx-auto mt-8 px-4 md:mt-12 md:px-6">
          <h3 className="mt-10 text-gray-900 text-2xl font-serif font-semibold md:text-3xl">
            Overview
          </h3>
          <p className="mt-2 text-gray-900 leading-loose">
            Bonsai’s Design System team is a hybrid of designers and engineers
            that work across the organization. We define the interaction
            standards, design patterns and guidelines for cross-domain product
            teams.
          </p>
        </section>
        <section className="max-w-4xl mx-auto mt-8 px-4 md:mt-12 md:px-6">
          <h3 className="mt-10 text-gray-900 text-2xl font-serif font-semibold md:text-3xl">
            Role
          </h3>
          <p className="mt-2 text-gray-900 leading-loose">
            As a senior designer on the Bonsai team, I provide user experience
            aid to other teams and also create and maintain standards for the
            Design System Library. My responsibilities as a core member I am
            responsible for creating UX patterns, guidelines and standards for
            Bonsai’s Design System Library, being embedded in initiatives as a
            strategic and concept resource, and creating strategy and toolsets
            for domain teams to adopt and build a new brand expression.{" "}
          </p>
        </section>
        <section className="max-w-4xl mx-auto mt-8 px-4 md:mt-12 md:px-6">
          <h3 className="mt-10 text-gray-900 text-2xl font-serif font-semibold md:text-3xl">
            Goals
          </h3>
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 col-gap-8 row-gap-8">
              <div>
                <img
                  src={bonCreate}
                  alt="Aerial image of a hurricane disaster zone."
                />
                <h5 className="mt-8 text-lg leading-6 font-medium text-gray-900">
                  Create
                </h5>
                <p className="mt-2 text-base leading-6 text-gray-700">
                  Create a visual language, standard UX patterns, and coded
                  components for the organization.
                </p>
              </div>
              <div>
                <img
                  src={bonUnify}
                  alt="Aerial image of a hurricane disaster zone."
                />
                <h5 className="mt-8 text-lg leading-6 font-medium text-gray-900">
                  Unify
                </h5>
                <p className="mt-2 text-base leading-6 text-gray-700">
                  Build a single underlying system that unifies the user
                  experience across multiple products.
                </p>
              </div>
              <div>
                <img
                  src={bonExtensible}
                  alt="Aerial image of a hurricane disaster zone."
                />
                <h5 className="mt-8 text-lg leading-6 font-medium text-gray-900">
                  Extensible
                </h5>
                <p className="mt-2 text-base leading-6 text-gray-700">
                  Develop a system of components that are extensible and able to
                  be used across all products.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mx-auto mt-8 px-4 md:mt-12 md:px-6">
          <h3 className="mt-10 text-gray-900 text-2xl font-serif font-semibold md:text-3xl">
            Patterns
          </h3>
          <p className="mt-2 text-gray-900 leading-loose">
            Bonsai houses our library of UX Patterns in our Sketch files and
            coded assets stored in Storybook. Patterns provide behavior within a
            user interface to solve design problems through a unified design
            language.
          </p>
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 col-gap-8 row-gap-8">
              <div>
                <img
                  src={bonType}
                  alt="Aerial image of a hurricane disaster zone."
                />
                <p className="mt-4 text-base leading-6 text-gray-700">
                  Type system
                </p>
              </div>
              <div>
                <img
                  src={bonColor}
                  alt="Aerial image of a hurricane disaster zone."
                />
                <p className="mt-4 text-base leading-6 text-gray-700">
                  Color system
                </p>
              </div>
              <div>
                <img
                  src={bonComponents}
                  alt="Aerial image of a hurricane disaster zone."
                />
                <p className="mt-4 text-base leading-6 text-gray-700">
                  Components
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mx-auto mt-8 px-4 md:mt-12 md:px-6">
          <h3 className="mt-10 text-gray-900 text-2xl font-serif font-semibold md:text-3xl">
            Delivery
          </h3>
          <p className="mt-2 text-gray-900 leading-loose">
            Bonsai houses our library of UX Patterns in our Sketch files and
            coded assets stored in Storybook. Patterns provide behavior within a
            user interface to solve design problems through a unified design
            language.
          </p>
          <div className="mt-6">
            <h4 className="text-gray-900 text-xl font-semibold">Design</h4>
            <img
              className="mt-8"
              src={bonDesign1}
              alt="Aerial image of a hurricane disaster zone."
            />
            <img
              className="mt-8"
              src={bonDesign2}
              alt="Aerial image of a hurricane disaster zone."
            />
          </div>
          <div className="mt-8">
            <h4 className="text-gray-900 text-xl font-semibold">Development</h4>
            <img
              className="mt-4"
              src={bonDevelopment}
              alt="Aerial image of a hurricane disaster zone."
            />
          </div>
        </section>
        <section className="max-w-4xl mx-auto mt-8 px-4 md:mt-12 mb-32 md:px-6">
          <h3 className="mt-10 text-gray-900 text-2xl font-serif font-semibold md:text-3xl">
            Conclusion
          </h3>
          <p className="mt-2 text-gray-900 leading-loose">
            Bonsai has been a tremendous force in the progressive unification of
            our products. The Design Library has, become the epicenter of
            evangelizing design, interactions, and experiences across the org.
            Other than managing and creating an ever-changing need for patterns,
            it is expanding to evangelize Cognizant's design language, global
            standards, and also design strategy principles.
          </p>
        </section>
      </div>
    );
  }
}

export default Bonsai;
