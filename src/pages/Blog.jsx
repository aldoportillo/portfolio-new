import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

export default function NewBlog() {
  const location = useLocation();
  const { data } = location.state;

  const [content, setContent] = useState(null);

  useEffect(() => {
    axios.get(`https://dev.to/api/articles/${data.id}`)
      .then(res => {
        setContent(res.data);
      })
      .catch(err => {
        console.error("Error fetching blog data: ", err);
        setContent(null); // Handle error states appropriately
      });
  }, [data.id]);

  if (!content) return <p>Loading...</p>; // Loading state

  return (
    <BlogContainer>
      <Title>{content.title}</Title>
      <ReactMarkdown
        children={content.body_markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <StyledSyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </StyledSyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      />
    </BlogContainer>
  );
}

const BlogContainer = styled.div`
  margin: 0 auto;  // Center the container horizontally
  padding: 20px;
  background-color: var(--background-color); // Dark background color
  color: #ccc; // Light text color for readability
  width: 100%;
  max-width: 800px; // Maximum width for desktop screens
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%; // Ensures it uses full width on mobile devices
    padding: 15px; // Adjust padding for smaller screens
    max-width: 100%; // Allows the container to expand to the full viewport width
  }
`;

const Title = styled.h1`
  color: #5eddac; // Accent color
  text-align: center;
  margin-bottom: 20px; // Visual separation
  @media (max-width: 768px) {
    font-size: 1.5rem; // Appropriately size the title for smaller screens
  }
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  background-color: #282c34; // Matching oneDark background
  border-radius: 10px;
  overflow: auto; // Allow scrolling within the code blocks
  margin: 10px 0; // Add margin for spacing
  padding: 10px; // Padding inside the code blocks for better readability
  white-space: pre; // Maintain whitespace formatting
  width: 100%; // Ensures the element is not wider than its container
  @media (max-width: 768px) {
    font-size: 0.8rem; // Smaller font size in code blocks for smaller screens
  }
`;
