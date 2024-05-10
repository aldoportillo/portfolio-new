import styled from "styled-components";
import PropTypes from "prop-types";

import ProjectCard from "../components/ProjectCard";

function Projects({ projectsData }) {
  return (
    <Wrapper>
      <PageTitle>My Projects</PageTitle>
      <ProjectsContainer>
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsContainer>
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

const PageTitle = styled.h1`
  font-size: 2.5em;
  color: #f5f5f5;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

Projects.propTypes = {
  projectsData: PropTypes.array.isRequired
};

export default Projects;
