import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SaveIcon from '../assets/icons/save-icon.png';
import BlogIcon from '../assets/icons/blog-icon.png';
import CodeIcon from '../assets/icons/code-icon.png';
import SearchIcon from '../assets/icons/search-icon.png';

export default function SlidingNav({openNav}) {
  return (
    <Wrapper className='sliding-nav' openNav={openNav}>
      <StyledLink to="/"><img src={SaveIcon} alt='home icon'/><span>Home</span></StyledLink>
      <StyledLink to="/projects"><img src={CodeIcon} alt='projects icon'/><span>Projects</span></StyledLink>
      <StyledLink to="/blogs"><img src={BlogIcon} alt='blogs icon'/><span>Blogs</span></StyledLink>
      <StyledLink to="/contact"><img src={SearchIcon} alt='contact icon'/><span>Contact</span></StyledLink>
    </Wrapper>
  );
}

SlidingNav.propTypes = {
  openNav: PropTypes.bool.isRequired
}

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  right: ${({ openNav }) => (openNav ? '0' : '-100%')};
  width: 250px;
  height: 100%;
  background-color: var(--header);
  transition: right 0.5s; 
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: flex-end;
  font-size: 2rem;
  gap: 2vh;
  z-index: 1000; 
  box-shadow: -2px 0 8px rgba(0,0,0,0.5); 
  overflow-x: hidden; 
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row-reverse;
  gap: 5px;
  align-items: center;
  border: 1px solid #2c2c2c;
  padding: .5em .75em;
  border-radius: 10px;
  color: white;
  transition: background-color 0.3s, color 0.3s; 

  &:active {
    background-color: var(--accent); 
    color: #242424;
  }

  img {
    height: 20px;
    min-height: 20px;
    min-width: 20px;
    width: 20px;
  }
`;

