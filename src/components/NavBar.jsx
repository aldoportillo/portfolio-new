import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
        <nav className='nav-bar'>
            <Link to="/" >Home</Link>
            {/* <Link to="/projects" >Projects</Link> */}
            <Link to="/blog" >Blog</Link>
            <Link to="/contact" >Contact</Link> 
        </nav>
  )
}
