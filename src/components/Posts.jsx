import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function Posts({ blogData}) {
  return (
    <Section>
      <Heading>Latest Posts</Heading>
      {blogData.slice(0, 3).map((post) => (
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

Posts.propTypes = {
  blogData: PropTypes.array
};


const Section = styled.section`
  padding: 40px 20px;
  background: #242424; 
  color: #f5f5f5;
`;

const Heading = styled.h2`
  font-size: 2em;
  color: #5eddac; 
  margin-bottom: 30px;
`;

const Article = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background: #2d2d2d; 
  border-left: 5px solid #5eddac; 
`;

const PostLink = styled(Link)`
  text-decoration: none;
  color: inherit; 
`;

const Title = styled.h3`
  font-size: 1.6em;
  margin-bottom: 0.5em;
`;

const Summary = styled.p`
  font-size: 1em;
`;


export default Posts