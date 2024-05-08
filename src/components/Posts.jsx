import styled from 'styled-components';
import { Link } from 'react-router-dom';

const posts = [
    { id: 1, title: 'Integrating APIs with React', summary: 'A guide to using external APIs in React applications.', link: '/blog/api-integration' },
    { id: 2, title: 'Understanding Redux Toolkit', summary: 'Simplify your React state management with Redux Toolkit.', link: '/blog/redux-toolkit' },
    { id: 3, title: 'Tips for Full Stack Development', summary: 'Best practices for managing both front and back-end systems.', link: '/blog/full-stack-tips' }
  ];

function Posts() {
  return (
    <Section>
    <Heading>Latest Posts</Heading>
    {posts.map((post) => (
      <Article key={post.id}>
        <PostLink to={post.link}>
          <Title>{post.title}</Title>
          <Summary>{post.summary}</Summary>
        </PostLink>
      </Article>
    ))}
  </Section>
  )
}


const Section = styled.section`
  padding: 40px 20px;
  background: #242424; // Dark background to match your theme
  color: #f5f5f5; // Light text for contrast
`;

const Heading = styled.h2`
  font-size: 2em;
  color: #5eddac; // Accent color for heading
  margin-bottom: 30px;
`;

const Article = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background: #2d2d2d; // Slightly lighter than the page background for depth
  border-left: 5px solid #5eddac; // Accent border
`;

const PostLink = styled(Link)`
  text-decoration: none;
  color: inherit; // Ensures text color is inherited from parent
`;

const Title = styled.h3`
  font-size: 1.6em;
  margin-bottom: 0.5em;
`;

const Summary = styled.p`
  font-size: 1em;
`;


export default Posts