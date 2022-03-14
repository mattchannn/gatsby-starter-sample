import * as React from 'react';
import { graphql } from 'gatsby';
import HomePage from './App/Home/index.js';

// markup
const IndexPage = ({ data }) => {
  return (
    <>
      <HomePage pageData={data} />
    </>
  );
};

// only query blogs
export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { source: { eq: "blogs" } } }
    ) {
      nodes {
        timeToRead
        slug
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
        }
        id
        fields {
          source
        }
        body
      }
    }
  }
`;

export default IndexPage;
