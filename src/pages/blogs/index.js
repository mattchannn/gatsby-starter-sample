import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import Blogs from '../App/Blogs/index.js';

// Blog routes
const BlogIndex = ({ pageData }) => {
  const subpath = typeof window !== 'undefined' ? window.location.pathname : '';

  useEffect(() => {
    navigate('/');
  }, []);

  return <>{subpath !== '/blogs' && <Blogs pageData={pageData} />}</>;
};

export default BlogIndex;
