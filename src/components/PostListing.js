import React from "react";
import { Link } from "gatsby";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div className="flex-col">
        {postList.map(post => (
          <Link to={post.path} key={post.title}>
            <h3 className="transition duration-200 ease-in-out mb-2 font-serif font-semibold text-blue-600 text-xl underline hover:text-blue-400">
              {post.title}
            </h3>
            <p className="mb-8 font-medium text-gray-800 leading-snug truncate-2-lines">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    );
  }
}

export default PostListing;
