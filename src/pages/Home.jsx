import styled from "styled-components";
import PropTypes from "prop-types";

import Posts from "../components/Posts";
import Typing from "../assets/icons/typing.gif";
import { Link } from "react-router-dom";

function Home({ blogData }) {
  return (
    <Wrapper>
      <Header>
        Hello, I’m <Highlight>Aldo Portillo</Highlight>
      </Header>
      <Subheader>Full Stack Engineer | MMA Fighter | Bartender</Subheader>
      <Inline>
        <img src={Typing} alt="Typing" />
        <Bio>
          Based in Chicago. Blending problem-solving skills with creativity and resilience learned from my roles as an MMA fighter and bartender. My diverse experiences fuel my ability to approach technology challenges from unique angles, constantly pushing for growth and innovation.
        </Bio>
      </Inline>
      <AboutMeSection>
        <h2>About Me</h2>
        <p>Hello! I&apos;m <strong>Aldo Portillo</strong>, a passionate <strong>Full Stack Engineer</strong> based in Chicago. With a foundational background in organic chemistry, I bring a methodical and analytical approach to developing robust, scalable web applications.</p>
        
        <p>Beyond my professional career, I am an avid <strong>rock climber</strong> and an enthusiastic <strong>MMA fighter</strong>. Both activities challenge me to push my limits and develop discipline. As a professional <strong>bartender</strong>, I fine-tune my ability to interact and connect with people from all walks of life.</p>
        
        <p>My journey is driven by honor, respect, and a commitment to positively impact society. I eagerly embrace life&apos;s adventures and challenges, especially in software, mixology, martial arts, and personal development. Tutoring in software and math allows me to share my knowledge and help others grow in their skills.</p>
        
        <p>I&apos;m excited to connect and share this journey with you. Whether you&apos;re interested in collaborative projects, or just wish to chat about technology, climbing, or anything else, feel free to <Link to="/contact">contact me</Link> or explore my <Link to="/projects">projects</Link>. Let’s navigate the adventures of life together!</p>
      </AboutMeSection>
      <Posts blogData={blogData} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #242424; 
  color: #f5f5f5;
  max-width: 1200px;
  margin: auto;
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

const Inline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  img {
    width: 100%;
    max-width: 300px;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    img {
      width: 50%;
    }
  }
`;

const Bio = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  text-align: start;
  max-width: 600px;
  margin-top: 20px;
  color: #ddd;
  padding: 0 20px;
`;

const AboutMeSection = styled.section`
  padding: 20px;
  text-align: left;
  color: #f5f5f5;
  max-width: 1200px;
  width: auto;

  @media (min-width: 768px) {
    width: 75%;
    }

  h2 {
    font-size: 2em;
    color: var(--accent);
    margin-top: 20px;
    margin-bottom: 40px;
  }

  p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #ddd;
    margin-bottom: 10px;
  }

  a {
    color: #5eddac;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

Home.propTypes = {
  blogData: PropTypes.array.isRequired
};

export default Home;
