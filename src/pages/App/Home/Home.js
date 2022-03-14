import * as React from 'react';
import { Helmet } from 'react-helmet';
import BlogIndex from '../../blogs/index.js';

const HomePage = ({ pageData }) => {
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
      <BlogIndex pageData={pageData} />
    </>
  );
};

export default HomePage;
