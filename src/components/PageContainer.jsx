import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { useLocation } from 'react-router-dom'
import SlidingNav from './SlidingNav'
import PropTypes from 'prop-types';

const getWindowSize = () => {
  const {innerWidth} = window;
  return innerWidth
}

export default function PageContainer({children}) {

const location  = useLocation()

const [openNav, setOpenNav] = React.useState(false)
const [navWidth, setNavWidth] = React.useState(0)

const [windowSize, setWindowSize] = React.useState(getWindowSize())

React.useEffect(() => {
  function handleResize() {
    setWindowSize(getWindowSize())
  }

  window.addEventListener('resize', handleResize)

  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, [])

React.useEffect(() => {
  if (openNav){
    setNavWidth(60)
  } else {
    setNavWidth(0)
  }
}, [openNav])

React.useEffect(() => {
  setNavWidth(0)
  setOpenNav(false)
},[location])

  return (
    <div className="container">
        <Header openNav={openNav} setOpenNav={setOpenNav} windowSize={windowSize}/>
        <main>
          {children}
          <SlidingNav navWidth={navWidth} />
        </main>
        <Footer />
    </div>
  )
}

PageContainer.propTypes = {
    children: PropTypes.node.isRequired
}