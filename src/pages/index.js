import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FeaturedListing from "../components/FeaturedListing";
import ProjectListing from "../components/ProjectListing";
import PostListing from "../components/PostListing";
import SpeakingListing from "../components/SpeakingListing";
import config from "../../data/SiteConfig";
import featured from "../../data/featured";
import projects from "../../data/projects";

class Index extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <Helmet title={`Home | ${config.siteTitle}`} />
        <div className="container mx-auto xs:px-2 md:px-4 xl:px-10">
          <div className="mt-40 xs:mt-32 flex items-center justify-center">
            <div>
              <div className="flex flex-row items-center">
                <div className="text-4xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-3xl text-center text-blue-600 font-serif font-bold tracking-wide leading-relaxed">
                  Stephen Hathaway is a design leader in Boulder,
                  <br className="xs:hidden"></br>
                  <span>
                    currently at <br className="hidden sm:hidden"></br>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.cognizant.com/accelerator"
                      className="transition duration-300 ease-in-out hover:text-blue-400 "
                    >
                      Cognizant Accelerator.
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="pl-4 mb-5 text-lg font-semibold text-gray-900 tracking-wide">
              Featured work
            </div>
            <FeaturedListing featured={featured} />
          </div>

          <div className="mt-16">
            <div className="flex items-baseline">
              <div className="flex-1 pl-4 mb-5 text-lg font-semibold text-gray-900 tracking-wide">
                Open source
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/stphnhthwy"
                className="flex-1 pr-4 text-right pl-4 mb-5 text-md font-semibold text-blue-600 tracking-wide transform hover:translate-x-1 duration-300 ease-in-out"
              >
                See GitHub
                <svg
                  className="ml-1 fill-current text-blue-600 inline-block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </a>
            </div>
            <ProjectListing projects={projects} />
          </div>

          <div className="mt-16">
            <div className="flex items-baseline">
              <div className="flex-1 pl-4 mb-5 text-lg font-semibold text-gray-900 tracking-wide">
                Thoughts
              </div>
              <a
                href="/posts"
                className="flex-1 pr-4 text-right pl-4 mb-5 text-md font-semibold text-blue-600 tracking-wide transform hover:translate-x-1 duration-300 ease-in-out"
              >
                See all
                <svg
                  className="ml-1 fill-current text-blue-600 inline-block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </a>
            </div>
            <div className="px-4">
              <PostListing postEdges={postEdges} />
            </div>
          </div>

          <div className="mt-16 mb-24">
            <div className="pl-4 mb-5 text-lg font-semibold text-gray-900 tracking-wide">
              Speaking
            </div>
            <div className="px-4">
              <SpeakingListing />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query LatestQuery {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
