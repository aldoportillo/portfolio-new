import Footer from './Footer';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import SlidingNav from './SlidingNav';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const getWindowSize = () => {
  const { innerWidth } = window;
  return innerWidth;
}

export default function PageContainer({ children }) {
  const location = useLocation();
  const [openNav, setOpenNav] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openNav]);

  useEffect(() => {
    setOpenNav(false);
  }, [location]);

  return (
    <Wrapper>
      <Header setOpenNav={setOpenNav} openNav={openNav} windowSize={windowSize} />
      <Main>
        {children}
        <SlidingNav openNav={openNav} />
      </Main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden; 
`;


const Main = styled.main`
  display: flex;
  position: relative;
  overflow: hidden; 
  justify-content: center;
  width: 100%;
  flex: 1;

  @media (max-width: 768px) {
    width: 100vw; 
    padding: 0; 
  }
`;


PageContainer.propTypes = {
  children: PropTypes.node.isRequired
};
