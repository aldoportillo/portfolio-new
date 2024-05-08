import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SaveIcon from '../assets/icons/save-icon.png';
import BlogIcon from '../assets/icons/blog-icon.png';
import CodeIcon from '../assets/icons/code-icon.png';
import SearchIcon from '../assets/icons/search-icon.png';

export default function DesktopNav() {
  return (
    <Wrapper>
      <StyledLink to="/"><img src={SaveIcon} alt='home icon'/><span>Home</span></StyledLink>
      <StyledLink to="/projects"><img src={CodeIcon} alt='projects icon'/><span>Projects</span></StyledLink>
      <StyledLink to="/blog"><img src={BlogIcon} alt='blogs icon'/><span>Blogs</span></StyledLink>
      <StyledLink to="/contact"><img src={SearchIcon} alt='contact icon'/><span>Contact</span></StyledLink>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: antiquewhite;
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 5px;
  align-items: center;
  border: 1px solid #2c2c2c;
  padding: 0.5rem 0.75rem;
  border-radius: 10px;
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease; 

  &:hover {
    background-color: var(--accent); 
    color: #242424;
  }

  img {
    height: 20px;
    width: 20px;
  }
`;
