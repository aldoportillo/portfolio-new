import { Link } from 'react-router-dom';
import DesktopNav from './DesktopNav';
import { Spin as Hamburger } from 'hamburger-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Header({ setOpenNav, openNav, windowSize }) {
  return (
    <Wrapper>
      <div className='top-nav'>
        <div className='title'>
          <Link to="/"><h1>Aldo Portillo</h1></Link>
        </div>
        {windowSize > 1025 
        ? <DesktopNav /> 
        : <div className='hamburger'>
            <Hamburger toggled={openNav} toggle={setOpenNav} size={25} direction="left" duration={0.4} color="white" easing="ease-in"/>
          </div>}
      </div>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  width: 85vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--header); 

  .top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 100%;
    box-sizing: border-box;
    .top-nav {
      z-index: 1010; 
    }
    
  }

  .title h1 {
    color: #ffffff; 
    font-size: 1.8rem; 
    margin: 0; 
  }

  .hamburger {
    z-index: 1050;
  }
  

  @media (min-width: 1025px) {
    .title h1 {
      font-size: 2.2rem;
    }
  }
`;



Header.propTypes = {
  openNav: PropTypes.bool.isRequired,
  setOpenNav: PropTypes.func.isRequired,
  windowSize: PropTypes.number.isRequired
};
