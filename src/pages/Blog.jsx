import axios from 'axios';
import { useEffect, useState } from 'react';
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
        setContent(null); 
      });
  }, [data.id]);

  if (!content) return <p>Loading...</p>;

  return (
    <BlogContainer>
      <Title>{content.title}</Title>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children, ...props }) {
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
      >{content.body_markdown}</ReactMarkdown>
    </BlogContainer>
  );
}

const BlogContainer = styled.div`
  margin: 0 auto; 
  padding: 20px;
  background-color: var(--background-color); 
  color: #ccc;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%; 
    padding: 15px;
    max-width: 100%;
  }
`;

const Title = styled.h1`
  color: #5eddac; 
  text-align: center;
  margin-bottom: 20px; 
  @media (max-width: 768px) {
    font-size: 1.5rem; 
  }
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  background-color: #282c34; 
  border-radius: 10px;
  overflow: auto;
  margin: 10px 0; 
  padding: 10px; 
  white-space: pre;
  width: auto;
  @media (max-width: 768px) {
    font-size: 0.8rem; 
  }
`;
