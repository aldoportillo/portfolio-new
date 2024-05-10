import styled from "styled-components";
import Posts from "../components/Posts";
import PropTypes from "prop-types";

function Home({ blogData }) {
  return (
    <Wrapper>
      <Header>
        Hello, I’m <Highlight>Aldo Portillo</Highlight>
      </Header>
      <Subheader>Full Stack Engineer | MMA Fighter | Bartender</Subheader>
      <Bio>
      Based in Chicago. Blending problem-solving skills with creativity and resilience learned from my roles as an MMA fighter and bartender. My diverse experiences fuel my ability to approach technology challenges from unique angles, constantly pushing for growth and innovation.
      </Bio>
      <Posts blogData={blogData} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  min-height: 100vh;
  background-color: #242424; 
  color: #f5f5f5;
`;

const Header = styled.h1`
  margin: 0;
  font-size: 2.5em;
  color: #f5f5f5;
`;

const Highlight = styled.span`
  color: #5eddac;  
`;

const Subheader = styled.h2`
  color: #ccc; 
  font-size: 1.5em;
  margin-top: 0.5em;
`;

const Bio = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  text-align: center;
  max-width: 600px;
  margin-top: 20px;
  color: #ddd; 
`;

Home.propTypes = {
  blogData: PropTypes.array
};

export default Home;
