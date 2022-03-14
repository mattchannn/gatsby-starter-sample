import * as React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import BlogsItem from '../App/Blogs/screens/BlogsItem';

// Blog posts routes
const Blogs = ({ data }) => {
  return (
    <>
      <Helmet
        bodyAttributes={{
          class: 'light-theme',
        }}
      >
        <title>dummy</title>
        <link href="https://fonts.cdnfonts.com/css/helsinki" rel="stylesheet" />
        <link
          href="https://fonts.cdnfonts.com/css/sofia-pro"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/cubano" rel="stylesheet" />
      </Helmet>
      <BlogsItem pageData={data} />
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      headings {
        depth
        value
      }
      body
    }
  }
`;

export default Blogs;
