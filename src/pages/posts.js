import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import config from "../../data/SiteConfig";

class PostsPage extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <div className="container mx-auto mt-32">
          <Helmet title={`All Posts | ${config.siteTitle}`} />
          <div className="px-8">
            <h1 className="leading-tight text-3xl font-semibold font-serif">
              All Thoughts
            </h1>
            <div className="mt-12">
              <PostListing postEdges={postEdges} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default PostsPage;

export const pageQuery = graphql`
  query AllQuery {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: 100
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
