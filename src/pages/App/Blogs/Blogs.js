import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import * as style from './Blogs.module.scss';

// This is for Blog Post's use
const Blogs = ({ pageData }) => {
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
      <div className={style.masterContainer}>
        {pageData?.allMdx.nodes.map((node) => (
          <div className={style.listContainer} key={node.id}>
            <h2>
              <Link to={`/blogs/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <div>
              {node.frontmatter.date} • {node.timeToRead} min(s)
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
