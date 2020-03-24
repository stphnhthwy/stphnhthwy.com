import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FeaturedListing from "../components/FeaturedListing";
import ProjectListing from "../components/ProjectListing";
import PostListing from "../components/PostListing";
import config from "../../data/SiteConfig";
import featured from "../../data/featured";
import projects from "../../data/projects";

class Index extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <Helmet title={`Home | ${config.siteTitle}`} />
        <div className="container mx-auto xs:px-2 sm:px-2 md:px-4 xl:px-10">
          <div className="mt-40 xs:mt-32 mb-16 flex items-center justify-center">
            <div>
              <div className="flex flex-row items-center">
                <div className="text-4xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-center text-blue-600 font-serif font-bold tracking-wide leading-relaxed">
                  Stephen Hathaway is a design leader in Boulder,
                  <br className="xs:hidden"></br>
                  <span>
                    {" "}
                    currently at <br className="hidden sm:hidden"></br>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.cognizant.com/accelerator"
                      className="transition duration-500 ease-in-out hover:text-blue-400 "
                    >
                      Cognizant Accelerator.
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div className="pl-4 mb-5 text-lg font-semibold text-gray-900 tracking-wide">
              Featured work
            </div>
            <FeaturedListing featured={featured} />
          </div>

          <div className="mt-16">
            <div className="pl-4 mb-5 text-lg font-semibold text-gray-900 tracking-wide">
              Open source
            </div>
            <ProjectListing projects={projects} />
          </div>

          <div className="mt-16">
            <div className="pl-4 mb-5 text-lg font-semibold text-gray-900 tracking-wide">
              Thoughts
            </div>
            <PostListing postEdges={postEdges} />
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
