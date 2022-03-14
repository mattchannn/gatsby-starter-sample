import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import * as style from './BlogsItem.module.scss';

// This is for Blog Post's use
const BlogsItem = ({ pageData }) => {
  deckDeckGoHighlightElement();
  return (
    <>
      <div className={style.container}>
        <MDXProvider>
          <MDXRenderer
            localImages={pageData.mdx.frontmatter.localImages}
            headings={pageData.mdx.headings}
          >
            {pageData.mdx.body}
          </MDXRenderer>
        </MDXProvider>
      </div>
    </>
  );
};
export default BlogsItem;
