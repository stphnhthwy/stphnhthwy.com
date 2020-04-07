import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }

    return (
      <div>
        <Layout>
          <div className="max-w-3xl mt-32 mx-auto px-8 mb-32">
            <Helmet>
              <title>{`${post.title} | ${config.siteTitle}`}</title>
            </Helmet>
            <SEO postPath={slug} postNode={postNode} postSEO />
            <div className="markdown-body">
              <h1>{post.title}</h1>
              <div
                className="markdown-body"
                dangerouslySetInnerHTML={{ __html: postNode.html }}
              />
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
