import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

export default function Blogs({ blogData }) {
    const groupedByYear = blogData.reduce((acc, blog) => {
        const year = new Date(blog.published_timestamp).getFullYear();
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(blog);
        return acc;
    }, {});

    return (
        <BlogPage>
            <PageTitle>Blogs</PageTitle>
            {Object.keys(groupedByYear).sort((a, b) => b - a).map(year => (
                <React.Fragment key={year}>
                    <YearTitle>{year}</YearTitle>
                    {groupedByYear[year].map(blog => (
                        <StyledLink key={blog.id} to={`/blog/${blog.slug}`} state={{ from: "blog", data: blog }}>
                            <BlogTitle>{blog.title}</BlogTitle>
                            <PublishDate>{formatDate(blog.published_timestamp)}</PublishDate>
                        </StyledLink>
                    ))}
                    <Divider />
                </React.Fragment>
            ))}
        </BlogPage>
    );
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const options = { month: 'long', day: 'numeric' };
    if (date.getFullYear() !== now.getFullYear()) {
        options.year = 'numeric';
    }
    return date.toLocaleDateString('en-US', options);
}

Blogs.propTypes = {
    blogData: PropTypes.array.isRequired
};

const BlogPage = styled.div`
    padding: 20px;
    background-color: #242424; 
    color: #f5f5f5;
    width: 100%;

    @media (min-width: 768px) {
    width: 75%;
    }
`;

const PageTitle = styled.h1`
    font-size: 2.5em;
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: center;
`;

const YearTitle = styled.h2`
    font-size: 1.8em;
    color: #ccc;
    margin-top: 20px;
    text-align: center;
`;

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: start;
    color: #f5f5f5;
    text-decoration: none;
    margin-bottom: 10px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    &:hover {
        color: #5eddac;
    }
`;

const BlogTitle = styled.h3`
    font-size: 1.2em;
    margin: 0;
    margin-bottom: 5px;  

    @media (min-width: 768px) {
        margin-bottom: 0; 
    }
`;

const PublishDate = styled.h3`
    font-size: 1em;
    color: #5eddac;
    margin: 0;
`;

const Divider = styled.hr`
    border: none;
    height: 1px;
    background-color: #5eddac;
    margin-top: 10px;
`;
