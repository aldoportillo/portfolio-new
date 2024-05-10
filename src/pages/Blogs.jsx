import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

export default function Blogs({ blogData }) {

  
  return (
    <BlogPage>
      <Title>Blogs</Title>
      {blogData?.map(blog => (
        <React.Fragment key={blog.id}>
          <StyledLink to={`/blog/${blog.slug}`} state={{ from: "blog", data: blog }}>
            <BlogTitle>{blog.title}</BlogTitle>
            <PublishDate>{blog.readable_publish_date}</PublishDate>
          </StyledLink>
          <Divider />
        </React.Fragment>
      ))}
    </BlogPage>
  );
}

Blogs.propTypes = {
  blogData: PropTypes.array.isRequired
};

const BlogPage = styled.div`
  padding: 20px;
  background-color: var(--background-color); // Customize this based on your theme
  color: var(--text-color); // Customize this based on your theme
`;

const Title = styled.h2`
  text-align: center;
  color: var(--accent-color); // Customize this based on your theme
`;

const StyledLink = styled(Link)`
  display: block;
  color: var(--link-color); // Customize this based on your theme
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    color: var(--link-hover-color); // Customize this based on your theme
  }
`;

const BlogTitle = styled.h3`
  font-size: 1.2em;
  margin: 0;
`;

const PublishDate = styled.h3`
  font-size: 1em;
  color: var(--secondary-text-color); // Customize this based on your theme
  margin-top: 5px;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: var(--divider-color); // Customize this based on your theme
  margin-top: 10px;
`;
